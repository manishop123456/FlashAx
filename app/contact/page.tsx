"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import {
  generateWhatsAppProposalUrl,
  formatProposalWhatsAppMessage,
  SERVICE_LABELS,
  BUDGET_LABELS,
  ProposalFormData,
} from "@/lib/proposal";

function WhatsAppIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const SERVICE_OPTIONS = [
  { value: "event-management", label: "Event Management" },
  { value: "event-production", label: "Event Production" },
  { value: "brand-activation", label: "Brand Activation" },
  { value: "campus-marketing", label: "Campus Marketing" },
  { value: "digital-marketing", label: "Digital Marketing" },
  { value: "csr-initiatives", label: "CSR Initiatives" },
  { value: "corporate-gifting", label: "Corporate Gifting" },
  { value: "multiple", label: "Multiple Integrated Services" },
  { value: "other", label: "Other / Scoping Required" },
];

const LEGACY_SERVICE_MAP: Record<string, string> = {
  exhibitions: "event-production",
  "production-operations": "event-production",
  "campus-connect": "campus-marketing",
  "digital-creative": "digital-marketing",
  "csr-education": "csr-initiatives",
  "csr-programs": "csr-initiatives",
};

const BUDGET_OPTIONS = [
  { value: "", label: "Select estimated budget range (optional)" },
  { value: "under-5l", label: "Under ₹5 Lakhs" },
  { value: "5l-15l", label: "₹5 – 15 Lakhs" },
  { value: "15l-30l", label: "₹15 – 30 Lakhs" },
  { value: "30l-50l", label: "₹30 – 50 Lakhs" },
  { value: "50l-1cr", label: "₹50 Lakhs – 1 Crore" },
  { value: "over-1cr", label: "Over ₹1 Crore" },
  { value: "not-sure", label: "Not yet established / To be scoped" },
];

type FormStep = "services" | "project" | "budget" | "contact";

const STEPS: { id: FormStep; label: string }[] = [
  { id: "services", label: "Services" },
  { id: "project", label: "Details" },
  { id: "budget", label: "Budget" },
  { id: "contact", label: "Contact" },
];

export default function ContactPage() {
  const [step, setStep] = useState<FormStep>("services");
  const [formData, setFormData] = useState<ProposalFormData>({
    services: [],
    projectName: "",
    projectBrief: "",
    location: "",
    date: "",
    audience: "",
    budget: "",
    name: "",
    organisation: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [submittedProposal, setSubmittedProposal] = useState<ProposalFormData | null>(null);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      let serviceParam = params.get("service");
      if (serviceParam && LEGACY_SERVICE_MAP[serviceParam]) {
        serviceParam = LEGACY_SERVICE_MAP[serviceParam];
      }
      if (serviceParam && SERVICE_OPTIONS.some((o) => o.value === serviceParam)) {
        setFormData((prev) => ({
          ...prev,
          services: prev.services.includes(serviceParam!) ? prev.services : [serviceParam!],
        }));
      }
    }
  }, []);

  const validateStep = (currentStep: FormStep): boolean => {
    const nextErrors: Record<string, string> = {};

    switch (currentStep) {
      case "services":
        if (formData.services.length === 0) {
          nextErrors.services = "Please select at least one service to help us direct your brief.";
        }
        break;
      case "project":
        if (!formData.projectName.trim()) {
          nextErrors.projectName = "Project or event title is required";
        }
        if (!formData.projectBrief.trim()) {
          nextErrors.projectBrief = "A brief description helps us evaluate requirements";
        }
        if (!formData.location.trim()) {
          nextErrors.location = "City or target location is required";
        }
        if (!formData.date) {
          nextErrors.date = "Please provide an approximate or target date";
        }
        break;
      case "budget":
        // Optional
        break;
      case "contact":
        if (!formData.name.trim()) {
          nextErrors.name = "Your name is required";
        }
        if (!formData.email.trim()) {
          nextErrors.email = "A valid work or personal email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          nextErrors.email = "Please enter a valid email address";
        }
        break;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      const idx = STEPS.findIndex((s) => s.id === step);
      if (idx < STEPS.length - 1) {
        setStep(STEPS[idx + 1].id);
      }
    }
  };

  const handleBack = () => {
    const idx = STEPS.findIndex((s) => s.id === step);
    if (idx > 0) {
      setStep(STEPS[idx - 1].id);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep("contact")) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const proposalSnapshot: ProposalFormData = { ...formData };
    const waUrl = generateWhatsAppProposalUrl(proposalSnapshot);
    setSubmittedProposal(proposalSnapshot);
    setSubmittedWhatsAppUrl(waUrl);

    // Synchronously open WhatsApp window in user event context to avoid browser popup blockers
    try {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    } catch {
      // Ignored if window popup fails, direct CTA button is rendered on the success hub
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(proposalSnapshot),
      });

      const data = await response.json();
      if (response.ok && data.success && data.whatsappUrl) {
        setSubmittedWhatsAppUrl(data.whatsappUrl);
      }
    } catch (err) {
      console.warn("Contact API background sync note:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setSubmitMessage("Your proposal brief is compiled and ready to send via WhatsApp.");
    }
  };

  const handleCopyBrief = async () => {
    if (!submittedProposal) return;
    const text = formatProposalWhatsAppMessage(submittedProposal);
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      }
    } catch {
      // Clipboard fallback
    }
  };

  const handleResetForm = () => {
    setSubmitStatus("idle");
    setSubmittedProposal(null);
    setSubmittedWhatsAppUrl("");
    setCopied(false);
    setFormData({
      services: [],
      projectName: "",
      projectBrief: "",
      location: "",
      date: "",
      audience: "",
      budget: "",
      name: "",
      organisation: "",
      email: "",
      phone: "",
    });
    setStep("services");
  };

  const handleChange = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleServiceToggle = (serviceValue: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceValue)
        ? prev.services.filter((s) => s !== serviceValue)
        : [...prev.services, serviceValue],
    }));
    if (errors.services) {
      setErrors((prev) => ({ ...prev, services: "" }));
    }
  };

  const currentIdx = STEPS.findIndex((s) => s.id === step);

  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          titleId="contact-hero-heading"
          eyebrow="GET A PROPOSAL"
          titleLines={["HAVE AN IDEA?", "LET'S MAKE IT HAPPEN."]}
          lead="Tell us what you're planning. We will help you scope the technical requirements, production cadence, and strategic approach tailored to your event."
        />

        <section className="section" aria-labelledby="enquiry-form-title">
          <div className="wrap">
            <div className="contact">
              {/* Context sidebar */}
              <aside className="contact__aside">
                <div className="card" style={{ padding: "var(--s-6)" }}>
                  <span className="eyebrow" style={{ color: "var(--gold)" }}>DIRECT CHANNELS</span>
                  <h2 className="panel__title" style={{ marginTop: "var(--s-3)" }}>
                    Verified Contact Points
                  </h2>
                  <p>
                    Every enquiry is reviewed directly by our core operations team to ensure feasibility and prompt execution.
                  </p>

                  <ul className="cap-list" style={{ marginTop: "var(--s-5)" }}>
                    <li>
                      <span>EMAIL</span>
                      <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                    </li>
                    <li>
                      <span>WHATSAPP</span>
                      <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                        {siteConfig.phone}
                      </a>
                    </li>
                    <li>
                      <span>LOCATION</span>
                      <span>{siteConfig.location}</span>
                    </li>
                    <li>
                      <span>INSTAGRAM</span>
                      <a href="https://www.instagram.com/flashax._/" target="_blank" rel="noopener noreferrer">
                        @flashax._ &#8599;
                      </a>
                    </li>
                    <li>
                      <span>LINKEDIN</span>
                      <a href="https://www.linkedin.com/company/flashax-event-solutions" target="_blank" rel="noopener noreferrer">
                        Flashax Event Solutions &#8599;
                      </a>
                    </li>
                    <li>
                      <span>SCHEDULE</span>
                      <span>Mon–Fri, 10 AM – 7 PM IST</span>
                    </li>
                  </ul>
                </div>

                <div className="card" style={{ padding: "var(--s-6)" }}>
                  <span className="eyebrow" style={{ color: "var(--gold)" }}>WHAT HAPPENS NEXT</span>
                  <ol className="contact__steps" style={{ marginTop: "var(--s-4)" }}>
                    <li>
                      <b>01</b>
                      <div>
                        <strong style={{ display: "block", color: "var(--ivory)", fontSize: "0.9375rem" }}>Brief Assessment</strong>
                        <span>We assess dates, production viability, venue constraints, and resource availability.</span>
                      </div>
                    </li>
                    <li>
                      <b>02</b>
                      <div>
                        <strong style={{ display: "block", color: "var(--ivory)", fontSize: "0.9375rem" }}>Discovery Conversation</strong>
                        <span>A structured call with founders or lead producers to clarify technical parameters.</span>
                      </div>
                    </li>
                    <li>
                      <b>03</b>
                      <div>
                        <strong style={{ display: "block", color: "var(--ivory)", fontSize: "0.9375rem" }}>Itemised Scope & Proposal</strong>
                        <span>Transparent cost structures, milestone timelines, and staffing plans.</span>
                      </div>
                    </li>
                  </ol>
                </div>
              </aside>

              {/* Multi-step form or WhatsApp Proposal Success Hub */}
              <div className="wizard card">
                {submitStatus === "success" ? (
                  <div className="proposal-success">
                    <div className="proposal-success__header">
                      <div className="proposal-success__icon-wrap">
                        <WhatsAppIcon size={34} />
                      </div>
                      <span className="eyebrow" style={{ color: "var(--gold)" }}>ENQUIRY PREPARED</span>
                      <h2 className="proposal-success__title">Send Brief to WhatsApp</h2>
                      <p className="proposal-success__desc">
                        Your project brief has been compiled into a structured scope. Connect directly with the Flashax leadership team on WhatsApp (<strong>{siteConfig.phone}</strong>) for priority evaluation and immediate turnaround.
                      </p>
                    </div>

                    <div className="proposal-success__actions">
                      <a
                        href={submittedWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--whatsapp"
                        id="open-whatsapp-btn"
                      >
                        <WhatsAppIcon size={20} />
                        <span>Open WhatsApp ({siteConfig.phone}) &#8599;</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleCopyBrief}
                        className="btn btn--secondary"
                        id="copy-brief-btn"
                      >
                        {copied ? (
                          <>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span style={{ color: "var(--gold)" }}>Copied to Clipboard!</span>
                          </>
                        ) : (
                          <>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>
                            <span>Copy Brief Text</span>
                          </>
                        )}
                      </button>
                    </div>

                    {submittedProposal && (
                      <div className="proposal-summary">
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--s-4)", borderBottom: "1px solid var(--line-soft)", paddingBottom: "var(--s-3)" }}>
                          <span className="eyebrow" style={{ color: "var(--gold)", margin: 0 }}>PROPOSAL BRIEF PREVIEW</span>
                          <span style={{ fontSize: "0.75rem", color: "var(--lavender)", letterSpacing: "0.08em" }}>FLASHAX EVENT SOLUTIONS</span>
                        </div>

                        <div className="proposal-summary__grid">
                          <div>
                            <strong style={{ color: "var(--gold)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", display: "block" }}>Project / Event</strong>
                            <p style={{ color: "var(--ivory)", margin: "0.25rem 0", fontSize: "1.1rem", fontWeight: 700 }}>{submittedProposal.projectName}</p>
                            <p style={{ color: "var(--lavender)", margin: 0, fontSize: "0.875rem", lineHeight: 1.5 }}>{submittedProposal.projectBrief}</p>
                          </div>

                          <div style={{ marginTop: "var(--s-3)" }}>
                            <strong style={{ color: "var(--gold)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", display: "block" }}>Capabilities Required</strong>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.35rem" }}>
                              {submittedProposal.services.map((s) => (
                                <span
                                  key={s}
                                  style={{
                                    display: "inline-block",
                                    padding: "0.25rem 0.65rem",
                                    borderRadius: "4px",
                                    background: "rgba(247, 183, 33, 0.12)",
                                    border: "1px solid rgba(247, 183, 33, 0.3)",
                                    color: "var(--gold)",
                                    fontSize: "0.75rem",
                                    fontWeight: 600,
                                  }}
                                >
                                  {SERVICE_LABELS[s] || s}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "var(--s-3)", marginTop: "var(--s-4)", paddingTop: "var(--s-3)", borderTop: "1px solid var(--line-soft)" }}>
                            <div>
                              <span style={{ color: "var(--muted)", fontSize: "0.7rem", textTransform: "uppercase", display: "block" }}>Location</span>
                              <strong style={{ color: "var(--ivory)", fontSize: "0.875rem" }}>{submittedProposal.location}</strong>
                            </div>
                            <div>
                              <span style={{ color: "var(--muted)", fontSize: "0.7rem", textTransform: "uppercase", display: "block" }}>Target Date</span>
                              <strong style={{ color: "var(--ivory)", fontSize: "0.875rem" }}>{submittedProposal.date}</strong>
                            </div>
                            <div>
                              <span style={{ color: "var(--muted)", fontSize: "0.7rem", textTransform: "uppercase", display: "block" }}>Budget Scope</span>
                              <strong style={{ color: "var(--gold)", fontSize: "0.875rem" }}>
                                {submittedProposal.budget ? BUDGET_LABELS[submittedProposal.budget] || submittedProposal.budget : "To be scoped"}
                              </strong>
                            </div>
                            <div>
                              <span style={{ color: "var(--muted)", fontSize: "0.7rem", textTransform: "uppercase", display: "block" }}>Point of Contact</span>
                              <strong style={{ color: "var(--ivory)", fontSize: "0.875rem" }}>
                                {submittedProposal.name} {submittedProposal.phone ? `(${submittedProposal.phone})` : ""}
                              </strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div style={{ marginTop: "var(--s-6)", textAlign: "center" }}>
                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="btn btn--ghost"
                        style={{ fontSize: "0.8125rem", color: "var(--lavender)" }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "0.4rem" }} aria-hidden="true">
                          <polyline points="1 4 1 10 7 10" />
                          <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                        </svg>
                        Submit Another Proposal Brief
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Stepper bar */}
                    <div className="stepper" role="progressbar" aria-valuenow={currentIdx + 1} aria-valuemin={1} aria-valuemax={4} aria-label="Enquiry progress">
                      {STEPS.map((s, i) => {
                        const state = i < currentIdx ? "done" : i === currentIdx ? "current" : "upcoming";
                        return (
                          <div key={s.id} className="stepper__item" data-state={state}>
                            <span>0{i + 1} · {s.label}</span>
                            <span className="stepper__bar" aria-hidden="true" />
                          </div>
                        );
                      })}
                    </div>

                    {submitStatus === "error" && (
                      <div className="alert alert--error" role="alert" style={{ marginBottom: "var(--s-6)" }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff7a8a" strokeWidth="2" style={{ flex: "none", marginTop: 2 }}>
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <div>
                          <h3 className="alert__title" style={{ color: "#ff9aa6" }}>Submission Could Not Complete</h3>
                          <p>{submitMessage}</p>
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} noValidate>
                      {/* Step 1: Services */}
                      {step === "services" && (
                        <fieldset>
                          <legend id="enquiry-form-title">Select Capabilities</legend>
                          <p className="wizard__sub">
                            Which services does your project require? Choose one or multiple services.
                          </p>

                          <div className="options" role="group" aria-label="Service capabilities">
                            {SERVICE_OPTIONS.map((opt) => {
                              const checked = formData.services.includes(opt.value);
                              return (
                                <label key={opt.value} className="option">
                                  <input
                                    type="checkbox"
                                    value={opt.value}
                                    checked={checked}
                                    onChange={() => handleServiceToggle(opt.value)}
                                  />
                                  <span className="option__box" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                      <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                  </span>
                                  <span>{opt.label}</span>
                                </label>
                              );
                            })}
                          </div>

                          {errors.services && (
                            <p className="field__error" role="alert" style={{ marginTop: "var(--s-3)" }}>
                              {errors.services}
                            </p>
                          )}
                        </fieldset>
                      )}

                      {/* Step 2: Project Details */}
                      {step === "project" && (
                        <fieldset>
                          <legend>Project Details</legend>
                          <p className="wizard__sub">
                            Give us the working outline so we can prepare contextual feedback.
                          </p>

                          <div className="fields">
                            <div className="field">
                              <label htmlFor="projectName" className="field__label">
                                Project or Event Name <span className="req">*</span>
                              </label>
                              <input
                                type="text"
                                id="projectName"
                                className="input"
                                value={formData.projectName}
                                onChange={(e) => handleChange("projectName", e.target.value)}
                                placeholder="e.g., Annual Leadership Summit 2025"
                                aria-invalid={!!errors.projectName}
                                aria-describedby={errors.projectName ? "err-pname" : undefined}
                              />
                              {errors.projectName && (
                                <p id="err-pname" className="field__error" role="alert">{errors.projectName}</p>
                              )}
                            </div>

                            <div className="field">
                              <label htmlFor="projectBrief" className="field__label">
                                Brief Scope & Objectives <span className="req">*</span>
                              </label>
                              <textarea
                                id="projectBrief"
                                className="input"
                                rows={4}
                                value={formData.projectBrief}
                                onChange={(e) => handleChange("projectBrief", e.target.value)}
                                placeholder="Key goals, format, physical/hybrid expectations, venue constraints, or target audience..."
                                aria-invalid={!!errors.projectBrief}
                                aria-describedby={errors.projectBrief ? "err-pbrief" : undefined}
                              />
                              {errors.projectBrief && (
                                <p id="err-pbrief" className="field__error" role="alert">{errors.projectBrief}</p>
                              )}
                            </div>

                            <div className="fields--2">
                              <div className="field">
                                <label htmlFor="location" className="field__label">
                                  Target City or Venue <span className="req">*</span>
                                </label>
                                <input
                                  type="text"
                                  id="location"
                                  className="input"
                                  value={formData.location}
                                  onChange={(e) => handleChange("location", e.target.value)}
                                  placeholder="e.g., Mumbai, New Delhi, Bengaluru"
                                  aria-invalid={!!errors.location}
                                  aria-describedby={errors.location ? "err-loc" : undefined}
                                />
                                {errors.location && (
                                  <p id="err-loc" className="field__error" role="alert">{errors.location}</p>
                                )}
                              </div>

                              <div className="field">
                                <label htmlFor="date" className="field__label">
                                  Target Date or Window <span className="req">*</span>
                                </label>
                                <input
                                  type="date"
                                  id="date"
                                  className="input"
                                  value={formData.date}
                                  onChange={(e) => handleChange("date", e.target.value)}
                                  min={new Date().toISOString().split("T")[0]}
                                  aria-invalid={!!errors.date}
                                  aria-describedby={errors.date ? "err-date" : undefined}
                                />
                                {errors.date && (
                                  <p id="err-date" className="field__error" role="alert">{errors.date}</p>
                                )}
                              </div>
                            </div>

                            <div className="field">
                              <label htmlFor="audience" className="field__label">
                                Estimated Attendance (Optional)
                              </label>
                              <input
                                type="text"
                                id="audience"
                                className="input"
                                value={formData.audience}
                                onChange={(e) => handleChange("audience", e.target.value)}
                                placeholder="e.g., 300 delegates, 5,000 festival attendees"
                              />
                            </div>
                          </div>
                        </fieldset>
                      )}

                      {/* Step 3: Budget Range */}
                      {step === "budget" && (
                        <fieldset>
                          <legend>Budget Scope</legend>
                          <p className="wizard__sub">
                            Sharing a preliminary bracket helps us propose realistic production solutions and vendor tiering.
                          </p>

                          <div className="field">
                            <label htmlFor="budget" className="field__label">
                              Estimated Budget Window
                            </label>
                            <select
                              id="budget"
                              className="input"
                              value={formData.budget}
                              onChange={(e) => handleChange("budget", e.target.value)}
                            >
                              {BUDGET_OPTIONS.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                  {opt.label}
                                </option>
                              ))}
                            </select>
                            <span className="field__hint">
                              Optional. If your budget is flexible or dependent on our proposal, select &ldquo;Not yet established&rdquo;.
                            </span>
                          </div>
                        </fieldset>
                      )}

                      {/* Step 4: Contact Details */}
                      {step === "contact" && (
                        <fieldset>
                          <legend>Point of Contact</legend>
                          <p className="wizard__sub">
                            Where should we dispatch our initial review and schedule the discovery conversation?
                          </p>

                          <div className="fields">
                            <div className="fields--2">
                              <div className="field">
                                <label htmlFor="name" className="field__label">
                                  Full Name <span className="req">*</span>
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  className="input"
                                  value={formData.name}
                                  onChange={(e) => handleChange("name", e.target.value)}
                                  placeholder="Your full name..."
                                  aria-invalid={!!errors.name}
                                  aria-describedby={errors.name ? "err-name" : undefined}
                                />
                                {errors.name && (
                                  <p id="err-name" className="field__error" role="alert">{errors.name}</p>
                                )}
                              </div>

                              <div className="field">
                                <label htmlFor="organisation" className="field__label">
                                  Organisation or Brand (Optional)
                                </label>
                                <input
                                  type="text"
                                  id="organisation"
                                  className="input"
                                  value={formData.organisation}
                                  onChange={(e) => handleChange("organisation", e.target.value)}
                                  placeholder="Enterprise, Agency, College..."
                                />
                              </div>
                            </div>

                            <div className="fields--2">
                              <div className="field">
                                <label htmlFor="email" className="field__label">
                                  Email Address <span className="req">*</span>
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  className="input"
                                  value={formData.email}
                                  onChange={(e) => handleChange("email", e.target.value)}
                                  placeholder="contact@organisation.com"
                                  aria-invalid={!!errors.email}
                                  aria-describedby={errors.email ? "err-email" : undefined}
                                />
                                {errors.email && (
                                  <p id="err-email" className="field__error" role="alert">{errors.email}</p>
                                )}
                              </div>

                              <div className="field">
                                <label htmlFor="phone" className="field__label">
                                  Direct Phone (Optional)
                                </label>
                                <input
                                  type="tel"
                                  id="phone"
                                  className="input"
                                  value={formData.phone}
                                  onChange={(e) => handleChange("phone", e.target.value)}
                                  placeholder="e.g., +91 98000 00000"
                                />
                              </div>
                            </div>

                            <div className="proposal-whatsapp-hint">
                              <WhatsAppIcon size={22} />
                              <span>
                                <strong>Direct WhatsApp Routing:</strong> Submitting compiles your requirements into a structured proposal brief and connects you directly with Flashax leadership on WhatsApp (<strong>{siteConfig.phone}</strong>).
                              </span>
                            </div>

                            <p className="wizard__legal">
                              By submitting this brief, you acknowledge our{" "}
                              <Link href="/privacy-policy">Privacy Policy</Link>. We maintain strict confidentiality and never distribute client project briefs or contact information to external marketing brokers.
                            </p>
                          </div>
                        </fieldset>
                      )}

                      {/* Actions */}
                      <div className="wizard__actions">
                        {step !== "services" && (
                          <Button variant="ghost" onClick={handleBack} disabled={isSubmitting}>
                            ← Back
                          </Button>
                        )}

                        {step !== "contact" ? (
                          <Button variant="primary" icon="right" onClick={handleNext} disabled={isSubmitting}>
                            Continue
                          </Button>
                        ) : (
                          <Button type="submit" variant="primary" icon="right" disabled={isSubmitting}>
                            {isSubmitting ? "Compiling WhatsApp Brief..." : "GET A PROPOSAL"}
                          </Button>
                        )}
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}