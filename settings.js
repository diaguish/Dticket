// settings.js

document.addEventListener("DOMContentLoaded", () => {
  // Elements modal
  const openBtn = document.getElementById("openCredsModal");
  const modal = document.getElementById("credsModal");
  const closeBtn = document.getElementById("closeCredsBtn");
  const closeBackdrop = document.getElementById("closeCredsBackdrop");
  const cancelBtn = document.getElementById("cancelCreds");

  const form = document.getElementById("credsForm");
  const errorEl = document.getElementById("credsError");

  // Champs identifiants
  const emailMain = document.getElementById("email");
  const newEmail = document.getElementById("newEmail");
  const newPwd = document.getElementById("newPassword");
  const confirmPwd = document.getElementById("confirmPassword");

  // Boutons bas de page
  const cancelSettings = document.getElementById("cancelSettings");
  const saveSettings = document.getElementById("saveSettings");

  // Toggles
  const darkToggle = document.getElementById("darkModeToggle");
  const notifToggle = document.getElementById("emailNotifToggle");

  // ------- Helpers
  const openModal = () => {
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    errorEl.style.display = "none";
    errorEl.textContent = "Erreur";
  };

  const closeModal = () => {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    // reset champs sensibles
    newPwd.value = "";
    confirmPwd.value = "";
  };

  // ------- Modal events
  openBtn?.addEventListener("click", () => {
    // pré-remplir l'email dans le modal si tu veux
    newEmail.value = emailMain.value || "";
    openModal();
  });

  closeBtn?.addEventListener("click", closeModal);
  closeBackdrop?.addEventListener("click", closeModal);
  cancelBtn?.addEventListener("click", closeModal);

  // Escape pour fermer
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });

  // ------- Submit identifiants
  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    errorEl.style.display = "none";
    errorEl.textContent = "Erreur";

    const emailVal = newEmail.value.trim();
    const pwdVal = newPwd.value.trim();
    const confirmVal = confirmPwd.value.trim();

    // Si mot de passe rempli -> doit matcher
    if (pwdVal || confirmVal) {
      if (pwdVal.length < 6) {
        errorEl.textContent = "Le mot de passe doit contenir au moins 6 caractères.";
        errorEl.style.display = "block";
        return;
      }
      if (pwdVal !== confirmVal) {
        errorEl.textContent = "Les mots de passe ne correspondent pas.";
        errorEl.style.display = "block";
        return;
      }
    }

    // Appliquer changement email (demo front)
    if (emailVal) {
      emailMain.value = emailVal;
    }

    // Ici tu brancheras plus tard ton backend / storage
    // Pour l’instant on fait simple :
    closeModal();
    alert("Identifiants mis à jour (demo front).");
  });

  // ------- Annuler / Enregistrer (bas de page)
  cancelSettings?.addEventListener("click", () => {
    // simple reset demo
    window.location.reload();
  });

  saveSettings?.addEventListener("click", () => {
    // demo : on récupère les valeurs
    const payload = {
      fullName: document.getElementById("fullName")?.value?.trim() || "",
      email: emailMain.value.trim(),
      darkMode: !!darkToggle.checked,
      emailNotifications: !!notifToggle.checked
    };

    // plus tard : fetch() vers API
    console.log("SAVE SETTINGS:", payload);
    alert("Paramètres enregistrés (demo front).");
  });
});
