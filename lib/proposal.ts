import { siteConfig } from "./site";

export interface ProposalFormData {
  services: string[];
  projectName: string;
  projectBrief: string;
  location: string;
  date: string;
  audience?: string;
  budget?: string;
  name: string;
  organisation?: string;
  email: string;
  phone?: string;
}

export const SERVICE_LABELS: Record<string, string> = {
  "event-management": "Event Management",
  "event-production": "Event Production",
  "brand-activation": "Brand Activation",
  "campus-marketing": "Campus Marketing",
  "digital-marketing": "Digital Marketing",
  "csr-initiatives": "CSR Initiatives",
  "corporate-gifting": "Corporate Gifting",
  "multiple": "Multiple Integrated Services",
  "other": "Other / Scoping Required",
  // Legacy mappings for backwards compatibility
  "exhibitions": "Exhibition & Trade Show Solutions",
  "production-operations": "Event Production, Manpower & Operations",
  "campus-connect": "Campus Connect & Partnerships",
  "digital-creative": "Digital Marketing & Content",
  "csr-education": "CSR & Educational Programs",
  "csr-programs": "CSR Initiatives",
};

export const BUDGET_LABELS: Record<string, string> = {
  "under-5l": "Under ₹5 Lakhs",
  "5l-15l": "₹5 – 15 Lakhs",
  "15l-30l": "₹15 – 30 Lakhs",
  "30l-50l": "₹30 – 50 Lakhs",
  "50l-1cr": "₹50 Lakhs – 1 Crore",
  "over-1cr": "Over ₹1 Crore",
  "not-sure": "Not yet established / To be scoped",
};

/**
 * Formats proposal brief into a clean, structured WhatsApp message.
 */
export function formatProposalWhatsAppMessage(data: ProposalFormData): string {
  const serviceList =
    data.services && data.services.length > 0
      ? data.services.map((s) => `• ${SERVICE_LABELS[s] || s}`).join("\n")
      : "• General Scoping";

  const budgetDisplay = data.budget ? (BUDGET_LABELS[data.budget] || data.budget) : "Not yet established";

  const lines: string[] = [
    "⚡ *NEW PROPOSAL REQUEST — FLASHAX*",
    "━━━━━━━━━━━━━━━━━━━━━━",
    "👤 *POINT OF CONTACT*",
    `• *Name:* ${data.name}`,
    `• *Organisation / Brand:* ${data.organisation?.trim() || "Not specified"}`,
    `• *Email:* ${data.email}`,
    `• *Phone:* ${data.phone?.trim() || "Not provided"}`,
    "",
    "🛠️ *SERVICES REQUIRED*",
    serviceList,
    "",
    "📌 *PROJECT DETAILS*",
    `• *Project / Event Name:* ${data.projectName}`,
    `• *Scope & Objectives:* ${data.projectBrief}`,
    `• *Target Location / Venue:* ${data.location}`,
    `• *Target Date:* ${data.date}`,
    `• *Estimated Attendance:* ${data.audience?.trim() || "Not specified"}`,
    `• *Budget Range:* ${budgetDisplay}`,
    "━━━━━━━━━━━━━━━━━━━━━━",
    `_Submitted via Flashax Website (Get a Proposal)_`,
  ];

  return lines.join("\n");
}

/**
 * Generates direct WhatsApp chat URL with pre-filled proposal message.
 * Default phone is 917757855121 (from siteConfig.phone).
 */
export function generateWhatsAppProposalUrl(data: ProposalFormData, targetPhone?: string): string {
  const rawPhone = targetPhone || siteConfig.phone.replace(/[^0-9]/g, "");
  const formattedText = formatProposalWhatsAppMessage(data);
  return `https://wa.me/${rawPhone}?text=${encodeURIComponent(formattedText)}`;
}
