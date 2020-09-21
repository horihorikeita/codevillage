function toggleNav() {
  let body = document.body;
  let hamburger = document.getElementById("js-target");
  let blackBg = document.getElementById("js-black-bg");
  let list = document.getElementById("list");

  hamburger.addEventListener("click", function () {
    body.classList.toggle("nav-open");
  });
  blackBg.addEventListener("click", function () {
    body.classList.remove("nav-open");
  });
  list.addEventListener("click", function () {
    body.classList.remove("nav-open");
  });
}
toggleNav();
