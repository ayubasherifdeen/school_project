document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const images = document.querySelectorAll(".image");

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();

    images.forEach(image => {
      const name = image.dataset.name.toLowerCase();
      if (name.includes(searchTerm)) {
        image.classList.remove("hidden");
      } else {
        image.classList.add("hidden");
      }
    });
  });
});