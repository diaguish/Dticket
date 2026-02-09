// projects.js

const openDesktopBtn = document.getElementById("openCreateProject");
const openMobileBtn = document.getElementById("openCreateProjectMobile");

const modal = document.getElementById("projectModal");
const closeBtn = document.getElementById("closeProjectBtn");
const closeBackdrop = document.getElementById("closeProjectBackdrop");
const cancelBtn = document.getElementById("cancelProjectCreate");

const form = document.getElementById("createProjectForm");
const grid = document.getElementById("projectGrid");

// helpers
function openModal() {
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  form.reset();
}

function statusChip(statusValue) {
  if (statusValue === "actif") return `<span class="chip">Actif</span>`;
  if (statusValue === "pause") return `<span class="chip">En pause</span>`;
  return `<span class="chip chip--warning">Terminé</span>`;
}

function clampPercent(n) {
  if (Number.isNaN(n)) return 0;
  return Math.max(0, Math.min(100, n));
}

// open modal
if (openDesktopBtn) openDesktopBtn.addEventListener("click", openModal);
if (openMobileBtn) openMobileBtn.addEventListener("click", openModal);

// close modal
closeBtn.addEventListener("click", closeModal);
closeBackdrop.addEventListener("click", closeModal);
cancelBtn.addEventListener("click", closeModal);

// ESC to close
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

// submit -> add new project card
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("projectName").value.trim();
  const client = document.getElementById("projectClient").value.trim();
  const status = document.getElementById("projectStatus").value;

  const hours = parseInt(document.getElementById("projectHours").value, 10);
  const remaining = parseInt(document.getElementById("projectRemaining").value, 10);

  if (!name || !client || Number.isNaN(hours) || Number.isNaN(remaining)) return;

  // progress calc
  const consumed = Math.max(0, hours - remaining);
  const percent = hours > 0 ? clampPercent((consumed / hours) * 100) : 0;

  const article = document.createElement("article");
  article.className = "project_card card";
  article.innerHTML = `
    <div class="card_head">
      <div>
        <h3 class="project_name">${escapeHtml(name)}</h3>
        <p class="project_client">${escapeHtml(client)}</p>
      </div>
      ${statusChip(status)}
    </div>

    <div class="project_contract">
      <p class="muted">Heures incluses : <strong>${hours}h</strong></p>
      <div class="progress">
        <div class="bar" style="width: ${percent.toFixed(0)}%;"></div>
      </div>
      <p class="muted">Restantes : <strong>${remaining}h</strong></p>
    </div>

    <div class="project_stats">
      <div><strong>0</strong><span class="chip chip--success">Ouverts</span></div>
      <div><strong>0</strong><span class="chip chip--soft-primary">En cours</span></div>
      <div><strong>0</strong><span class="chip chip--warning">À valider</span></div>
    </div>

    <footer class="project_footer">
      <div class="avatars">
        <span class="avatar">N</span>
      </div>
      <div class="icons">
       <a class="icon_btn" href="project_detail.html" aria-label="Voir">🔍</a>

        <button class="icon_btn" type="button" aria-label="Modifier">✏️</button>
      </div>
    </footer>
  `;

  // add to top
  grid.prepend(article);

  closeModal();
});

// small helper to avoid injecting HTML
function escapeHtml(str) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
