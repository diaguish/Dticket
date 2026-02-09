// ===== Helpers =====
function $(id) {
  return document.getElementById(id);
}

function openModal(modal) {
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal(modal) {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}


const clientModal = $("clientModal");

const openDesktopBtn = $("openCreateClient");
const openMobileBtn = $("openCreateClientMobile");

const closeBtn = $("closeClientModalBtn");
const closeBackdrop = $("closeClientModalBackdrop");
const cancelBtn = $("cancelClientCreate");

const form = $("createClientForm");
const nameInput = $("clientName");
const emailInput = $("clientEmail");
const phoneInput = $("clientPhone");

const tbody = $("clientsTbody");

// stats
const statTotal = $("statTotalClients");
const statPending = $("statPendingRequests");
const statActive = $("statActiveClients");


if (openDesktopBtn) {
  openDesktopBtn.addEventListener("click", () => {
    openModal(clientModal);
    nameInput.focus();
  });
}

if (openMobileBtn) {
  openMobileBtn.addEventListener("click", () => {
    openModal(clientModal);
    nameInput.focus();
  });
}

// ===== Close modal =====
[closeBtn, closeBackdrop, cancelBtn].forEach((el) => {
  if (!el) return;
  el.addEventListener("click", () => closeModal(clientModal));
});



// ===== Create client =====
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();

  if (!name || !email || !phone) return;

  // Create row
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><strong>${escapeHtml(name)}</strong></td>
    <td>${escapeHtml(email)}</td>
    <td>${escapeHtml(phone)}</td>
    <td class="muted">${formatToday()}</td>
    <td>
      <button class="icon_btn" type="button" aria-label="Voir">🔍</button>
      <button class="icon_btn" type="button" aria-label="Modifier">✏️</button>
    </td>
  `;

  tbody.prepend(tr);

  // Update stats
  statTotal.textContent = String(parseInt(statTotal.textContent || "0", 10) + 1);

  // Optionnel : quand tu ajoutes un client, tu peux le compter comme "actif"
  statActive.textContent = String(parseInt(statActive.textContent || "0", 10) + 1);

  // Reset + close
  form.reset();
  closeModal(clientModal);
});

// ===== Security: basic escape (évite injection HTML) =====
function escapeHtml(str) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatToday() {
  // Simple: "08 Feb"
  const d = new Date();
  const day = String(d.getDate()).padStart(2, "0");
  const month = d.toLocaleString("en-US", { month: "short" }); // Feb, Mar...
  return `${day} ${month}`;
}
