export const standards = [
  "EU MDR/IVDR GSPR",
  "ISO 14971/13485/9001",
  "IEC 62304",
  "21 CFR Part 11",
  "ISO/IEC 27001",
] as const;

export const metrics = [
  { value: "23", label: "GSPRs Mapped per Device (MDR)" },
  { value: "20", label: "GSPRs Mapped per Device (IVDR)" },
  { value: "22", label: "Annex VIII Classification Rules" },
  { value: "21 CFR 11", label: "Audit Trail Standard" },
] as const;

export const capabilities = [
  {
    title: "GSPR Health Check",
    body: "RAccelerator will evaluate your device documentation against applicable ISO standards and GSPR, and provide a detailed overview of gaps and potential remediation.",
  },
  {
    title: "Device Classification",
    body: "RAxy, the RAccelerator chatbot, walks you through the classification rules. It will provide the device classification with accuracy level and the classification determination report for your technical documentation.",
  },
  {
    title: "Remediation Plan",
    body: "When gaps are identified, RAccelerator will provide a remediation plan with estimated timelines and generic cost.",
  },
  {
    title: "Document Review",
    body: "RAccelerator can read your PDFs, DOCX, and XLSX documents. It will organize them under the applicable GSPR.",
  },
  {
    title: "Transparent Reporting",
    body: "RAccelerator will provide a status report with the level of detail required for the audience — whether it is an RA professional, R&D Engineer, or C-suite.",
  },
  {
    title: "Full Traceability",
    body: "RAccelerator is 21 CFR Part 11 compliant and provides full traceability of data and evidence.",
  },
] as const;

export const proofs = [
  {
    title: "Reproducible Results",
    body: "Every GSPR assessment produces identical outputs given identical inputs. No hallucinations, no variation, no surprises at your Notified Body audit.",
  },
  {
    title: "Full Traceability",
    body: "Every AI determination links back to specific evidence anchors, classification rules, and applicable standards. Auditors see exactly how each conclusion was reached.",
  },
  {
    title: "Regulatory-Grade Validation",
    body: "Built on EU MDR 2017/745 Annex I and IVDR 2017/746 Annex I requirements, ISO 14971 risk frameworks, and MDCG guidance documents — not general-purpose LLM outputs.",
  },
] as const;

export const genericAi = [
  "Probabilistic outputs",
  "May hallucinate requirements",
  "No audit trail",
  "Varies between runs",
  "Black-box reasoning",
] as const;

export const deterministicAi = [
  "Rule-based determinism",
  "Evidence-anchored findings",
  "Full 21 CFR Part 11 trail",
  "100% reproducible",
  "Transparent reasoning",
] as const;

export const audiences = [
  "Class III Manufacturer",
  "IVD Platform",
  "Cardiac Devices",
  "Orthopedics",
  "Digital Health",
  "Neurostimulation",
] as const;

export const quotes = [
  {
    quote:
      "RAccelerator cut our GSPR assessment time from 12 weeks to 3. The deterministic AI means we trust every output our NB sees.",
    role: "VP Regulatory Affairs",
    org: "Class III Manufacturer",
  },
  {
    quote:
      "Finally, a tool that understands MDR at the standard-clause level. The gap analysis saved us from two critical findings at our stage 2 audit.",
    role: "Director RA",
    org: "Cardiac Device Startup",
  },
] as const;

export const security = [
  {
    title: "SOC 2 Type II",
    body: "Annual third-party audit of security controls, availability, and confidentiality.",
  },
  {
    title: "GDPR Compliant",
    body: "EU data residency options. Full data processing agreements. Right to erasure supported.",
  },
  {
    title: "21 CFR Part 11",
    body: "Electronic signatures, audit trails, and access controls meeting FDA requirements.",
  },
  {
    title: "AES-256 Encryption",
    body: "Data encrypted at rest and in transit. TLS 1.3 for all communications.",
  },
  {
    title: "ISO 27001 Aligned",
    body: "Information security management system aligned to international standards.",
  },
  {
    title: "Role-Based Access",
    body: "Granular permissions, SSO/SAML integration, and MFA enforcement for all users.",
  },
] as const;

export const faqs = [
  {
    question: "How does RAccelerator’s AI ensure classification accuracy?",
    answer:
      "RAccelerator uses a deterministic, rule-based AI engine built on the complete MDR Annex VIII classification rule set. Every determination is evidence-anchored and reproducible — not probabilistic. Each output cites the rules applied, the evidence anchors that informed the conclusion, and the standard clauses that govern the determination, so a Notified Body reviewer can re-trace the reasoning end-to-end.",
  },
  {
    question: "Is my regulatory data secure?",
    answer:
      "Yes. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We are SOC 2 Type II audited, GDPR compliant, and offer EU-based data residency. Access is controlled via role-based permissions with mandatory MFA.",
  },
  {
    question: "Does this work for Class I, IIa, IIb, and III devices?",
    answer:
      "Yes. RAccelerator supports classification and GSPR assessment for all MDR risk classes, including Class I devices with measuring function or sterile variants. The platform also supports IVDR devices under EU IVDR 2017/746.",
  },
  {
    question: "Is RAccelerator accepted by Notified Bodies?",
    answer:
      "RAccelerator generates documentation that aligns with Notified Body expectations for technical file structure, GSPR mapping format, and clinical evaluation report standards. Several of our clients have successfully used RAccelerator-generated reports in their NB submissions.",
  },
  {
    question: "What does onboarding look like?",
    answer:
      "Onboarding takes 2–4 weeks depending on portfolio size. We configure your workspace, import existing documentation, and run initial GSPR assessments. Your dedicated Customer Success Manager guides the entire process.",
  },
  {
    question: "Can RAccelerator integrate with our existing QMS?",
    answer:
      "Yes. RAccelerator offers API integrations with common QMS platforms and document management systems. We support SSO/SAML for identity management and can export data in standard formats for ingestion into your existing workflows.",
  },
] as const;

export const footer = {
  tagline: "Regulatory intelligence for MedTech.",
  social: ["LinkedIn", "Instagram", "X", "YouTube"],
  product: [
    { label: "Features", href: "#features" },
    { label: "How It Works" },
    { label: "Pricing" },
    { label: "Security", href: "#security" },
    { label: "API Docs" },
  ],
  resources: [
    { label: "Blog" },
    { label: "EU MDR Guide" },
    { label: "GSPR Checklist" },
    { label: "Webinars" },
    { label: "Case Studies" },
  ],
  company: [
    { label: "About" },
    { label: "Careers" },
    { label: "Contact" },
    { label: "Privacy Policy" },
    { label: "Terms of Service" },
  ],
} as const;

export const gapRows = [
  { name: "GSPR 1 — General Safety", status: "Compliant", width: "100%" },
  { name: "GSPR 4 — Transport & Storage", status: "Partial", width: "64%" },
  { name: "GSPR 10 — Chemical Risk", status: "Gap", width: "28%" },
  { name: "GSPR 14 — Software Devices", status: "Compliant", width: "100%" },
] as const;

export const rules = [
  { id: "Rule 9", name: "Active Therapeutic", weight: "Primary" },
  { id: "Rule 10", name: "Active Diagnostic", weight: "Primary" },
  { id: "Rule 11", name: "Software", weight: "Contributing" },
] as const;
