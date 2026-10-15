/**
 * SoftSolution Public Website Main Script
 * Vanilla JavaScript (ES6+) - Fast, reactive DOM rendering from Storage layer.
 */

import { loadSiteData, saveInquiry } from './storage.js';
import { ASSET_MAP, getAsset } from './assets.js';

// SVG Icons mapping for services, process, why-us
const ICON_SVGS = {
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
  smartphone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
  gear: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
  database: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
  wrench: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
  team: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  lightbulb: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="18" x2="15" y2="18"></line><line x1="10" y1="22" x2="14" y2="22"></line><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5h6.18z"></path></svg>`,
  flag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>`,
  sliders: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>`,
  handshake: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11l-4 4-5-5-4 4"></path><path d="M21 7l-5.5 5.5"></path><path d="M3 17l6-6"></path><path d="M14 5l4 4"></path></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
  'file-text': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`,
  'check-circle': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
  'cloud-upload': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line></svg>`,
  mapPin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
};

function renderWebsite() {
  const data = loadSiteData();

  // 1. Header & Brand
  const logoContainer = document.getElementById('header-logo-container');
  if (logoContainer) {
    logoContainer.innerHTML = ASSET_MAP.logo;
  }
  const footerLogoContainer = document.getElementById('footer-logo-container');
  if (footerLogoContainer) {
    footerLogoContainer.innerHTML = ASSET_MAP.logo;
  }

  // Navigation Links
  const navList = document.getElementById('nav-menu-list');
  if (navList && data.navigation) {
    navList.innerHTML = data.navigation
      .map(
        (item) => `
        <li class="nav-item">
          <a href="${item.url}" class="${item.active ? 'active' : ''}">${item.label}</a>
        </li>
      `
      )
      .join('');
  }

  // 2. Hero Section
  const heroBg = document.getElementById('hero-bg-wrapper');
  if (heroBg) {
    heroBg.innerHTML = ASSET_MAP.heroComposite;
  }

  const heroPreheading = document.getElementById('hero-preheading');
  if (heroPreheading) heroPreheading.textContent = data.hero.preheading;

  const heroTitle = document.getElementById('hero-title');
  if (heroTitle) {
    heroTitle.innerHTML = `
      ${data.hero.titleLine1 || 'Software Solutions'}<br />
      ${data.hero.titleLine2 || 'Connecting'} <span class="title-highlight">${data.hero.titleHighlight || 'Japan & Bangladesh'}</span>
    `;
  }

  const heroDesc = document.getElementById('hero-description');
  if (heroDesc) heroDesc.textContent = data.hero.description;

  const badgeJapanText = document.getElementById('badge-japan-text');
  if (badgeJapanText) badgeJapanText.innerHTML = data.hero.badgeJapan;

  const badgeBdText = document.getElementById('badge-bd-text');
  if (badgeBdText) badgeBdText.textContent = data.hero.badgeBangladesh;

  // Hero Flags and Nodes
  const nodeJapanFlag = document.getElementById('node-japan-flag');
  if (nodeJapanFlag) nodeJapanFlag.innerHTML = ASSET_MAP.flagJapan;

  const nodeBdFlag = document.getElementById('node-bd-flag');
  if (nodeBdFlag) nodeBdFlag.innerHTML = ASSET_MAP.flagBangladesh;

  const nodeJapanTitle = document.getElementById('node-japan-title');
  if (nodeJapanTitle) nodeJapanTitle.textContent = data.hero.nodeJapanTitle || 'Tokyo';

  const nodeJapanSub = document.getElementById('node-japan-sub');
  if (nodeJapanSub) nodeJapanSub.textContent = data.hero.nodeJapanSubtitle || '(Japan)';

  const nodeBdTitle = document.getElementById('node-bd-title');
  if (nodeBdTitle) nodeBdTitle.textContent = data.hero.nodeBangladeshTitle || 'Dhaka';

  const nodeBdSub = document.getElementById('node-bd-sub');
  if (nodeBdSub) nodeBdSub.textContent = data.hero.nodeBangladeshSubtitle || '(Bangladesh)';

  // 3. Section 1: Our Partnership
  const partnerTag = document.getElementById('partner-tag');
  if (partnerTag) partnerTag.textContent = data.partnership.tag;

  const partnerTitle = document.getElementById('partner-title');
  if (partnerTitle) partnerTitle.textContent = data.partnership.title;

  const partnerDesc = document.getElementById('partner-desc');
  if (partnerDesc) partnerDesc.textContent = data.partnership.description;

  const partnerContainer = document.getElementById('partnership-cards-container');
  if (partnerContainer && data.partnership.cards) {
    const cardsHtml = data.partnership.cards
      .map((card, idx) => {
        let iconMarkup = '';
        if (card.flagType === 'japan') {
          iconMarkup = `<div class="card-icon-badge">${ASSET_MAP.flagJapan}</div>`;
        } else if (card.flagType === 'bangladesh') {
          iconMarkup = `<div class="card-icon-badge">${ASSET_MAP.flagBangladesh}</div>`;
        } else {
          iconMarkup = `<div class="card-icon-badge team-icon-bg">${ICON_SVGS.team}</div>`;
        }

        const itemsMarkup = card.items
          .map(
            (item) => `
            <li>
              <span class="checklist-icon">&#10003;</span>
              <span>${item}</span>
            </li>
          `
          )
          .join('');

        const cardMarkup = `
          <div class="partnership-card ${card.iconType === 'team' ? 'highlight' : ''}">
            <div class="card-top-row">
              ${iconMarkup}
              <div>
                <h3 class="card-location-title">${card.location}</h3>
                <div class="card-location-sub">${card.subtitle}</div>
              </div>
            </div>
            <ul class="partnership-checklist">
              ${itemsMarkup}
            </ul>
          </div>
        `;

        // If not the last card, append arrow
        if (idx < data.partnership.cards.length - 1) {
          return cardMarkup + `<div class="flow-arrow">&rarr;</div>`;
        }
        return cardMarkup;
      })
      .join('');

    partnerContainer.innerHTML = cardsHtml;
  }

  // 4. Section 2: Our Services (What We Do)
  const servicesTag = document.getElementById('services-tag');
  if (servicesTag) servicesTag.textContent = data.servicesSection.tag;

  const servicesTitle = document.getElementById('services-title');
  if (servicesTitle) servicesTitle.textContent = data.servicesSection.title;

  const servicesDesc = document.getElementById('services-desc');
  if (servicesDesc) servicesDesc.textContent = data.servicesSection.description;

  const servicesGrid = document.getElementById('services-grid-container');
  if (servicesGrid && data.services) {
    const visibleServices = data.services.filter((s) => s.visible !== false);
    servicesGrid.innerHTML = visibleServices
      .map(
        (service) => `
        <div class="service-card">
          <div class="service-icon-box">
            ${ICON_SVGS[service.icon] || ICON_SVGS.code}
          </div>
          <h3 class="service-title">${service.title}</h3>
          <p class="service-desc">${service.description}</p>
        </div>
      `
      )
      .join('');
  }

  // 5. Section 3: Featured Portfolio (Our Work)
  const portfolioTag = document.getElementById('portfolio-tag');
  if (portfolioTag) portfolioTag.textContent = data.portfolioSection.tag;

  const portfolioTitle = document.getElementById('portfolio-title');
  if (portfolioTitle) portfolioTitle.textContent = data.portfolioSection.title;

  const portfolioDesc = document.getElementById('portfolio-desc');
  if (portfolioDesc) portfolioDesc.textContent = data.portfolioSection.description;

  const portfolioGrid = document.getElementById('portfolio-grid-container');
  if (portfolioGrid && data.portfolio) {
    const visibleProjects = data.portfolio.filter((p) => p.visible !== false);
    portfolioGrid.innerHTML = visibleProjects
      .map((proj) => {
        let imgMarkup = '';
        if (proj.customImage) {
          imgMarkup = `<img src="${proj.customImage}" alt="${proj.title}" />`;
        } else if (proj.imageType === 'sales-force') {
          imgMarkup = ASSET_MAP.portfolioSalesForce;
        } else if (proj.imageType === 'order-distribution') {
          imgMarkup = ASSET_MAP.portfolioOrderDistribution;
        } else if (proj.imageType === 'field-force') {
          imgMarkup = ASSET_MAP.portfolioFieldForce;
        } else if (proj.imageType === 'business-intelligence') {
          imgMarkup = ASSET_MAP.portfolioBusinessIntelligence;
        } else {
          imgMarkup = ASSET_MAP.portfolioSalesForce;
        }

        return `
          <div class="portfolio-card">
            <div class="portfolio-img-box">
              ${imgMarkup}
            </div>
            <div class="portfolio-body">
              <span class="portfolio-tag">${proj.tag}</span>
              <h3 class="portfolio-title">${proj.title}</h3>
              <div class="portfolio-category">${proj.category}</div>
              <div class="portfolio-tech">${proj.techStack}</div>
              <a href="#contact" class="portfolio-link open-contact-modal">
                ${proj.linkText || 'View Case Study'} &rarr;
              </a>
            </div>
          </div>
        `;
      })
      .join('');
  }

  // 6. Section 4: Why Work With Us?
  const whyTag = document.getElementById('why-tag');
  if (whyTag) whyTag.textContent = data.whyUsSection.tag;

  const whyTitle = document.getElementById('why-title');
  if (whyTitle) whyTitle.textContent = data.whyUsSection.title;

  const whyGrid = document.getElementById('why-grid-container');
  if (whyGrid && data.whyUs) {
    whyGrid.innerHTML = data.whyUs
      .map(
        (item) => `
        <div class="why-card">
          <div class="why-icon-circle">
            ${ICON_SVGS[item.icon] || ICON_SVGS.team}
          </div>
          <h3 class="why-title">${item.title}</h3>
          <p class="why-desc">${item.description}</p>
        </div>
      `
      )
      .join('');
  }

  // 7. Section 5: Our Process
  const processTag = document.getElementById('process-tag');
  if (processTag) processTag.textContent = data.processSection.tag;

  const processTitle = document.getElementById('process-title');
  if (processTitle) processTitle.textContent = data.processSection.title;

  const processStepper = document.getElementById('process-stepper-container');
  if (processStepper && data.processSteps) {
    const stepsHtml = data.processSteps
      .map((step, idx) => {
        const stepMarkup = `
          <div class="process-step-item">
            <div class="step-num-icon-row">
              <span class="step-num">${step.step}</span>
              <div class="step-icon-box">${ICON_SVGS[step.icon] || ICON_SVGS.code}</div>
            </div>
            <h3 class="step-title">${step.title}</h3>
            <p class="step-desc">${step.description}</p>
          </div>
        `;
        if (idx < data.processSteps.length - 1) {
          return stepMarkup + `<div class="step-arrow-connector">&rarr;</div>`;
        }
        return stepMarkup;
      })
      .join('');

    processStepper.innerHTML = stepsHtml;
  }

  // 8. Section 6: Our Locations (Presence)
  const locTag = document.getElementById('locations-tag');
  if (locTag) locTag.textContent = data.locationsSection.tag;

  const locTitle = document.getElementById('locations-title');
  if (locTitle) locTitle.textContent = data.locationsSection.title;

  const locGrid = document.getElementById('locations-grid-container');
  if (locGrid && data.locations) {
    locGrid.innerHTML = data.locations
      .map((loc) => {
        let photoMarkup = '';
        if (loc.customPhoto) {
          photoMarkup = `<img src="${loc.customPhoto}" alt="${loc.title}" />`;
        } else if (loc.imageType === 'tokyo-office') {
          photoMarkup = ASSET_MAP.tokyoOffice;
        } else if (loc.imageType === 'dhaka-office') {
          photoMarkup = ASSET_MAP.dhakaOffice;
        } else {
          photoMarkup = ASSET_MAP.tokyoOffice;
        }

        const flagMarkup = loc.flagType === 'japan' ? ASSET_MAP.flagJapan : ASSET_MAP.flagBangladesh;

        return `
          <div class="location-card">
            <div class="location-photo-box">
              ${photoMarkup}
            </div>
            <div class="location-info-box">
              <div class="location-header">
                <div class="location-flag-dot">${flagMarkup}</div>
                <div>
                  <h3 class="location-name">${loc.title}</h3>
                  <div class="location-city">${loc.city}</div>
                </div>
              </div>
              <ul class="location-details-list">
                <li class="location-detail-item">
                  <span class="detail-icon">${ICON_SVGS.mapPin}</span>
                  <span>${loc.address}</span>
                </li>
                <li class="location-detail-item">
                  <span class="detail-icon">${ICON_SVGS.phone}</span>
                  <span>${loc.phone}</span>
                </li>
                <li class="location-detail-item">
                  <span class="detail-icon">${ICON_SVGS.mail}</span>
                  <span>${loc.email}</span>
                </li>
                <li class="location-detail-item">
                  <span class="detail-icon">${ICON_SVGS.clock}</span>
                  <span>${loc.hours}</span>
                </li>
              </ul>
              <a href="${loc.mapsUrl}" target="_blank" rel="noopener noreferrer" class="location-maps-link">
                View on Google Maps &rarr;
              </a>
            </div>
          </div>
        `;
      })
      .join('');
  }

  // 9. Section 7: Meet Our Team
  const teamTag = document.getElementById('team-tag');
  if (teamTag) teamTag.textContent = data.teamSection.tag;

  const teamTitle = document.getElementById('team-title');
  if (teamTitle) teamTitle.textContent = data.teamSection.title;

  const teamGrid = document.getElementById('team-grid-container');
  if (teamGrid && data.team) {
    const visibleTeam = data.team.filter((m) => m.visible !== false);
    teamGrid.innerHTML = visibleTeam
      .map((member) => {
        let avatarMarkup = '';
        if (member.customPhoto) {
          avatarMarkup = `<img src="${member.customPhoto}" alt="${member.name}" />`;
        } else if (member.photoType === 'taro-sato') {
          avatarMarkup = ASSET_MAP.taroSato;
        } else if (member.photoType === 'md-rahman') {
          avatarMarkup = ASSET_MAP.mdRahman;
        } else if (member.photoType === 'fahim-ahmed') {
          avatarMarkup = ASSET_MAP.fahimAhmed;
        } else if (member.photoType === 'rased-hasan') {
          avatarMarkup = ASSET_MAP.rasedHasan;
        } else if (member.photoType === 'kenji-tanaka') {
          avatarMarkup = ASSET_MAP.kenjiTanaka;
        } else {
          avatarMarkup = ASSET_MAP.taroSato;
        }

        const skillsMarkup = member.skills
          .map(
            (s) => `
            <li>
              <span class="check">&#10003;</span>
              <span>${s}</span>
            </li>
          `
          )
          .join('');

        return `
          <div class="team-card">
            <div class="team-avatar-box">
              ${avatarMarkup}
            </div>
            <h3 class="team-member-name">${member.name}</h3>
            <div class="team-member-role">${member.role}</div>
            <ul class="team-skills-list">
              ${skillsMarkup}
            </ul>
          </div>
        `;
      })
      .join('');
  }

  // 10. Section 8: CTA Banner
  const ctaBg = document.getElementById('cta-banner-bg-container');
  if (ctaBg) {
    ctaBg.innerHTML = ASSET_MAP.ctaNightSkyline;
  }
  const ctaTitle = document.getElementById('cta-banner-title');
  if (ctaTitle) ctaTitle.textContent = data.ctaBanner.title;

  const ctaDesc = document.getElementById('cta-banner-desc');
  if (ctaDesc) ctaDesc.textContent = data.ctaBanner.description;

  const ctaBtn = document.getElementById('cta-banner-btn');
  if (ctaBtn) ctaBtn.innerHTML = `${data.ctaBanner.buttonText} &rarr;`;

  // 11. Footer details
  if (data.footer) {
    const copyEl = document.getElementById('footer-copyright-text');
    if (copyEl) copyEl.textContent = data.footer.copyright;

    const privEl = document.getElementById('footer-privacy-link');
    if (privEl) {
      privEl.textContent = data.footer.privacyText;
      privEl.href = data.footer.privacyUrl || '#';
    }

    const termsEl = document.getElementById('footer-terms-link');
    if (termsEl) {
      termsEl.textContent = data.footer.termsText;
      termsEl.href = data.footer.termsUrl || '#';
    }

    if (data.footer.contactInfo) {
      const jp = data.footer.contactInfo.japan;
      const jpHtml = document.getElementById('footer-japan-contact');
      if (jpHtml && jp) {
        jpHtml.innerHTML = `
          <div class="office-title">${jp.title}</div>
          <div class="office-detail">${jp.phone}</div>
          <div class="office-detail">${jp.email}</div>
        `;
      }

      const bd = data.footer.contactInfo.bangladesh;
      const bdHtml = document.getElementById('footer-bd-contact');
      if (bdHtml && bd) {
        bdHtml.innerHTML = `
          <div class="office-title">${bd.title}</div>
          <div class="office-detail">${bd.phone}</div>
          <div class="office-detail">${bd.email}</div>
        `;
      }
    }
  }

  // Apply custom colors from settings if configured
  if (data.settings) {
    if (data.settings.primaryColor) {
      document.documentElement.style.setProperty('--primary-color', data.settings.primaryColor);
    }
    if (data.settings.secondaryColor) {
      document.documentElement.style.setProperty('--secondary-color', data.settings.secondaryColor);
    }
  }
}

// Modal handling
function initModals() {
  const modal = document.getElementById('contact-modal');
  const openButtons = document.querySelectorAll('.open-contact-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const cancelBtn = document.getElementById('modal-cancel-btn');
  const form = document.getElementById('project-inquiry-form');

  function openModal() {
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Handle inquiry form submit
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const inquiry = {
        name: document.getElementById('inquiry-name').value.trim(),
        email: document.getElementById('inquiry-email').value.trim(),
        company: document.getElementById('inquiry-company').value.trim(),
        phone: document.getElementById('inquiry-phone').value.trim(),
        projectType: document.getElementById('inquiry-service').value,
        budget: document.getElementById('inquiry-budget').value,
        message: document.getElementById('inquiry-message').value.trim(),
      };

      const saved = saveInquiry(inquiry);
      if (saved) {
        alert('Thank you! Your project inquiry has been received. Our Japan and Bangladesh engineering teams will contact you shortly.');
        form.reset();
        closeModal();
      } else {
        alert('Could not submit inquiry at this moment. Please email us directly at japan@softsolution.co.jp.');
      }
    });
  }
}

// Mobile menu toggle
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu-list');
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '76px';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.backgroundColor = '#ffffff';
        navMenu.style.padding = '20px';
        navMenu.style.borderBottom = '1px solid #e2e8f0';
        navMenu.style.boxShadow = '0 10px 20px rgba(0,0,0,0.08)';
      }
    });
  }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  renderWebsite();
  initModals();
  initMobileMenu();

  // Listen to storage events so when edits happen in another tab (or Admin Panel), the public site updates instantly!
  window.addEventListener('storage', (e) => {
    if (e.key === 'softsolution_site_data_v1') {
      renderWebsite();
    }
  });
});
