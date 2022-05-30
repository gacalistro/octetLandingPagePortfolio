window.addEventListener("scroll", onScroll);
onScroll();

function onScroll() {
  activeNavStyle(home);
  activeNavStyle(services);
  activeNavStyle(projects);
  activeNavStyle(about);
  activeNavStyle(testimonials);
}

function activeNavStyle(section) {
  const targetLine = scrollY + innerHeight / 2;

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionBottom = sectionTop + sectionHeight;
  const sectionId = section.getAttribute("id");

  const passedTop = targetLine >= sectionTop;
  const passedBottom = targetLine >= sectionBottom;

  const sectionBoundaries = passedTop && !passedBottom;

  const listElement = document.querySelector(
    `#navigation ul li a[href*=${sectionId}]`
  );

  listElement.classList.remove("active");

  if (sectionBoundaries) {
    listElement.classList.add("active");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

const swiper = new Swiper(".swiper", {
  // Parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  // Pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  breakpoints: {
    1024: {
      slidesPerView: 1.4,
      spaceBetween: 40,
    },
  },
});
