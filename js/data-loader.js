/**
 * Darsh Patel Portfolio — Data Loader Module
 * Hydrates DOM dynamically from data/content.js
 */

document.addEventListener("DOMContentLoaded", () => {
  if (!window.siteData) return;

  const data = window.siteData;

  // Hydrate Experience List
  const timelineContainer = document.getElementById("experience-timeline");
  if (timelineContainer && data.experience) {
    timelineContainer.innerHTML = data.experience.map(exp => `
      <article class="timeline-card card-hover-effect reveal-up">
        <div class="timeline-card-header">
          <div>
            <h3 class="company-name">${exp.company}</h3>
            <div class="role-title">${exp.role} <span style="opacity: 0.6; font-weight: normal;">• ${exp.type}</span></div>
          </div>
          <div class="period-badge">${exp.period}</div>
        </div>
        <p style="margin-bottom: 1.25rem; color: var(--text-secondary); font-size: 1.05rem;">${exp.description}</p>
        <ul class="timeline-bullets">
          ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
        <div class="tech-tag-row">
          ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </article>
    `).join('');
  }

  // Hydrate Projects Case Studies (compact, no visual placeholder)
  const workContainer = document.getElementById("work-grid");
  if (workContainer && data.projects) {
    workContainer.innerHTML = data.projects.map((proj) => {
      const accent = proj.accentColor || "#ff4c24";
      return `
      <article class="project-case-card reveal-up" data-project-id="${proj.id}" style="--project-accent: ${accent};">
        <div class="project-meta-row">
          <span class="project-number">[ ${proj.number} / ${String(data.projects.length).padStart(2, '0')} ]</span>
          <span class="project-tag">${proj.category}</span>
        </div>

        <h3 class="project-title">${proj.title}</h3>
        <div class="project-subtitle">${proj.subtitle}</div>
        <p class="project-description">${proj.description}</p>

        <ul class="project-feature-list">
          ${proj.fullDetails.keyFeatures.slice(0, 3).map(f => `<li>${f}</li>`).join('')}
        </ul>

        <div class="tech-tag-row">
          ${proj.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>

        <div class="project-card-footer">
          ${proj.fullDetails.achievement ? `<span class="project-achievement-line"><i data-lucide="award" style="width: 14px; height: 14px;"></i> ${proj.fullDetails.achievement}</span>` : '<span></span>'}
          <div class="project-card-actions">
            <button class="btn btn-primary open-case-study-btn" data-project-id="${proj.id}" style="padding: 0.65rem 1.2rem; font-size: 0.78rem;">
              View Case Study <i data-lucide="arrow-right" style="width: 14px; height: 14px;"></i>
            </button>
            ${proj.liveUrl ? `<a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="padding: 0.65rem 1rem; font-size: 0.78rem;">Live Demo <i data-lucide="external-link" style="width: 14px; height: 14px;"></i></a>` : ''}
            ${proj.githubUrl ? `<a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="padding: 0.65rem 1rem; font-size: 0.78rem;">GitHub <i data-lucide="github" style="width: 14px; height: 14px;"></i></a>` : ''}
            ${proj.linkedinUrl ? `<a href="${proj.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="padding: 0.65rem 1rem; font-size: 0.78rem;">LinkedIn Post <i data-lucide="linkedin" style="width: 14px; height: 14px;"></i></a>` : ''}
          </div>
        </div>
      </article>
    `;
    }).join('');
  }

  // Hydrate Other Projects (compact list)
  const otherProjectsContainer = document.getElementById("other-projects-list");
  if (otherProjectsContainer && data.otherProjects) {
    otherProjectsContainer.innerHTML = data.otherProjects.map(proj => `
      <div class="other-project-card reveal-up">
        <h4 class="other-project-title">${proj.title}</h4>
        <p class="other-project-desc">${proj.description}</p>
        <div class="tech-tag-row">
          ${proj.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        ${proj.liveUrl ? `<a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="other-project-link">Live Demo <i data-lucide="arrow-up-right" style="width: 14px; height: 14px;"></i></a>` : ''}
      </div>
    `).join('');
  }

  // Hydrate Technical Skills Categories
  const skillsContainer = document.getElementById("skills-grid");
  if (skillsContainer && data.skills) {
    skillsContainer.innerHTML = data.skills.categories.map(cat => `
      <div class="skill-category-card reveal-up" data-category="${cat.name}">
        <h3 class="skill-category-title">
          <span>${cat.name}</span>
          <i data-lucide="code-2" style="width: 20px; height: 20px; color: var(--accent-orange);"></i>
        </h3>
        <div class="skill-chips">
          ${cat.skills.map(s => `
            <span class="skill-chip ${s.Highlight ? 'highlight' : ''}">
              ${s.name} <small style="opacity: 0.6; font-size: 0.7em;">• ${s.level}</small>
            </span>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // Hydrate Research & Achievements
  const achievementsContainer = document.getElementById("achievements-grid");
  if (achievementsContainer && data.achievements) {
    achievementsContainer.innerHTML = data.achievements.map(ach => `
      <div class="achievement-card reveal-up">
        <div>
          <div class="achievement-category">${ach.category}</div>
          <h3 class="achievement-title">${ach.title}</h3>
        </div>
        <p class="achievement-description">${ach.description}</p>
      </div>
    `).join('');
  }

  // Hydrate Services List
  const servicesContainer = document.getElementById("services-list");
  if (servicesContainer && data.services) {
    servicesContainer.innerHTML = data.services.map(srv => `
      <div class="service-item reveal-up">
        <div class="service-num">${srv.number}</div>
        <h3 class="service-title">${srv.title}</h3>
        <p class="service-desc">${srv.description}</p>
      </div>
    `).join('');
  }

  // Initialize Lucide Icons if available
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
