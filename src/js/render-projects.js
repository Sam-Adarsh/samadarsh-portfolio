import projects from '../data/projects.json';

export function renderProjects() {
  const featuredGrid = document.getElementById('featured-work');
  const moreGrid = document.getElementById('more-projects');

  const featured = projects
    .filter((p) => p.featured)
    .sort((a, b) => a.order - b.order);

  const more = projects
    .filter((p) => !p.featured)
    .sort((a, b) => a.order - b.order);

  if (featuredGrid) {
    featuredGrid.innerHTML = featured.map(renderFeaturedCard).join('');
  }

  if (moreGrid) {
    moreGrid.innerHTML = more.map(renderCompactCard).join('');
  }
}

function renderFeaturedCard(p) {
  const liveLink = p.links.live
    ? `<a href="${p.links.live}" target="_blank" rel="noopener noreferrer" class="btn btn-primary work-btn">
        Live <i data-lucide="external-link" width="14" height="14"></i>
       </a>`
    : '';

  const githubLink = p.links.github
    ? `<a href="${p.links.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline work-btn">
        GitHub <i data-lucide="github" width="14" height="14"></i>
       </a>`
    : '';

  const bullets =
    p.bullets.length > 0
      ? `<ul class="work-bullets">${p.bullets.map((b) => `<li>${b}</li>`).join('')}</ul>`
      : '';

  const tags = p.tags.map((t) => `<span class="project-tag">${t}</span>`).join('');

  const media = p.media?.poster
    ? `<img src="${p.media.poster}" alt="${p.title} screenshot" class="work-media-img" loading="lazy" width="800" height="450" />`
    : `<div class="work-media-placeholder"><span>${p.title}</span></div>`;

  return `
    <article class="work-card work-card--featured reveal-on-scroll">
      <div class="work-media">${media}</div>
      <div class="work-body">
        <p class="card-eyebrow">${p.eyebrow}</p>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.summary}</p>
        ${bullets}
        <div class="project-tags">${tags}</div>
        <div class="work-links">${liveLink}${githubLink}</div>
      </div>
    </article>
  `;
}

function renderCompactCard(p) {
  const href = p.links.live || p.links.github || '#';
  const isExternal = href !== '#';
  const attrs = isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';
  const tags = p.tags
    .slice(0, 3)
    .map((t) => `<span class="project-tag">${t}</span>`)
    .join('');

  const arrow = isExternal
    ? `<i data-lucide="arrow-up-right" width="16" height="16" class="compact-arrow"></i>`
    : '';

  return `
    <a href="${href}" ${attrs} class="work-card work-card--compact reveal-on-scroll">
      <div class="compact-header">
        <p class="card-eyebrow">${p.eyebrow}</p>
        ${arrow}
      </div>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.summary}</p>
      <div class="project-tags">${tags}</div>
    </a>
  `;
}
