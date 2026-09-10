
//busca filmes e séries
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const input = document.querySelector(".search-data");

  // evita recarregar a pagina ao dar enter
  if (form) {
    form.addEventListener("submit", (e) => e.preventDefault());
  }

  if (!input) return;

  input.addEventListener("input", () => {
    const termo = input.value.trim().toLowerCase();
    document.querySelectorAll(".card").forEach((card) => {
      const titulo =
        card.dataset.titulo ||
        card.querySelector("h3")?.textContent.toLowerCase() ||
        "";
      card.style.display = titulo.includes(termo) ? "" : "none";
    });
  });
});
