const music = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");
musicToggle.addEventListener("click", async () => {
  try {
    if (music.paused) {
      await music.play();
      musicToggle.innerHTML = "♫ <span>Pausar música</span>";
      musicToggle.setAttribute("aria-pressed", "true");
    } else {
      music.pause();
      musicToggle.innerHTML = "♫ <span>Ativar música</span>";
      musicToggle.setAttribute("aria-pressed", "false");
    }
  } catch (error) {
    alert("Adicione o arquivo musica.mp3 à pasta do site para ativar a trilha sonora.");
  }
});

const dialog = document.getElementById("letterDialog");
document.querySelectorAll(".letter-card").forEach(card => {
  card.addEventListener("click", () => {
    document.getElementById("dialogTitle").textContent = card.dataset.title;
    document.getElementById("dialogMessage").textContent = card.dataset.message;
    dialog.showModal();
  });
});
document.getElementById("closeDialog").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});
document.getElementById("reveal").addEventListener("click", () => {
  document.getElementById("hiddenMessage").classList.add("show");
  document.getElementById("reveal").textContent = "♡";
});
