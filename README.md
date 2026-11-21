# NadwaHealthcare (NHC) - Medical Tourism Platform

A modern, production-ready, responsive medical tourism website built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS v4**.

Designed specifically for international patients seeking medical treatment in India (with dedicated focus on premier Delhi NCR hospital networks: New Delhi, Gurugram, Noida, and Faridabad).

---

## 🎨 Visual Design Inspiration

Inspired by the provided reference design language:
- **Color Palette**:
  - Deep dark teal (`#08221E` / `#0B2D26`) for sticky navbar, footer, and trust feature bands.
  - Vivid turquoise (`#00C4A7`) for primary CTAs, highlight badges, and focal typography.
  - Soft mint (`#E6F7F4`) for informational cards, badges, and accents.
  - Off-white (`#F8FAFC`) and white content surfaces.
  - High-contrast charcoal (`#0F172A`) for readable typography.
- **Visual Elements**:
  - Clean hero composition featuring healthcare professionals.
  - Floating interactive cards (International Patient Desk avatar pill, Senior Coordinator quick-message card).
  - Subtle molecular/cellular dot mesh background patterns (`bg-medical-dots`, `bg-dark-dots`).
  - Rounded cards, soft shadows, and generous whitespace.

---

## 🚀 Key Features & Website Structure

### 1. Multi-Page Architecture
- **Home (`/`)**: Hero section, dark teal trust feature band, "Why Choose NadwaHealthcare" grid, 12-specialty showcase, Delhi NCR hospital spotlight, doctor showcase, 11-step patient journey preview, verified case summaries, prominent enquiry form, and interactive FAQs.
- **Hospitals Directory (`/hospitals`)**: Filterable by City (New Delhi, Gurugram, Noida, Faridabad), Specialty, and search query.
- **Hospital Profile Pages (`/hospitals/:slug`)**: Verified information, accreditations (JCI/NABH), bed capacity, distance from Delhi International Airport, international lounge facilities, and direct consultation CTAs.
- **Doctors Directory (`/doctors`)**: Filterable by Specialty, City, and search.
- **Doctor Profile Pages (`/doctors/:slug`)**: Clinical leadership bios, verified qualifications, experience, awards, hospital affiliation, and consultation requests.
- **Treatments Directory (`/treatments`)**: 12 complete categories with tag filters.
- **Treatment Detail Pages (`/treatments/:slug`)**: In-depth clinical overview, conditions treated, procedure options, 5-phase patient treatment pathway, stay and recovery timelines, associated hospitals, specialists, FAQs, and medical disclaimers.
- **Patient Services (`/services`)**: Comprehensive 11-step patient journey timeline with clear scope breakdown between direct NHC services and third-party partner logistics.
- **Patient Stories (`/patient-stories`)**: Documented patient case studies with verified labels (no fabricated reviews or star ratings).
- **About Us (`/about`)**: Ethical mission, patient-focused approach, Delhi NCR coordination presence.
- **FAQs (`/faqs`)**: Interactive accordion with category filters and search, plus schema.org FAQPage structured data.
- **Contact Us (`/contact`)**: Multi-channel communication, Delhi NCR office details, direct WhatsApp links, and full consultation form.
- **Legal Compliance Pages**:
  - Privacy Policy (`/privacy-policy`)
  - Terms and Conditions (`/terms-and-conditions`)
  - Medical Disclaimer (`/medical-disclaimer`)
- **404 Page (`*`)**: User-friendly not-found page with navigational shortcuts.

### 2. Functional Patient Enquiry System
- Full client-side validation with real error states.
- International calling codes and phone number support.
- Dropdown of all 12 treatments + "Other".
- Preferred Delhi NCR hub selector.
- Optional medical report file upload (PDF, JPG, PNG, ZIP with size validation).
- Anti-spam honeypot protection.
- Generates a unique Ticket Reference ID (`NHC-2026-XXXX`).
- Instant option to forward case details directly to WhatsApp for 15-minute priority triage.

### 3. Central Configuration (`src/config/siteConfig.ts`)
Easily update business information in one central location:
- WhatsApp Business number & pre-filled messages
- International phone numbers & emergency desk
- Email addresses
- Physical office address in Delhi NCR
- Supported languages
- Social media URLs

### 4. Technical SEO
- Dynamic page title and meta description updates (`SEOHead.tsx`).
- Canonical URL generation.
- XML Sitemap (`public/sitemap.xml`) with all routes.
- Robots.txt (`public/robots.txt`).
- Open Graph and Twitter Card tags.
- Schema.org JSON-LD structured data (`MedicalOrganization` and `FAQPage`).
- Breadcrumb navigation on all detail pages.
- Semantic HTML5 landmark structure.

---

## 🛠️ Technology Stack

- **Framework**: React 19
- **Build Tool**: Vite 8
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Routing**: React Router DOM v7
- **Icons**: Lucide React
- **Performance**: Route-based code splitting with `React.lazy` and `Suspense`

---

## 💻 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
cd NHC

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will run at `http://localhost:5173/`.

### Production Build
```bash
# Type check and build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## ⚖️ Medical & Ethical Standards

NadwaHealthcare operates strictly as an independent international patient travel facilitator. NHC does not practice medicine, offer clinical diagnoses, or guarantee medical outcomes. All medical procedures and clinical decisions are rendered solely by licensed doctors and accredited hospitals in India.
