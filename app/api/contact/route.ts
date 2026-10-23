import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  services: string[];
  projectName: string;
  projectBrief: string;
  location: string;
  date: string;
  audience: string;
  budget: string;
  name: string;
  organisation: string;
  email: string;
  phone: string;
}

function validateContactData(data: unknown): { valid: boolean; errors: Record<string, string>; sanitizedData?: ContactFormData } {
  const errors: Record<string, string> = {};
  const d = data as Record<string, unknown>;

  if (!d.services || !Array.isArray(d.services) || d.services.length === 0) {
    errors.services = "At least one service must be selected";
  }

  if (!d.projectName || typeof d.projectName !== "string" || d.projectName.trim().length < 2) {
    errors.projectName = "Project name is required (minimum 2 characters)";
  }

  if (!d.projectBrief || typeof d.projectBrief !== "string" || d.projectBrief.trim().length < 10) {
    errors.projectBrief = "Project brief is required (minimum 10 characters)";
  }

  if (!d.location || typeof d.location !== "string" || d.location.trim().length < 2) {
    errors.location = "Location is required";
  }

  if (!d.date || typeof d.date !== "string") {
    errors.date = "Date is required";
  } else {
    const selectedDate = new Date(d.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      errors.date = "Date must be today or in the future";
    }
  }

  if (!d.name || typeof d.name !== "string" || d.name.trim().length < 2) {
    errors.name = "Name is required (minimum 2 characters)";
  }

  if (!d.email || typeof d.email !== "string") {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) {
    errors.email = "Invalid email format";
  }

  if (d.phone && typeof d.phone === "string" && d.phone.trim().length > 0) {
    const phoneRegex = /^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?[-\s\.]?[0-9]{4,6}$/;
    if (!phoneRegex.test(d.phone.replace(/\s/g, ""))) {
      errors.phone = "Invalid phone number format";
    }
  }

  const sanitizedData: ContactFormData = {
    services: Array.isArray(d.services) ? d.services.filter((s): s is string => typeof s === "string") : [],
    projectName: typeof d.projectName === "string" ? d.projectName.trim() : "",
    projectBrief: typeof d.projectBrief === "string" ? d.projectBrief.trim() : "",
    location: typeof d.location === "string" ? d.location.trim() : "",
    date: typeof d.date === "string" ? d.date : "",
    audience: typeof d.audience === "string" ? d.audience.trim() : "",
    budget: typeof d.budget === "string" ? d.budget : "",
    name: typeof d.name === "string" ? d.name.trim() : "",
    organisation: typeof d.organisation === "string" ? d.organisation.trim() : "",
    email: typeof d.email === "string" ? d.email.trim().toLowerCase() : "",
    phone: typeof d.phone === "string" ? d.phone.trim() : "",
  };

  return {
    valid: Object.keys(errors).length === 0,
    errors,
    sanitizedData,
  };
}

function rateLimitCheck(ip: string): boolean {
  return true;
}

async function sendEmail(data: ContactFormData): Promise<{ success: boolean; message?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.warn("Email not configured: missing RESEND_API_KEY, CONTACT_TO_EMAIL, or CONTACT_FROM_EMAIL");
    return { success: false, message: "Email delivery not configured. Please contact us directly." };
  }

  const serviceLabels = data.services.map((s) => {
    const labels: Record<string, string> = {
      "event-management": "Event Management",
      "event-production": "Event Production",
      "brand-activation": "Brand Activation",
      "campus-marketing": "Campus Marketing",
      "digital-marketing": "Digital Marketing",
      "corporate-gifting": "Corporate Gifting",
      "csr-programs": "CSR Programs",
      // Legacy compatibility
      "exhibitions": "Exhibition & Trade Show Solutions",
      "production-operations": "Event Production, Manpower & Operations",
      "campus-connect": "Campus Connect & Partnerships",
      "digital-creative": "Digital Marketing & Content",
      "csr-education": "CSR & Educational Programs",
      "multiple": "Multiple Services",
      "other": "Other / Not Sure",
    };
    return labels[s] || s;
  }).join(", ");

  const budgetLabels: Record<string, string> = {
    "under-5l": "Under ₹5 Lakhs",
    "5l-15l": "₹5 – 15 Lakhs",
    "15l-30l": "₹15 – 30 Lakhs",
    "30l-50l": "₹30 – 50 Lakhs",
    "50l-1cr": "₹50 Lakhs – 1 Crore",
    "over-1cr": "Over ₹1 Crore",
    "not-sure": "Not sure yet",
  };

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1a1a2e; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #521262 0%, #35103F 50%, #17091D 100%); padding: 30px; border-radius: 12px 12px 0 0;">
        <h1 style="color: #F7B721; margin: 0; font-size: 24px; font-weight: 700;">New Project Enquiry</h1>
        <p style="color: #F2F4E8; margin: 8px 0 0; opacity: 0.9;">Flashax Website Contact Form</p>
      </div>
      <div style="background: #17091D; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #2a1035; border-top: none;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; color: #F7B721; font-weight: 600; font-size: 14px; width: 30%;">Services</td>
            <td style="padding: 12px 0; color: #F2F4E8;">${serviceLabels}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #F7B721; font-weight: 600; font-size: 14px;">Project Name</td>
            <td style="padding: 12px 0; color: #F2F4E8;">${data.projectName}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #F7B721; font-weight: 600; font-size: 14px;">Project Brief</td>
            <td style="padding: 12px 0; color: #F2F4E8;">${data.projectBrief}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #F7B721; font-weight: 600; font-size: 14px;">Location</td>
            <td style="padding: 12px 0; color: #F2F4E8;">${data.location}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #F7B721; font-weight: 600; font-size: 14px;">Tentative Date</td>
            <td style="padding: 12px 0; color: #F2F4E8;">${data.date}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #F7B721; font-weight: 600; font-size: 14px;">Audience Size</td>
            <td style="padding: 12px 0; color: #F2F4E8;">${data.audience || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #F7B721; font-weight: 600; font-size: 14px;">Budget Range</td>
            <td style="padding: 12px 0; color: #F2F4E8;">${data.budget ? budgetLabels[data.budget] : "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #F7B721; font-weight: 600; font-size: 14px;">Contact Name</td>
            <td style="padding: 12px 0; color: #F2F4E8;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #F7B721; font-weight: 600; font-size: 14px;">Organisation</td>
            <td style="padding: 12px 0; color: #F2F4E8;">${data.organisation || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #F7B721; font-weight: 600; font-size: 14px;">Email</td>
            <td style="padding: 12px 0; color: #F2F4E8;">${data.email}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #F7B721; font-weight: 600; font-size: 14px;">Phone</td>
            <td style="padding: 12px 0; color: #F2F4E8;">${data.phone || "Not specified"}</td>
          </tr>
        </table>
        <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #2a1035; color: #A899AF; font-size: 12px;">
          <p>This enquiry was submitted via the Flashax website contact form.</p>
          <p>Submitted at: ${new Date().toISOString()}</p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: `New Project Enquiry: ${data.projectName} (${serviceLabels})`,
        html,
        replyTo: data.email,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Resend API error:", errorData);
      return { success: false, message: "Failed to send email. Please try again later." };
    }

    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, message: "Failed to send email. Please try again later." };
  }
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    if (!rateLimitCheck(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    const { valid, errors, sanitizedData } = validateContactData(body);

    if (!valid || !sanitizedData) {
      return NextResponse.json(
        { success: false, message: "Validation failed", errors },
        { status: 400 }
      );
    }

    const emailResult = await sendEmail(sanitizedData);

    if (!emailResult.success) {
      return NextResponse.json(
        { success: false, message: emailResult.message || "Failed to process enquiry" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Enquiry submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}