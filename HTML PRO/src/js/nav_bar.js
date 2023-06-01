document.addEventListener('DOMContentLoaded', function() {
  let btn = document.querySelector("#btn");
  let sidebar = document.querySelector(".sidebar");
  let searchBtn = document.querySelector(".bx-search");
  let topMenu = document.querySelector(".topMenu");

  btn.onclick = function() {
    sidebar.classList.toggle("active");
    topMenu.classList.toggle("collapsed");
  }

  searchBtn.onclick = function() {
    sidebar.classList.toggle("active");
    topMenu.classList.toggle("collapsed");
  }
});
