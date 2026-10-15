/**
 * SoftSolution Admin Dashboard Controller
 * Pure Vanilla JavaScript (ES6+)
 */

import {
  loadSiteData,
  saveSiteData,
  resetToDefaults,
  exportSiteDataJson,
  importSiteDataJson,
  loadInquiries,
  updateInquiryStatus,
  deleteInquiry,
} from './storage.js';
import { requireAuth, getCurrentSession, logout } from './auth.js';
import { ASSET_MAP } from './assets.js';

// Verify authentication before continuing
if (!requireAuth()) {
  throw new Error('Unauthorized');
}

let siteData = loadSiteData();

function showToast(message, type = 'success') {
  const toast = document.getElementById('admin-toast');
  if (!toast) return;
  toast.textContent = message;
  toast.className = `admin-toast show ${type}`;
  setTimeout(() => {
    toast.className = 'admin-toast';
  }, 3500);
}

// Tab Switching
function initTabs() {
  const sidebarItems = document.querySelectorAll('.sidebar-item[data-tab]');
  const tabContents = document.querySelectorAll('.tab-content');
  const titleEl = document.getElementById('admin-tab-title');

  sidebarItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTabId = item.getAttribute('data-tab');
      if (!targetTabId) return;

      sidebarItems.forEach((i) => i.classList.remove('active'));
      tabContents.forEach((t) => t.classList.remove('active'));

      item.classList.add('active');
      const targetContent = document.getElementById(targetTabId);
      if (targetContent) targetContent.classList.add('active');

      const labelSpan = item.querySelector('span');
      if (titleEl && labelSpan) {
        titleEl.textContent = labelSpan.textContent;
      }
    });
  });
}

// 1. Dashboard & Inquiries
function renderDashboard() {
  const inquiries = loadInquiries();
  const servicesCount = siteData.services ? siteData.services.length : 0;
  const portfolioCount = siteData.portfolio ? siteData.portfolio.length : 0;
  const teamCount = siteData.team ? siteData.team.length : 0;

  const sCountEl = document.getElementById('metric-services-count');
  if (sCountEl) sCountEl.textContent = servicesCount;

  const pCountEl = document.getElementById('metric-portfolio-count');
  if (pCountEl) pCountEl.textContent = portfolioCount;

  const tCountEl = document.getElementById('metric-team-count');
  if (tCountEl) tCountEl.textContent = teamCount;

  const inqCountEl = document.getElementById('metric-inquiries-count');
  if (inqCountEl) inqCountEl.textContent = inquiries.length;

  const tbody = document.getElementById('inquiries-table-body');
  if (!tbody) return;

  if (inquiries.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding: 24px; color:#94a3b8;">No inquiries received yet.</td></tr>`;
    return;
  }

  tbody.innerHTML = inquiries
    .map((inq) => {
      const dateFormatted = new Date(inq.timestamp).toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });

      return `
        <tr>
          <td>
            <strong>${inq.name}</strong><br />
            <span style="font-size:12px; color:#64748b;">${inq.company || 'N/A'}</span>
          </td>
          <td>
            <div>${inq.email}</div>
            <div style="font-size:12px; color:#64748b;">${inq.phone || '—'}</div>
          </td>
          <td>${inq.projectType || 'Software Development'}</td>
          <td>${inq.budget || '—'}</td>
          <td>
            <span class="status-badge ${inq.status}">${inq.status}</span>
          </td>
          <td style="font-size:12px; color:#64748b;">${dateFormatted}</td>
          <td>
            <div class="action-btn-group">
              ${
                inq.status === 'new'
                  ? `<button type="button" class="action-btn-sm" data-action="mark-contacted" data-id="${inq.id}">Mark Contacted</button>`
                  : ''
              }
              <button type="button" class="action-btn-sm delete" data-action="delete-inquiry" data-id="${inq.id}">Delete</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join('');

  // Attach inquiry action listeners
  tbody.querySelectorAll('[data-action="mark-contacted"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      updateInquiryStatus(id, 'contacted');
      renderDashboard();
      showToast('Inquiry marked as contacted.');
    });
  });

  tbody.querySelectorAll('[data-action="delete-inquiry"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (confirm('Delete this inquiry?')) {
        const id = btn.getAttribute('data-id');
        deleteInquiry(id);
        renderDashboard();
        showToast('Inquiry deleted.');
      }
    });
  });
}

// 2. Hero Form
function initHeroEditor() {
  const form = document.getElementById('hero-form');
  if (!form) return;

  const h = siteData.hero;
  document.getElementById('admin-hero-preheading').value = h.preheading || '';
  document.getElementById('admin-hero-title1').value = h.titleLine1 || '';
  document.getElementById('admin-hero-title2').value = h.titleLine2 || '';
  document.getElementById('admin-hero-highlight').value = h.titleHighlight || '';
  document.getElementById('admin-hero-desc').value = h.description || '';
  document.getElementById('admin-hero-badge-japan').value = h.badgeJapan || '';
  document.getElementById('admin-hero-badge-bd').value = h.badgeBangladesh || '';
  document.getElementById('admin-hero-cta1-text').value = h.primaryCtaText || '';
  document.getElementById('admin-hero-cta2-text').value = h.secondaryCtaText || '';
  document.getElementById('admin-hero-node-jp').value = h.nodeJapanTitle || '';
  document.getElementById('admin-hero-node-bd').value = h.nodeBangladeshTitle || '';

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    siteData.hero.preheading = document.getElementById('admin-hero-preheading').value;
    siteData.hero.titleLine1 = document.getElementById('admin-hero-title1').value;
    siteData.hero.titleLine2 = document.getElementById('admin-hero-title2').value;
    siteData.hero.titleHighlight = document.getElementById('admin-hero-highlight').value;
    siteData.hero.description = document.getElementById('admin-hero-desc').value;
    siteData.hero.badgeJapan = document.getElementById('admin-hero-badge-japan').value;
    siteData.hero.badgeBangladesh = document.getElementById('admin-hero-badge-bd').value;
    siteData.hero.primaryCtaText = document.getElementById('admin-hero-cta1-text').value;
    siteData.hero.secondaryCtaText = document.getElementById('admin-hero-cta2-text').value;
    siteData.hero.nodeJapanTitle = document.getElementById('admin-hero-node-jp').value;
    siteData.hero.nodeBangladeshTitle = document.getElementById('admin-hero-node-bd').value;

    saveSiteData(siteData);
    showToast('Hero section changes saved and published!');
  });
}

// 3. Partnership Form
function initPartnershipEditor() {
  const form = document.getElementById('partnership-form');
  if (!form) return;

  const p = siteData.partnership;
  document.getElementById('admin-partner-tag').value = p.tag || '';
  document.getElementById('admin-partner-title').value = p.title || '';
  document.getElementById('admin-partner-desc').value = p.description || '';

  const jpCard = p.cards.find((c) => c.flagType === 'japan') || p.cards[0];
  const teamCard = p.cards.find((c) => c.iconType === 'team') || p.cards[1];
  const bdCard = p.cards.find((c) => c.flagType === 'bangladesh') || p.cards[2];

  if (jpCard) document.getElementById('admin-partner-japan-items').value = jpCard.items.join('\n');
  if (teamCard) document.getElementById('admin-partner-team-items').value = teamCard.items.join('\n');
  if (bdCard) document.getElementById('admin-partner-bd-items').value = bdCard.items.join('\n');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    siteData.partnership.tag = document.getElementById('admin-partner-tag').value;
    siteData.partnership.title = document.getElementById('admin-partner-title').value;
    siteData.partnership.description = document.getElementById('admin-partner-desc').value;

    if (jpCard) {
      jpCard.items = document.getElementById('admin-partner-japan-items').value.split('\n').map((s) => s.trim()).filter(Boolean);
    }
    if (teamCard) {
      teamCard.items = document.getElementById('admin-partner-team-items').value.split('\n').map((s) => s.trim()).filter(Boolean);
    }
    if (bdCard) {
      bdCard.items = document.getElementById('admin-partner-bd-items').value.split('\n').map((s) => s.trim()).filter(Boolean);
    }

    saveSiteData(siteData);
    showToast('Partnership section saved!');
  });
}

// 4. Services Table
function renderServicesTable() {
  const tbody = document.getElementById('services-table-body');
  if (!tbody || !siteData.services) return;

  tbody.innerHTML = siteData.services
    .map((s, idx) => `
      <tr>
        <td><code>${s.icon}</code></td>
        <td><strong>${s.title}</strong></td>
        <td style="max-width:300px; font-size:12.5px; color:#64748b;">${s.description}</td>
        <td>
          <input type="checkbox" data-service-idx="${idx}" ${s.visible !== false ? 'checked' : ''} />
        </td>
        <td>
          <div class="action-btn-group">
            <button type="button" class="action-btn-sm" data-edit-service="${idx}">Edit</button>
            <button type="button" class="action-btn-sm delete" data-delete-service="${idx}">Delete</button>
          </div>
        </td>
      </tr>
    `)
    .join('');

  // Visibility toggle
  tbody.querySelectorAll('input[type="checkbox"]').forEach((box) => {
    box.addEventListener('change', () => {
      const idx = parseInt(box.getAttribute('data-service-idx'), 10);
      siteData.services[idx].visible = box.checked;
      saveSiteData(siteData);
      showToast('Service visibility updated.');
    });
  });

  // Edit
  tbody.querySelectorAll('[data-edit-service]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-edit-service'), 10);
      const s = siteData.services[idx];
      const newTitle = prompt('Service Title:', s.title);
      if (newTitle === null) return;
      const newDesc = prompt('Service Description:', s.description);
      if (newDesc === null) return;

      siteData.services[idx].title = newTitle;
      siteData.services[idx].description = newDesc;
      saveSiteData(siteData);
      renderServicesTable();
      showToast('Service updated successfully.');
    });
  });

  // Delete
  tbody.querySelectorAll('[data-delete-service]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-delete-service'), 10);
      if (confirm(`Delete "${siteData.services[idx].title}"?`)) {
        siteData.services.splice(idx, 1);
        saveSiteData(siteData);
        renderServicesTable();
        renderDashboard();
        showToast('Service deleted.');
      }
    });
  });
}

function initServicesHandlers() {
  renderServicesTable();
  const addBtn = document.getElementById('add-service-btn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const title = prompt('Enter New Service Title:');
      if (!title) return;
      const desc = prompt('Enter Service Description:');
      if (!desc) return;
      const icon = prompt('Icon (code, globe, smartphone, gear, database, wrench):', 'code') || 'code';

      siteData.services.push({
        id: 'srv-' + Date.now(),
        icon,
        title,
        description: desc,
        visible: true,
      });

      saveSiteData(siteData);
      renderServicesTable();
      renderDashboard();
      showToast('New service added successfully!');
    });
  }
}

// 5. Portfolio Table
function renderPortfolioTable() {
  const tbody = document.getElementById('portfolio-table-body');
  if (!tbody || !siteData.portfolio) return;

  tbody.innerHTML = siteData.portfolio
    .map((p, idx) => `
      <tr>
        <td>
          <span style="font-size:11px; padding:2px 6px; background:#e0f2fe; color:#0284c7; border-radius:4px;">
            ${p.imageType || 'Custom'}
          </span>
        </td>
        <td>
          <strong>${p.title}</strong>
        </td>
        <td>
          <div style="font-weight:600; color:#0284c7;">${p.tag}</div>
          <div style="font-size:12px; color:#64748b;">${p.category}</div>
        </td>
        <td style="font-size:12px; color:#475569;">${p.techStack}</td>
        <td>
          <input type="checkbox" data-portfolio-idx="${idx}" ${p.visible !== false ? 'checked' : ''} />
        </td>
        <td>
          <div class="action-btn-group">
            <button type="button" class="action-btn-sm" data-edit-portfolio="${idx}">Edit</button>
            <button type="button" class="action-btn-sm delete" data-delete-portfolio="${idx}">Delete</button>
          </div>
        </td>
      </tr>
    `)
    .join('');

  // Toggle
  tbody.querySelectorAll('input[type="checkbox"]').forEach((box) => {
    box.addEventListener('change', () => {
      const idx = parseInt(box.getAttribute('data-portfolio-idx'), 10);
      siteData.portfolio[idx].visible = box.checked;
      saveSiteData(siteData);
      showToast('Project visibility updated.');
    });
  });

  // Edit
  tbody.querySelectorAll('[data-edit-portfolio]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-edit-portfolio'), 10);
      const p = siteData.portfolio[idx];
      const newTitle = prompt('Project Title:', p.title);
      if (newTitle === null) return;
      const newTag = prompt('Badge Tag (e.g. Sales & Distribution):', p.tag);
      if (newTag === null) return;
      const newTech = prompt('Tech Stack:', p.techStack);
      if (newTech === null) return;

      siteData.portfolio[idx].title = newTitle;
      siteData.portfolio[idx].tag = newTag;
      siteData.portfolio[idx].techStack = newTech;
      saveSiteData(siteData);
      renderPortfolioTable();
      showToast('Project updated.');
    });
  });

  // Delete
  tbody.querySelectorAll('[data-delete-portfolio]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-delete-portfolio'), 10);
      if (confirm(`Delete project "${siteData.portfolio[idx].title}"?`)) {
        siteData.portfolio.splice(idx, 1);
        saveSiteData(siteData);
        renderPortfolioTable();
        renderDashboard();
        showToast('Project deleted.');
      }
    });
  });
}

function initPortfolioHandlers() {
  renderPortfolioTable();
  const addBtn = document.getElementById('add-portfolio-btn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const title = prompt('Project Name:');
      if (!title) return;
      const tag = prompt('Tag Badge (e.g. Sales & Distribution):', 'Enterprise Software') || 'Enterprise Software';
      const category = prompt('Industry / Category (e.g. Retail / FMCG):', 'General Enterprise') || 'General Enterprise';
      const techStack = prompt('Tech Stack:', 'React · Node.js · Cloud SQL · Azure') || 'React · Node.js · Azure';

      siteData.portfolio.push({
        id: 'port-' + Date.now(),
        tag,
        title,
        category,
        techStack,
        imageType: 'sales-force',
        linkText: 'View Case Study',
        linkUrl: '#',
        visible: true,
      });

      saveSiteData(siteData);
      renderPortfolioTable();
      renderDashboard();
      showToast('New project added successfully!');
    });
  }
}

// 6. Why Us & Process Editor
function initWhyProcessEditor() {
  const whyContainer = document.getElementById('why-items-editor');
  if (whyContainer && siteData.whyUs) {
    whyContainer.innerHTML = siteData.whyUs
      .map((item, idx) => `
        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; padding:14px; margin-bottom:12px;">
          <div class="admin-grid-2">
            <div class="admin-form-group" style="margin-bottom:8px;">
              <label>Reason #${idx + 1} Title</label>
              <input type="text" class="admin-input" data-why-title="${idx}" value="${item.title}" />
            </div>
            <div class="admin-form-group" style="margin-bottom:8px;">
              <label>Description</label>
              <input type="text" class="admin-input" data-why-desc="${idx}" value="${item.description}" />
            </div>
          </div>
        </div>
      `)
      .join('');

    whyContainer.querySelectorAll('[data-why-title]').forEach((inp) => {
      inp.addEventListener('input', () => {
        const idx = parseInt(inp.getAttribute('data-why-title'), 10);
        siteData.whyUs[idx].title = inp.value;
      });
    });
    whyContainer.querySelectorAll('[data-why-desc]').forEach((inp) => {
      inp.addEventListener('input', () => {
        const idx = parseInt(inp.getAttribute('data-why-desc'), 10);
        siteData.whyUs[idx].description = inp.value;
      });
    });
  }

  const processContainer = document.getElementById('process-steps-editor');
  if (processContainer && siteData.processSteps) {
    processContainer.innerHTML = siteData.processSteps
      .map((s, idx) => `
        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; padding:14px; margin-bottom:12px;">
          <div class="admin-grid-2">
            <div class="admin-form-group" style="margin-bottom:8px;">
              <label>Step ${s.step} Title</label>
              <input type="text" class="admin-input" data-process-title="${idx}" value="${s.title}" />
            </div>
            <div class="admin-form-group" style="margin-bottom:8px;">
              <label>Step Summary</label>
              <input type="text" class="admin-input" data-process-desc="${idx}" value="${s.description}" />
            </div>
          </div>
        </div>
      `)
      .join('');

    processContainer.querySelectorAll('[data-process-title]').forEach((inp) => {
      inp.addEventListener('input', () => {
        const idx = parseInt(inp.getAttribute('data-process-title'), 10);
        siteData.processSteps[idx].title = inp.value;
      });
    });
    processContainer.querySelectorAll('[data-process-desc]').forEach((inp) => {
      inp.addEventListener('input', () => {
        const idx = parseInt(inp.getAttribute('data-process-desc'), 10);
        siteData.processSteps[idx].description = inp.value;
      });
    });
  }
}

// 7. Locations Editor
function initLocationsEditor() {
  const container = document.getElementById('locations-editor-container');
  if (!container || !siteData.locations) return;

  container.innerHTML = siteData.locations
    .map((loc, idx) => `
      <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:18px;">
        <h3 style="font-size:16px; font-weight:700; margin-bottom:12px; color:#0f172a;">
          ${loc.title} (${loc.city})
        </h3>
        <div class="admin-form-group">
          <label>Office Name</label>
          <input type="text" class="admin-input" id="loc-title-${idx}" value="${loc.title}" />
        </div>
        <div class="admin-form-group">
          <label>Address</label>
          <input type="text" class="admin-input" id="loc-addr-${idx}" value="${loc.address}" />
        </div>
        <div class="admin-form-group">
          <label>Phone Number</label>
          <input type="text" class="admin-input" id="loc-phone-${idx}" value="${loc.phone}" />
        </div>
        <div class="admin-form-group">
          <label>Email Address</label>
          <input type="text" class="admin-input" id="loc-email-${idx}" value="${loc.email}" />
        </div>
        <div class="admin-form-group">
          <label>Business Working Hours</label>
          <input type="text" class="admin-input" id="loc-hours-${idx}" value="${loc.hours}" />
        </div>
      </div>
    `)
    .join('');

  const saveBtn = document.getElementById('save-locations-btn');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      siteData.locations.forEach((loc, idx) => {
        loc.title = document.getElementById(`loc-title-${idx}`).value;
        loc.address = document.getElementById(`loc-addr-${idx}`).value;
        loc.phone = document.getElementById(`loc-phone-${idx}`).value;
        loc.email = document.getElementById(`loc-email-${idx}`).value;
        loc.hours = document.getElementById(`loc-hours-${idx}`).value;
      });
      saveSiteData(siteData);
      showToast('Global office details saved!');
    });
  }
}

// 8. Team Management
function renderTeamTable() {
  const tbody = document.getElementById('team-table-body');
  if (!tbody || !siteData.team) return;

  tbody.innerHTML = siteData.team
    .map((m, idx) => `
      <tr>
        <td>
          <div style="width:36px; height:36px; border-radius:50%; background:#e2e8f0; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:12px;">
            ${m.name.charAt(0)}
          </div>
        </td>
        <td><strong>${m.name}</strong></td>
        <td style="color:#0066cc; font-weight:600; font-size:13px;">${m.role}</td>
        <td style="font-size:12px; color:#64748b;">${m.skills.join(', ')}</td>
        <td>
          <input type="checkbox" data-team-idx="${idx}" ${m.visible !== false ? 'checked' : ''} />
        </td>
        <td>
          <div class="action-btn-group">
            <button type="button" class="action-btn-sm" data-edit-team="${idx}">Edit</button>
            <button type="button" class="action-btn-sm delete" data-delete-team="${idx}">Delete</button>
          </div>
        </td>
      </tr>
    `)
    .join('');

  tbody.querySelectorAll('input[type="checkbox"]').forEach((box) => {
    box.addEventListener('change', () => {
      const idx = parseInt(box.getAttribute('data-team-idx'), 10);
      siteData.team[idx].visible = box.checked;
      saveSiteData(siteData);
      showToast('Team member visibility updated.');
    });
  });

  tbody.querySelectorAll('[data-edit-team]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-edit-team'), 10);
      const m = siteData.team[idx];
      const newName = prompt('Full Name:', m.name);
      if (newName === null) return;
      const newRole = prompt('Role / Designation:', m.role);
      if (newRole === null) return;
      const newSkills = prompt('Skills (comma-separated):', m.skills.join(', '));
      if (newSkills === null) return;

      siteData.team[idx].name = newName;
      siteData.team[idx].role = newRole;
      siteData.team[idx].skills = newSkills.split(',').map((s) => s.trim()).filter(Boolean);
      saveSiteData(siteData);
      renderTeamTable();
      showToast('Team member updated.');
    });
  });

  tbody.querySelectorAll('[data-delete-team]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-delete-team'), 10);
      if (confirm(`Remove "${siteData.team[idx].name}" from team?`)) {
        siteData.team.splice(idx, 1);
        saveSiteData(siteData);
        renderTeamTable();
        renderDashboard();
        showToast('Team member removed.');
      }
    });
  });
}

function initTeamHandlers() {
  renderTeamTable();
  const addBtn = document.getElementById('add-team-member-btn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const name = prompt('Team Member Name:');
      if (!name) return;
      const role = prompt('Role / Designation:');
      if (!role) return;
      const skillsStr = prompt('Skills (comma-separated):', 'Full-stack Development, Cloud, API');
      const skills = (skillsStr || '').split(',').map((s) => s.trim()).filter(Boolean);

      siteData.team.push({
        id: 'team-' + Date.now(),
        name,
        role,
        photoType: 'taro-sato',
        skills,
        visible: true,
      });

      saveSiteData(siteData);
      renderTeamTable();
      renderDashboard();
      showToast('New team member added!');
    });
  }
}

// 9. CTA Banner & Footer Form
function initCtaFooterEditor() {
  const ctaForm = document.getElementById('cta-form');
  if (ctaForm) {
    document.getElementById('admin-cta-title').value = siteData.ctaBanner.title || '';
    document.getElementById('admin-cta-desc').value = siteData.ctaBanner.description || '';
    document.getElementById('admin-cta-btn-text').value = siteData.ctaBanner.buttonText || '';

    ctaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      siteData.ctaBanner.title = document.getElementById('admin-cta-title').value;
      siteData.ctaBanner.description = document.getElementById('admin-cta-desc').value;
      siteData.ctaBanner.buttonText = document.getElementById('admin-cta-btn-text').value;
      saveSiteData(siteData);
      showToast('CTA banner saved!');
    });
  }

  const footerForm = document.getElementById('footer-form');
  if (footerForm && siteData.footer) {
    document.getElementById('admin-footer-copyright').value = siteData.footer.copyright || '';
    document.getElementById('admin-footer-privacy').value = siteData.footer.privacyText || '';
    document.getElementById('admin-footer-terms').value = siteData.footer.termsText || '';

    footerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      siteData.footer.copyright = document.getElementById('admin-footer-copyright').value;
      siteData.footer.privacyText = document.getElementById('admin-footer-privacy').value;
      siteData.footer.termsText = document.getElementById('admin-footer-terms').value;
      saveSiteData(siteData);
      showToast('Footer settings saved!');
    });
  }
}

// 10. Design & Branding Form
function initDesignEditor() {
  const form = document.getElementById('design-form');
  if (!form || !siteData.settings) return;

  document.getElementById('admin-color-primary').value = siteData.settings.primaryColor || '#dc2626';
  document.getElementById('admin-color-secondary').value = siteData.settings.secondaryColor || '#0066cc';
  document.getElementById('admin-color-accent').value = siteData.settings.accentColor || '#0284c7';
  document.getElementById('admin-seo-title').value = siteData.settings.seoTitle || '';
  document.getElementById('admin-seo-desc').value = siteData.settings.seoDescription || '';

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    siteData.settings.primaryColor = document.getElementById('admin-color-primary').value;
    siteData.settings.secondaryColor = document.getElementById('admin-color-secondary').value;
    siteData.settings.accentColor = document.getElementById('admin-color-accent').value;
    siteData.settings.seoTitle = document.getElementById('admin-seo-title').value;
    siteData.settings.seoDescription = document.getElementById('admin-seo-desc').value;

    saveSiteData(siteData);
    showToast('Design settings and branding applied!');
  });
}

// 11. Backup, Restore, and Reset to Screenshot
function initBackupAndReset() {
  const resetBtn = document.getElementById('reset-screenshot-btn');
  const resetTopBtn = document.getElementById('reset-defaults-top-btn');

  function performReset() {
    if (confirm('Are you sure you want to reset all site content, colors, and images back to the exact initial screenshot?')) {
      siteData = resetToDefaults();
      saveSiteData(siteData);
      window.location.reload();
    }
  }

  if (resetBtn) resetBtn.addEventListener('click', performReset);
  if (resetTopBtn) resetTopBtn.addEventListener('click', performReset);

  // Export JSON
  const exportBtn = document.getElementById('export-json-btn');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const jsonStr = exportSiteDataJson();
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `softsolution-backup-${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast('Backup JSON exported successfully.');
    });
  }

  // Import JSON
  const fileInput = document.getElementById('import-json-file');
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        const success = importSiteDataJson(evt.target.result);
        if (success) {
          alert('Configuration imported successfully! Reloading...');
          window.location.reload();
        } else {
          alert('Invalid backup JSON file.');
        }
      };
      reader.readAsText(file);
    });
  }
}

// Master Publish / Save All button in topbar
function initMasterSave() {
  const saveAllBtn = document.getElementById('save-all-btn');
  if (saveAllBtn) {
    saveAllBtn.addEventListener('click', () => {
      saveSiteData(siteData);
      showToast('All changes published live to website!', 'success');
    });
  }

  const logoutBtn = document.getElementById('admin-logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      if (confirm('Sign out of Admin Panel?')) {
        logout();
      }
    });
  }

  const refreshInquiriesBtn = document.getElementById('refresh-inquiries-btn');
  if (refreshInquiriesBtn) {
    refreshInquiriesBtn.addEventListener('click', () => {
      renderDashboard();
      showToast('Inquiries refreshed.');
    });
  }

  const session = getCurrentSession();
  if (session) {
    const nameEl = document.getElementById('admin-user-name');
    if (nameEl) nameEl.textContent = session.name || 'Administrator';
  }
}

// Init all modules on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  renderDashboard();
  initHeroEditor();
  initPartnershipEditor();
  initServicesHandlers();
  initPortfolioHandlers();
  initWhyProcessEditor();
  initLocationsEditor();
  initTeamHandlers();
  initCtaFooterEditor();
  initDesignEditor();
  initBackupAndReset();
  initMasterSave();
});
