const openBtn = document.querySelector("#openCreateTicket");
const modal = document.querySelector("#ticketModal");
const closeBtn = document.querySelector("#closeModalBtn");
const closeBackdrop = document.querySelector("#closeModalBackdrop");
const cancelBtn = document.querySelector("#cancelCreate");

const form = document.querySelector("#createTicketForm");
const colNew = document.querySelector("#colNew");

// Ouvrir modal
function openModal() {
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.querySelector("#ticketTitle").focus();
}

// Fermer modal
function closeModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  form.reset();
}

openBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openModal();
});

closeBtn.addEventListener("click", closeModal);
closeBackdrop.addEventListener("click", closeModal);
cancelBtn.addEventListener("click", closeModal);

// Fermer avec ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Helper: crée une chip priorité
function priorityChip(value) {
  if (value === "low") return `<span class="chip chip--pri-low">Basse</span>`;
  if (value === "med") return `<span class="chip chip--pri-med">Moyenne</span>`;
  return `<span class="chip chip--pri-high">Haute</span>`;
}

// Helper: chip type
function typeChip(value) {
  if (value === "facturable") return `<span class="chip chip--warning">Facturable</span>`;
  return `<span class="chip chip--neutral">Inclus</span>`;
}

// Submit: ajouter un ticket dans "Nouveau"
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#ticketTitle").value.trim();
  const project = document.querySelector("#ticketProject").value;
  const priority = document.querySelector("#ticketPriority").value;
  const type = document.querySelector("#ticketType").value;

  // mini validation
  if (!title || !project) return;

  const ticketHTML = `
    <article class="ticket_card card">
      <div class="ticket_top">
        <h3 class="ticket_title">${title}</h3>
        ${priorityChip(priority)}
      </div>

      <p class="ticket_meta">Projet : <strong>${project}</strong></p>

      <div class="ticket_tags">
        ${typeChip(type)}
        <span class="chip chip--tag-gray">Nouveau</span>
      </div>

      <div class="ticket_footer">
        <span class="muted">Temps : 0h / 0h</span>
        <span class="muted">Assigné : —</span>
      </div>
    </article>
  `;

  colNew.insertAdjacentHTML("afterbegin", ticketHTML);

  closeModal();
});
