/**
 * Maaz Bin Irfan Portfolio — Interactive Scripts
 * Cartoony & Tactile Micro-Interactions (Zero Emojis, Pure SVG Icons)
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. PROJECT DATA FOR DETAILED MODAL
  const projectsData = {
    trendradar: {
      title: "TrendRadar PK",
      badge: "35-Node n8n Workflow & Scraper",
      headerColor: "card-header-sky",
      stack: ["n8n", "Supabase (PostgreSQL)", "Vite", "JavaScript", "Apify", "Shopify REST", "Meta Graph API"],
      overview: "An automated e-commerce and advertising intelligence platform built specifically for the Pakistani retail market (PKR). Runs daily scheduled routines in self-hosted n8n to discover winning products, track competitor pricing, and monitor active Meta ad campaigns.",
      architecture: [
        "1. Daily Cron Trigger triggers at 00:00 PKT to pull active keywords from Supabase.",
        "2. Shopify Scraper ingests /products.json & best-selling collections across local stores.",
        "3. Daraz Scraper extracts category velocity, review counts, and live PKR prices.",
        "4. Meta Ads Scraper tracks country=PK ads, computing ad longevity, uptime streaks, and takedown frequency.",
        "5. JavaScript Code Node normalizes pricing, computes momentum scores, and filters out noise.",
        "6. Supabase Upsert saves deduplicated snapshots with historical delta tracking.",
        "7. Web Dashboard visualizes top gainers with dark glassmorphic telemetry cards."
      ],
      highlights: [
        "Tracks ad longevity (total days active) & takedown frequency (how often an ad was paused and restarted—the strongest signal of a scaling winning product).",
        "100% automated end-to-end with zero manual intervention required.",
        "Exports to both Supabase PostgreSQL and Google Sheets for multi-stakeholder visibility."
      ]
    },
    apexoutreach: {
      title: "ApexOutreach Bot",
      badge: "Autonomous Multi-Agent System",
      headerColor: "card-header-amber",
      stack: ["Python", "Playwright", "PySide6 (Qt)", "SQLite", "Asyncio", "Bayesian Bandit", "PyInstaller"],
      overview: "A modular, self-learning multi-agent Python system designed to discover businesses on Google Maps, verify logistics credentials with FMCSA SaferWeb, sanitize phone numbers into E.164 format, deliver personalized WhatsApp outreach, and optimize message templates with reinforcement learning.",
      architecture: [
        "1. Maps Agent: Scrapes businesses by keyword/location using Playwright with human-like scrolling.",
        "2. SaferWeb Agent: Queries USDOT / MC registers to verify fleet size, cargo types, and safety scores.",
        "3. Validator Agent: Formats raw strings into E.164 and checks carrier prefixes.",
        "4. WhatsApp Agent: Launches headless browser, handles session cookies/QR, types with natural typing delays, and enforces strict pacing to avoid account bans.",
        "5. Learner Agent: Implements a Bayesian Multi-Armed Bandit (Beta-Binomial) algorithm to dynamically adjust message template probabilities based on positive response rates.",
        "6. PySide6 Desktop GUI: Full control room with dark theme, real-time logging, and leads table."
      ],
      highlights: [
        "Anti-ban jitter delays, hourly batch capping, and session cooling algorithms.",
        "Standalone single-file Windows executable (.exe) packaged with PyInstaller."
      ]
    },
    raasta: {
      title: "Raasta",
      badge: "P2P Ride-Hailing & Logistics Mobile App",
      headerColor: "card-header-coral",
      stack: ["React Native", "Expo (SDK 58)", "TypeScript", "Supabase (Realtime & RLS)", "MapLibre GL", "Project-OSRM"],
      overview: "An inDrive-style ride-hailing and parcel delivery cross-platform mobile application featuring real-time passenger-driver fare bidding, driver passes, and an entirely free, zero-billing open-source mapping stack.",
      architecture: [
        "1. Zero-Cost Map Architecture: MapLibre GL with OpenFreeMap & CartoDB tiles, completely eliminating Google Maps/Mapbox API billing.",
        "2. Routing & ETA: Real road-following routing polylines and live ETA calculations powered by Project-OSRM.",
        "3. Address Search: Free reverse-geocoding and location autocomplete via OpenStreetMap Nominatim.",
        "4. Realtime Bidding: Supabase Realtime channels allow drivers to submit counter-bids and passengers to select offers based on price, rating, and vehicle type.",
        "5. Driver Monetization: Standby balance wallet system and 24-hour shift passes."
      ],
      highlights: [
        "Saved thousands in third-party API bills with zero compromises on road routing precision.",
        "Tested on Expo Go Android and packaged for Google Play AAB distribution."
      ]
    },
    dukaanpos: {
      title: "DukaanPOS",
      badge: "Desktop Retail Point of Sale Ecosystem",
      headerColor: "card-header-matcha",
      stack: ["C#", ".NET", "WPF", "SQLite", "Entity Framework Core", "ZXing.Net", "Firebase Sync", "InnoSetup"],
      overview: "An enterprise desktop POS and inventory management system actively deployed across clothing boutiques and pharmacies, processing rapid transactions with thermal printing and cloud synchronization.",
      architecture: [
        "1. Sales Terminal: High-speed barcode scanning, held transactions, cart adjustments, and customer ledgers.",
        "2. Thermal Printing: Strongly-typed ESC/POS receipt generation engine with ZXing vector barcode rendering.",
        "3. Offline-First Resilience: SQLite embedded database with Entity Framework Core, automatic schema migrations, and SQLite file concurrency fallback.",
        "4. Firebase Cloud Backup: Background worker synchronizes daily transactions to Firebase for remote store reporting.",
        "5. Release Pipeline: Versioned production lifecycle (11 releases from v1.0.1 to v1.0.11) built with InnoSetup."
      ],
      highlights: [
        "Battle-tested in real production environments with zero downtime on hardware failure.",
        "Companion mobile dashboard built with React Native for remote store owners."
      ]
    },
    omnipulse: {
      title: "OmniPulse Studio",
      badge: "Multi-Channel Distribution Engine",
      headerColor: "card-header-lavender",
      stack: ["Node.js", "Express", "REST APIs", "OpenGraph Scraper", "Spintax Engine", "Webhooks"],
      overview: "An autonomous multi-channel distribution, real-time trend intelligence, and product showcase command center.",
      architecture: [
        "1. Live Trend Radar: Connects to Hacker News Firebase API, Dev.to Rising API, and GitHub Trending API.",
        "2. OpenGraph Scraper: Auto-extracts title, meta tags, and hero banners from any URL pasted into the composer.",
        "3. Spintax Randomization: Dynamically spins post variations ({Option A|Option B}) to maximize engagement without duplication.",
        "4. Multi-Platform Dispatcher: 1-click publishing to Telegram Bot API, Discord Webhooks, X (Twitter), and Reddit."
      ],
      highlights: [
        "Instant campaign generation for Product Hunt, Hacker News, and Reddit r/SideProject.",
        "Real profile verifiers for Telegram Bot tokens and GitHub accounts."
      ]
    },
    homelab: {
      title: "Self-Hosted Docker Homelab",
      badge: "Linux Server & Homelab Infrastructure",
      headerColor: "card-header-amber",
      stack: ["Linux (Debian / Fedora / Ubuntu)", "Docker & Docker Compose", "systemd", "Bash", "UFW", "Cloudflare Tunnels"],
      overview: "A dedicated bare-metal Linux server provisioned to run mission-critical self-hosted developer tools, persistent databases, and 24/7 automation runners.",
      architecture: [
        "1. Containerization: Docker Compose orchestrating isolated services including self-hosted n8n instances, PostgreSQL databases, and Redis caches.",
        "2. Networking & Security: Custom Docker bridge networks, strict UFW firewall policies, and secure Cloudflare Tunnel ingress without exposing open router ports.",
        "3. Persistence & Backups: Automated cron bash scripts backing up SQLite databases, n8n JSON workflows, and container volumes to encrypted cold storage.",
        "4. Reliability: Custom systemd service units for automatic recovery on reboot or process crashes."
      ],
      highlights: [
        "Runs the live TrendRadar PK n8n engine 24/7 with zero cloud hosting costs.",
        "Hands-on mastery of Linux system internals, systemd, kernel parameters, and network debugging."
      ]
    }
  };

  // 2. PROJECT FILTERING LOGIC
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category.includes(filter)) {
          card.style.display = "flex";
          card.style.animation = "cardPop 0.25s ease-out";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // 3. COPY EMAIL WITH TACTILE TOAST (Zero Emojis)
  const copyPills = document.querySelectorAll(".js-copy-email");
  const toast = document.getElementById("toastNotice");

  copyPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const email = "maaz2501p@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        showToast("Email copied to clipboard: maaz2501p@gmail.com");
      }).catch(() => {
        showToast("Email address: maaz2501p@gmail.com");
      });
    });
  });

  function showToast(message) {
    if (!toast) return;
    const msgSpan = toast.querySelector("span");
    if (msgSpan) {
      msgSpan.textContent = message;
    } else {
      toast.textContent = message;
    }
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  }

  // 4. PROJECT DETAILS MODAL
  const modalOverlay = document.getElementById("projectModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const detailTriggers = document.querySelectorAll(".js-project-details");

  detailTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const projectId = trigger.getAttribute("data-project");
      const data = projectsData[projectId];
      if (!data) return;

      const titleEl = document.getElementById("modalTitle");
      const badgeEl = document.getElementById("modalBadge");
      const stackEl = document.getElementById("modalStack");
      const overviewEl = document.getElementById("modalOverview");
      const archEl = document.getElementById("modalArchitecture");
      const highlightsEl = document.getElementById("modalHighlights");

      if (titleEl) titleEl.textContent = data.title;
      if (badgeEl) badgeEl.textContent = data.badge;
      if (overviewEl) overviewEl.textContent = data.overview;

      if (stackEl) {
        stackEl.innerHTML = data.stack
          .map((tech) => `<span class="tech-tag">${tech}</span>`)
          .join("");
      }

      if (archEl) {
        archEl.innerHTML = data.architecture
          .map((step) => `<li style="margin-bottom: 7px; font-size: 0.88rem; line-height: 1.5; padding-left: 4px;">${step}</li>`)
          .join("");
      }

      if (highlightsEl) {
        highlightsEl.innerHTML = data.highlights
          .map((item) => `<li style="margin-bottom: 7px; font-size: 0.88rem; line-height: 1.5; display: flex; align-items: flex-start; gap: 8px;"><span class="highlight-icon-wrap" style="margin-top: 3px;"><svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"/></svg></span><span>${item}</span></li>`)
          .join("");
      }

      modalOverlay.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay && modalOverlay.classList.contains("open")) {
      closeModal();
    }
  });
});
