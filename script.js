document.addEventListener("DOMContentLoaded", function () {
  const appsButton = document.querySelector(".material-symbols-outlined");
  const appsMenu = document.querySelector(".apps-menu");

  appsButton.addEventListener("click", function (event) {
    appsMenu.classList.toggle("visible");
    event.stopPropagation();
  });

  document.addEventListener("click", function (event) {
    if (
      !appsMenu.contains(event.target) &&
      !appsButton.contains(event.target)
    ) {
      appsMenu.classList.remove("visible");
    }
  });
});
