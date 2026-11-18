function toggleMenu() {
  var menu = document.getElementById("info-links");
  var toggle = document.querySelector(".toggle");
  var isOpen = menu.classList.toggle("active");
  toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

document.querySelectorAll('#info-links a').forEach((link) => {
  link.addEventListener('click', () => {
    document.getElementById('info-links').classList.remove('active');
    document.querySelector('.toggle').setAttribute('aria-expanded', 'false');
  });
});


function ViewFullMenu(event) {
  event.preventDefault();

  const moreDrinks = document.getElementById("more-drinks");
  const button = document.querySelector(".menu-btn");
  const isVisible = getComputedStyle(moreDrinks).display !== "none";

  moreDrinks.style.display = isVisible ? "none" : "flex";
  button.textContent = isVisible ? "View Full Menu" : "View Less";

}


function readMore() {
  const btn = document.querySelector("#readMore");
  const readmore = document.querySelector(".more-text");
  const isVisible = getComputedStyle(readmore).display !== "none";

  readmore.style.display = isVisible ? "none" : "block";
  btn.textContent = isVisible ? "Read More" : "Read Less";
  btn.setAttribute("aria-expanded", isVisible ? "false" : "true");
}