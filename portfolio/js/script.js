/**
 * ==============================================================================
 * HAMMAD HASSAN - PROFESSIONAL PORTFOLIO JAVASCRIPT ENGINE
 * Full Vanilla JavaScript - Zero external frameworks
 * ==============================================================================
 * 
 * HOW TO ADD OR EDIT PROJECTS:
 * 1. Locate the `PROJECTS_DATA` array below.
 * 2. Duplicate any existing project object or add a new entry.
 * 3. Required fields for each project:
 *    - id: Unique number or string
 *    - title: Project name (e.g. "Wellness Aura")
 *    - category: Exactly match one of the categories:
 *        "AI & Chatbots" | "Automations" | "Web Applications" | 
 *        "Mobile Applications" | "Book Design" | "Translation" | 
 *        "Graphic Design" | "Data Entry"
 *    - year: Completion year (e.g. "2026", "2025")
 *    - shortDescription: Brief summary shown on project card
 *    - fullDescription: Comprehensive details shown inside modal
 *    - image: Relative path to primary thumbnail (e.g. "images/ai-chatbots/wellness-aura.svg")
 *    - galleryImages: Array of image paths for the interactive modal gallery
 *    - technologies: Array of technology strings (e.g. ["HTML", "Botpress", "Make.com"])
 *    - liveUrl: Working live demo URL (Leave "" if none)
 *    - githubUrl: GitHub repository link (Leave "" if none)
 *    - featured: true or false (shows "FEATURED" pill badge)
 * 
 * The website automatically renders cards, updates filters, and powers search!
 * ==============================================================================
 */

// Global Configuration
const PORTFOLIO_CONFIG = {
  ownerName: "Hammad Hassan",
  ownerTitle: "AI & Digital Solutions Developer",
  email: "hammad.hassan5775@gmail.com",
  whatsappNumber: "923035553044",
  githubUrl: "",
  linkedinUrl: "https://www.linkedin.com/in/hammadhassan201",
  placeholderImage: "images/placeholder.svg"
};

// ==============================================================================
// 1. PRIMARY EDITABLE PROJECTS DATABASE
// ==============================================================================
const PROJECTS_DATA = [
  {
    id: 38,
    title: "AP Roofing & Specialty Coatings - Commercial & Residential Roofing Platform",
    category: "Web Applications",
    year: "2026",
    shortDescription: "Enterprise-grade commercial and residential roofing web platform engineered for AP Roofing LLC. Solves critical storm damage response bottlenecks and costly roof replacements by offering instant digital inspection dispatch, insurance claim support, and 15–20 year specialty restorative coating systems.",
    fullDescription: "• Project Overview:\n  A high-converting commercial roofing and specialty waterproofing web platform engineered for AP Roofing & Specialty Coatings (aproofingandspecialitycoatings.us). Serving Holdrege, Johnson Lake NE, Phelps County, Kingman KS, and surrounding Midwest regions, the platform delivers an authoritative digital gateway for residential homeowners, commercial facilities, and agricultural enterprises seeking durable exterior protection.\n\n• Core Problems Solved & Value Delivered:\n  1. Costly Total Roof Replacements: Property owners frequently face crippling capital expenditures replacing weathered roofs that only suffer from surface degradation. The platform educates and quotes advanced elastomeric, silicone, and acrylic coatings that seal leaks, resist thermal UV degradation, and extend roof lifespan by 15–20 years at a fraction of replacement cost.\n  2. Severe Storm & Hail Emergency Delays: Midwest hail storms cause sudden structural panic. The site provides a streamlined emergency dispatch pipeline with zero-obligation drone/physical inspection booking, bridging homeowners directly to insurance claim documentation support.\n  3. Low Conversion & Trust Deficits in Contracting: Built with live Trustindex Google Verified Reviews, 'Licensed & Fully Insured' accreditation seals, an interactive estimate calculator, and direct hotline dispatch ((308) 380-4965) to maximize lead conversion.\n\n• Key Technical Capabilities:\n  • Full-lifecycle commercial membranes (TPO/EPDM), architectural shingles, and standing seam metal roofing portals.\n  • Responsive mobile-first interface optimized for rapid field-booking across smartphones and tablets.\n  • Search engine optimized local service silo architecture targeting multi-state service territories.",
    image: "images/websites/aproofing-mockup.jpg",
    galleryImages: [
      "images/websites/aproofing-mockup.jpg"
    ],
    technologies: ["WordPress", "Responsive Web Design", "Roofing & Exterior Architecture", "Specialty Elastomeric Coatings", "Trustindex 5-Star Reviews", "Storm Damage Restoration", "Lead Generation Engine", "HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://aproofingandspecialitycoatings.us/",
    githubUrl: "",
    featured: true
  },
  {
    id: 37,
    title: "Rankyoup - AI Trust & Generative Engine Optimization (GEO/AEO) Platform",
    category: "Web Applications",
    year: "2026",
    shortDescription: "Pioneering AI search visibility and digital authority platform for Rankyoup. Solves the generative search blindspot where businesses remain invisible on LLMs by engineering dynamic AI trust networks that get brands recommended on ChatGPT, Perplexity, Gemini, Claude, and Google Local Maps.",
    fullDescription: "• Project Overview:\n  An advanced, high-performance digital visibility web platform engineered for Rankyoup (rankyoup.com / steelblue-loris-828155.hostingersite.com). Built at the bleeding edge of modern digital marketing, Rankyoup helps brands transition from legacy keyword search into the generative era of artificial intelligence, where AI chatbots act as the primary purchasing recommenders.\n\n• Core Problems Solved & Value Delivered:\n  1. The Generative AI Search Blindspot: Traditional SEO only optimizes for Google's classic blue links. When consumers ask ChatGPT, Perplexity, Claude, or Google Gemini for vendor recommendations, non-optimized brands are completely invisible. Rankyoup creates authoritative entity citations and knowledge graphs so AI models recommend the client first.\n  2. Low Website Conversion & Traffic Drop-Off: Visitors browsing AI services need immediate clarity. The platform incorporates 24/7 intelligent conversational triage bots that interact with visitors in real-time, explain complex GEO strategies, and qualify inbound leads automatically.\n  3. Local Search Invisibility: Integrates systematic Google Business Profile (GBP) 3-pack optimization protocols, ensuring local enterprises dominate both classical map packs and generative search answers simultaneously.\n\n• Key Technical Capabilities:\n  • Interactive neural network visualization showcasing real-time interconnected AI ecosystem authority.\n  • Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) structured data blueprints.\n  • Seamless automated booking funnels and conversion-focused cybernetic UI.",
    image: "images/websites/rankyoup-showcase.jpg",
    galleryImages: [
      "images/websites/rankyoup-showcase.jpg"
    ],
    technologies: ["AI Trust Network", "GEO & AEO Optimization", "AI Chatbots Integration", "AI Automation Workflows", "Google Business Profile", "WordPress", "Elementor Pro", "Cybernetic UI"],
    liveUrl: "https://steelblue-loris-828155.hostingersite.com/",
    githubUrl: "",
    featured: true
  },
  {
    id: 36,
    title: "BillingLoop - Healthcare Management & Medical Billing Platform",
    category: "Web Applications",
    year: "2026",
    shortDescription: "High-performance medical billing and revenue cycle management (RCM) web platform for BillingLoop (New York). Solves clinical revenue leakage and administrative burnout by delivering a 99% clean-claim submission rate, AAPC-certified coding, and 25% practice revenue growth across the USA.",
    fullDescription: "• Project Overview:\n  A premier healthcare management and revenue cycle web platform engineered for BillingLoop (Medical Billing Company In NY - billingloop.com). Serving solo practices, hospital networks, and specialty clinics across the United States, the platform unifies full-spectrum clinical billing, HIPAA-compliant patient accounting, and digital practice administration into a unified, trustworthy digital interface.\n\n• Core Problems Solved & Value Delivered:\n  1. Severe Revenue Leakage & Claim Denials: Over 30% of medical claims nationwide face rejection or delay due to coding discrepancies. BillingLoop provides automated pre-submission claim scrubbing and aggressive denial recovery, achieving an industry-leading 99% first-pass clean claim rate and recovering millions in lost provider revenue.\n  2. Clinical Overhead & Staff Burnout: Doctors and clinical staff lose countless hours fighting payer phone trees and managing prior authorizations instead of treating patients. The platform provides a turnkey virtual front-desk automation system that handles insurance eligibility, intake scheduling, and billing queries 24/7.\n  3. Byzantine Payer Regulations & Compliance Risks: Protects practices against costly HIPAA penalties through AAPC/AHIMA certified ICD-10-CM, CPT, and HCPCS coding compliance alongside Provider Quality Payment Program (MIPS/MACRA) credentialing.\n\n• Key Technical Capabilities:\n  • Multi-specialty practice modules for Cardiology, OB/GYN, Dental, Chiropractic, Orthopedics, and Mental Health.\n  • Rapid consultation booking pipelines with customized ROI revenue calculators.\n  • Clean, responsive healthcare UI conveying trust, compliance, and clinical professionalism.",
    image: "images/websites/billingloop-mockup.jpg",
    galleryImages: [
      "images/websites/billingloop-mockup.jpg"
    ],
    technologies: ["WordPress", "Elementor Pro", "HTML5", "CSS3", "JavaScript", "Medical Billing RCM", "HIPAA Compliant", "Practice Management", "Responsive Design"],
    liveUrl: "https://billingloop.com/",
    githubUrl: "",
    featured: true
  },
  {
    id: 35,
    title: "Opus Miami - Luxury Event Yacht Charters Web Platform",
    category: "Web Applications",
    year: "2026",
    shortDescription: "Premier luxury private event yacht charter web platform engineered for Opus Miami. Solves maritime event booking friction and vendor fragmentation by providing interactive deck showcases, custom catering packages, and seamless VIP bookings for up to 250+ guests across South Florida.",
    fullDescription: "• Project Overview:\n  An elite luxury hospitality and maritime event web platform engineered for Opus Miami (Miami Event Yacht - miamieventyacht.com). Specializing in private mega-yacht charters for up to 250+ guests across Miami and Fort Lauderdale, the platform delivers an end-to-end digital booking experience for corporate galas, weddings, VIP celebrations, and brand activations.\n\n• Core Problems Solved & Value Delivered:\n  1. Opaque Pricing & Fragmented Maritime Logistics: Organizing a large-scale yacht event typically requires coordinating separate vendors for vessel charter, culinary catering, open bar staffing, live entertainment, and harbor permitting. Opus Miami unifies all services into transparent, all-inclusive luxury packages on a single digital platform.\n  2. Customer Hesitation for High-Ticket Bookings: High-net-worth clients and event planners require total visual confidence before committing thousands of dollars. The platform solves this through interactive interior salon and open-air sky deck showcases with detailed 3D deck plans and Biscayne Bay route itineraries.\n  3. Lost Leads Due to Slow Response Times: Features direct hotline dispatch ((954) 494-1448), instant bespoke quotation forms, and automated inquiry triage to guarantee rapid sales conversions.\n\n• Key Technical Capabilities:\n  • Bespoke multi-tier catering and sommelier beverage package configurators.\n  • Ultra-smooth, responsive mobile experience optimized for affluent travelers and event planners on the go.\n  • High-impact maritime video and imagery layouts with zero loading latency.",
    image: "images/websites/opus-yacht-mockup.jpg",
    galleryImages: [
      "images/websites/opus-yacht-mockup.jpg"
    ],
    technologies: ["WordPress", "Elementor Pro", "HTML5", "CSS3", "JavaScript", "Luxury Hospitality UI", "Event Booking Engine", "Responsive Design"],
    liveUrl: "https://miamieventyacht.com/",
    githubUrl: "",
    featured: true
  },
  {
    id: 39,
    title: "Client Intake & Lead Dispatch Automation - Make.com Webhook Pipeline",
    category: "Automations",
    year: "2026",
    shortDescription: "Real-time webhook lead intake and sales dispatch automation engineered with Make.com. Solves costly lead drop-off and manual data entry by triggering in under 2 seconds: sending personalized confirmation emails to clients, dispatching owner alerts, logging leads to Google Sheets CRM, and notifying Slack.",
    fullDescription: "• Project Overview:\n  An enterprise-grade, multi-channel client intake and sales triage automation pipeline engineered by Hammad Hassan using Make.com (formerly Integromat). Operating 24/7 with zero latency, this cloud pipeline activates the instant a prospect submits an inquiry, quotation request, or consultation form on the website.\n\n• Core Problems Solved & Value Delivered:\n  1. Lost Revenue Due to Delayed Lead Response: Industry data proves that 78% of customers purchase from the vendor that responds first. Delays of even 30 minutes cause conversion rates to plummet by up to 391%. This automation triggers in under 2 seconds, immediately reassuring prospects with personalized welcome emails and consultation scheduling links.\n  2. Manual Data Entry Fatigue & Lost Records: Manually copying prospect details into spreadsheets or CRM databases leads to human error, missed follow-ups, and lost client history. The pipeline automatically parses JSON payloads and appends validated rows to a Google Sheets CRM with exact timestamps and categorization tags.\n  3. Internal Team Notification Silos: Dispatches an instantaneous high-priority lead briefing to the business owner via Gmail while simultaneously broadcasting an actionable alert card into the company's dedicated Slack channel (#new-leads) for sub-5-minute sales response.\n\n• Technical Workflow & Integrated Modules:\n  • Module 1 (Custom Webhook): Instantaneous HTTP POST payload listener capturing client parameters.\n  • Module 2 (Gmail API): Dual-branch email generation (Client Confirmation + Business Owner Alert).\n  • Module 3 (Google Sheets API): Structured row append and data sanitization for CRM bookkeeping.\n  • Module 5 (Slack API): Real-time formatted team notification card with direct reply actions.\n  • Resilient cloud architecture with error handlers and automated retry routines.",
    image: "images/automations/make-webhook-automation.jpg",
    galleryImages: [
      "images/automations/make-webhook-automation.jpg"
    ],
    technologies: ["Make.com", "Custom Webhooks", "Gmail API", "Google Sheets API", "Slack API", "JSON Payload Parsing", "Lead Management", "Workflow Automation"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 40,
    title: "Client Plan Subscription & Multi-Stage Email Drip Automation - Make.com Pipeline",
    category: "Automations",
    year: "2026",
    shortDescription: "Progressive client plan fulfillment and milestone email drip automation built with Make.com. Solves subscriber drop-off and manual onboarding fatigue by delivering customized plans on Day 0, Day 2, and Day 6 with persistent cloud delay timers and continuous Google Sheets CRM telemetry.",
    fullDescription: "• Project Overview:\n  An advanced multi-stage automated lead nurturing, digital product fulfillment, and client onboarding pipeline engineered by Hammad Hassan using Make.com. Designed for subscription-based platforms and educational consultancies, this system automates multi-phase digital plan delivery over an 8-day milestone sequence without requiring a single minute of manual intervention.\n\n• Core Problems Solved & Value Delivered:\n  1. Cognitive Overload & High Churn: Sending an entire educational curriculum or enterprise implementation blueprint all at once overwhelms subscribers, resulting in low adoption and high cancellation rates. This pipeline spaces delivery into digestible phases (Instant Day 0 Foundation ➔ Day 2 Advanced Strategy ➔ Day 8 Mastery Blueprint).\n  2. Repetitive Administrative Fulfillment Burden: Manually tracking when each client subscribed and remembering to send follow-up materials wastes hundreds of operational hours. The pipeline runs autonomously in the cloud, utilizing resilient stateful sleep modules that survive server cycles.\n  3. Zero Visibility into Subscriber Lifecycle: Automatically updates subscriber journey records in a centralized Google Sheets CRM, tracking milestone completion timestamps, delivery statuses, and upgrade readiness.\n\n• Technical Workflow & Integrated Modules:\n  • Webhook 1: Instantaneous subscriber capture upon website plan checkout.\n  • Gmail 2: Automated Day 0 onboarding email delivering initial Starter Blueprint.\n  • Tools 3: 48-hour stateful sleep module holding thread execution.\n  • Gmail 4: Automated Day 2 follow-up email delivering Advanced Strategy Plan.\n  • Tools 5: 6-day (144-hour) stateful delay module.\n  • Gmail 7: Automated Day 8 delivery email with Final Mastery Blueprint & upsell options.\n  • Google Sheets 8: Centralized subscriber tracking and telemetry logging.",
    image: "images/automations/make-drip-plan-automation.jpg",
    galleryImages: [
      "images/automations/make-drip-plan-automation.jpg"
    ],
    technologies: ["Make.com", "Custom Webhooks", "Multi-Stage Email Drip", "Gmail API", "Tools Sleep / Delays", "Google Sheets API", "Lead Nurturing", "Workflow Automation"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 31,
    title: "Social Media & Marketing Graphics Kit",
    category: "Graphic Design",
    year: "2026",
    shortDescription: "High-impact social media marketing graphics kit and advertising suite crafted with Canva and advanced generative AI. Solves poor audience retention and visual brand inconsistency by delivering high-converting LinkedIn carousels, promotional campaign banners, and modular visual identity assets.",
    fullDescription: "• Project Overview:\n  A comprehensive commercial graphic design and social media marketing suite engineered by Hammad Hassan using Canva Pro, Adobe Creative Cloud, and advanced generative AI design engines. Designed for high-growth digital brands, agencies, and content creators, this kit provides a turnkey visual marketing ecosystem that commands attention across crowded digital feeds.\n\n• Core Problems Solved & Value Delivered:\n  1. Ad Blindness & Low Click-Through Rates: Modern audiences scroll past generic stock imagery in milliseconds. This kit deploys high-contrast focal points, psychological color weighting, and thumb-stopping typography hierarchies that dramatically elevate click-through rates (CTR) and organic post saves.\n  2. Inconsistent Multi-Channel Brand Identity: Businesses frequently publish fragmented graphics across LinkedIn, Instagram, Facebook, and Twitter. This suite establishes unified brand design kits with cohesive typographic scales, standardized color palettes, and repeatable layout templates.\n  3. Slow Creative Production Cycles: Solves the bottleneck of manual asset creation by combining Canva's rapid grid layout systems with generative AI workflows to produce multi-platform marketing collateral in hours rather than weeks.\n\n• Strategic Deliverables & Assets:\n  • High-retention LinkedIn and Instagram carousel slide decks engineered for thought-leadership virality.\n  • Full-resolution marketing flyers, promotional banner ads, and digital product launch creatives.\n  • Brand typography pairings, color palette matrices, and 300 DPI print-ready specifications.",
    image: "images/books/social-creatives-showcase.jpg",
    galleryImages: [
      "images/books/social-creatives-showcase.jpg"
    ],
    galleryCaptions: [
      "Showcase: Multi-Device Commercial Graphic Design & Marketing Kit Studio Showcase"
    ],
    technologies: ["Canva", "Advanced AI Tools", "Graphic Design", "Social Media Design", "Marketing Collateral", "Brand Identity", "Visual Advertising", "Typography"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 45,
    title: "M-RIK Consultancy Services - Corporate Brand Identity & Logo Design Suite",
    category: "Graphic Design",
    year: "2026",
    shortDescription: "International corporate brand identity and modern logo design suite created for M-RIK Consultancy Services Pvt Ltd. Solves corporate identity ambiguity and market credibility hurdles by engineering 5 strategic vector logo iterations built on Golden Ratio geometry and executive luxury stationery.",
    fullDescription: "• Project Overview:\n  A prestigious international-standard corporate brand identity and visual branding suite engineered for 'M-RIK Consultancy Services Pvt Ltd' by Hammad Hassan using Canva and cutting-edge generative AI design suites. The visual identity embodies corporate stability, high-stakes financial strategy, and exponential business escalation across five distinct strategic iterations.\n\n• Core Problems Solved & Value Delivered:\n  1. Lack of Executive Authority & Trust Deficits: Consulting firms handling high-ticket client portfolios fail when their visual marks look generic or amateur. This suite solves credibility barriers by deploying premium deep navy (#0a192f) and champagne gold (#d4af37) palettes, conveying institutional trust and high-end advisory status.\n  2. Scalability Failures Across Multi-Format Media: Logos often break down when scaled to tiny app favicons or blown up to giant corporate signage. Every mark in this suite was engineered with mathematical vector precision and Golden Ratio geometry, ensuring flawless rendering from business card foil debossing to billboard displays.\n  3. Brand Differentiation in Saturated Advisory Markets: Delivers 5 distinct conceptual directions (from interlocking monograms with financial growth bars to futuristic isometric 3D diamond emblems), giving stakeholders clear strategic choices aligned with their corporate roadmap.\n\n• Key Visual Deliverables & Strategic Iterations:\n  • Commercial 3D Studio Mockup: Travertine stone desk showcase featuring gold-embossed stationery, luxury business cards with gilded edges, and a freestanding 3D executive acrylic/brass plaque.\n  • Iteration 1: Interlocking MR Monogram with escalating financial growth bars and rising arrow arc.\n  • Iteration 2: Geometric Ribbon 'M' with ascending gold arrow and corporate positioning tagline.\n  • Iteration 3: Celestial Orbital Ring & Golden Pillars Monogram for institutional asset management.\n  • Iteration 4: Luxury 3D Beveled Metallic Gold & Titanium Silver Crest.\n  • Iteration 5: 3D Isometric Diamond Tech Emblem for fintech and digital transformation practices.",
    image: "images/books/mrik-logo-showcase.jpg",
    galleryImages: [
      "images/books/mrik-logo-showcase.jpg",
      "images/books/mrik-logo-growth-chart-arc.png",
      "images/books/mrik-logo-geometric-arrow-ribbon.png",
      "images/books/mrik-logo-orbital-pillar-crest.png",
      "images/books/mrik-logo-metallic-3d-bevel.jpg",
      "images/books/mrik-logo-isometric-diamond-arrow.png"
    ],
    galleryCaptions: [
      "Showcase: Executive Travertine Branding Studio Presentation",
      "Iteration 1: Interlocking Monogram with Growth Bars & Arrow Arc",
      "Iteration 2: Geometric Ribbon 'M' with Ascending Arrow & Tagline",
      "Iteration 3: Celestial Orbital Ring & Golden Pillars Monogram",
      "Iteration 4: Luxury 3D Beveled Metallic Gold & Titanium Silver Crest",
      "Iteration 5: 3D Isometric Diamond Tech Emblem with Arrow"
    ],
    technologies: ["Canva", "Advanced AI Tools", "Graphic Design", "Logo Design", "Brand Identity", "Vector Geometry", "Corporate Branding", "Typography"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 44,
    title: "Qurani Shakhsiyaat (قرآنی شخصیات) - Graphic Design Series",
    category: "Graphic Design",
    year: "2026",
    shortDescription: "Prophetic history and ancient civilizations graphic design series authored by Dr. Junaid Ahmed (Iqra Books). Solves the visual disconnect in classical historical literature by transforming sacred historical accounts into 5 museum-grade artworks featuring 3D embossed gold Nastaliq calligraphy and archaeological ruins.",
    fullDescription: "• Project Overview:\n  A masterclass prophetic history, divine jurisprudence, and ancient civilizations graphic design series titled 'Qurani Shakhsiyaat' (قرآنی شخصیات - Quranic Personalities: Instructive Stories of the Prophets and Ancient Nations), authored by Dr. Junaid Ahmed and published by Iqra Books. Expertly designed by Hammad Hassan using Canva and cutting-edge generative AI design suites, this series visualizes historical archaeological lessons across five museum-grade visual compositions.\n\n• Core Problems Solved & Value Delivered:\n  1. Visual Disconnect in Classical History Books: Traditional Islamic history texts are often presented with dry, plain covers that fail to capture the epic scale of ancient civilizations. This series transforms scriptural accounts of Thamud, Mada'in Saleh, and ancient Egypt into dramatic, cinematic compositions that captivate modern readers.\n  2. Commercial Packaging & Retail Visibility: To compete in modern international book markets, publications require striking shelf presence. Hammad engineered 3D embossed gold Nastaliq calligraphy with diacritics, luxury royal sapphire blue leather textures, and symbolic emblems (the Scales of Justice) that instantly signal premium editorial quality.\n  3. Amazon KDP & Print Fidelity Issues: Historical book illustrations frequently lose contrast when converted to physical print. All artworks were calibrated to 300 DPI high-definition preflight standards, guaranteeing razor-sharp print reproduction.\n\n• Strategic Visual Compositions:\n  • Showcase Mockup: Hardcover 3D studio presentation with physical proof prints and designer workstation.\n  • Design 1: Ancient Nations, Storm & Lightning Ruins (Thamud rock tombs and lightning strikes).\n  • Design 2: Ivory Minimalist Edition with illuminated Holy Quran on a hand-carved wooden rehal.\n  • Design 3: Midnight Navy & Luminescent Teal-Gold Mandala celebrating spiritual harmony.\n  • Design 4: Royal Sapphire Blue Leather with 3D embossed gold Nastaliq calligraphy and Mizan emblem.\n  • Design 5: Archaeological Pillars, Cracked Desert Earth & Divine Sunbeams.",
    image: "images/books/qurani-shakhsiyaat-showcase.jpg",
    galleryImages: [
      "images/books/qurani-shakhsiyaat-showcase.jpg",
      "images/books/qurani-shakhsiyaat-storm-ruins.png",
      "images/books/qurani-shakhsiyaat-ivory-rehal.jpg",
      "images/books/qurani-shakhsiyaat-teal-mandala.jpg",
      "images/books/qurani-shakhsiyaat-royal-sapphire.jpg",
      "images/books/qurani-shakhsiyaat-archaeological-sunbeams.jpg"
    ],
    galleryCaptions: [
      "Showcase: Hardcover 3D Commercial Studio Mockup",
      "Design 1: Ancient Nations, Storm & Lightning Ruins (Thamud & Mada'in Saleh)",
      "Design 2: Ivory Minimalist Edition (Illuminated Quran on Wooden Rehal)",
      "Design 3: Midnight Navy & Luminescent Teal-Gold Mandala",
      "Design 4: Royal Sapphire Leather & 3D Gold Embossed Mizan Calligraphy",
      "Design 5: Archaeological Pillars, Cracked Earth & Divine Sunbeams"
    ],
    technologies: ["Canva", "Advanced AI Tools", "Graphic Design", "Prophetic History", "Visual Compositing", "Urdu Nastaliq Calligraphy", "Ancient Civilizations", "Amazon KDP"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 43,
    title: "Qurani Maqamat (قرآنی مقامات) - Graphic Design Series",
    category: "Graphic Design",
    year: "2026",
    shortDescription: "Sacred Quranic geography and historical cartography graphic design series authored by Dr. Junaid Ahmed (Iqra Books). Solves geographic confusion in scriptural studies by delivering 5 rich visual compositions including antique illuminated cartography (tazhib) and panoramic sanctuary landscapes.",
    fullDescription: "• Project Overview:\n  A masterclass sacred geography, historical cartography, and Islamic civilization graphic design series titled 'Qurani Maqamat' (قرآنی مقامات - Sacred & Historical Quranic Sites), authored by Dr. Junaid Ahmed and published by Iqra Books. Expertly designed by Hammad Hassan using Canva and cutting-edge generative AI design suites, this series visualizes key prophetic journeys, sacred sanctuaries, historic battlegrounds, and Quranic parables across five museum-grade visual compositions.\n\n• Core Problems Solved & Value Delivered:\n  1. Geographic Confusion in Historical Scripture: Readers often struggle to mentally map the spatial distances between sacred sites (e.g. Ghar-e-Hira, Ghar-e-Thawr, Ghazwa-e-Badr, and Habasha). This series provides antique illuminated cartographic maps framed in gold arabesque tazhib borders that clearly chart these historic routes.\n  2. Atmospheric Emotional Resonance: Standard architectural photos fail to convey the spiritual aura of sacred geography. Hammad engineered cinematic panoramic landscapes featuring celestial sunbeams ('اللہ نور ہے') illuminating Makkah Al-Mukarramah and Madinah Al-Munawwarah.\n  3. Synthesis of Moral Parables with Physical Landscapes: Merges complex Quranic narratives (the Ruins of Saba, the scorched gardens, and historical encampments) into cohesive editorial composites for educational clarity.\n\n• Strategic Visual Compositions:\n  • Showcase Mockup: Hardcover 3D studio exhibition book with illuminated proofs and Pantone swatches.\n  • Design 1: Caves of Revelation & Holy Sanctuaries (Ghar-e-Hira & Thawr in rocky mountain foreground).\n  • Design 2: Radiant Sunset Panorama & Sacred Horizons with desert caravans and mountain ridges.\n  • Design 3: Aerial Daylight Architectural Perspective of Al-Masjid al-Haram and the Prophet's Mosque.\n  • Design 4: Comprehensive Parables Composite (Saba ruins, Palestine, Badr battlefields, and scorched fruit gardens).\n  • Design 5: Antique Illuminated Cartographic Map chronicling sacred Islamic routes with tazhib border art.",
    image: "images/books/qurani-maqamat-showcase.jpg",
    galleryImages: [
      "images/books/qurani-maqamat-showcase.jpg",
      "images/books/qurani-maqamat-caves-sanctuaries.jpg",
      "images/books/qurani-maqamat-sunset-horizon.jpg",
      "images/books/qurani-maqamat-sacred-sanctuaries.jpg",
      "images/books/qurani-maqamat-historic-composite.jpg",
      "images/books/qurani-maqamat-illuminated-map.jpg"
    ],
    galleryCaptions: [
      "Showcase: Hardcover 3D Commercial Studio Mockup",
      "Design 1: Caves of Revelation & Holy Sanctuaries (Ghar-e-Hira & Thawr)",
      "Design 2: Radiant Sunset Panorama & Sacred Desert Horizons",
      "Design 3: Aerial Daylight Architectural Perspective (Makkah & Madinah)",
      "Design 4: Historical Composite (Saba, Palestine, Badr & Quranic Parables)",
      "Design 5: Antique Illuminated Map (Tazhib Border & Battle Sites)"
    ],
    technologies: ["Canva", "Advanced AI Tools", "Graphic Design", "Sacred Cartography", "Visual Compositing", "Urdu Nastaliq Calligraphy", "Islamic Geography", "Amazon KDP"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 42,
    title: "Islamic Heritage, Science & Epistemology (فکر، تاریخ اور سائنس) - Graphic Design Series",
    category: "Graphic Design",
    year: "2026",
    shortDescription: "Multidisciplinary Islamic civilization and scientific epistemology graphic design series. Solves the artificial divide between scripture and science by creating 5 philosophical artworks bridging Quranic wisdom with Einstein's E=mc², cognitive neural networks, and cosmic planetary orbits.",
    fullDescription: "• Project Overview:\n  A visionary multidisciplinary graphic design series titled 'Islamic Heritage, Philosophy & Cosmology' (فکر، تاریخ، کائنات اور سائنس), crafted by Hammad Hassan using Canva and cutting-edge generative AI visual suites. The series bridges sacred scriptural wisdom with modern physics, cognitive neurology, and historical sociology across five distinct museum-grade artworks.\n\n• Core Problems Solved & Value Delivered:\n  1. The Perceived Dichotomy Between Religion and Science: Contemporary youth often perceive faith and empirical science as conflicting domains. This series visually harmonizes theological verses with cutting-edge physics—such as pairing Surah Al-Anfal 8:42 with Einstein's mass-energy formula (E=mc²) and contrasting atomic devastation against green nuclear energy.\n  2. Conceptual Abstraction in Intellectual Discourse: Abstract philosophical treatises on cognitive inquiry and sociology often fail to engage visual readers. Hammad designed graphic silhouettes of scholars with glowing neural network constellations and brain synapses illustrating Surah Al-Anbiya 21:7 ('Ask the People of Knowledge').\n  3. Commercial Book Packaging Prestige: Gives Islamic philosophical literature the aesthetic gravitas of premier academic presses like Oxford or Harvard University Press through 300 DPI preflight standards and gold-foil book layouts.\n\n• Strategic Visual Compositions:\n  • Showcase Mockup: Hardcover 3D studio presentation with physical proof cards on executive walnut desk.\n  • Design 1: Millat-e-Islamia Ka Urooj-o-Zawal (Civilization rise, Green Dome, and cavalry in golden dust).\n  • Design 2: Madinah Ki Kahani (Historic parchment artwork of Yathrib, camel caravans, and Prophet's Mosque).\n  • Design 3: Scientific Epistemology & E=mc² (Dual Earth hemispheres, nuclear technology, and Surah Al-Anfal 8:42).\n  • Design 4: Cognitive Science & Intellectual Inquiry (Glowing neural synapses and Surah Al-Anbiya 21:7).\n  • Design 5: Alamat-e-Quran (Cosmic spiral galaxy and solar system swirling from an illuminated Holy Quran).",
    image: "images/books/islamic-heritage-showcase.jpg",
    galleryImages: [
      "images/books/islamic-heritage-showcase.jpg",
      "images/books/islamic-heritage-millat-islamia.jpg",
      "images/books/islamic-heritage-madinah-kahani.jpg",
      "images/books/islamic-heritage-science-emc2.jpg",
      "images/books/islamic-heritage-cognitive-neural.jpg",
      "images/books/islamic-heritage-cosmic-galaxy.jpg"
    ],
    galleryCaptions: [
      "Showcase: Hardcover 3D Commercial Studio Mockup",
      "Design 1: Millat-e-Islamia Ka Urooj-o-Zawal (Civilization & Cavalry)",
      "Design 2: Madinah Ki Kahani (Historic Desert Settlement)",
      "Design 3: Scientific Epistemology & E=mc² (Surah Al-Anfal 8:42)",
      "Design 4: Cognitive Science & Intellectual Inquiry (Surah Al-Anbiya 21:7)",
      "Design 5: Alamat-e-Quran (Cosmic Spiral Galaxy & Solar System)"
    ],
    technologies: ["Canva", "Advanced AI Tools", "Graphic Design", "Scientific Epistemology", "Visual Compositing", "Urdu Nastaliq Calligraphy", "Cosmological Artwork", "Amazon KDP"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 41,
    title: "Quran Ki Roshni Mein Aqaid (قرآن کی روشنی میں عقائد) - Graphic Design Series",
    category: "Graphic Design",
    year: "2026",
    shortDescription: "Islamic theological publication and multi-concept graphic design series authored by Dr. Junaid Ahmed (Iqra Books). Solves abstract theological comprehension hurdles by creating 5 powerful visual artworks incorporating the judicial Scales of Justice (Mizan), court gavel, and ethical currency stewardship.",
    fullDescription: "• Project Overview:\n  A masterclass Islamic theology, ethics, and judicial philosophy graphic design series titled 'Quran Ki Roshni Mein Aqaid' (قرآن کی روشنی میں عقائد - Beliefs in the Light of the Quran), authored by Dr. Junaid Ahmed and published by Iqra Books. Meticulously designed using Canva, Adobe creative tools, and advanced generative AI design suites, this series demonstrates professional graphic design expertise through multiple artistic iterations, symbolic visual metaphors, and book packaging layouts.\n\n• Core Problems Solved & Value Delivered:\n  1. Abstract Theological Concepts Becoming Inaccessible: Theological doctrines like divine accountability, eschatology, and ethical economics can feel theoretical. This series anchors these principles in visceral, tangible symbols: the wooden judge's gavel, the balance scales of Mizan, open hands distributing gold coins, and the open Quran.\n  2. Audience Segmentation & Multi-Edition Publishing: Publishers often need multiple visual directions for trade paperbacks, collector hardcovers, and digital editions. Hammad engineered 5 distinct visual treatments ranging from noir judiciary to celestial sunrise dawn.\n  3. Precision Asset Preparation for Publishing Preflight: Illustrated professional graphic compositing workflows through transparent cutouts of antique balance scales and sound blocks, calibrated to Amazon KDP 300 DPI.\n\n• Strategic Visual Compositions:\n  • Showcase Mockup: Photorealistic 3D hardcover studio presentation with physical proof cards.\n  • Design 1: Kaaba & Prophetic Sanctuary Dawn Edition with radiant sunbeams and Mizan scales.\n  • Design 2: Noir Judiciary & Divine Economy Edition contrasting legal justice with open-handed charity.\n  • Design 3: Luminous Horizon & Spiritual Light Edition with radiant illumination emanating from the Holy Quran.\n  • Design 4: Regal Gold, Currency & Divine Law Edition featuring international currency stacks and embroidered prayer rugs.\n  • Design Asset: Precision transparent cutout of Judicial Mizan & Gavel illustrating master masking techniques.",
    image: "images/books/quran-aqaid-showcase.jpg",
    galleryImages: [
      "images/books/quran-aqaid-showcase.jpg",
      "images/books/quran-aqaid-design1.jpg",
      "images/books/quran-aqaid-design2.jpg",
      "images/books/quran-aqaid-design3.jpg",
      "images/books/quran-aqaid-design4.jpg",
      "images/books/quran-aqaid-asset-scales.jpg"
    ],
    galleryCaptions: [
      "Showcase: Hardcover 3D Commercial Studio Mockup",
      "Design 1: Kaaba & Prophetic Sanctuary Dawn Edition",
      "Design 2: Noir Judiciary, Gavel & Divine Charity",
      "Design 3: Luminous Horizon & Radiant Quran Edition",
      "Design 4: Regal Gold Mizan, Treasury & Janamaz",
      "Asset: Precision Compositing Scales & Gavel Element"
    ],
    technologies: ["Canva", "Advanced AI Tools", "Graphic Design", "Visual Compositing", "Urdu Nastaliq Calligraphy", "Brand Identity", "Book Cover Layout", "Amazon KDP"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 14,
    title: "Quran Aur Muashra (قرآن اور معاشرہ) - Graphic Design Series",
    category: "Graphic Design",
    year: "2026",
    shortDescription: "Islamic sociology publication and multi-concept graphic design series authored by Dr. Junaid Ahmed (Iqra Books). Solves societal disconnect in ethical literature by engineering 4 impactful visual compositions illustrating Halal vs. Haram, mutual civic welfare, and the liberation of human dignity.",
    fullDescription: "• Project Overview:\n  A premier Islamic sociology graphic design series titled 'Quran Aur Muashra' (قرآن اور معاشرہ - The Quran and Society), authored by Dr. Junaid Ahmed and published by Iqra Books. Crafted using Canva and advanced generative AI visual design tools, this series explores Quranic social ethics, civic welfare, justice, and moral guidance across four distinct artistic design presentations.\n\n• Core Problems Solved & Value Delivered:\n  1. Theoretical Disconnect in Social Ethics Literature: Books on societal ethics frequently struggle to demonstrate practical application in everyday life. Hammad solved this by illustrating immediate social actions: hand-to-hand bread sharing, community tree planting, mountaineers pulling comrades up cliffs, and breaking chains of oppression.\n  2. Visualizing Complex Moral Boundaries (Halal vs. Haram): Replaced walls of text with an intuitive 4-quadrant visual comparison contrasting wholesome nourishment (dates, clean water) against societal vices (broken alcohol bottles, gambling dice) and honoring family dignity.\n  3. Publisher Branding & Print Standardization: Standardized authentic Iqra Books publishing insignias and embossed Urdu Nastaliq calligraphy, preflighted to certified 300 DPI print-ready specifications.\n\n• Strategic Visual Compositions:\n  • Design 1: Hardcover Presentation 3D Studio Mockup featuring the symbolic triptych of knowledge, food security, and civic environmental care.\n  • Design 2: Social Welfare, Mutual Aid & Tree of Life celebrating multigenerational family stability.\n  • Design 3: Divine Justice, Freedom & Civil Society showing the golden Mizan above a flowing river with broken chains of bondage.\n  • Design 4: Halal vs. Haram, Modesty & The Sacred Law featuring 4-quadrant comparative ethics.",
    image: "images/books/quran-aur-muashra-mockup.jpg",
    galleryImages: [
      "images/books/quran-aur-muashra-mockup.jpg",
      "images/books/quran-aur-muashra-design1.jpg",
      "images/books/quran-aur-muashra-design2.jpg",
      "images/books/quran-aur-muashra-design3.jpg"
    ],
    galleryCaptions: [
      "Design 1: Hardcover Presentation 3D Studio Mockup",
      "Design 2: Social Welfare, Mutual Aid & Tree of Life",
      "Design 3: Divine Justice, Freedom & Civil Society",
      "Design 4: Halal vs Haram, Modesty & The Sacred Law"
    ],
    technologies: ["Canva", "Advanced AI Tools", "Graphic Design", "Urdu Nastaliq Calligraphy", "Visual Compositing", "Editorial Layout", "Amazon KDP", "Print-Ready Preflight"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 1,
    title: "Wellness Aura - Digital Health & Nutritional Guidance Web Application",
    category: "Web Applications",
    year: "2026",
    shortDescription: "Modern digital health and nutritional guidance web application developed by Hammad Hassan. Solves generic, conflicting diet advice and fitness confusion by delivering interactive metabolic calculators, dynamic health assessments, and automated personalized wellness blueprint delivery.",
    fullDescription: "• Project Overview:\n  A responsive digital health, nutrition, and wellness web application engineered by Hammad Hassan. Built with clean semantic HTML5, modern CSS3, and Vanilla JavaScript, Wellness Aura empowers users to take control of their physical well-being through scientific lifestyle tracking and automated personalized guidance.\n\n• Core Problems Solved & Value Delivered:\n  1. Conflicting Diet Fads & Lack of Personalization: Everyday individuals seeking healthier lifestyles are bombarded by contradictory diet fads online. Wellness Aura replaces confusion with structured clinical questionnaires assessing metabolic rate, dietary restrictions, and fitness goals to generate actionable wellness plans.\n  2. Manual Coaching Bottlenecks: Personal trainers and wellness consultants spend hours manually drafting client starter guides. The application integrates automated Make.com cloud webhooks that capture assessment submissions, compute caloric/macro requirements, and instantly email customized PDF wellness blueprints directly to the user.\n  3. Poor Mobile Usability in Health Apps: Features a lightweight, mobile-first design with smooth micro-interactions, dark/light visual comfort, and lightning-fast loading speeds on any mobile browser.\n\n• Key Technical Capabilities:\n  • Interactive BMI, BMR, and macronutrient distribution calculators.\n  • Multi-step dynamic dietary assessment questionnaire with real-time validation.\n  • Automated cloud webhook pipeline delivering custom wellness blueprints to client inboxes.",
    image: "images/ai-chatbots/wellness-aura.png",
    galleryImages: [
      "images/ai-chatbots/wellness-aura.png"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Web Application UI", "Make.com", "Health Tech"],
    liveUrl: "https://hammadforallworld.github.io/welness-aura-web/",
    githubUrl: "https://github.com/hammadforallworld/welness-aura-web",
    featured: true
  },
  {
    id: 2,
    title: "AI Medical Chatbot & Triage System",
    category: "AI & Chatbots",
    year: "2026",
    shortDescription: "Intelligent clinical inquiry and patient triage chatbot built with Botpress and n8n webhook pipelines. Solves clinical front-desk telephone bottlenecks and diagnostic delays by conducting 24/7 symptom assessments, red-flag emergency detection, and automated EHR routing.",
    fullDescription: "• Project Overview:\n  An enterprise conversational AI patient triage and intake system engineered with Botpress conversational flows and automated n8n webhook pipelines. Designed for outpatient clinics, diagnostic centers, and telehealth providers, this intelligent conversational agent operates 24/7 as an automated clinical intake specialist.\n\n• Core Problems Solved & Value Delivered:\n  1. Front-Desk Phone Congestion & Delayed Triage: Outpatient clinics lose critical staff hours answering basic repetitive inquiries (clinic hours, preparation for blood work, doctor availability). This bot handles 80%+ of routine inquiries instantaneously, freeing nurses and receptionists for acute in-person care.\n  2. Failure to Identify Life-Threatening Red Flags: Inquiries involving sudden chest pain, stroke symptoms, or severe anaphylaxis require immediate emergency routing. The chatbot incorporates deterministic clinical safety decision trees that immediately flag emergencies and direct patients to emergency services (911/ER) with zero delay.\n  3. Disjointed Clinical Data Entry: Eliminates handwritten intake clipboards. Patient symptoms, insurance carriers, and appointment requests are parsed into JSON payloads and securely synchronized into clinic databases and CRM spreadsheets via n8n.\n\n• Key Technical Capabilities:\n  • Botpress conversational flow architecture with NLP intent classification.\n  • Deterministic clinical red-flag triage protocols and automated specialist recommendations.\n  • n8n automated webhook pipelines connecting front-end chats to healthcare databases.",
    image: "images/ai-chatbots/medical-chatbot.svg",
    galleryImages: [
      "images/ai-chatbots/medical-chatbot.svg"
    ],
    technologies: ["Botpress", "n8n", "OpenAI API", "Webhooks", "JSON", "JavaScript"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 3,
    title: "Scientific Calculator Web Application",
    category: "Web Applications",
    year: "2026",
    shortDescription: "Precision-engineered responsive scientific calculator web application built with Vanilla JavaScript and mathematical algorithms. Solves ad-cluttered and slow calculation tools by providing instant trigonometric, logarithmic, exponential, and algebraic computations with full keyboard navigation.",
    fullDescription: "• Project Overview:\n  A modern, high-precision scientific calculator web application engineered by Hammad Hassan. Built with zero external frameworks using semantic HTML5, modern CSS3, and pure Vanilla JavaScript, the application delivers rapid mathematical computations for students, educators, and engineers directly in the browser.\n\n• Core Problems Solved & Value Delivered:\n  1. Invasive Ads & Clunky Mobile Calculators: Most free online calculators are filled with distracting popup ads, slow scripts, or require native app store downloads. This app loads in under 300ms, operates entirely client-side, and offers an ad-free, high-contrast dark UI optimized for focused academic work.\n  2. Precision Errors in Floating-Point Math: Standard JavaScript floating-point arithmetic frequently introduces rounding bugs (e.g. 0.1 + 0.2 = 0.30000000000000004). Hammad engineered custom precision parsing algorithms that ensure accurate multi-step scientific evaluations.\n  3. Accessibility & Keyboard Input Friction: Enables full physical keyboard support (Numpad, Enter, Backspace, shortcuts for sin/cos/log) alongside an intuitive, tactile touch keypad for mobile devices.\n\n• Key Technical Capabilities:\n  • Full trigonometric suite (sin, cos, tan, inverse trigonometry, radian/degree toggling).\n  • Logarithmic (log, ln), exponential (e^x, x^y), square roots, factorials, and parentheses nesting.\n  • Dynamic memory buffer registers (M+, M-, MR, MC) and real-time expression preview.",
    image: "images/websites/scientific-calculator.svg",
    galleryImages: [
      "images/websites/scientific-calculator.svg"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Math Algorithms", "Responsive Design"],
    liveUrl: "https://hammadforallworld.github.io/calculator-app/",
    githubUrl: "https://github.com/hammadforallworld/calculator-app",
    featured: true
  },
  {
    id: 4,
    title: "Auto Dealer Ecosystem & Vehicle CRM",
    category: "Mobile Applications",
    year: "2026",
    shortDescription: "Enterprise cross-platform automotive dealership ecosystem and vehicle CRM mobile app built with React Native. Solves lost showroom sales and chaotic paper appraisals by unifying vehicle trade lifecycles, real-time inventory tracking, and client deal pipelines into a mobile command center.",
    fullDescription: "• Project Overview:\n  A comprehensive, enterprise-grade automotive dealership ecosystem and vehicle CRM mobile application engineered with React Native. Designed for automotive dealerships, showroom sales teams, and independent vehicle brokers, this multi-module app streamlines operations across the entire vehicle trade lifecycle.\n\n• Core Problems Solved & Value Delivered:\n  1. Disconnected Sales & Showroom Lead Drop-Off: Up to 40% of prospective vehicle buyers walk out of dealerships without adequate follow-up due to lost paper inquiry sheets. This app equips sales representatives with instant mobile lead capture, vehicle preference matching, and automated follow-up reminders right on the showroom floor.\n  2. Inaccurate Trade-In Appraisals: Estimating trade-in vehicle values on scratchpads leads to pricing inconsistencies and dealership profit losses. The app features a structured appraisal module tracking VIN, mileage, cosmetic condition, mechanical health, and instant market comps.\n  3. Disorganized Inventory & Multi-Lot Management: Provides real-time synchronization across showroom lots, instantly reflecting vehicle availability, price adjustments, pending sales, and scheduled test drives.\n\n• Key Technical Capabilities:\n  • Executive KPI dashboard tracking monthly sales targets, active deals, and inventory turnaround times.\n  • Quick-add lead qualification forms with interactive vehicle selectors and test-drive calendar booking.\n  • Redux Toolkit state management ensuring lightning-fast offline-first data caching.",
    image: "images/mobile-apps/dealer-crm-mockup.jpg",
    galleryImages: [
      "images/mobile-apps/dealer-crm-mockup.jpg"
    ],
    technologies: ["React Native", "TypeScript", "Redux Toolkit", "REST APIs", "Node.js", "Vehicle CRM", "Mobile UI/UX"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 5,
    title: "PixelPerfect Weather App",
    category: "Mobile Applications",
    year: "2026",
    shortDescription: "Atmospheric cross-platform weather mobile application built with React Native. Solves ad-bloated weather forecasting and sluggish data updates by providing hyper-local meteorological telemetry, hourly precipitation curves, and multi-city tracking in a sleek glassmorphic UI.",
    fullDescription: "• Project Overview:\n  A high-precision, atmospheric cross-platform meteorological mobile application engineered with React Native and modern mobile UI architecture. Designed for daily commuters, travelers, and outdoor enthusiasts, PixelPerfect Weather transforms raw meteorological data into an intuitive, visually stunning mobile experience.\n\n• Core Problems Solved & Value Delivered:\n  1. Ad-Heavy, Cluttered Weather Forecasts: Mainstream mobile weather apps are inundated with auto-playing video ads, news feeds, and sponsored clickbait that make checking rain probabilities frustrating. PixelPerfect delivers a clean, focused, ad-free glassmorphic interface that puts critical weather telemetry front and center.\n  2. Inaccurate Micro-Climate Forecasting: Generalized city-wide forecasts often fail to warn users about localized downpours. The app integrates hyper-local API endpoints providing minute-by-minute precipitation forecasts, UV index exposure warnings, and 'feels-like' humidity calculations.\n  3. Multi-City Travel Confusion: Enables users to bookmark favorite global destinations and toggle instantly between home, vacation, and business locations with smooth gesture transitions.\n\n• Key Technical Capabilities:\n  • Real-time atmospheric metrics: barometric pressure, wind gusts, dew point, visibility, and UV index.\n  • Interactive hourly and 7-day temperature curves with dynamic 3D weather icons.\n  • Offline caching preserving the latest forecast data during underground or transit connectivity loss.",
    image: "images/mobile-apps/pixel-perfect-weather.jpg",
    galleryImages: [
      "images/mobile-apps/pixel-perfect-weather.jpg"
    ],
    technologies: ["React Native", "TypeScript", "Weather APIs", "Mobile UI/UX", "State Management", "Cross-Platform"],
    liveUrl: "",
    githubUrl: "https://github.com/hammadforallworld/pixel-perfect-weather",
    featured: true
  },
  {
    id: 6,
    title: "Healthcare Hub - Telehealth & Clinic App",
    category: "Mobile Applications",
    year: "2026",
    shortDescription: "All-in-one healthcare, clinic booking, and telehealth mobile ecosystem built with React Native. Solves fragmented patient care and long clinical wait times by unifying specialist doctor appointments, virtual telehealth visits, lab diagnostics, pharmacy access, and live vital tracking.",
    fullDescription: "• Project Overview:\n  A comprehensive cross-platform mobile healthcare and clinical management ecosystem engineered with React Native. Serving patients, clinics, and telehealth physicians, Healthcare Hub provides a frictionless digital medical gateway connecting patients with certified specialists across cardiology, neurology, pediatrics, dermatology, and orthopedics.\n\n• Core Problems Solved & Value Delivered:\n  1. Fragmented Patient Experience: Patients currently use separate platforms to find doctors, book diagnostic lab work, and refill prescriptions. Healthcare Hub consolidates the entire patient journey into a single unified mobile application.\n  2. Long Clinic Waiting Room Times: Unpredictable clinic queues cause immense patient frustration. The app introduces real-time doctor availability calendars, instant digital appointment booking, and in-app virtual video consultation rooms that eliminate physical waiting rooms.\n  3. Reactive vs. Proactive Healthcare Monitoring: Instead of waiting for health crises, the app equips patients with daily biometric vital sign tracking (heart rate, hydration, steps, sleep cycles) and direct emergency dispatch SOS buttons.\n\n• Key Technical Capabilities:\n  • Instant booking for in-person consultations, home diagnostic lab tests, and prescription deliveries.\n  • 24/7 one-touch emergency medical dispatch button with geo-location sharing.\n  • HIPAA-compliant patient profile architecture with secure medical record storage.",
    image: "images/mobile-apps/healthcare-hub-mockup.jpg",
    galleryImages: [
      "images/mobile-apps/healthcare-hub-mockup.jpg"
    ],
    technologies: ["React Native", "JavaScript", "Mobile CSS", "REST APIs", "Health Vitals", "Telehealth UI", "Cross-Platform"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 7,
    title: "CraveWave - Food Delivery & Ordering App",
    category: "Mobile Applications",
    year: "2026",
    shortDescription: "Gourmet on-demand food delivery and culinary discovery mobile app built with React Native and AI prompt engineering. Solves decision fatigue, unexpected dietary allergens, and opaque delivery estimates through an AI taste recommender, allergen filters, and live GPS courier tracking.",
    fullDescription: "• Project Overview:\n  An ultra-modern, high-conversion on-demand food delivery and culinary discovery mobile application built with React Native, accelerated using modern AI Vibe Coding methodologies. Engineered for food lovers and partner restaurants, CraveWave delivers an intuitive, mouthwatering mobile ordering experience.\n\n• Core Problems Solved & Value Delivered:\n  1. Decision Fatigue & Overwhelming Menus: Hungry users spend an average of 15–20 minutes browsing endless uncurated food lists before abandoning their cart. CraveWave features an intelligent AI taste recommender that suggests dishes based on time of day, past favorites, and dietary preferences.\n  2. Opaque Delivery Times & Cold Food Frustration: Customers hate not knowing where their food is. The app incorporates real-time GPS courier telemetry with WebSocket updates, providing precise turn-by-turn tracking and dynamic ETA countdowns.\n  3. Dietary Allergies & Customization Friction: Enables customers to customize dishes with a single tap (portion size, spice level, ingredient omissions) with automatic allergen warnings protecting health-sensitive diners.\n\n• Key Technical Capabilities:\n  • Interactive restaurant showcase with high-resolution imagery, dish ratings, and chef specials.\n  • End-to-end order lifecycle tracking from kitchen preparation to doorstep drop-off.\n  • Rapid AI prompt-engineered component architecture delivering smooth 60 FPS mobile navigation.",
    image: "images/mobile-apps/food-delivery-mockup.jpg",
    galleryImages: [
      "images/mobile-apps/food-delivery-mockup.jpg"
    ],
    technologies: ["React Native", "Vibe Coding", "Prompt Engineering", "TypeScript", "Node.js", "Geolocation APIs", "Mobile UI/UX"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 8,
    title: "DrivePulse - Smart Mobility & Ride-Hailing App",
    category: "Mobile Applications",
    year: "2026",
    shortDescription: "Next-generation urban mobility and turn-by-turn ride-hailing application built with React Native. Solves opaque surge pricing, long driver dispatch delays, and passenger safety concerns with algorithmic ride matching, upfront fare transparency, live vehicle telematics, and in-app SOS safety.",
    fullDescription: "• Project Overview:\n  A high-performance urban ride-hailing and turn-by-turn mobility application engineered with React Native, accelerated through modern AI Vibe Coding workflows. Designed for urban commuters and professional drivers, DrivePulse delivers an ultra-fast, safe, and transparent transportation network.\n\n• Core Problems Solved & Value Delivered:\n  1. Opaque Surge Pricing & Fare Anxiety: Riders frequently experience sudden fare doubling right at checkout. DrivePulse guarantees transparent upfront pricing calculated on distance and traffic conditions before the ride is confirmed, eliminating checkout shock.\n  2. Inefficient Driver Dispatch & Extended Wait Times: Deploys algorithmic spatial dispatch matching that connects riders to the closest available driver, reducing urban pickup times by up to 35%.\n  3. Passenger & Driver Safety Concerns: Provides a comprehensive safety cockpit including live trip sharing with trusted contacts, verified driver credentials, vehicle license plate verification, and a one-touch emergency SOS button.\n\n• Key Technical Capabilities:\n  • Real-time WebSocket vehicle telematics showing live car movement on vector Mapbox maps.\n  • Multi-tier ride categories: Eco Commuter, Comfort Sedan, and Premium Executive SUV.\n  • Seamless driver dashboard with route optimization, earnings analytics, and instant cashout.",
    image: "images/mobile-apps/driving-app-mockup.jpg",
    galleryImages: [
      "images/mobile-apps/driving-app-mockup.jpg"
    ],
    technologies: ["React Native", "Vibe Coding", "Prompt Engineering", "Mapbox SDK", "WebSockets", "Geolocation", "State Management", "Mobile UI/UX"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 9,
    title: "Easy Quran Reading - Book Gallery & Curriculum Design",
    category: "Book Design",
    year: "2026",
    shortDescription: "Accelerated Quranic Arabic comprehension curriculum and book publication. Solves steep classical language learning curves by utilizing a scientific pedagogy of 500 selected passages where 75% of vocabulary words are repetitive, enabling rapid reading and comprehension.",
    fullDescription: "• Project Overview:\n  A comprehensive educational publishing project and accelerated linguistic curriculum titled 'Easy Quran Reading'. Authored, designed, and typeset by Hammad Hassan, this publication revolutionizes how non-Arabic speakers learn to read and comprehend the Holy Quran through a scientifically formulated repetitive frequency methodology.\n\n• Core Problems Solved & Value Delivered:\n  1. The Steep Classical Arabic Learning Curve: Conventional Arabic curricula overwhelm beginners with hundreds of abstract grammar rules before they read scripture. This book solves learner attrition by selecting 500 core passages where 75% of vocabulary words recur continuously, unlocking rapid reading confidence in weeks.\n  2. Visual Reading Fatigue & Eye Strain: Beginner readers struggle with cramped Arabic typesetting. Hammad engineered large-scale classical Uthmani calligraphy with generous letter tracking, distinct vowel diacritics (harakat), and color-coded root highlights.\n  3. Self-Study Limitations: Integrates parallel bilingual glossaries, vocabulary frequency indexes, and decorative arabesque page borders, preflighted to Amazon KDP 300 DPI print-ready specifications.\n\n• Publishing & Typesetting Highlights:\n  • Precision interior typography created using Canva and Microsoft Word Master Document architecture.\n  • High-frequency vocabulary concordance tables mapping recurring word roots across all 30 Paras.\n  • Certified Amazon KDP print-ready preflight ensuring crisp ink density on fine cream book stock.",
    image: "images/books/easy-quran-reading-mockup.jpg",
    galleryImages: [
      "images/books/easy-quran-reading-mockup.jpg",
      "images/books/easy-quran-reading-cover.png",
      "images/books/book-interior-layout.svg"
    ],
    technologies: ["Canva", "MS Word", "Content Writing", "Book Typesetting", "Arabic Typography", "Curriculum Design", "Amazon KDP", "Editorial Design"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 10,
    title: "90 Quranic Duas - Editorial Book & Cover Design",
    category: "Book Design",
    year: "2026",
    shortDescription: "Curated Islamic devotional publication and luxury book design authored by Dr. Maaz Aslam. Solves emotional disconnection during prayer by providing 90 verified Quranic supplications categorized by spiritual need, paired with word-for-word English translations and gold-embossed cover art.",
    fullDescription: "• Project Overview:\n  A premium devotional book publication titled '90 Quranic Duas', written by Dr. Maaz Aslam and designed by Hammad Hassan. Created for spiritual reflection and accessible daily recitation, the book compiles 90 meticulously verified supplications directly from the Holy Quran into a pocket-sized luxury volume.\n\n• Core Problems Solved & Value Delivered:\n  1. Emotional Disconnection in Recitation: Many Muslims memorize Arabic prayers phonetically without grasping their profound linguistic nuances. This book bridges the meaning gap by pairing classical Arabic calligraphy with full vowel marks, clear modern English translations, and contextual explanations.\n  2. Difficulty Finding Situation-Specific Prayers: In moments of anxiety, grief, gratitude, or seeking guidance, readers need immediate spiritual solace. Supplications are organized into clear thematic chapters (Duas for Healing, Family, Forgiveness, Anxiety, and Sustenance).\n  3. Retail Appeal in Modern Islamic Publishing: Features an opulent emerald-green hardcover with 3D embossed metallic gold foil calligraphy, designed to stand out on Amazon KDP and international bookstore displays.\n\n• Publishing & Typesetting Highlights:\n  • Classical Arabic Uthmani typography with comprehensive diacritical marks (harakat) for accurate recitation.\n  • Bilingual running translations and scholarly scriptural citations referencing Surah and Ayat numbers.\n  • Amazon KDP 300 DPI print-ready preflight calibrated for luxury hardcover and paperback binding.",
    image: "images/books/quranic-duas-mockup.jpg",
    galleryImages: [
      "images/books/quranic-duas-mockup.jpg",
      "images/books/quranic-duas-cover.png",
      "images/books/book-interior-layout.svg"
    ],
    technologies: ["Canva", "MS Word", "Book Cover Design", "Arabic Calligraphy", "Content Writing", "Book Typesetting", "Amazon KDP", "Editorial Design"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 11,
    title: "Let's Understand The Quran - Linguistic Curriculum & Book Design",
    category: "Book Design",
    year: "2026",
    shortDescription: "Scientific Quranic vocabulary curriculum focusing on 1,500 core words forming 75% of the Holy Quran. Solves the barrier of Quranic comprehension by mapping high-frequency vocabulary and 500+ repeated sentences with bilingual layout and Amazon KDP preflight.",
    fullDescription: "• Project Overview:\n  A high-impact educational publishing project titled 'Let's Understand The Quran', engineered by Hammad Hassan. Based on computational corpus linguistics, this book guides students through the 1,500 most frequent Quranic vocabulary words that constitute 75% of the scripture's total word count, reinforced by over 500 repeated Quranic sentences.\n\n• Core Problems Solved & Value Delivered:\n  1. Cognitive Overload for Adult Learners: Traditional madrasah methods require years of memorizing archaic grammatical tables. This curriculum isolates the highest-yield statistical vocabulary, enabling students to understand three out of every four words they hear during daily congregational prayers.\n  2. Isolated Vocabulary Rote Memorization: Memorizing isolated word lists fails without sentence context. Hammad formatted dual-tiered tables where each vocabulary root is immediately demonstrated inside authentic repeated Quranic sentence structures.\n  3. Publication Aesthetics & Global Distribution: Designed with ornate Islamic geometric arches, bilingual English/Urdu concordances, and verified 300 DPI preflight for seamless global KDP publishing.\n\n• Publishing & Typesetting Highlights:\n  • Systematic root-word frequency breakdown tables with exact scriptural recurrence tallies.\n  • Classical Arabic Uthmani typography with full vowel marks aligned beside English and Urdu translations.\n  • Formatted to Amazon KDP 300 DPI print-ready specifications.",
    image: "images/books/understand-quran-mockup.jpg",
    galleryImages: [
      "images/books/understand-quran-mockup.jpg",
      "images/books/understand-quran-cover.png",
      "images/books/book-interior-layout.svg"
    ],
    technologies: ["Canva", "MS Word", "Book Cover Design", "Curriculum Design", "Arabic Typography", "Content Writing", "Amazon KDP", "Editorial Design"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 12,
    title: "600 Quranic Words in English & Urdu - Trilingual Publication",
    category: "Book Design",
    year: "2026",
    shortDescription: "High-frequency trilingual Quranic curriculum teaching 600 essential vocabulary words accounting for 20,000 occurrences (25% of Quran). Solves multilingual language barriers by synchronizing Arabic, Urdu Nastaliq, and English in a single comparative layout.",
    fullDescription: "• Project Overview:\n  A specialized educational publication and trilingual vocabulary curriculum titled '600 Quranic Words in English & Urdu' (600 قرآنی الفاظ جو تقریباً 20 ہزار دفعہ قرآن میں آتے ہیں). Designed and formatted by Hammad Hassan, this book accelerates scriptural literacy by focusing on the 600 most critical vocabulary words that make up one-fourth of the entire Quranic text.\n\n• Core Problems Solved & Value Delivered:\n  1. Language Barriers in Diaspora Families: Immigrant and diaspora families often experience a linguistic divide where older generations read Urdu while children are fluent in English. This curriculum synchronizes Arabic text, Urdu Nastaliq script, and English translations in side-by-side columns, fostering shared family learning.\n  2. Inefficient Rote Memorization: By focusing strictly on words that appear 20,000 times across the Quran, students achieve rapid functional fluency without wasting months on rare vocabulary.\n  3. Complex Multi-Script Typesetting: Typesetting three distinct scripts (RTL Arabic Naskh, RTL Urdu Nastaliq, and LTR English Latin) on a single page is notoriously difficult. Hammad engineered a balanced grid layout with emerald-and-gold geometric borders that maintains typographic harmony.\n\n• Publishing & Typesetting Highlights:\n  • 3-tier comparative layout: Arabic with harakat, Urdu Nastaliq calligraphy, and modern English.\n  • Frequency rank counters and thematic groupings (Divine Attributes, Prophets, Day of Judgment, Nature).\n  • Amazon KDP 300 DPI preflight ensuring crisp print edges across all three type systems.",
    image: "images/books/quranic-words-trilingual-mockup.jpg",
    galleryImages: [
      "images/books/quranic-words-trilingual-mockup.jpg",
      "images/books/quranic-words-trilingual-cover.jpg",
      "images/books/book-interior-layout.svg"
    ],
    technologies: ["Canva", "MS Word", "Book Cover Design", "Trilingual Typesetting", "Urdu Nastaliq", "Arabic Typography", "Amazon KDP", "Editorial Design"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 13,
    title: "Madinah Ki Kahani (مدینہ کی کہانی) - Historical Narrative & Book Design",
    category: "Book Design",
    year: "2026",
    shortDescription: "Historical narrative publication chronicling ancient Madinah, the Hijrah, and the Prophet's Mosque, authored by Abdullah Muhammad (Iqra Books). Solves engagement barriers in Islamic history through evocative biographical storytelling, territory maps, and elegant Urdu Nastaliq typography.",
    fullDescription: "• Project Overview:\n  A comprehensive Islamic history book and biographical literary publication titled 'Madinah Ki Kahani' (مدینہ کی کہانی - The Story of Madinah), authored by Abdullah Muhammad and published by Iqra Books. Expertly formatted by Hammad Hassan, the volume chronicles the transformative journey of Yathrib into Al-Madinah Al-Munawwarah.\n\n• Core Problems Solved & Value Delivered:\n  1. Dry, Fact-Heavy Historical Compilations: Islamic history is often taught through dense academic lists of dates and battles that fail to inspire younger readers. This book dramatizes the emotional reality of the early Muslims—from the solemn oath of Aqabah and the historic Hijrah migration to the establishment of the Brotherhood of Mawakhat.\n  2. Spatial Confusion of Ancient Topography: Includes historically researched territory maps showing the layout of early Madinah, tribal settlements, trade caravan roads, and the original architectural foundations of Al-Masjid an-Nabawi.\n  3. Preservation of Classical Urdu Nastaliq Calligraphy: Delivered with authentic Nastaliq typesetting, illuminated chapter openers, and warm desert oil-painting cover art preflighted to Amazon KDP 300 DPI standards.\n\n• Publishing & Typesetting Highlights:\n  • Rich narrative prose typeset in clear, flowing Urdu Nastaliq with illuminated chapter borders.\n  • Historical territory diagrams and desert caravan route illustrations.\n  • Certified Amazon KDP 300 DPI preflight for worldwide trade paperback distribution.",
    image: "images/books/madinah-ki-kahani-mockup.jpg",
    galleryImages: [
      "images/books/madinah-ki-kahani-mockup.jpg",
      "images/books/madinah-ki-kahani-cover.png",
      "images/books/book-interior-layout.svg"
    ],
    technologies: ["Canva", "MS Word", "Urdu Nastaliq", "Book Cover Design", "Historical Writing", "Book Typesetting", "Amazon KDP", "Editorial Design"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 15,
    title: "Alamat-e-Quran (علامات قرآن) - Signs in the Quran",
    category: "Book Design",
    year: "2026",
    shortDescription: "Cosmological and scientific exploration of Quranic signs authored by Junaid Ahmed (Iqra Book). Solves skepticism and scientific estrangement among modern readers by connecting Quranic verses with celestial orbits, planetary order, and natural phenomena through illuminated typography and diagrams.",
    fullDescription: "• Project Overview:\n  A profound cosmological publication titled 'Alamat-e-Quran' (علامات قرآن - Signs in the Quran), authored by Junaid Ahmed and published by Iqra Book. Designed and typeset by Hammad Hassan, this book explores the cosmic wonders, planetary balance, and natural phenomena referenced across the Holy Quran.\n\n• Core Problems Solved & Value Delivered:\n  1. The Perceived Gap Between Scripture and Natural Sciences: Modern readers educated in modern physics and astronomy often struggle to connect scriptural verses with empirical cosmology. This book presents Quranic reflections on planetary orbits, stellar lifecycles, and atmospheric layers alongside scientific diagrams.\n  2. Visualizing Complex Celestial Geometry: Abstract cosmological reflections are made accessible through bespoke diagrams illustrating planetary orbits and celestial wonders emerging from the illuminated pages of the Holy Quran.\n  3. Publisher Standard Compliance: Typeset in pristine Urdu Nastaliq with vocalized Arabic Quranic script citations, preflighted to Amazon KDP 300 DPI standards for international publishing.\n\n• Publishing & Typesetting Highlights:\n  • Multi-column reflective commentary integrating Arabic verses with Urdu Nastaliq exposition.\n  • Astronomical diagrams, cosmic orbital sketches, and illuminated section dividers.\n  • Full Amazon KDP 300 DPI preflight calibration.",
    image: "images/books/alamat-e-quran-mockup.jpg",
    galleryImages: [
      "images/books/alamat-e-quran-mockup.jpg",
      "images/books/alamat-e-quran-cover.png",
      "images/books/book-interior-layout.svg"
    ],
    technologies: ["Canva", "MS Word", "Urdu Nastaliq", "Book Cover Design", "Cosmological Writing", "Book Typesetting", "Amazon KDP", "Editorial Design"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 16,
    title: "Qurani Shakhsiyaat (قرآنی شخصیات) - Stories of Prophets & Ancient Nations",
    category: "Book Design",
    year: "2026",
    shortDescription: "Authoritative historical and moral exploration of Quranic personalities and ancient nations by Dr. Junaid Ahmed (Iqra Books). Solves disconnected historical learning by providing a unified chronological narrative of prophetic trials, archaeological insights (Aad, Thamud), and gold-embossed book design.",
    fullDescription: "• Project Overview:\n  An evocative historical and theological work titled 'Qurani Shakhsiyaat' (قرآنی شخصیات - Quranic Personalities: Stories of the Prophets and Ancient Nations), authored by Dr. Junaid Ahmed and published by Iqra Books. The publication examines prophetic missions, divine justice, and moral parables preserved in the Holy Quran.\n\n• Core Problems Solved & Value Delivered:\n  1. Disjointed Historical Accounts: In the Quran, stories of the Prophets are revealed across various Surahs according to spiritual context. This volume synthesizes these scattered accounts into a coherent, chronological narrative for students and general readers.\n  2. Lack of Archaeological Context: Anchors ancient nations (such as Aad, Thamud, and Mada'in Saleh) in real-world geography and historical timelines, showing how archaeological findings confirm scriptural narratives.\n  3. Professional Packaging for Global Bookstores: Designed with 3D embossed gold cover calligraphy, durable interior margins, and 300 DPI Amazon KDP preflight.\n\n• Publishing & Typesetting Highlights:\n  • Structured biographical chapters complete with contextual Quranic citations and moral takeaways.\n  • Pristine Urdu Nastaliq typography with vocalized Arabic names and historical markers.\n  • Certified Amazon KDP 300 DPI preflight specifications.",
    image: "images/books/qurani-shakhsiyaat-mockup.jpg",
    galleryImages: [
      "images/books/qurani-shakhsiyaat-mockup.jpg",
      "images/books/qurani-shakhsiyaat-cover.png",
      "images/books/book-interior-layout.svg"
    ],
    technologies: ["Canva", "MS Word", "Urdu Nastaliq", "Book Cover Design", "Historical Writing", "Book Typesetting", "Amazon KDP", "Editorial Design"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 17,
    title: "Aqaid Aur Quran (عقائد اور قرآن) - Creed and the Quran",
    category: "Book Design",
    year: "2026",
    shortDescription: "Comprehensive Islamic theological treatise examining core creed (Aqeedah) in light of the Quran and Sunnah, authored by Dr. Junaid Ahmed. Solves theological ambiguity and sectarian confusion by elucidating Tawheed, Prophecy, and Eschatology with pristine Nastaliq calligraphy and bilingual indices.",
    fullDescription: "• Project Overview:\n  A comprehensive theological publication titled 'Aqaid Aur Quran' (عقائد اور قرآن - Creed and the Quran / قرآن وسنت کی روشنی میں اہم اسلامی عقائد), authored by Dr. Junaid Ahmed. Formatted and packaged by Hammad Hassan, this book elucidates fundamental Islamic doctrinal pillars with scholarly rigor.\n\n• Core Problems Solved & Value Delivered:\n  1. Theological Ambiguity & Misunderstandings: In an age of information overload, layman readers often encounter contradictory theological explanations. This treatise directly resolves ambiguity by anchoring every fundamental creed—Tawheed, Prophecy, Angels, Divine Books, and the Day of Judgment—in unambiguous Quranic text and authentic Sunnah.\n  2. Dense Scholarly Jargon: Converts complex classical theological debates (Kalam) into accessible, structured pedagogical lessons for contemporary readers.\n  3. Academic Reference Utility: Features bilingual indices, cross-referenced footnotes, and an illuminated sanctuary arch layout prepared to Amazon KDP 300 DPI preflight standards.\n\n• Publishing & Typesetting Highlights:\n  • Pristine Urdu Nastaliq interior narrative paired with Arabic Quranic ayat citations.\n  • Thematic color-coded headings and structured doctrinal summary cards.\n  • Certified Amazon KDP 300 DPI print-ready specifications.",
    image: "images/books/aqaid-aur-quran-mockup.jpg",
    galleryImages: [
      "images/books/aqaid-aur-quran-mockup.jpg",
      "images/books/aqaid-aur-quran-cover.png",
      "images/books/book-interior-layout.svg"
    ],
    technologies: ["Canva", "MS Word", "Urdu Nastaliq", "Book Cover Design", "Theological Writing", "Book Typesetting", "Amazon KDP", "Editorial Design"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 18,
    title: "Quran Aur Anbiya-e-Kiram (قرآن اور انبیائے کرام) - The Quran and the Noble Prophets",
    category: "Book Design",
    year: "2026",
    shortDescription: "Monumental prophetic history publication chronicling the spiritual journeys and trials of the Quranic Prophets, authored by Dr. Junaid Ahmed (Iqra Books). Solves fragmented biographical learning through chronological narrative pacing, calligraphic chapter openers, and Amazon KDP preflight.",
    fullDescription: "• Project Overview:\n  A monumental prophetic history publication titled 'Quran Aur Anbiya-e-Kiram' (قرآن اور انبیائے کرام - The Quran and the Noble Prophets), authored by Dr. Junaid Ahmed and published by Iqra Books. Expertly typeset and designed by Hammad Hassan, the volume narrates the sacred biographies, spiritual trials, and triumphs of the Messengers of God.\n\n• Core Problems Solved & Value Delivered:\n  1. Fragmented Prophetic Chronology: Traditional texts often isolate prophetic stories without illustrating the overarching lineage of monotheism. This book provides a continuous timeline connecting Prophet Adam, the Ark of Prophet Nuh, the devotion of Prophet Ibrahim, the wisdom of Prophet Yusuf, and the finality of Prophet Muhammad ﷺ.\n  2. Lack of Emotional Connection for Readers: Uses vivid narrative descriptions and poignant reflections that help readers draw practical life lessons of patience (Sabr) and trust in God (Tawakkul).\n  3. Publication Standardization: Features authentic Iqra Books branding, classical Arabic calligraphy chapter titles, and 300 DPI Amazon KDP preflight.\n\n• Publishing & Typesetting Highlights:\n  • Structured chronological chapters with illuminated calligraphic headers.\n  • Historical annotations and scriptural verse citations with diacritics.\n  • Certified Amazon KDP 300 DPI print-ready preflight.",
    image: "images/books/quran-aur-anbiya-mockup.jpg",
    galleryImages: [
      "images/books/quran-aur-anbiya-mockup.jpg",
      "images/books/quran-aur-anbiya-cover.png",
      "images/books/book-interior-layout.svg"
    ],
    technologies: ["Canva", "MS Word", "Urdu Nastaliq", "Book Cover Design", "Prophetic History", "Book Typesetting", "Amazon KDP", "Editorial Design"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 19,
    title: "ABC Joy Book - Early Reading & Phonics Adventure",
    category: "Book Design",
    year: "2026",
    shortDescription: "Vibrant early childhood alphabet and phonics picture book authored by Hammad Hassan. Solves early reading reluctance and phonetic confusion by pairing dyslexia-friendly letterforms with colorful characters, phonetic associations, and motor tracing guides.",
    fullDescription: "• Project Overview:\n  An enchanting early childhood picture book titled 'ABC Joy Book: Early Reading Adventure', written, illustrated, and formatted by Hammad Hassan. Designed for toddlers, preschoolers, and early kindergarteners, this book introduces the alphabet through high-energy animal characters, phonics associations, and cheerful outdoor adventures.\n\n• Core Problems Solved & Value Delivered:\n  1. Reading Anxiety in Early Learners: Preschoolers often feel overwhelmed when confronted with small, intimidating blocks of standard book typography. This book incorporates large, dyslexia-friendly rounded letterforms, generous letter tracking, and playful visual anchors that build reading confidence.\n  2. Disconnected Letter-Sound Association: Many alphabet books show abstract words unrelated to child phonetics. ABC Joy Book reinforces letter-sound recognition through relatable, everyday phonetic objects and characters.\n  3. Active Motor Skill Development: Integrates directional dotted tracing lines directly on the page, encouraging tactile pencil grip practice alongside visual reading.\n\n• Publishing & Typesetting Highlights:\n  • Full-bleed, vibrant high-contrast illustrations created with Canva and Adobe design tools.\n  • Dyslexia-conscious typography hierarchy optimized for parent-child shared reading sessions.\n  • Certified Amazon KDP 300 DPI print-ready preflight ensuring vivid color reproduction.",
    image: "images/books/abc-joy-book-mockup.jpg",
    galleryImages: [
      "images/books/abc-joy-book-mockup.jpg",
      "images/books/abc-joy-book-cover.png",
      "images/books/book-interior-layout.svg"
    ],
    technologies: ["Canva", "MS Word", "Children's Book Design", "Illustration Layout", "Early Childhood Phonics", "Book Typesetting", "Amazon KDP", "Editorial Design"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 20,
    title: "Kids Joy Activity Book - Fun Puzzles, Games & Coloring",
    category: "Book Design",
    year: "2026",
    shortDescription: "Interactive multi-skill children's developmental activity workbook created by Hammad Hassan. Solves excessive preschool screen addiction and fine-motor delays through structured animal mazes, number tracing, shape matching, and creative coloring.",
    fullDescription: "• Project Overview:\n  A dynamic and engaging children's developmental workbook titled 'Kids Joy Activity Book: Fun Puzzles, Games & Learning', authored and published by Hammad Hassan. Built to stimulate early cognitive development, spatial reasoning, and preschool problem-solving skills through a structured sequence of progressive brain teasers.\n\n• Core Problems Solved & Value Delivered:\n  1. Excessive Screen Time & Passive Entertainment: Toddlers and young children frequently spend hours passively staring at smartphone and tablet screens. This activity book provides an engaging physical, screen-free alternative that stimulates active tactile problem-solving.\n  2. Delayed Fine-Motor & Pencil Coordination: Many preschoolers enter kindergarten struggling to hold a pencil. The workbook guides children through progressive dot-to-dot connections, 123 number tracing paths, and precision maze navigation to strengthen motor coordination.\n  3. Frustration from Mismatched Difficulty Curves: Carefully structured from simple beginner animal tracing to multi-path cognitive mazes, ensuring kids experience continuous positive reinforcement.\n\n• Publishing & Typesetting Highlights:\n  • High-contrast vector linework optimized for crisp Amazon KDP black-and-white and color interior printing.\n  • Large 8.5 x 11 inch format providing ample room for young hands to draw and color.\n  • Certified 300 DPI print preflight eliminating pixelation and ink bleed-through.",
    image: "images/books/kids-activity-book-mockup.jpg",
    galleryImages: [
      "images/books/kids-activity-book-mockup.jpg",
      "images/books/kids-activity-book-cover.png",
      "images/books/book-interior-layout.svg"
    ],
    technologies: ["Canva", "MS Word", "Activity Book Design", "Workbook Typesetting", "Preschool STEM", "Illustration Layout", "Amazon KDP", "Editorial Design"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 21,
    title: "Animals of the World - A Joyful Animal Adventure for Kids",
    category: "Book Design",
    year: "2026",
    shortDescription: "Illustrated children's wildlife encyclopedia created by Hammad Hassan. Solves dense, text-heavy nature book fatigue by taking young explorers on an engaging journey through the Savanna, Rainforest, and Ocean realms with phonetic guides, trivia, and search-and-find quizzes.",
    fullDescription: "• Project Overview:\n  A beautifully illustrated children's animal encyclopedia and visual storybook titled 'Animals of the World: A Joyful Animal Adventure for Kids', written and authored by Hammad Hassan. Designed for toddlers, preschoolers, and early elementary learners, this book introduces the animal kingdom across three rich biomes: the African Savanna, the Tropical Rainforest, and the Polar & Ocean realms.\n\n• Core Problems Solved & Value Delivered:\n  1. Information Overload in Traditional Encyclopedias: Standard animal books are filled with walls of dry scientific text that bore young readers. Hammad solved this by distilling critical animal facts into colorful 'Did You Know?' badges, funny behavioral tidbits, and interactive search-and-find challenges.\n  2. Complex Wildlife Pronunciation: Young readers often struggle to pronounce exotic animal names (e.g., Meerkat, Chimpanzee, Chameleon). Each entry incorporates phonetic pronunciation badges that build vocabulary confidence.\n  3. Passive Reading Disengagement: Encourages interactive parent-child dialogue with spot-the-creature mini quizzes integrated directly into every double-page spread.\n\n• Publishing & Typesetting Highlights:\n  • Rich full-bleed panoramic ecosystem spreads formatted using Canva and Microsoft Word.\n  • Calibrated color palettes capturing the authentic natural lighting of savannas, jungles, and coral reefs.\n  • Certified Amazon KDP 300 DPI full-bleed print-ready preflight.",
    image: "images/books/animals-book-mockup.jpg",
    galleryImages: [
      "images/books/animals-book-mockup.jpg",
      "images/books/animals-book-page1.jpg",
      "images/books/animals-book-page2.jpg",
      "images/books/animals-book-page3.jpg"
    ],
    technologies: ["Canva", "MS Word", "Children's Book Design", "Wildlife Illustration", "Animal Encyclopedia", "Workbook Typesetting", "Amazon KDP", "Editorial Design"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 22,
    title: "Apex Chauffeur - Premium Executive Fleet & Ground Transportation Web Application",
    category: "Web Applications",
    year: "2026",
    shortDescription: "International luxury chauffeur and executive transportation web platform engineered with Vanilla JavaScript. Solves rideshare uncertainty, surge pricing spikes, and corporate expense chaos through guaranteed 24/7 flight tracking, flat-rate pricing tiers, and an enterprise B2B billing portal.",
    fullDescription: "• Project Overview:\n  A premier, international-standard luxury ground transportation web application developed by Hammad Hassan. Built with modern web standards (semantic HTML5, modern CSS3, pure Vanilla JavaScript), Apex Chauffeur delivers a white-glove digital reservation experience for executive travelers, VIPs, and corporate travel coordinators across America's major metropolitan hubs.\n\n• Core Problems Solved & Value Delivered:\n  1. Unpredictable Rideshare Cancellations & Surge Pricing: Business executives traveling to high-stakes board meetings cannot risk last-minute cancellations or 3x surge pricing from standard rideshares. Apex Chauffeur guarantees zero surge pricing, transparent flat-rate airport tiers, and dedicated chauffeur dispatch.\n  2. Airport Transfer Friction & Flight Delays: Automated live flight tracking integration ensures that if a client's flight is delayed by hours, the chauffeur automatically adjusts pickup times without incurring unfair wait penalty fees.\n  3. Corporate Expense Fragmentation: Equips corporate clients with the 'Apex for Enterprise' B2B billing portal, enabling centralized monthly invoicing, employee travel compliance rules, and automated VAT/expense reporting.\n\n• Key Technical Capabilities:\n  • 4-tier interactive vehicle selector (Business Sedan, First Class Sedan, Executive SUV Van, Luxury SUV).\n  • High-converting reservation booking engine with instant distance calculation and fare display.\n  • Zero-dependency lightweight architecture delivering instant mobile load times.",
    image: "images/websites/apex-chauffeur-mockup.jpg",
    galleryImages: [
      "images/websites/apex-chauffeur-mockup.jpg"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Executive Fleet Engine", "B2B Enterprise Portal", "Luxury UI/UX", "Flat-Rate Pricing"],
    liveUrl: "https://hammadforallworld.github.io/Alfa-fleet",
    githubUrl: "https://github.com/hammadforallworld/Alfa-fleet",
    featured: true
  },
  {
    id: 23,
    title: "Solar System 3D Simulator (Cosmos 3D) - Interactive Universe Web Application",
    category: "Web Applications",
    year: "2026",
    shortDescription: "Real-time 3D universe and celestial mechanics simulator built with HTML5, CSS3, and JavaScript math algorithms. Solves static textbook diagrams by providing full 6-DOF orbital camera inspection, Keplerian physics timelines, and a live scientific databank for all 8 planets and the Sun.",
    fullDescription: "• Project Overview:\n  A high-performance real-time 3D universe and planetary mechanics web simulator engineered by Hammad Hassan. Developed using semantic HTML5, modern CSS3, Vanilla JavaScript, and advanced AI vibe coding workflows, Cosmos 3D brings astrophysics and celestial mechanics directly into the browser without heavy external 3D engine overhead.\n\n• Core Problems Solved & Value Delivered:\n  1. Static 2D Astronomy Diagrams in Textbooks: 2D textbook illustrations fail to help students grasp the true scale, orbital eccentricities, and revolution velocity ratios of our solar system. This simulator renders true Keplerian orbital mechanics in an interactive 3D space.\n  2. High GPU Overhead in Standard 3D Web Apps: Many WebGL solar system projects suffer from frame drops and lag on mobile devices. Hammad engineered custom Canvas/WebGL mathematical rendering algorithms that maintain silky-smooth 60 FPS performance even on mobile browsers.\n  3. Lack of Contextual Scientific Data: Clicking any celestial body immediately centers the camera and opens a live telemetry databank displaying atmospheric composition, surface temperatures, rotational speeds, and moon counts.\n\n• Key Technical Capabilities:\n  • Full 6-DOF orbital camera with free drag-to-rotate, mouse wheel/pinch zoom, and raycasted planet selection.\n  • Simulation timeline scrubbing (real-time, pause, high-speed forward/reverse orbital time travel).\n  • Scale mode toggling between scientifically accurate distance models and visual clarity modes.",
    image: "images/websites/solar-system-simulator.png",
    galleryImages: [
      "images/websites/solar-system-simulator.png"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Vibe Coding", "3D Canvas / WebGL", "Celestial Physics & Math", "Orbital Mechanics", "Glassmorphic UI"],
    liveUrl: "https://hammadforallworld.github.io/solar-system",
    githubUrl: "https://github.com/hammadforallworld/solar-system",
    featured: true
  },
  {
    id: 24,
    title: "Top Electrician Repair Solutions - Electrical Engineering Web Platform",
    category: "Web Applications",
    year: "2026",
    shortDescription: "High-conversion 24/7 electrical services and emergency repair web platform. Solves critical electrical hazard panics and hidden pricing by providing an interactive quotation engine, certified technician dispatch, and verified master electrician credibility counters.",
    fullDescription: "• Project Overview:\n  A modern commercial web platform engineered for 24/7 residential, commercial, and industrial electrical engineering and emergency repair services. Developed by Hammad Hassan with responsive HTML5, modern CSS3, and JavaScript, the platform converts urgent emergency inquiries into dispatched service calls.\n\n• Core Problems Solved & Value Delivered:\n  1. Electrical Emergencies & Contractor Unresponsiveness: Sudden short circuits, blown breakers, or commercial outages cause severe safety hazards and costly downtime. The platform features an urgent 24/7 hotline dispatch integration that connects distressed clients with on-call master electricians in minutes.\n  2. Opaque Contractor Pricing & Hidden Diagnostic Fees: Homeowners dread surprise contractor invoices. Top Electrician integrates a transparent multi-step quote calculator where users select service types (rewiring, panel upgrades, lighting) and view clear estimates before booking.\n  3. Contractor Credibility Deficits: Showcases verified certifications, master electrician badges, and live social proof metric counters (987+ repairs completed, 42+ master electricians, 570+ five-star reviews).\n\n• Key Technical Capabilities:\n  • Multi-field quote estimation calculator with service selectors and calendar time-slot reservation.\n  • Rapid one-click phone dispatch and emergency SMS alert routing.\n  • Fully responsive, high-contrast industrial UI optimized for stressed homeowners on smartphones.",
    image: "images/websites/electrical-macbook-mockup.jpg",
    galleryImages: [
      "images/websites/electrical-macbook-mockup.jpg"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Quotation Engine", "Electrical Engineering UI", "UI/UX", "Lead Generation"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 25,
    title: "FitPulse Pro - Fitness & Habit Tracker App",
    category: "Mobile Applications",
    year: "2026",
    shortDescription: "Cross-platform mobile fitness and habit tracker app engineered with React Native. Solves fitness app abandonment and habit burnout through gamified flame streak shields, triple concentric activity rings, real-time BLE heart rate telemetry, and circadian sleep recovery metrics.",
    fullDescription: "• Project Overview:\n  A high-performance fitness and habit tracking mobile application developed for iOS and Android using React Native and modern AI Vibe Coding workflows. Designed for fitness enthusiasts and wellness seekers, FitPulse Pro combines behavioral psychology with biometric telemetry to build lasting healthy habits.\n\n• Core Problems Solved & Value Delivered:\n  1. High Habit Churn & Early App Abandonment: Over 80% of workout apps are deleted within three weeks because logging feels like a chore. FitPulse Pro solves habit burnout through gamification: flame streak counters, freeze shields that protect momentum on rest days, and community milestone badges.\n  2. Disconnected Workout Metrics: Instead of forcing users to navigate through separate tabs for steps, cardio, and active time, the app unifies daily progress into Apple-style concentric activity rings (Move, Exercise, Stand) that close dynamically.\n  3. Overtraining & Fatigue Injuries: Integrates Bluetooth Low Energy (BLE) heart rate monitor sensors with an intelligent bio-recovery algorithm evaluating Heart Rate Variability (HRV) and sleep architecture to recommend optimal rest days.\n\n• Key Technical Capabilities:\n  • Live BLE telemetry displaying real-time ECG waveforms and aerobic heart rate zone calculations.\n  • Offline-first local SQLite/AsyncStorage database ensuring zero data loss during gym workouts without cellular signal.\n  • Automated background synchronization with Apple HealthKit and Google Fit.",
    image: "images/mobile-apps/fitpulse-pro-showcase.jpg",
    galleryImages: [
      "images/mobile-apps/fitpulse-pro-showcase.jpg"
    ],
    technologies: ["React Native", "Vibe Coding", "Mobile UI/UX", "TypeScript", "Biometrics & HealthKit", "Streak Gamification", "BLE Telemetry", "AsyncStorage"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 26,
    title: "SkyVoyage - Smart Travel Booking, Flights & Tours App",
    category: "Mobile Applications",
    year: "2026",
    shortDescription: "All-in-one travel discovery, flight booking, and tour guide mobile app engineered with React Native. Solves multi-app travel fragmentation by unifying real-time non-stop flight search, scannable digital boarding passes, curated destination packages, and offline day-by-day itineraries.",
    fullDescription: "• Project Overview:\n  An all-in-one travel exploration, flight booking, and vacation management mobile application engineered for iOS and Android using React Native, powered by AI Vibe Coding workflows. SkyVoyage delivers a frictionless, dream-worthy voyage planning experience for modern digital nomads and holiday travelers.\n\n• Core Problems Solved & Value Delivered:\n  1. Multi-App Travel Fatigue: Travelers typically juggle multiple apps for flights, hotels, tour tickets, and airport check-ins. SkyVoyage unifies the entire trip lifecycle—flight reservations, seat selection, digital wallet boarding passes, and guided tours—into a single intuitive mobile hub.\n  2. Hidden Flight Fees & Confusing Layover Routes: Features transparent pricing filters that prioritize non-stop routes, luggage policies, and direct airline pricing without predatory booking markups.\n  3. Lost Internet Connectivity in Foreign Destinations: Incorporates offline itinerary caching and vector maps, ensuring travelers can access their boarding passes, hotel addresses, and tour meeting points even without international data roaming.\n\n• Key Technical Capabilities:\n  • Live flight search engine with interactive cabin seat map selection and Apple Wallet boarding pass previews.\n  • Curated destination guides with localized weather forecasts and traveler rating reviews.\n  • Responsive light-theme aesthetic inspired by Apple Design Award winners.",
    image: "images/mobile-apps/skyvoyage-showcase.jpg",
    galleryImages: [
      "images/mobile-apps/skyvoyage-showcase.jpg"
    ],
    technologies: ["React Native", "Vibe Coding", "Mobile UI/UX", "TypeScript", "Airline GDS APIs", "Geolocation & Maps", "Digital Boarding Pass", "Itinerary Planning"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 27,
    title: "Stop That Pancake! - A Hilarious Story for Early Readers",
    category: "Book Design",
    year: "2026",
    shortDescription: "Comedic early childhood storybook authored and illustrated by Hammad Hassan. Solves beginner reading reluctance through hilarious slapstick pacing, a runaway pancake in red sneakers, dyslexia-friendly phonics typography, and a heartwarming lesson on sharing.",
    fullDescription: "• Project Overview:\n  A laugh-out-loud children's picture storybook titled 'Stop That Pancake!: A Hilarious Adventure for Early Readers', written, illustrated, and formatted by Hammad Hassan. Engineered specifically for early readers (ages 3–7), the story follows a mischievous golden pancake with tiny red sneakers that leaps out of Chef Pierre's skillet and leads a chaotic chase across kitchens, farmyards, and duck ponds.\n\n• Core Problems Solved & Value Delivered:\n  1. Beginner Reading Reluctance: Children learning to read often get discouraged when early books feel dry or repetitive. This book solves reading disinterest through fast-paced physical comedy, zany cartoon sound effects (WHOOSH!, FLIP!, SPLASH!), and escalating comedic stakes.\n  2. Dyslexia & Phonetic Decoding Hurdles: Formatted with generous line spacing, large rounded dyslexic-conscious typography, and simple rhyming word families that help children decode sentences with minimal adult assistance.\n  3. Social-Emotional Learning (SEL): Concludes in a heartwarming shared picnic where the runaway pancake voluntarily stops, teaching young children that sharing brings greater joy than fleeing in selfishness.\n\n• Publishing & Typesetting Highlights:\n  • 5 illustrated full-color storybook spreads formatted using Canva and Microsoft Word.\n  • Certified Amazon KDP 300 DPI print-ready preflight calibrated for hardcover picture books.",
    image: "images/books/stop-that-pancake-mockup.jpg",
    galleryImages: [
      "images/books/stop-that-pancake-mockup.jpg",
      "images/books/stop-that-pancake-page1.svg",
      "images/books/stop-that-pancake-page2.svg",
      "images/books/stop-that-pancake-page3.svg",
      "images/books/stop-that-pancake-page4.svg",
      "images/books/stop-that-pancake-page5.jpg"
    ],
    galleryCaptions: [
      "Hardcover 3D Studio Mockup",
      "Page 1: The Great Kitchen Escape",
      "Page 2: The Farmyard Chase",
      "Page 3: The Duck Pond Trampoline",
      "Page 4: The Great Animal Dogpile",
      "Page 5: The Sweet Picnic Finale"
    ],
    technologies: ["Canva", "MS Word", "Children's Storybook", "Illustration Layout", "Early Phonics", "Slapstick Storytelling", "Amazon KDP", "Editorial Design"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 46,
    title: "Quranic Vocabulary & Grammar Curriculum - Urdu to English Translation & Bilingual Publication",
    category: "Translation",
    secondaryCategory: "Book Design",
    year: "2026",
    shortDescription: "Complete educational book translation and bilingual localization converting a high-yield Quranic demonstrative pronoun curriculum from Urdu into academic English. Solves the barrier of classical madrasah texts being locked in Urdu script by providing side-by-side comparative layout, research-backed lexicons, and 300 DPI Amazon KDP preflight.",
    fullDescription: "• Project Overview:\n  A landmark educational book translation, curriculum localization, and bilingual publishing project engineered by Hammad Hassan. Translating a high-frequency Quranic linguistic and demonstrative pronoun curriculum from classical Urdu into modern, accessible English, this publication bridges sacred scholarship with contemporary pedagogy.\n\n• Core Problems Solved & Value Delivered:\n  1. Overcoming the Language Barrier for Global Learners: Classical high-frequency Quranic concordance textbooks were historically confined to Urdu Nastaliq script, rendering them inaccessible to millions of English-speaking students, new Muslims, non-Urdu readers, and international madrasahs. This English translation unlocks direct, barrier-free access.\n  2. Accelerating Direct Quranic Comprehension: Rather than forcing beginners through years of complex abstract grammar rules, the curriculum targets high-yield functional vocabulary. Mastering just these 4 demonstrative pronouns unlocks immediate comprehension across more than 798+ verses in the Holy Quran.\n  3. Cross-Linguistic RTL-to-LTR Structural Parity: Converting Right-to-Left (Urdu) editorial layouts into Left-to-Right (English) while preserving Arabic calligraphic ayaat with full diacritics (harakat) presents severe typesetting challenges. Hammad designed a 4-quadrant symmetric architecture ensuring 100% verse parity, grammatical accuracy, and visual balance.\n\n• Translation Methodology & Professional Workflow:\n  • Canva Pro: Precision page geometry, ornate arabesque decorative corner borders, visual hierarchy, and publishing packaging.\n  • Lexical Research & Classical Reference Works: Rigorous cross-referencing against authentic classical lexicons (Edward William Lane's Arabic-English Lexicon, Hans Wehr), authentic Tafsir literature, and verified Quranic corpus databases to ensure semantic fidelity.\n  • Google Translate & AI-Assisted Translation: Initial multi-pass translation drafting, terminology alignment, and cross-lingual validation.\n  • Microsoft Word / Office: Manuscript structure, bilingual concordance tables, and multi-pass editorial proofreading.\n  • Print-Ready Publishing Preflight: Produced to certified Amazon KDP 300 DPI print-ready standards.\n\n• Interactive Gallery Features:\n  Open 'View Details' to inspect the Hardcover 3D Studio Mockup (Primary Thumbnail), followed immediately by the full-size uncropped English Translated Page (Attached Sample), the Original Urdu Manuscript Page (Attached Sample), and the Side-by-Side Dual-Page Comparison Showcase.",
    image: "images/translations/quranic-translation-mockup.jpg",
    galleryImages: [
      "images/translations/quranic-translation-mockup.jpg",
      "images/translations/quranic-vocab-english-translation.png",
      "images/translations/quranic-vocab-urdu-original.png",
      "images/translations/bilingual-side-by-side-comparison.jpg"
    ],
    galleryCaptions: [
      "Hardcover 3D Studio Presentation Mockup (Primary Thumbnail)",
      "English Translated Page (Attached Sample)",
      "Original Urdu Manuscript Page (Attached Sample)",
      "Side-by-Side Dual-Page Comparison Showcase (Urdu vs. English on One Screen)"
    ],
    technologies: ["Translation & Localization", "Canva", "MS Word", "Linguistic Research", "Google Translate", "Arabic Typography", "Amazon KDP", "Bilingual Publishing"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 47,
    title: "Selected Quranic Supplications (Duas from All 30 Paras) - Urdu to English Translation & Bilingual Publication",
    category: "Translation",
    secondaryCategory: "Book Design",
    year: "2026",
    shortDescription: "Comprehensive devotional book translation and word-by-word bilingual curriculum converting sacred Quranic supplications across all 30 Paras (Juz) from Urdu into academic English. Solves phonetic recitation disconnect by providing granular word-by-word root breakdowns, Surah Al-Fatihah analysis, and 300 DPI Amazon KDP preflight.",
    fullDescription: "• Project Overview:\n  An authoritative devotional translation, sacred linguistic study, and bilingual publication project engineered by Hammad Hassan. Translating an extensive curriculum of sacred prayers and Quranic supplications selected across all 30 Paras (Juz) from classical Urdu into modern, accessible English, this publication bridges authentic Quranic Arabic grammar with comprehensive running translations.\n\n• Core Problems Solved & Value Delivered:\n  1. Democratizing Quranic Devotional Literature for Global Learners: Historically, detailed word-by-word analytical Dua compilations were confined to Urdu Nastaliq text, creating severe comprehension barriers for non-Urdu speakers, new Muslim reverts, and diaspora students globally. This English edition unlocks direct, word-by-word pedagogical clarity.\n  2. Bridging Lexical Roots with Running Syntactic Meaning: Traditional translations offer either isolated vocabulary lists or general running paragraphs. Hammad engineered a dual-tiered typographic architecture pairing colored Arabic callouts directly with word-for-word glosses above full running sentence translations, enabling learners to internalize exact Quranic vocabulary during prayer.\n  3. Symmetrical RTL-to-LTR Editorial Parity: Transforming Right-to-Left (Urdu) multi-column tables into Left-to-Right (English) while preserving identical pagination (P 16 & 17), side diamond milestone markers (Dua 1), and authentic footnote references without visual distortion.\n\n• Translation Methodology & Professional Workflow:\n  • Canva Pro: Precision page geometry, ornate double-bordered framing, diamond milestone callouts, and publishing cover packaging.\n  • Classical Lexicon Research & Tafsir Literature: Cross-referenced against authoritative classical lexicons (Edward William Lane's Arabic-English Lexicon, Hans Wehr), authentic Tafsir literature, and verified Quranic corpus databases to ensure theological accuracy and semantic precision.\n  • Google Translate & AI-Assisted Terminology Validation: Multi-stage translation drafting, synonym disambiguation, and linguistic validation.\n  • Microsoft Word / Office: Dual-language concordance tables, Arabic Unicode font rendering, and multi-pass editorial proofreading.\n  • Certified Amazon KDP Preflight: Produced to 300 DPI print-ready specifications for international physical and digital release.\n\n• Interactive Gallery Features:\n  Open 'View Details' to inspect the Hardcover 3D Studio Mockup (Primary Thumbnail), followed immediately by the full-size uncropped English Translated Page (Attached Sample), the Original Urdu Manuscript Page (Attached Sample), and the Side-by-Side Dual-Page Comparison Showcase.",
    image: "images/translations/quranic-duas-mockup.svg",
    galleryImages: [
      "images/translations/quranic-duas-mockup.svg",
      "images/translations/quranic-duas-english-translation.png",
      "images/translations/quranic-duas-urdu-original.png",
      "images/translations/quranic-duas-comparison.svg"
    ],
    galleryCaptions: [
      "Hardcover 3D Studio Presentation Mockup (Primary Thumbnail)",
      "English Translated Page (Attached Sample - Surah Al-Fatihah)",
      "Original Urdu Manuscript Page (Attached Sample - Surah Al-Fatihah)",
      "Side-by-Side Dual-Page Comparison Showcase (Urdu vs. English on One Screen)"
    ],
    technologies: ["Translation & Localization", "Canva", "MS Word", "Linguistic Research", "Google Translate", "Arabic Typography", "Amazon KDP", "Bilingual Publishing"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 48,
    title: "High-Frequency Quranic Phrases & Grammar - Urdu to English Translation & Bilingual Publication",
    category: "Translation",
    secondaryCategory: "Book Design",
    year: "2026",
    shortDescription: "Comprehensive educational book translation and bilingual localization converting high-yield Quranic compound phrases (إِنَّ اللَّهَ, الَّذِينَ آمَنُوا, فِي الْأَرْضِ, يَا أَيُّهَا) from Urdu into academic English. Solves rote abstract grammar fatigue by mapping 4 recurring compound structures across 692+ verses with symmetrical comparative layout and 300 DPI Amazon KDP preflight.",
    fullDescription: "• Project Overview:\n  A landmark educational book translation, grammatical concordance, and bilingual publishing project engineered by Hammad Hassan. Translating a high-frequency Quranic grammatical and linguistic compound curriculum from classical Urdu into modern, accessible English, this publication bridges foundational Quranic syntax with contemporary pedagogy.\n\n• Core Problems Solved & Value Delivered:\n  1. Rapid Quranic Literacy via High-Yield Compounds: Rather than memorizing abstract grammatical tables in isolation, learners master high-frequency multi-word phrases that recur continuously throughout the Holy Quran. Mastering just these 4 compounds unlocks immediate comprehension across more than 692+ verses.\n  2. Bridging Urdu Pedagogical Texts to Global English Audiences: Classical South Asian madrasah concordance textbooks were historically available solely in Urdu Nastaliq, locking out millions of non-Urdu speakers, new Muslim reverts, and international students. This English translation provides direct, barrier-free access.\n  3. Symmetrical RTL-to-LTR Typographic Alignment: Re-engineering Right-to-Left (Urdu) 4-quadrant page grids into Left-to-Right (English) while maintaining exact diacritical vowel marks (harakat), Arabic calligraphic headers, verse chapter/number citations, and ornate arabesque corner borders.\n\n• Translation Methodology & Professional Workflow:\n  • Canva Pro: Symmetric 4-quadrant layout architecture, ornate decorative arabesque borders, typographic visual hierarchy, and publishing packaging.\n  • Classical Arabic Lexicon Research & Tafsir Literature: Cross-referenced against authentic classical lexicons (Edward William Lane's Arabic-English Lexicon, Hans Wehr), authentic Tafsir literature, and verified Quranic corpus databases for grammatical and semantic fidelity.\n  • Google Translate & AI-Assisted Linguistic Validation: Multi-pass translation drafting, contextual pronoun resolution, and cross-lingual validation.\n  • Microsoft Word / Office: Manuscript structure, concordance tables, and multi-pass editorial proofreading.\n  • Print-Ready Publishing Preflight: Produced to certified Amazon KDP 300 DPI print-ready specifications.\n\n• Interactive Gallery Features:\n  Open 'View Details' to inspect the Natural Photorealistic Publishing Mockup (Primary Thumbnail), followed immediately by the full-size uncropped English Translated Page (Attached Sample), the Original Urdu Manuscript Page (Attached Sample), and the Side-by-Side Dual-Page Comparison Showcase.",
    image: "images/translations/quranic-phrases-mockup.jpg",
    galleryImages: [
      "images/translations/quranic-phrases-mockup.jpg",
      "images/translations/quranic-phrases-english-translation.png",
      "images/translations/quranic-phrases-urdu-original.png",
      "images/translations/quranic-phrases-comparison.jpg"
    ],
    galleryCaptions: [
      "Hardcover Natural Studio Presentation Mockup (Primary Thumbnail)",
      "English Translated Page (Attached Sample - 4 Quranic Compounds)",
      "Original Urdu Manuscript Page (Attached Sample - 4 Quranic Compounds)",
      "Side-by-Side Dual-Page Comparison Showcase (Urdu vs. English on One Screen)"
    ],
    technologies: ["Translation & Localization", "Canva", "MS Word", "Linguistic Research", "Google Translate", "Arabic Typography", "Amazon KDP", "Bilingual Publishing"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 29,
    title: "Linguistic Miracles of the Holy Quran: The Palindrome Verse - Urdu to English Translation & Bilingual Study",
    category: "Translation",
    secondaryCategory: "Book Design",
    year: "2026",
    shortDescription: "Scholarly book translation and rhetorical inimitability (I'jaz al-Quran) analysis converting classical Urdu research on Quranic palindromic structures into academic English. Solves the challenge of demonstrating oral linguistic miracles to international readers by deconstructing Miracle No. 1 ('وَرَبَّكَ فَكَبِّرْ'), letter matrices, and 300 DPI Amazon KDP preflight.",
    fullDescription: "• Project Overview:\n  An extraordinary academic book translation, rhetorical analysis, and bilingual publishing project engineered by Hammad Hassan. Translating a profound study on Quranic linguistic inimitability (I'jaz al-Quran) and rhetorical miracles from classical Urdu into modern academic English, this publication explores the divine perfection and mathematical symmetry of Quranic phraseology.\n\n• Core Problems Solved & Value Delivered:\n  1. Communicating Oral Symmetries Across Languages: Translating rhetorical inimitability without losing the mathematical proof is extraordinarily difficult. The project proves that Surah Al-Muddaththir 74:3 ('وَرَبَّكَ فَكَبِّرْ' - 'magnify the greatness of your Lord') forms an exact letter-by-letter palindrome (ر - ب - ك - ف - ك - ب - ر) delivered purely orally without written drafts.\n  2. Bridging Classical Balaghah (Rhetoric) to English Academic Standards: Classical Arabic treatises by Al-Jurjani and Al-Baqillani are inaccessible to laymen. This translation translates the complex role of the initiator letter Waw (و) with its 21 syntactic functions into clear English grammatical parallels.\n  3. Symmetrical Comparative Proof Display: Formatted with side-by-side comparative scans demonstrating that while human languages can convey the semantic meaning, no human translation can replicate both theological depth and oral palindromic symmetry simultaneously.\n\n• Translation Methodology & Professional Workflow:\n  • Canva Pro: Classical ornate arabesque corner borders, geometric letter tables, visual callouts, and publishing packaging.\n  • Classical Arabic Lexicon Research & Tafsir Literature: Cross-referenced against authoritative classical lexicons (Edward William Lane's Arabic-English Lexicon, Hans Wehr), classical Balaghah treatises, and verified Quranic corpus databases.\n  • Google Translate & AI-Assisted Linguistic Validation: Initial multi-pass translation drafting, terminology alignment, and cross-lingual validation.\n  • Microsoft Word / Office: Manuscript structure, bilingual concordance tables, and multi-pass editorial proofreading.\n  • Print-Ready Publishing Preflight: Produced to certified Amazon KDP 300 DPI print-ready specifications.\n\n• Interactive Gallery Features:\n  Open 'View Details' to inspect the Natural Photorealistic Publishing Mockup (Primary Thumbnail), followed immediately by the full-size uncropped English Translated Page (Attached Sample), the Original Urdu Manuscript Page (Attached Sample), and the Side-by-Side Dual-Page Comparison Showcase.",
    image: "images/translations/quranic-miracles-mockup.jpg",
    galleryImages: [
      "images/translations/quranic-miracles-mockup.jpg",
      "images/translations/quranic-miracles-english-translation.png",
      "images/translations/quranic-miracles-urdu-original.png",
      "images/translations/quranic-miracles-comparison.jpg"
    ],
    galleryCaptions: [
      "Hardcover Natural Studio Presentation Mockup (Primary Thumbnail)",
      "English Translated Page (Attached Sample - Miracle No. 1 Palindrome)",
      "Original Urdu Manuscript Page (Attached Sample - Miracle No. 1 Palindrome)",
      "Side-by-Side Dual-Page Comparison Showcase (Urdu vs. English on One Screen)"
    ],
    technologies: ["Translation & Localization", "Canva", "MS Word", "Linguistic Research", "Google Translate", "Arabic Typography", "Amazon KDP", "Bilingual Publishing"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 30,
    title: "600 High-Frequency Quranic Words (20,000 Occurrences / 25% of Quran) - Trilingual Lexicon & Educational Curriculum",
    category: "Translation",
    secondaryCategory: "Book Design",
    year: "2026",
    shortDescription: "Authoritative statistical vocabulary curriculum mapping 600 high-frequency Quranic words accounting for ~20,000 occurrences (25% of the Holy Quran). Solves multilingual language barriers for diaspora students by providing complete trilingual alignment (Arabic, Urdu, English), exact frequency rankings, and 300 DPI Amazon KDP preflight.",
    fullDescription: "• Project Overview:\n  An authoritative Quranic vocabulary curriculum, statistical corpus localization, and trilingual publishing project engineered by Hammad Hassan. Designed to accelerate Quranic comprehension for students, translators, and educators worldwide, this publication systematizes the most critical linguistic layer of the Holy Quran—where mastering just 600 essential vocabulary roots unlocks approximately 20,000 scriptural occurrences, representing 25% of the total Quranic corpus.\n\n• Core Problems Solved & Value Delivered:\n  1. The Vocabulary Memorization Bottleneck: Memorizing thousands of rare words leaves students exhausted. This publication solves learning fatigue by prioritizing the 600 highest-yielding words (Proper Names, Prophets, Sacred Locations, and Essential Nouns) that constitute a full quarter of the entire Quranic corpus.\n  2. Multilingual Educational Gaps: Solves cross-generational and international classroom hurdles by providing unified three-column tables pairing Arabic script with red frequency tallies, classical Urdu Nastaliq meanings, and modern English translations.\n  3. Computational Corpus Accuracy: Rigorously verifies all word frequency occurrences against verified computational linguistic databases, eliminating counting errors common in historical manuscripts.\n\n• Curriculum Structure & Strategic Spreads:\n  • Page 1 (Words 1–22): High-Yield Divine Names & Foundational Nouns (Allah 2550, Hell 77, Pharaoh 74, Quran 70, Abraham 69, Adam 25, Jesus 25, Aaron 20, David 16, Jacob 16, Medina 14, Ishmael 12).\n  • Page 2 (Words 23–54): Prophetic Lineages & Sacred Sites (Thamud 26, Shuaib 11, Mount Sinai 10, Hud 10, Islam 8, Muhammad ﷺ 4, Job 4, Houris 4, Injeel 12, Iblis 11, Luqman 2, Gog & Magog 2).\n\n• Translation Methodology & Professional Workflow:\n  • Canva Pro: Clean multi-column editorial table layouts with contrast-optimized forest green header bars.\n  • Quranic Corpus Statistical Analysis: Frequency rankings verified against computational linguistic databases and Lane's Lexicon.\n  • Google Translate & AI-Assisted Semantic Calibration: Harmonizing English and Urdu equivalents.\n  • Microsoft Word / Office: Complete typographic concordance compilation and Amazon KDP 300 DPI preflight.",
    image: "images/translations/quranic-600-words-mockup.jpg",
    galleryImages: [
      "images/translations/quranic-600-words-mockup.jpg",
      "images/translations/quranic-600-words-page1.png",
      "images/translations/quranic-600-words-page2.png",
      "images/translations/quranic-600-words-comparison.jpg"
    ],
    galleryCaptions: [
      "Hardcover Natural Studio Presentation Mockup (Primary Thumbnail)",
      "Page 1: Foundational Names & Prophets (Attached Sample - Words 1 to 22)",
      "Page 2: Historic Nations & Sacred Concepts (Attached Sample - Words 23 to 54)",
      "Side-by-Side Dual-Page Curriculum Spread (Page 1 & Page 2 on One Screen)"
    ],
    technologies: ["Translation & Localization", "Canva", "MS Word", "Quranic Corpus", "Linguistic Research", "Google Translate", "Arabic Typography", "Amazon KDP", "Bilingual Publishing"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 32,
    title: "Advanced Spreadsheet & Data Cleaning - Enterprise Pipeline & Analytics Suite",
    category: "Data Entry",
    year: "2025",
    shortDescription: "High-integrity enterprise spreadsheet data cleansing and audit system that eliminates manual reporting errors, sanitizes fragmented customer/financial datasets, and automates real-time executive KPI intelligence.",
    fullDescription: "• Project Overview: An enterprise-grade spreadsheet engineering and data hygiene system architected in Microsoft Excel and Google Sheets by Hammad Hassan. Designed to handle mission-critical corporate datasets, the system provides automated data cleansing pipelines, dynamic multi-tier validation rules, regex-based deduplication algorithms, and interactive executive summary dashboards that transform raw, disorganized entries into high-precision commercial intelligence.\n\n• Core Problems Solved & Value Delivered:\n1. Eradication of Costly Manual Entry & Formula Errors: Messy spreadsheets with broken formulas, syntax inconsistencies, and corrupt cell references cost enterprises thousands in erroneous forecasts; this system implements bulletproof lookup architectures (XLOOKUP, INDEX/MATCH, dynamic arrays) and automated error-handling wraps.\n2. Automated Hygiene for Fragmented & Corrupted Datasets: Resolves massive data divergence caused by multiple branch exports, mixed date formats, stray punctuation, trailing whitespace, and duplicate customer entries through custom regex sanitization and deterministic deduplication rules.\n3. Real-Time Executive KPI Visibility: Replaces static, unreadable tabular logs with interactive dynamic dashboards featuring conditional formatting heatmaps, automated variance tracking, and executive slicers for instant stakeholder decision-making.\n\n• Key Technical Capabilities & Automation Features:\n- Robust multi-variable validation logic and protected cell hierarchy preventing unauthorized schema modifications.\n- Complex formula pipelines utilizing dynamic array functions (FILTER, UNIQUE, SORT, XLOOKUP) for zero-maintenance auto-updating reports.\n- Automated data import staging and regex transformation scripts for instant CSV/SQL export normalization.\n- Professional C-suite visualization standards with standardized color typography, KPI trend indicators, and print-ready executive summaries.",
    image: "images/data-entry/spreadsheet-formatting.svg",
    galleryImages: [
      "images/data-entry/spreadsheet-formatting.svg"
    ],
    technologies: ["Excel Formulas", "Google Sheets", "Data Cleansing", "Data Formatting", "VLOOKUP/XLOOKUP", "Regex Deduplication", "KPI Dashboards", "Data Validation"],
    liveUrl: "",
    githubUrl: "",
    featured: false
  },
  {
    id: 33,
    title: "An-Noor Elite - Luxury Hajj & Umrah Journeys Web Application",
    category: "Web Applications",
    year: "2026",
    shortDescription: "International-standard luxury pilgrimage web application solving itinerary confusion and booking fragmentation by integrating interactive 3D holy sanctuary exploration, transparent Haram-view accommodations, and VIP concierge packages.",
    fullDescription: "• Project Overview: An-Noor Elite is a premier spiritual travel and luxury pilgrimage web application engineered by Hammad Hassan with modern responsive web standards (semantic HTML5, modern CSS3, and Vanilla JavaScript). Built for discerning international pilgrims and high-net-worth travelers, the platform bridges digital elegance with spiritual reverence, featuring an interactive 3D holy sanctuaries explorer, bespoke VIP package reservations, and sacred landmark itineraries.\n\n• Core Problems Solved & Value Delivered:\n1. Eradicates Pilgrimage Booking Uncertainty & Deceptive Lodging: Disconnected travel agencies often mislead pilgrims regarding hotel walking distances from the Haram; An-Noor Elite provides transparent, interactive 3D site visualizations and verified luxury accommodation tiers with exact proximity metrics to Al-Masjid al-Haram and Al-Masjid an-Nabawi.\n2. Eliminates Fragmented Logistics & Scheduling Friction: High-stakes religious travel requires intricate logistics (visas, ground transport, flight connections, ritual milestones); the application unifies all facets into a cohesive VIP digital itinerary with step-by-step spiritual rites guidance.\n3. Frictionless, High-Speed VIP Experience: Replaces clunky, ad-cluttered agency portals with an ultra-fast, zero-dependency responsive interface adorned with gold-foil accents, high-framerate micro-animations, and instant quote dispatch.\n\n• Key Technical Capabilities & Interactive Features:\n- Interactive Holy Sanctuaries Explorer: Virtual discovery hub featuring an illuminated Holy Ka'abah centerpiece radiating golden geometric celestial light, with interactive landmark exploration cards for Makkah Al-Mukarramah ('Heart of Islam'), Al-Masjid al-Haram ('The Sacred Mosque'), and Al-Masjid an-Nabawi in Madinah Al-Munawwarah ('Prophet's Sanctuary').\n- End-to-End Pilgrimage Ecosystem: Integrated modules for bespoke VIP travel tiers (Silver, Gold, Platinum), international flight coordination, curated 5-star Haram-view luxury hotel booking, and comprehensive pilgrim preparation guides.\n- Responsive Luxury UI/UX: Dark-mode luxury aesthetics with gold foil accents, high-framerate interactive micro-animations, accessible navigation, and zero-dependency lightning-fast loading speeds across desktop and mobile devices.",
    image: "images/websites/an-noor-hajj-umrah-mockup.jpg",
    galleryImages: [
      "images/websites/an-noor-hajj-umrah-mockup.jpg"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Spiritual Travel UI/UX", "Interactive 3D Landmarks", "Booking Engine", "Performance Tuning"],
    liveUrl: "https://hammadforallworld.github.io/hajj-Umrah",
    githubUrl: "https://github.com/hammadforallworld/hajj-Umrah",
    featured: true
  },
  {
    id: 34,
    title: "Horizon3D - Supersonic World Tour & Luxury Aviation Web Application",
    category: "Web Applications",
    year: "2026",
    shortDescription: "Futuristic luxury aerospace web application that solves route planning fatigue and abstract booking uncertainty through real-time 3D orbital globe navigation, interactive Mach 2.2 supersonic fleet configuration, and AI travel concierge assistance.",
    fullDescription: "• Project Overview: Horizon3D is a cutting-edge, high-performance global travel and luxury aerospace web application engineered by Hammad Hassan. Built with modern web standards (semantic HTML5, modern CSS3, Vanilla JavaScript, and 3D Canvas / WebGL), Horizon3D redefines international journeys through supersonic aviation, featuring an interactive 3D digital wireframe Earth globe with real-time orbital flight path trajectories, supersonic flight velocity indicators (Mach 2.2 maximum speed), and global reach across 45+ countries with 1,200+ daily flights.\n\n• Core Problems Solved & Value Delivered:\n1. Solves Aerospace Visualization & Abstract Booking Uncertainty: Traditional luxury aviation portals rely on flat, static forms that fail to convey the scale and speed of supersonic flight; Horizon3D delivers an interactive WebGL wireframe Earth with dynamic geodesic orbital paths, allowing passengers to visualize supersonic flight times between global hubs in real time.\n2. Eliminates Aircraft Selection & Cabin Layout Ambiguity: Private jet clients demand complete clarity on interior space; the virtual 3D hangar enables interactive aircraft inspection, detailed cabin seat specifications, and real-time private suite previews before scheduling consultations.\n3. Automates High-Complexity Route Planning: High-net-worth intercontinental travel involves complex weather systems and airspace regulations; the integrated AI travel concierge instantly synthesizes multi-leg itineraries and supersonic speed profiles in seconds.\n\n• Key Technical Capabilities & Interactive Features:\n- Interactive 3D Wireframe Globe: WebGL / Canvas orbital navigation displaying Mach 2.2 supersonic routes across 45+ countries and 1,200+ daily global flights.\n- Virtual 3D Hangar & Aircraft Fleet Inspector: High-performance aircraft specification cards, 3D interior cabin layouts, and real-time seat configuration previews.\n- AI Travel Concierge Assistant: Instant automated multi-destination itinerary generation, altitude/weather routing optimization, and VIP consultation booking workflows.\n- High-Contrast Cyberpunk UI/UX: Dark theme with electric cyan and magenta-purple gradient accents, glassmorphic HUD telemetry cards, and zero-dependency lightning-fast rendering.",
    image: "images/websites/horizon-3d-mockup.jpg",
    galleryImages: [
      "images/websites/horizon-3d-mockup.jpg"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "3D Canvas / WebGL", "Responsive Design", "AI Travel Concierge", "Supersonic Fleet UI", "Interactive 3D Globe"],
    liveUrl: "https://hammadforallworld.github.io/travelling-world-wide/",
    githubUrl: "https://github.com/hammadforallworld/travelling-world-wide",
    featured: true
  }
];

// ==============================================================================
// 2. STATE MANAGEMENT
// ==============================================================================
const state = {
  currentCategory: "All",
  searchQuery: "",
  filteredProjects: [...PROJECTS_DATA],
  activeModalProject: null,
  activeModalImageIndex: 0
};

// ==============================================================================
// 3. DOM ELEMENTS
// ==============================================================================
const DOM = {
  projectsGrid: document.getElementById("projects-grid"),
  filterButtons: document.querySelectorAll(".filter-btn"),
  searchInput: document.getElementById("search-input"),
  searchClearBtn: document.getElementById("search-clear-btn"),
  resultsCount: document.getElementById("results-count"),
  
  // Navigation
  navbar: document.getElementById("navbar"),
  navLinks: document.querySelectorAll(".nav-link"),
  navToggle: document.getElementById("nav-toggle"),
  navMenu: document.getElementById("nav-menu"),

  // Modal
  modalBackdrop: document.getElementById("project-modal"),
  modalCloseBtn: document.getElementById("modal-close-btn"),
  modalTitle: document.getElementById("modal-title"),
  modalMeta: document.getElementById("modal-meta"),
  modalMainImg: document.getElementById("modal-main-img"),
  modalThumbnails: document.getElementById("modal-thumbnails"),
  modalPrevBtn: document.getElementById("modal-prev-btn"),
  modalNextBtn: document.getElementById("modal-next-btn"),
  modalGalleryStage: document.getElementById("modal-gallery-stage"),
  modalGalleryCounter: document.getElementById("modal-gallery-counter"),
  modalDescription: document.getElementById("modal-description"),
  modalTags: document.getElementById("modal-tags"),
  modalLiveLink: document.getElementById("modal-live-link"),
  modalGithubLink: document.getElementById("modal-github-link"),

  // Floating Buttons
  btnScrollTop: document.getElementById("btn-scroll-top"),
  btnAssistantToggle: document.getElementById("btn-assistant-toggle"),
  assistantPanel: document.getElementById("assistant-panel"),
  assistantCloseBtn: document.getElementById("assistant-close-btn"),
  assistantResetBtn: document.getElementById("assistant-reset-btn"),
  assistantChatBody: document.getElementById("assistant-chat-body"),
  assistantInput: document.getElementById("assistant-input"),
  assistantSendBtn: document.getElementById("assistant-send-btn"),

  // Contact Drafter
  drafterForm: document.getElementById("drafter-form"),
  drafterName: document.getElementById("drafter-name"),
  drafterContact: document.getElementById("drafter-client-contact"),
  drafterTopic: document.getElementById("drafter-topic"),
  drafterBudget: document.getElementById("drafter-budget"),
  drafterTimeline: document.getElementById("drafter-timeline"),
  drafterMessage: document.getElementById("drafter-message"),
  drafterWhatsAppBtn: document.getElementById("drafter-whatsapp-btn"),
  drafterEmailBtn: document.getElementById("drafter-email-btn"),
  drafterCopyBtn: document.getElementById("drafter-copy-btn"),
  drafterStatus: document.getElementById("drafter-status")
};

// ==============================================================================
// 4. RENDERING FUNCTIONS
// ==============================================================================

/**
 * Renders all projects matching the active filters into the grid.
 */
function renderProjects() {
  if (!DOM.projectsGrid) return;

  // Filter projects according to category and search query
  const query = state.searchQuery.trim().toLowerCase();
  
  state.filteredProjects = PROJECTS_DATA.filter(project => {
    // Category check
    const matchesCategory = (state.currentCategory === "All") || 
      (project.category.toLowerCase() === state.currentCategory.toLowerCase()) ||
      (project.secondaryCategory && project.secondaryCategory.toLowerCase() === state.currentCategory.toLowerCase());

    // Search query check (title, category, shortDescription, fullDescription, technologies)
    if (!matchesCategory) return false;
    if (!query) return true;

    const matchTitle = project.title.toLowerCase().includes(query);
    const matchCategory = project.category.toLowerCase().includes(query);
    const matchDesc = project.shortDescription.toLowerCase().includes(query);
    const matchFull = project.fullDescription.toLowerCase().includes(query);
    const matchTech = project.technologies.some(tech => tech.toLowerCase().includes(query));

    return matchTitle || matchCategory || matchDesc || matchFull || matchTech;
  });

  // Update Result Count
  if (DOM.resultsCount) {
    const total = PROJECTS_DATA.length;
    const current = state.filteredProjects.length;
    DOM.resultsCount.innerHTML = `Showing <strong>${current}</strong> of ${total} projects`;
  }

  // Handle Empty State
  if (state.filteredProjects.length === 0) {
    DOM.projectsGrid.innerHTML = `
      <div class="empty-results">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h3>No projects found</h3>
        <p>No projects matched your criteria "${escapeHtml(state.searchQuery)}". Try a different search term or category.</p>
        <button class="btn-primary" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    refreshLucideIcons();
    return;
  }

  // Generate cards HTML with staggered index for 3D flip-in cascade
  DOM.projectsGrid.innerHTML = state.filteredProjects.map((project, idx) => createProjectCardHTML(project, idx)).join("");

  // Attach card event listeners & 3D tilt
  attachCardEvents();
  if (typeof bindCards3DTilt === "function") {
    bindCards3DTilt();
  }
  refreshLucideIcons();
}

/**
 * Builds HTML markup for an individual project card.
 */
function createProjectCardHTML(project, idx = 0) {
  const featuredBadge = project.featured 
    ? `<span class="card-featured-badge">Featured</span>` 
    : '';

  const techTagsHTML = project.technologies
    .slice(0, 4)
    .map(tech => `<span class="tech-tag">${escapeHtml(tech)}</span>`)
    .join("");

  const extraTagsCount = project.technologies.length > 4 
    ? `<span class="tech-tag">+${project.technologies.length - 4}</span>` 
    : '';

  const liveButton = project.liveUrl 
    ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-link" title="Open Live Demo">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
       </a>` 
    : '';

  const githubButton = project.githubUrl 
    ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-link" title="View Source Code">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
       </a>` 
    : '';

  return `
    <article class="project-card" data-project-id="${project.id}" style="--card-index: ${idx % 9};">
      <div class="card-image-box" onclick="openProjectModal(${project.id})">
        <img 
          src="${escapeHtml(project.image)}" 
          alt="${escapeHtml(project.title)}" 
          class="card-img" 
          loading="lazy"
          onerror="if(this.dataset.fb &amp;&amp; !this.dataset.fbd){this.dataset.fbd='1';this.src=this.dataset.fb;}else{this.onerror=null;this.src='${PORTFOLIO_CONFIG.placeholderImage}';}"
          data-fb="${project.fallbackImage ? escapeHtml(project.fallbackImage) : ''}"
        />
        <span class="card-category-badge">${escapeHtml(project.category)}</span>
        ${featuredBadge}
      </div>

      <div class="card-content">
        <h3 class="card-title" onclick="openProjectModal(${project.id})">
          ${escapeHtml(project.title)}
        </h3>

        <p class="card-description">
          ${escapeHtml(project.shortDescription)}
        </p>

        <div class="card-tags">
          ${techTagsHTML}
          ${extraTagsCount}
        </div>

        <div class="card-footer">
          <button class="btn-details" onclick="openProjectModal(${project.id})">
            <span>View Details</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </button>

          <div class="card-external-links">
            ${liveButton}
            ${githubButton}
          </div>
        </div>
      </div>
    </article>
  `;
}

/**
 * Attaches click events and 3D interactive tilt to project cards.
 */
function attachCardEvents() {
  if (typeof bindCards3DTilt === "function") {
    bindCards3DTilt();
  }
}

// ==============================================================================
// 5. PROJECT DETAIL MODAL ENGINE
// ==============================================================================

/**
 * Opens project modal with rich details, interactive gallery, and links.
 */
window.openProjectModal = function(projectId) {
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  state.activeModalProject = project;
  state.activeModalImageIndex = 0;

  // Populate textual content
  DOM.modalTitle.textContent = project.title;
  DOM.modalMeta.textContent = project.secondaryCategory 
    ? `${project.category} • ${project.secondaryCategory}` 
    : project.category;
  DOM.modalDescription.textContent = project.fullDescription;

  // Set tags
  DOM.modalTags.innerHTML = project.technologies
    .map(tech => `<span class="tech-tag">${escapeHtml(tech)}</span>`)
    .join("");

  // External action links
  if (project.liveUrl) {
    DOM.modalLiveLink.href = project.liveUrl;
    DOM.modalLiveLink.style.display = "inline-flex";
  } else {
    DOM.modalLiveLink.style.display = "none";
  }

  if (project.githubUrl) {
    DOM.modalGithubLink.href = project.githubUrl;
    DOM.modalGithubLink.style.display = "inline-flex";
  } else {
    DOM.modalGithubLink.style.display = "none";
  }

  // Gallery rendering
  updateModalGallery();

  // Show modal and prevent body scroll
  DOM.modalBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
  refreshLucideIcons();
};

/**
 * Closes the project detail modal.
 */
function closeProjectModal() {
  DOM.modalBackdrop.classList.remove("open");
  document.body.style.overflow = "";
  state.activeModalProject = null;
}

/**
 * Updates the modal main image and active thumbnail state.
 */
function updateModalGallery() {
  const project = state.activeModalProject;
  if (!project) return;

  const images = (project.galleryImages && project.galleryImages.length > 0)
    ? project.galleryImages
    : [project.image];

  const currentSrc = images[state.activeModalImageIndex] || project.image;
  
  DOM.modalMainImg.src = currentSrc;
  DOM.modalMainImg.removeAttribute("data-fbd");
  DOM.modalMainImg.onerror = function() {
    const fb = (project.fallbackGalleryImages && project.fallbackGalleryImages[state.activeModalImageIndex]) 
      || project.fallbackImage;
    if (fb && !this.dataset.fbd) {
      this.dataset.fbd = '1';
      this.src = fb;
    } else {
      this.onerror = null;
      this.src = PORTFOLIO_CONFIG.placeholderImage;
    }
  };

  // Toggle prev/next controls visibility
  if (images.length > 1) {
    DOM.modalPrevBtn.style.display = "flex";
    DOM.modalNextBtn.style.display = "flex";
    if (DOM.modalGalleryCounter) {
      const isDesign = (project.category === "Graphic Design" || project.secondaryCategory === "Graphic Design" || project.category === "Book Design" || project.category === "Translation");
      const unitLabel = project.category === "Translation" ? "View" : (isDesign ? "Design" : "Page");
      const caption = (project.galleryCaptions && project.galleryCaptions[state.activeModalImageIndex])
        ? project.galleryCaptions[state.activeModalImageIndex]
        : "";
      DOM.modalGalleryCounter.innerHTML = caption 
        ? `<span>${unitLabel} ${state.activeModalImageIndex + 1} of ${images.length}</span><span style="opacity:0.6;margin:0 5px;">•</span><span style="font-weight:500;">${escapeHtml(caption)}</span>`
        : `${unitLabel} ${state.activeModalImageIndex + 1} of ${images.length}`;
      DOM.modalGalleryCounter.style.display = "flex";
    }
    // Thumbnails row for multi-page collections
    if (DOM.modalThumbnails) {
      const isDesign = (project.category === "Graphic Design" || project.secondaryCategory === "Graphic Design" || project.category === "Book Design" || project.category === "Translation");
      DOM.modalThumbnails.style.display = "flex";
      DOM.modalThumbnails.innerHTML = images.map((imgSrc, idx) => {
        const thumbTitle = (project.galleryCaptions && project.galleryCaptions[idx])
          ? project.galleryCaptions[idx]
          : `View ${project.category === 'Translation' ? 'View' : (isDesign ? 'Design' : 'Page')} ${idx + 1}`;
        const thumbFb = (project.fallbackGalleryImages && project.fallbackGalleryImages[idx]) || '';
        return `
        <div 
          class="modal-thumb ${idx === state.activeModalImageIndex ? 'active' : ''}" 
          onclick="setModalImage(${idx})"
          title="${escapeHtml(thumbTitle)}"
        >
          <img 
            src="${escapeHtml(imgSrc)}" 
            alt="Design ${idx + 1}"
            onerror="if(this.dataset.fb &amp;&amp; !this.dataset.fbd){this.dataset.fbd='1';this.src=this.dataset.fb;}else{this.onerror=null;this.src='${PORTFOLIO_CONFIG.placeholderImage}';}"
            data-fb="${escapeHtml(thumbFb)}"
          />
          <span class="modal-thumb-badge">${idx + 1}</span>
        </div>
      `;
      }).join("");
    }
  } else {
    DOM.modalPrevBtn.style.display = "none";
    DOM.modalNextBtn.style.display = "none";
    if (DOM.modalGalleryCounter) {
      DOM.modalGalleryCounter.style.display = "none";
    }
    if (DOM.modalThumbnails) {
      DOM.modalThumbnails.style.display = "none";
      DOM.modalThumbnails.innerHTML = "";
    }
  }
}

window.setModalImage = function(index) {
  state.activeModalImageIndex = index;
  updateModalGallery();
};

function modalNextImage() {
  const project = state.activeModalProject;
  if (!project || !project.galleryImages || project.galleryImages.length <= 1) return;
  state.activeModalImageIndex = (state.activeModalImageIndex + 1) % project.galleryImages.length;
  updateModalGallery();
}

function modalPrevImage() {
  const project = state.activeModalProject;
  if (!project || !project.galleryImages || project.galleryImages.length <= 1) return;
  state.activeModalImageIndex = (state.activeModalImageIndex - 1 + project.galleryImages.length) % project.galleryImages.length;
  updateModalGallery();
}

// ==============================================================================
// 6. FILTERING & SEARCH CONTROLLERS
// ==============================================================================

function setupFilters() {
  DOM.filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      DOM.filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.currentCategory = btn.getAttribute("data-category") || "All";
      renderProjects();
    });
  });
}

function setupSearch() {
  if (!DOM.searchInput) return;

  DOM.searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    if (state.searchQuery.trim().length > 0) {
      DOM.searchClearBtn.classList.add("visible");
    } else {
      DOM.searchClearBtn.classList.remove("visible");
    }
    renderProjects();
  });

  if (DOM.searchClearBtn) {
    DOM.searchClearBtn.addEventListener("click", () => {
      DOM.searchInput.value = "";
      state.searchQuery = "";
      DOM.searchClearBtn.classList.remove("visible");
      renderProjects();
      DOM.searchInput.focus();
    });
  }
}

window.resetFilters = function() {
  state.currentCategory = "All";
  state.searchQuery = "";
  if (DOM.searchInput) DOM.searchInput.value = "";
  if (DOM.searchClearBtn) DOM.searchClearBtn.classList.remove("visible");

  DOM.filterButtons.forEach(btn => {
    if (btn.getAttribute("data-category") === "All") {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  renderProjects();
};

// ==============================================================================
// 7. NAVIGATION & SCROLL MANAGEMENT
// ==============================================================================

function setupNavigation() {
  // Mobile Hamburger Toggle
  if (DOM.navToggle && DOM.navMenu) {
    DOM.navToggle.addEventListener("click", () => {
      DOM.navMenu.classList.toggle("open");
    });

    // Close when clicking any nav link
    DOM.navLinks.forEach(link => {
      link.addEventListener("click", () => {
        DOM.navMenu.classList.remove("open");
      });
    });
  }

  // Smooth scroll with offset & active highlight
  DOM.navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          e.preventDefault();
          const navOffset = 68;
          const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
          });
          
          DOM.navLinks.forEach(l => l.classList.remove("active"));
          link.classList.add("active");
        }
      }
    });
  });

  // ScrollSpy using IntersectionObserver
  const sections = document.querySelectorAll("section[id]");
  const observerOptions = {
    root: null,
    rootMargin: "-25% 0px -55% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        DOM.navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

// ==============================================================================
// 8. FLOATING BUTTONS & AI ASSISTANT DEMO
// ==============================================================================

function setupFloatingButtons() {
  // Back to top button (bottom-left)
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      DOM.btnScrollTop.classList.add("visible");
    } else {
      DOM.btnScrollTop.classList.remove("visible");
    }
  });

  DOM.btnScrollTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Floating AI Assistant toggle (bottom-right)
  if (DOM.btnAssistantToggle && DOM.assistantPanel) {
    DOM.btnAssistantToggle.addEventListener("click", () => {
      clampAssistantPanelHeight();
      DOM.assistantPanel.classList.toggle("open");
      if (DOM.assistantPanel.classList.contains("open")) {
        if (DOM.assistantInput) DOM.assistantInput.focus();
      }
    });

    DOM.assistantCloseBtn.addEventListener("click", () => {
      DOM.assistantPanel.classList.remove("open");
    });

    // Reset / Clear Conversation button
    if (DOM.assistantResetBtn && DOM.assistantChatBody) {
      DOM.assistantResetBtn.addEventListener("click", () => {
        resetAssistantConversation();
      });
    }

    // Dynamic height recalculation on window resize
    window.addEventListener("resize", () => {
      if (DOM.assistantPanel.classList.contains("open")) {
        clampAssistantPanelHeight();
      }
    }, { passive: true });
  }

  // Assistant query interactions
  if (DOM.assistantSendBtn && DOM.assistantInput) {
    DOM.assistantSendBtn.addEventListener("click", handleAssistantQuery);
    DOM.assistantInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handleAssistantQuery();
    });
  }
}

/**
 * Ensures assistant panel never extends under or overlaps top navigation bar
 */
function clampAssistantPanelHeight() {
  if (!DOM.assistantPanel) return;
  const navH = (DOM.navbar && DOM.navbar.offsetHeight) ? DOM.navbar.offsetHeight : 64;
  const isMobile = window.innerWidth < 768;
  const clearance = isMobile ? 95 : 105;
  const maxAllowed = window.innerHeight - navH - clearance;
  DOM.assistantPanel.style.maxHeight = `${Math.max(320, maxAllowed)}px`;
}

/**
 * Animated typing indicator for realistic AI advisor experience
 */
function showTypingIndicator() {
  removeTypingIndicator();
  const typingEl = document.createElement("div");
  typingEl.className = "assistant-message bot typing";
  typingEl.id = "assistant-typing-indicator";
  typingEl.innerHTML = `
    <div class="msg-bubble typing-bubble">
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
    </div>
  `;
  DOM.assistantChatBody.appendChild(typingEl);
  DOM.assistantChatBody.scrollTop = DOM.assistantChatBody.scrollHeight;
}

function removeTypingIndicator() {
  const existing = document.getElementById("assistant-typing-indicator");
  if (existing) existing.remove();
}

/**
 * Resets the conversation to the rich initial state with quick suggestions
 */
function resetAssistantConversation() {
  if (!DOM.assistantChatBody) return;
  DOM.assistantChatBody.innerHTML = `
    <div class="assistant-pro-banner">
      <div class="pro-banner-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
      </div>
      <div class="pro-banner-text">
        <strong>Verified Solutions Intelligence:</strong> Ask about technical architectures, production automations, or instant project estimates.
      </div>
    </div>

    <div class="assistant-message bot">
      <div class="msg-bubble">
        <div class="bot-greeting-header">
          <span class="bot-badge-pill">⚡ Welcome</span>
          <span class="bot-timestamp">Live</span>
        </div>
        <p class="bot-text-primary">
          Hello! I am <strong>Hammad Hassan's AI Portfolio &amp; Solutions Advisor</strong>.
        </p>
        <p class="bot-text-body">
          I can provide verified technical architecture, live project demos, client ROI metrics, and instant hiring &amp; collaboration details across:
        </p>
        <div class="bot-domain-chips">
          <span class="domain-chip">🤖 AI Chatbots &amp; LLMs</span>
          <span class="domain-chip">⚡ Make.com &amp; n8n</span>
          <span class="domain-chip">💻 Modern Web Apps</span>
          <span class="domain-chip">📱 Mobile (React Native)</span>
          <span class="domain-chip">🎨 Graphic Design &amp; Books</span>
        </div>
        <p class="bot-prompt-hint">Tap a high-impact query below or type your inquiry:</p>
      </div>
    </div>

    <div class="assistant-shortcuts">
      <div class="shortcuts-kicker">Recommended Inquiries:</div>
      <button class="shortcut-chip" onclick="askAssistantShortcut('Showcase top Make.com automations')">
        <span class="chip-icon">⚡</span>
        <span class="chip-text">Showcase Make.com &amp; n8n Automations</span>
        <span class="chip-arrow">→</span>
      </button>
      <button class="shortcut-chip" onclick="askAssistantShortcut('How does Hammad build AI Chatbots?')">
        <span class="chip-icon">🤖</span>
        <span class="chip-text">How does Hammad build AI Chatbots?</span>
        <span class="chip-arrow">→</span>
      </button>
      <button class="shortcut-chip" onclick="askAssistantShortcut('What web applications has Hammad built?')">
        <span class="chip-icon">💻</span>
        <span class="chip-text">Live Web Apps (AP Roofing, BillingLoop, Opus)</span>
        <span class="chip-arrow">→</span>
      </button>
      <button class="shortcut-chip" onclick="askAssistantShortcut('Tell me about mobile applications and vibe coding')">
        <span class="chip-icon">📱</span>
        <span class="chip-text">Mobile Apps (SkyVoyage, FitPulse, CraveWave)</span>
        <span class="chip-arrow">→</span>
      </button>
      <button class="shortcut-chip" onclick="askAssistantShortcut('Tell me about Graphic Design and brand identity')">
        <span class="chip-icon">🎨</span>
        <span class="chip-text">Graphic Design Suites &amp; M-RIK Brand Identity</span>
        <span class="chip-arrow">→</span>
      </button>
      <button class="shortcut-chip" onclick="askAssistantShortcut('How can I contact or hire Hammad?')">
        <span class="chip-icon">💼</span>
        <span class="chip-text">Hire Hammad or Request a Custom Quote</span>
        <span class="chip-arrow">→</span>
      </button>
    </div>
  `;
  if (DOM.assistantInput) {
    DOM.assistantInput.value = "";
    DOM.assistantInput.focus();
  }
}

/**
 * Handles user query in local offline assistant demo.
 */
function handleAssistantQuery() {
  const query = DOM.assistantInput.value.trim();
  if (!query) return;

  // Add user bubble
  addAssistantMessage(query, "user");
  DOM.assistantInput.value = "";

  // Show typing indicator
  showTypingIndicator();

  // Generate intelligent response with natural thinking duration
  setTimeout(() => {
    removeTypingIndicator();
    const response = generateAssistantResponse(query);
    addAssistantMessage(response, "bot");
  }, 420);
}

function addAssistantMessage(text, sender) {
  const msgEl = document.createElement("div");
  msgEl.className = `assistant-message ${sender}`;
  msgEl.innerHTML = `<div class="msg-bubble">${text}</div>`;
  DOM.assistantChatBody.appendChild(msgEl);
  DOM.assistantChatBody.scrollTop = DOM.assistantChatBody.scrollHeight;
}

window.askAssistantShortcut = function(promptText) {
  addAssistantMessage(promptText, "user");
  showTypingIndicator();

  setTimeout(() => {
    removeTypingIndicator();
    const response = generateAssistantResponse(promptText);
    addAssistantMessage(response, "bot");
  }, 380);
};

function generateAssistantResponse(query) {
  const q = query.toLowerCase();

  // 1. Background, Bio, Education & Verified Credentials
  if (q.includes("background") || q.includes("about") || q.includes("who is") || q.includes("education") || q.includes("qualification") || q.includes("degree") || q.includes("cert") || q.includes("credentials")) {
    return `<strong>Hammad Hassan</strong> is an <strong>AI &amp; Digital Solutions Developer</strong> with an established track record in production AI, full-stack engineering, and workflow automation:
<br><br>
🎓 <strong>Formal Education:</strong>
<br>• <strong>BS Computer Science (BSCS)</strong> — Virtual University of Pakistan (Completed, 2024)
<br>• <strong>Associate Degree in Arts (ADA)</strong> — University of Sargodha (Completed, 2021)
<br>• <strong>F.Sc Pre-Engineering</strong> — Superior College Talagang (Completed, 2018)
<br><br>
📜 <strong>12+ Verified Global Credentials:</strong>
<br>• <em>ADBI (Asian Development Bank Institute):</em> AI in Financial Inclusion, Public Health, Green Finance, Circular Economy &amp; ESG Innovation
<br>• <em>Deloitte Australia:</em> Technology Virtual Experience Program
<br>• <em>University of Helsinki:</em> Elements of AI &amp; Ethical Foundations
<br>• <em>DeepLearning.AI &amp; OpenHPI:</em> Generative AI &amp; Prompt Engineering
<br><br>
Need a custom AI, automation, or web application? <a href="https://wa.me/923035553044" target="_blank" style="color:#0284c7; font-weight:700; text-decoration:underline;">Chat directly on WhatsApp →</a>`;
  }

  // 2. Make.com, n8n, Webhooks & Enterprise Automation Workflows
  if (q.includes("automation") || q.includes("make") || q.includes("n8n") || q.includes("webhook") || q.includes("lead") || q.includes("drip") || q.includes("scenario") || q.includes("pipeline") || q.includes("crm")) {
    return `Hammad architects high-speed, zero-downtime workflow automations using <strong>Make.com</strong> and self-hosted <strong>n8n</strong>:
<br><br>
⚡ <strong>1. Client Plan Subscription &amp; Progressive Email Drip Sequence (Make.com):</strong>
<br>• 7-module automated sequence: Custom Webhook ➔ Instant Plan 1 (Day 0) ➔ 2-Day Sleep Delay ➔ Follow-up Plan 2 ➔ 6-Day Sleep Delay ➔ Final Mastery Blueprint Plan 3 ➔ Real-time Google Sheets CRM row logging.
<br>• Eliminates 100% of manual email dispatch delays.
<br><br>
⚡ <strong>2. Client Intake &amp; Lead Dispatch Engine (Make.com):</strong>
<br>• Instant Webhook triggers upon form submission ➔ Dispatches client confirmation email ➔ Alerts business owner via urgent alert email ➔ Appends lead data to Google Sheets CRM ➔ Pushes team alerts to Slack in under <strong>2 seconds</strong>!
<br><br>
⚡ <strong>3. AI Medical Chatbot &amp; Triage Routing (n8n &amp; Botpress):</strong>
<br>• Automated patient symptom ingestion, emergency risk scoring, and webhook data syncing.
<br><br>
Explore these workflows in the <a href="#projects" onclick="filterCategory('Automations')" style="color:#0284c7; font-weight:700; text-decoration:underline;">Automations Section →</a>`;
  }

  // 3. AI Chatbots, LLMs & Botpress
  if (q.includes("chatbot") || q.includes("botpress") || q.includes("llm") || q.includes("ai chatbot") || q.includes("prompt")) {
    return `Hammad specializes in <strong>Enterprise Conversational AI &amp; Intelligent Chatbots</strong> built on <strong>Botpress, OpenAI GPT APIs, Anthropic Claude, and custom vector databases</strong>:
<br><br>
🤖 <strong>Core Capabilities:</strong>
<br>• <strong>Multi-Turn Context &amp; Memory:</strong> Stateful conversation tracking across complex client journeys.
<br>• <strong>Intelligent Triage &amp; Intent Routing:</strong> Automatically classifies queries into high-priority leads, technical support, or emergency escalation.
<br>• <strong>Seamless Webhook Hooks:</strong> Direct bi-directional synchronization with Make.com, n8n, Slack, CRMs, and email dispatchers.
<br>• <strong>Zero Hallucination Guardrails:</strong> Strict RAG (Retrieval-Augmented Generation) knowledge boundaries for clinics, businesses, and e-commerce.
<br><br>
Check out the <em>AI Medical Chatbot &amp; Triage System</em> under the <a href="#projects" onclick="filterCategory('AI Chatbots')" style="color:#0284c7; font-weight:700; text-decoration:underline;">AI Chatbots gallery →</a>`;
  }

  // 4. Web Applications
  if (q.includes("roofing") || q.includes("ap roofing") || q.includes("coating")) {
    return `<strong>AP Roofing &amp; Specialty Coatings</strong> is a high-converting commercial &amp; residential roofing web platform engineered for AP Roofing LLC (aproofingandspecialitycoatings.us):
<br><br>
• <strong>Services:</strong> Architectural shingle, standing seam metal roofs, and 15–20 year specialty elastomeric coatings.
<br>• <strong>High-Converting Funnel:</strong> Free inspection quote engine, storm damage emergency dispatch hotline (<a href="tel:3083804965" style="color:#0284c7; font-weight:600;">(308) 380-4965</a>), and 5-Star Google Verified Reviews via Trustindex.
<br><br>
<a href="https://aproofingandspecialitycoatings.us/" target="_blank" style="color:#0284c7; font-weight:700; text-decoration:underline;">Launch Live AP Roofing Website ↗</a>`;
  }

  if (q.includes("billingloop") || q.includes("billing loop") || q.includes("medical billing") || q.includes("rcm")) {
    return `<strong>BillingLoop (Medical Billing Company In NY)</strong> is a premier healthcare revenue cycle management and medical billing web platform (billingloop.com):
<br><br>
• <strong>Verified Performance:</strong> 99% First Pass Clean Claim Rate, 99% Accuracy, 25% Practice Revenue Growth, 25% Reduction in operating overhead, and 100% HIPAA Compliance.
<br>• <strong>Full Service Suite:</strong> Certified Medical Coding (ICD-10/CPT), Payer Credentialing, MIPS/MACRA Quality Incentives, and Virtual Front Desk receptionists.
<br><br>
<a href="https://billingloop.com/" target="_blank" style="color:#0284c7; font-weight:700; text-decoration:underline;">Open Live BillingLoop Platform ↗</a>`;
  }

  if (q.includes("rankyoup") || q.includes("geo") || q.includes("aeo") || q.includes("trust network")) {
    return `<strong>Rankyoup (AI Trust &amp; Generative Engine Optimization Platform)</strong> bridges modern enterprises directly into LLM recommendation engines (ChatGPT, Google Gemini, Claude, Perplexity AI, and Google AI Overviews):
<br><br>
• <strong>AEO &amp; GEO Optimization:</strong> Generative Engine Optimization ensuring brands are cited and recommended in conversational search queries.
<br>• <strong>Interactive 3D Neural Architecture:</strong> Dynamic holographic cybernetic interface demonstrating live AI trust streams and Google Maps 3-pack local dominance.
<br><br>
<a href="https://steelblue-loris-828155.hostingersite.com/" target="_blank" style="color:#0284c7; font-weight:700; text-decoration:underline;">Experience Live Rankyoup Platform ↗</a>`;
  }

  if (q.includes("yacht") || q.includes("opus") || q.includes("charter")) {
    return `<strong>Opus Miami (Miami Event Yacht)</strong> is a luxury private mega-yacht charter web platform (miamieventyacht.com) designed for up to 250+ guests across Biscayne Bay:
<br><br>
• <strong>Venue Showcase:</strong> Multi-deck mega-yacht featuring a climate-controlled interior salon and panoramic open-air sky deck lounge with 360° Miami skyline views.
<br>• <strong>Booking Engine:</strong> Direct quote calculator, yacht catering packages, open bars, live AV staging, and hotline integration (<a href="tel:9544941448" style="color:#0284c7; font-weight:600;">(954) 494-1448</a>).
<br><br>
<a href="https://miamieventyacht.com/" target="_blank" style="color:#0284c7; font-weight:700; text-decoration:underline;">Open Live Opus Miami Yacht Website ↗</a>`;
  }

  if (q.includes("web") || q.includes("website") || q.includes("frontend") || q.includes("electrician") || q.includes("apex") || q.includes("solar") || q.includes("hajj") || q.includes("horizon") || q.includes("wellness")) {
    return `Hammad builds fast, responsive web platforms using <strong>HTML5, CSS3, JavaScript, WordPress, and Elementor Pro</strong> with zero bloat and high conversion rates:
<br><br>
🌐 <strong>Featured Production Web Platforms:</strong>
<br>• <strong>AP Roofing &amp; Specialty Coatings:</strong> Commercial roofing &amp; coating restoration platform
<br>• <strong>BillingLoop:</strong> NY Medical Billing &amp; Healthcare RCM platform (99% clean claim rate)
<br>• <strong>Rankyoup:</strong> AI Trust &amp; Generative Engine Optimization (GEO/AEO) platform
<br>• <strong>Opus Miami:</strong> Luxury private event mega-yacht charters (250+ guests)
<br>• <strong>An-Noor Elite:</strong> Luxury Hajj &amp; Umrah pilgrimage discovery platform
<br>• <strong>Apex Chauffeur:</strong> Luxury ground transportation &amp; fleet management web app
<br>• <strong>Horizon3D:</strong> Futuristic supersonic aviation &amp; 3D hangar platform
<br>• <strong>Top Electrician Solutions:</strong> 24/7 emergency electrical repair web platform
<br>• <strong>Solar System 3D:</strong> Orbital mechanics and planetary physics simulator
<br><br>
Filter all web apps under the <a href="#projects" onclick="filterCategory('Web Applications')" style="color:#0284c7; font-weight:700; text-decoration:underline;">Web Applications tab →</a>`;
  }

  // 5. Mobile Applications & AI Vibe Coding
  if (q.includes("mobile") || q.includes("app") || q.includes("react native") || q.includes("travel") || q.includes("fitness") || q.includes("skyvoyage") || q.includes("fitpulse") || q.includes("cravewave") || q.includes("drivepulse") || q.includes("weather") || q.includes("vibe coding")) {
    return `Hammad develops high-performance, cross-platform mobile apps for iOS and Android using <strong>React Native</strong> and modern <strong>AI Vibe Coding</strong> workflows:
<br><br>
📱 <strong>Featured Mobile Apps:</strong>
<br>• <strong>SkyVoyage:</strong> Smart flight booking, 1,200+ curated tour packages, microclimate weather radar, and scannable digital boarding passes.
<br>• <strong>FitPulse Pro:</strong> Apple Fitness-style concentric activity rings (Move, Exercise, Stand), BLE heart rate monitoring, habit streaks, and 94% bio-recovery scoring.
<br>• <strong>CraveWave:</strong> On-demand food delivery app with AI taste recommendations and live GPS courier tracking.
<br>• <strong>DrivePulse:</strong> Urban mobility &amp; ride-hailing app with turn-by-turn navigation and live driver telematics.
<br>• <strong>PixelPerfect Weather:</strong> Atmospheric glassmorphic weather radar app with multi-city forecasting.
<br><br>
Explore these mobile apps under the <a href="#projects" onclick="filterCategory('Mobile Applications')" style="color:#0284c7; font-weight:700; text-decoration:underline;">Mobile Applications gallery →</a>`;
  }

  // 6. Graphic Design & Brand Identity
  if (q.includes("graphic") || q.includes("graphic design") || q.includes("logo") || q.includes("branding") || q.includes("m-rik") || q.includes("social") || q.includes("marketing") || q.includes("canva") || q.includes("creatives")) {
    return `In <strong>Graphic Design &amp; Brand Creatives</strong>, Hammad engineers international-standard visual systems crafted with <strong>Canva</strong> and <strong>advanced AI visual suites</strong>:
<br><br>
🎨 <strong>Key Signature Portfolios:</strong>
<br>• <strong>Social Media &amp; Marketing Graphics Kit:</strong> Commercial promotional banners, brand campaign collateral, and multi-device marketing kits.
<br>• <strong>Digital Brand Creatives &amp; Thought Leadership Suite:</strong> Viral product psychology carousels ('Why 90% Apps Fail?'), executive LinkedIn authority banners, and tech innovation visual suites.
<br>• <strong>M-RIK Consultancy Services (Corporate Logo Suite):</strong> 5 strategic brand identity iterations (interlocking MR growth monogram, folded ribbon 'M', orbital pillars crest, 3D metallic gold/titanium emblem, and isometric diamond badge).
<br>• <strong>Qurani Shakhsiyaat &amp; Maqamat:</strong> Sacred cartography, antique tazhib illuminated borders, and historic architectural chronicles.
<br><br>
View all 8 design suites in full HD under the <a href="#projects" onclick="filterCategory('Graphic Design')" style="color:#0284c7; font-weight:700; text-decoration:underline;">Graphic Design tab →</a>`;
  }

  // 7. Book Design & Publishing
  if (q.includes("book") || q.includes("pancake") || q.includes("story") || q.includes("kdp") || q.includes("publishing") || q.includes("author") || q.includes("early readers")) {
    return `In <strong>Book Design &amp; Editorial Publishing</strong>, Hammad authors, illustrates, and formats books to strict <strong>Amazon KDP 300 DPI</strong> print-ready preflight standards:
<br><br>
📚 <strong>Featured Publications:</strong>
<br>• <strong>Stop That Pancake! (A Hilarious Story for Early Readers):</strong> Authored &amp; illustrated by Hammad Hassan—features 5 interactive story spreads following a runaway pancake on a farmyard slapstick chase!
<br>• <strong>Animals of the World:</strong> 3-spread wildlife encyclopedia for kids.
<br>• <strong>ABC Joy Book &amp; Kids Joy Activity Book:</strong> Phonics adventure &amp; multi-skill developmental workbook.
<br>• <strong>Quranic Studies &amp; Historical Chronicles:</strong> Including <em>90 Quranic Duas</em> (embossed gold typography), <em>Easy Quran Reading</em> (500 passages), and <em>Madinah Ki Kahani</em>.
<br><br>
Explore all publications under the <a href="#projects" onclick="filterCategory('Book Design')" style="color:#0284c7; font-weight:700; text-decoration:underline;">Book Design category →</a>`;
  }

  // 8. Translation & Bilingual Localization
  if (q.includes("translation") || q.includes("translate") || q.includes("urdu") || q.includes("bilingual") || q.includes("localization")) {
    return `In <strong>Translation &amp; Bilingual Localization</strong>, Hammad specializes in technical and theological translation, converting classical manuscripts into academic, high-converting English editions:
<br><br>
🌐 <strong>Quranic Vocabulary &amp; Grammar Curriculum (Urdu to English Translation):</strong>
<br>• <strong>Core Purpose:</strong> Translates a comprehensive Quranic demonstrative pronoun (Asma-ul-Isharah: هَذَا, ذَلِكَ, هَذِهِ, تِلْكَ) and high-frequency vocabulary curriculum from classical Urdu into modern academic English.
<br>• <strong>Problem Solved:</strong> Eradicates the language barrier for millions of global English speakers, new Muslims, and students who cannot read Urdu Nastaliq, teaching 4 high-yield demonstrative pronouns appearing across 798+ verses in the Holy Quran with exact occurrence statistics.
<br>• <strong>Tools &amp; Workflow:</strong> Canva Pro for editorial quadrant architecture, classical lexicon research (Lane's Lexicon, Hans Wehr), Google Translate &amp; AI cross-validation, MS Word for concordance tables, and Amazon KDP 300 DPI preflight.
<br>• <strong>Interactive Gallery:</strong> Features a 3D hardcover studio mockup and an exclusive side-by-side comparison screen directly contrasting the original Urdu manuscript against the English translation!
<br><br>
Explore it under the <a href="#projects" onclick="filterCategory('Translation')" style="color:#0284c7; font-weight:700; text-decoration:underline;">Translation category →</a>`;
  }

  // 8.5. Professional Work Experience & Engagements
  if (q.includes("experience") || q.includes("work") || q.includes("job") || q.includes("career") || q.includes("marvel") || q.includes("nexus") || q.includes("company") || q.includes("history") || q.includes("client")) {
    return `💼 <strong>Hammad Hassan's Professional Work Experience &amp; Engagements:</strong>
<br><br>
📱 <strong>1. Mobile Application Developer &mdash; Marvel Logics (US):</strong>
<br>• <em>Mar 2025 &mdash; Mar 2026:</em> Engineered high-performance cross-platform enterprise mobile apps for US commercial clients using React Native and TypeScript, implementing offline-first state synchronization and biometric security.
<br><br>
📊 <strong>2. Senior Data Operations Specialist &amp; Graphic Designer &mdash; BTS Pvt Ltd &amp; FQE:</strong>
<br>• <em>2025 &mdash; Present (Retainer):</em> Leading high-volume enterprise data auditing, regex cleaning, and executive reporting alongside designing corporate visual identities and viral social media marketing suites.
<br><br>
🤖 <strong>3. AI Chatbot Architect &amp; Workflow Automation Specialist &mdash; Client Retainers:</strong>
<br>• <em>2024 &mdash; Present:</em> Built autonomous Make.com/n8n webhook pipelines and Botpress/OpenAI conversational systems, slashing inbound lead turnaround to under 60 seconds.
<br><br>
📚 <strong>4. Lead Book Designer, Typesetting &amp; Curriculum Specialist &mdash; FQE &amp; Global Publishers:</strong>
<br>• <em>2023 &mdash; Present:</em> Directing full-lifecycle book formatting, Amazon KDP 300 DPI preflight, and bilingual Arabic-Urdu-English curriculum publications.
<br><br>
🌐 <strong>5. WordPress &amp; Custom CMS Web Developer &mdash; Private Global Clients:</strong>
<br>• <em>Sep 2024 &mdash; Jan 2025:</em> Designed and deployed custom lightweight WordPress platforms and WooCommerce storefronts, achieving 90+ Google PageSpeed scores.
<br><br>
🏥 <strong>6. Healthcare Web Applications Developer &mdash; Nexus EMR (US):</strong>
<br>• <em>May 2024 &mdash; May 2024 (Contract Sprint):</em> Developed HIPAA-conscious clinical web interfaces and patient scheduling modules, eliminating clinical navigation friction.
<br><br>
Explore the interactive timeline in the <a href="#work" style="color:#0284c7; font-weight:700; text-decoration:underline;">Work Experience section →</a>`;
  }

  // 9. Contact, Hiring, Pricing & Collaboration
  if (q.includes("contact") || q.includes("hire") || q.includes("email") || q.includes("whatsapp") || q.includes("quote") || q.includes("price") || q.includes("timeline") || q.includes("cost")) {
    return `💼 <strong>Ready to Collaborate with Hammad Hassan?</strong>
<br><br>
Hammad delivers high-quality solutions with fast turnaround times and clear milestone pricing:
<br><br>
💬 <strong>Direct WhatsApp:</strong> <a href="https://wa.me/923035553044" target="_blank" style="color:#0284c7; font-weight:700; text-decoration:underline;">+92 303 5553044 (Click to Chat)</a>
<br>✉️ <strong>Direct Email:</strong> <a href="mailto:${PORTFOLIO_CONFIG.email}" style="color:#0284c7; font-weight:700; text-decoration:underline;">${PORTFOLIO_CONFIG.email}</a>
<br>🔗 <strong>LinkedIn:</strong> <a href="${PORTFOLIO_CONFIG.linkedinUrl}" target="_blank" style="color:#0284c7; font-weight:700; text-decoration:underline;">linkedin.com/in/hammad-hassan</a>
<br><br>
You can also use the <strong>Instant Project Drafter</strong> below to generate and send a pre-structured project briefing directly to WhatsApp or Email!`;
  }

  // Default Fallback
  return `I can help you explore <strong>Hammad Hassan's</strong> verified work in <strong>AI Chatbots</strong>, <strong>Make.com / n8n Automations</strong>, <strong>Full-Stack Web Applications</strong>, <strong>Mobile Apps</strong>, and <strong>Graphic &amp; Publishing Design</strong>.<br><br>Tap any of the suggested topics above or ask me specific questions like <em>"What Make.com automations did Hammad build?"</em> or <em>"How do I hire Hammad?"</em>!`;
}

// ==============================================================================
// 9. CLIENT PROJECT ENGAGEMENT & DIRECT DISPATCH ENGINE
// ==============================================================================

function getDrafterData() {
  const name = DOM.drafterName ? DOM.drafterName.value.trim() : "";
  const contact = DOM.drafterContact ? DOM.drafterContact.value.trim() : "";
  const topic = DOM.drafterTopic ? DOM.drafterTopic.value : "AI & Digital Solutions";
  const message = DOM.drafterMessage ? DOM.drafterMessage.value.trim() : "";

  return { name, contact, topic, message };
}

function setupContactDrafter() {
  // 1. WhatsApp Direct Dispatch Handler
  if (DOM.drafterWhatsAppBtn) {
    DOM.drafterWhatsAppBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const data = getDrafterData();

      if (!data.name || !data.message) {
        showDrafterStatus("Please provide your Name and a brief Project description before dispatching.", "error");
        if (!data.name && DOM.drafterName) DOM.drafterName.focus();
        else if (DOM.drafterMessage) DOM.drafterMessage.focus();
        return;
      }

      const whatsappText = `*Project Inquiry - Hammad Hassan Portfolio*

👤 *Client / Name:* ${data.name}
📫 *Direct Contact:* ${data.contact || "Provided upon request"}
🎯 *Service Needed:* ${data.topic}

📝 *Project Details / Goals:*
${data.message}

---
_Sent via Hammad Hassan Portfolio Engagement Portal_`;

      const targetNumber = PORTFOLIO_CONFIG.whatsappNumber || "923035553044";
      const waUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(whatsappText)}`;
      window.open(waUrl, "_blank");
      showDrafterStatus("Connecting to WhatsApp... Your structured briefing is pre-loaded!", "success");
    });
  }

  // 2. Email Client Dispatch Handler
  if (DOM.drafterEmailBtn) {
    DOM.drafterEmailBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const data = getDrafterData();

      if (!data.name || !data.message) {
        showDrafterStatus("Please provide your Name and a brief Project description before dispatching.", "error");
        if (!data.name && DOM.drafterName) DOM.drafterName.focus();
        else if (DOM.drafterMessage) DOM.drafterMessage.focus();
        return;
      }

      const subject = encodeURIComponent(`[Project Inquiry] ${data.topic} - ${data.name}`);
      const body = encodeURIComponent(
        `Hello Hammad,\n\nI would like to discuss a project with the following details:\n\n` +
        `• Name / Company: ${data.name}\n` +
        `• Direct Contact: ${data.contact || "N/A"}\n` +
        `• Service Needed: ${data.topic}\n\n` +
        `PROJECT DETAILS & GOALS:\n` +
        `--------------------------------------------------\n` +
        `${data.message}\n\n` +
        `Looking forward to discussing next steps.\n\n` +
        `Best regards,\n${data.name}`
      );

      const mailtoUrl = `mailto:${PORTFOLIO_CONFIG.email}?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;
      showDrafterStatus("Opening your email client with structured project briefing...", "success");
    });
  }

  // 3. Full Brief Copy to Clipboard
  if (DOM.drafterCopyBtn) {
    DOM.drafterCopyBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const data = getDrafterData();

      const fullText = 
        `To: ${PORTFOLIO_CONFIG.email}\n` +
        `Subject: [Project Inquiry] ${data.topic} - ${data.name || "Client"}\n\n` +
        `PROJECT INQUIRY BRIEFING\n` +
        `==================================================\n` +
        `Client / Organization: ${data.name || "N/A"}\n` +
        `Direct Contact: ${data.contact || "N/A"}\n` +
        `Service Needed: ${data.topic}\n\n` +
        `PROJECT DETAILS & GOALS:\n` +
        `--------------------------------------------------\n` +
        `${data.message || "Project requirements to be discussed."}\n\n` +
        `Best regards,\n${data.name || "Client"}`;

      navigator.clipboard.writeText(fullText).then(() => {
        showDrafterStatus("Project inquiry copied to clipboard! You can paste it into email, Slack, or any platform.", "success");
      }).catch(() => {
        showDrafterStatus("Could not auto-copy. Please select text manually.", "error");
      });
    });
  }
}

function showDrafterStatus(msg, type) {
  if (!DOM.drafterStatus) return;
  DOM.drafterStatus.textContent = msg;
  if (type === "success") {
    DOM.drafterStatus.style.color = "#4ade80";
    DOM.drafterStatus.style.background = "rgba(34, 197, 94, 0.12)";
    DOM.drafterStatus.style.border = "1px solid rgba(34, 197, 94, 0.25)";
  } else {
    DOM.drafterStatus.style.color = "#f87171";
    DOM.drafterStatus.style.background = "rgba(239, 68, 68, 0.12)";
    DOM.drafterStatus.style.border = "1px solid rgba(239, 68, 68, 0.25)";
  }
  DOM.drafterStatus.style.display = "block";
  setTimeout(() => {
    DOM.drafterStatus.style.display = "none";
  }, 5500);
}

// ==============================================================================
// 10. MODAL KEYBOARD & BACKDROP EVENTS
// ==============================================================================

function setupModalEvents() {
  if (DOM.modalCloseBtn) {
    DOM.modalCloseBtn.addEventListener("click", closeProjectModal);
  }

  if (DOM.modalBackdrop) {
    DOM.modalBackdrop.addEventListener("click", (e) => {
      if (e.target === DOM.modalBackdrop) {
        closeProjectModal();
      }
    });
  }

  if (DOM.modalNextBtn) {
    DOM.modalNextBtn.addEventListener("click", modalNextImage);
  }

  if (DOM.modalPrevBtn) {
    DOM.modalPrevBtn.addEventListener("click", modalPrevImage);
  }

  // Click on main image to advance to next page
  if (DOM.modalMainImg) {
    DOM.modalMainImg.style.cursor = "pointer";
    DOM.modalMainImg.title = "Click to view next page";
    DOM.modalMainImg.addEventListener("click", (e) => {
      const project = state.activeModalProject;
      if (project && project.galleryImages && project.galleryImages.length > 1) {
        modalNextImage();
      }
    });
  }

  // Touch Swipe for mobile and tablets
  let touchStartX = 0;
  let touchEndX = 0;

  if (DOM.modalGalleryStage) {
    DOM.modalGalleryStage.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    DOM.modalGalleryStage.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 45) {
        modalNextImage(); // Swiped left -> Next page
      } else if (touchEndX > touchStartX + 45) {
        modalPrevImage(); // Swiped right -> Previous page
      }
    }, { passive: true });
  }

  // Keyboard navigation (Esc to close, arrows for gallery)
  document.addEventListener("keydown", (e) => {
    if (DOM.modalBackdrop && DOM.modalBackdrop.classList.contains("open")) {
      if (e.key === "Escape") closeProjectModal();
      if (e.key === "ArrowRight") modalNextImage();
      if (e.key === "ArrowLeft") modalPrevImage();
    }
  });
}

// ==============================================================================
// 10. EXPERT SCROLLING & 3D INTERACTIVE TILT ENGINE
// ==============================================================================

/**
 * Initializes real-time top scroll progress bar, scroll-triggered 3D flip reveals,
 * and high-performance perspective tilt interactions.
 */
function setupExpertScrollingEngine() {
  const progressBar = document.getElementById("scroll-progress-bar");

  // 1. Real-time Top Scroll Progress Bar
  function updateScrollProgress() {
    if (!progressBar) return;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  }

  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  updateScrollProgress();

  // 2. High-Performance IntersectionObserver for 3D Scroll Reveals
  const revealTargets = document.querySelectorAll(`
    .projects-hero,
    .search-filter-wrapper,
    .section-header-compact,
    .about-bio-card,
    .disciplines-grid .discipline-flip-card,
    .timeline-item,
    .education-grid .edu-card,
    .cert-grid .cert-card,
    .contact-info-card,
    .drafter-card
  `);

  revealTargets.forEach(el => {
    el.classList.add("scroll-reveal");
    if (el.parentElement) {
      if (el.parentElement.classList.contains("disciplines-grid") || 
          el.parentElement.classList.contains("education-grid") || 
          el.parentElement.classList.contains("cert-grid")) {
        const childIndex = Array.from(el.parentElement.children).indexOf(el);
        el.style.setProperty("--stagger-index", (childIndex % 3));
      }
    }
  });

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: "0px 0px -40px 0px",
    threshold: 0.1
  });

  revealTargets.forEach(el => scrollObserver.observe(el));

  // 3. Bind 3D Card Hover & Flip Tilt
  bindCards3DTilt();
}

/**
 * Attaches smooth 3D perspective tilt & dynamic light glare sheen to cards.
 */
function bindCards3DTilt() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const targetCards = document.querySelectorAll(`
    .project-card,
    .edu-card,
    .cert-card,
    .timeline-card,
    .about-bio-card
  `);

  targetCards.forEach(card => {
    if (card._tiltBound) return;
    card._tiltBound = true;

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (((y - centerY) / centerY) * -6).toFixed(2);
      const rotateY = (((x - centerX) / centerX) * 6).toFixed(2);

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale3d(1.015, 1.015, 1.015)`;

      const glareX = ((x / rect.width) * 100).toFixed(1);
      const glareY = ((y / rect.height) * 100).toFixed(1);
      card.style.setProperty("--glare-x", `${glareX}%`);
      card.style.setProperty("--glare-y", `${glareY}%`);
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

// ==============================================================================
// 11. UTILITY HELPERS
// ==============================================================================

function escapeHtml(string) {
  if (!string) return "";
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function refreshLucideIcons() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    try {
      window.lucide.createIcons();
    } catch (e) {
      console.warn("Lucide icon generation caught non-fatal exception:", e);
    }
  }
}

// ==============================================================================
// 12. AI FUTURISTIC BACKGROUND & MOBILE RESPONSIVE ENGINE
// ==============================================================================

/**
 * Initializes the AI Neural Synapse & Constellation Engine:
 * - High-performance HiDPI HTML5 canvas rendering floating neural nodes
 * - Luminous gradient synaptic connections with dynamic opacity
 * - Traveling AI signal packets (data impulses) along neural pathways
 * - Interactive pointer gravity & synaptic beam attraction (desktop & touch)
 * - Smooth lerped cursor ambient glow halo
 * - Page Visibility & reduced motion battery preservation for iOS & Android
 */
function setupAiBackgroundEngine() {
  const canvas = document.getElementById("ai-neural-canvas");
  const cursorAura = document.getElementById("ai-cursor-aura");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Configuration tuned for 60-120fps smooth performance
  let width = 0;
  let height = 0;
  let dpr = 1;
  let animationFrameId = null;
  let lastTimestamp = 0;

  // Pointer state (mouse or touch)
  const pointer = {
    x: -9999,
    y: -9999,
    targetX: -9999,
    targetY: -9999,
    active: false,
    radius: 170
  };

  // Check prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Color palette for neural synapses and impulses (Sky Cyan, Indigo, Teal, Neon Violet)
  const nodeColors = [
    { r: 14, g: 165, b: 233 },   // Sky Cyan (#0ea5e9)
    { r: 99, g: 102, b: 241 },   // Electric Indigo (#6366f1)
    { r: 20, g: 184, b: 166 },   // Emerald Teal (#14b8a6)
    { r: 168, g: 85, b: 247 },   // Neon Violet (#a855f7)
    { r: 2, g: 132, b: 199 }     // Royal Sky (#0284c7)
  ];

  // Neural Node Class
  class NeuralNode {
    constructor() {
      this.init(true);
    }

    init(randomPos = false) {
      this.x = randomPos ? Math.random() * width : (Math.random() > 0.5 ? 0 : width);
      this.y = randomPos ? Math.random() * height : Math.random() * height;
      
      const speedScale = (window.innerWidth < 768) ? 0.35 : 0.5;
      const angle = Math.random() * Math.PI * 2;
      const speed = (0.25 + Math.random() * 0.45) * speedScale;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;

      this.baseRadius = 1.6 + Math.random() * 1.8;
      this.radius = this.baseRadius;
      this.pulseSpeed = 0.02 + Math.random() * 0.03;
      this.pulsePhase = Math.random() * Math.PI * 2;

      this.color = nodeColors[Math.floor(Math.random() * nodeColors.length)];
      this.baseAlpha = 0.45 + Math.random() * 0.45;
      this.alpha = this.baseAlpha;
    }

    update(dt) {
      // Pulse animation
      this.pulsePhase += this.pulseSpeed * dt;
      this.radius = this.baseRadius + Math.sin(this.pulsePhase) * 0.6;

      // Position update
      this.x += this.vx * dt;
      this.y += this.vy * dt;

      // Soft pointer attraction
      if (pointer.active) {
        const dx = pointer.x - this.x;
        const dy = pointer.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < pointer.radius && dist > 0) {
          const force = (1 - dist / pointer.radius) * 0.045;
          this.vx += (dx / dist) * force;
          this.vy += (dy / dist) * force;
          // Clamp velocity
          const maxSpeed = 1.4;
          const currentSpeed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
          if (currentSpeed > maxSpeed) {
            this.vx = (this.vx / currentSpeed) * maxSpeed;
            this.vy = (this.vy / currentSpeed) * maxSpeed;
          }
        }
      }

      // Drag friction
      this.vx *= 0.992;
      this.vy *= 0.992;

      // Wrap around edges with slight padding
      const pad = 20;
      if (this.x < -pad) this.x = width + pad;
      else if (this.x > width + pad) this.x = -pad;
      if (this.y < -pad) this.y = height + pad;
      else if (this.y > height + pad) this.y = -pad;
    }

    draw(ctx) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, Math.max(0.5, this.radius), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.alpha})`;
      ctx.shadowColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.7)`;
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.restore();
    }
  }

  // Signal Packet (AI Data Impulse along synaptic line)
  class SignalPacket {
    constructor(nodeA, nodeB) {
      this.nodeA = nodeA;
      this.nodeB = nodeB;
      this.progress = 0;
      this.speed = 0.015 + Math.random() * 0.02;
      this.color = nodeA.color;
      this.size = 2.2 + Math.random() * 1.2;
      this.dead = false;
    }

    update(dt) {
      this.progress += this.speed * dt;
      if (this.progress >= 1) {
        this.dead = true;
      }
    }

    draw(ctx) {
      if (this.dead) return;
      const x = this.nodeA.x + (this.nodeB.x - this.nodeA.x) * this.progress;
      const y = this.nodeA.y + (this.nodeB.y - this.nodeA.y) * this.progress;

      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, 0.95)`;
      ctx.shadowColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.9)`;
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.restore();
    }
  }

  let nodes = [];
  let signalPackets = [];

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    // Responsive node count: lightweight on mobile to preserve 60-120fps & battery
    const isMobile = width < 768;
    const targetCount = isMobile ? 24 : 52;
    pointer.radius = isMobile ? 120 : 170;

    if (nodes.length !== targetCount) {
      nodes = [];
      for (let i = 0; i < targetCount; i++) {
        nodes.push(new NeuralNode());
      }
      signalPackets = [];
    }
  }

  resizeCanvas();

  // Resize listener with debounce
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resizeCanvas, 150);
  }, { passive: true });

  window.addEventListener("orientationchange", () => {
    setTimeout(resizeCanvas, 200);
  }, { passive: true });

  // Pointer tracking (mouse and touch)
  function setPointerPosition(clientX, clientY) {
    pointer.targetX = clientX;
    pointer.targetY = clientY;
    if (!pointer.active) {
      pointer.x = clientX;
      pointer.y = clientY;
    }
    pointer.active = true;

    if (cursorAura && window.matchMedia("(hover: hover)").matches) {
      cursorAura.style.opacity = "1";
    }
  }

  window.addEventListener("mousemove", (e) => {
    setPointerPosition(e.clientX, e.clientY);
  }, { passive: true });

  document.addEventListener("mouseleave", () => {
    pointer.active = false;
    if (cursorAura) cursorAura.style.opacity = "0";
  });

  // Touch tracking for iOS and Android
  window.addEventListener("touchstart", (e) => {
    if (e.touches && e.touches.length > 0) {
      setPointerPosition(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  window.addEventListener("touchmove", (e) => {
    if (e.touches && e.touches.length > 0) {
      setPointerPosition(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  window.addEventListener("touchend", () => {
    // Fade pointer effect gently on mobile touch release
    setTimeout(() => { pointer.active = false; }, 400);
  }, { passive: true });

  // Spawn AI Data Impulse occasionally between connected nodes
  let lastPacketSpawn = 0;
  function maybeSpawnSignalPacket(now, connectedPairs) {
    const isMobile = width < 768;
    const maxPackets = isMobile ? 3 : 7;
    const spawnInterval = isMobile ? 900 : 500;

    if (signalPackets.length < maxPackets && now - lastPacketSpawn > spawnInterval && connectedPairs.length > 0) {
      const pair = connectedPairs[Math.floor(Math.random() * connectedPairs.length)];
      signalPackets.push(new SignalPacket(pair[0], pair[1]));
      lastPacketSpawn = now;
    }
  }

  // Main Render Loop
  function render(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;
    const elapsed = timestamp - lastTimestamp;
    lastTimestamp = timestamp;

    // Normalizing delta time for 60Hz-120Hz display refresh rates
    const dt = Math.min(elapsed / 16.666, 3.0);

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Smooth cursor aura interpolation
    if (pointer.active) {
      pointer.x += (pointer.targetX - pointer.x) * 0.15;
      pointer.y += (pointer.targetY - pointer.y) * 0.15;

      if (cursorAura && window.matchMedia("(hover: hover)").matches) {
        cursorAura.style.left = `${pointer.x}px`;
        cursorAura.style.top = `${pointer.y}px`;
      }
    }

    const maxDist = width < 768 ? 95 : 135;
    const connectedPairs = [];

    // 1. Draw synaptic lines between close nodes
    const nodeLen = nodes.length;
    for (let i = 0; i < nodeLen; i++) {
      const a = nodes[i];
      a.update(dt);

      for (let j = i + 1; j < nodeLen; j++) {
        const b = nodes[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          const proximity = 1 - dist / maxDist;
          const lineAlpha = proximity * 0.22;

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);

          // Create subtle gradient line
          const strokeGrad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          strokeGrad.addColorStop(0, `rgba(${a.color.r}, ${a.color.g}, ${a.color.b}, ${lineAlpha})`);
          strokeGrad.addColorStop(1, `rgba(${b.color.r}, ${b.color.g}, ${b.color.b}, ${lineAlpha})`);

          ctx.strokeStyle = strokeGrad;
          ctx.lineWidth = proximity * 1.35;
          ctx.stroke();

          connectedPairs.push([a, b]);
        }
      }

      // Draw interactive laser connection from node to pointer
      if (pointer.active) {
        const pdx = pointer.x - a.x;
        const pdy = pointer.y - a.y;
        const pdist = Math.sqrt(pdx * pdx + pdy * pdy);

        if (pdist < pointer.radius) {
          const pProximity = 1 - pdist / pointer.radius;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.strokeStyle = `rgba(14, 165, 233, ${pProximity * 0.35})`;
          ctx.lineWidth = pProximity * 1.5;
          ctx.stroke();
        }
      }

      // Draw node
      a.draw(ctx);
    }

    // 2. Update and draw traveling AI signal pulses
    maybeSpawnSignalPacket(timestamp, connectedPairs);
    for (let k = signalPackets.length - 1; k >= 0; k--) {
      const packet = signalPackets[k];
      packet.update(dt);
      packet.draw(ctx);
      if (packet.dead) {
        signalPackets.splice(k, 1);
      }
    }

    if (!prefersReducedMotion) {
      animationFrameId = requestAnimationFrame(render);
    }
  }

  // Page Visibility API: Pause animation completely when tab or phone screen is hidden
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    } else {
      if (!animationFrameId && !prefersReducedMotion) {
        lastTimestamp = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    }
  });

  // Start animation loop
  if (!prefersReducedMotion) {
    animationFrameId = requestAnimationFrame(render);
  } else {
    // Draw static single frame for reduced motion users
    render(performance.now());
  }

  // Mobile Tap-Outside Handlers for clean iOS and Android UX
  document.addEventListener("click", (e) => {
    // Close mobile nav menu when tapping outside
    if (DOM.navMenu && DOM.navMenu.classList.contains("open")) {
      if (!DOM.navMenu.contains(e.target) && !DOM.navToggle.contains(e.target)) {
        DOM.navMenu.classList.remove("open");
      }
    }

    // Close assistant panel when tapping outside on mobile screens
    if (window.innerWidth < 768 && DOM.assistantPanel && DOM.assistantPanel.classList.contains("open")) {
      if (!DOM.assistantPanel.contains(e.target) && !DOM.btnAssistantToggle.contains(e.target)) {
        DOM.assistantPanel.classList.remove("open");
      }
    }
  });
}

// ==============================================================================
// 13. INITIALIZATION
// ==============================================================================

function setupDisciplineFlipCards() {
  const flipCards = document.querySelectorAll(".discipline-flip-card");
  flipCards.forEach(card => {
    // Touch / click toggle for iOS, Android, and keyboard accessibility
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.classList.toggle("is-flipped");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setupFilters();
  setupSearch();
  setupNavigation();
  setupFloatingButtons();
  setupContactDrafter();
  setupModalEvents();
  setupExpertScrollingEngine();
  setupAiBackgroundEngine();
  setupDisciplineFlipCards();
  refreshLucideIcons();

  // If no hash in URL, ensure Projects is set as active nav state matching the screenshot
  if (!window.location.hash || window.location.hash === "#projects") {
    DOM.navLinks.forEach(link => {
      if (link.getAttribute("href") === "#projects") {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
});
