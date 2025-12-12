document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-tags");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const filterList = document.getElementById("tag-filter");
      if (filterList) {
        filterList.classList.toggle("collapsed");
      }
    });
  }
});
