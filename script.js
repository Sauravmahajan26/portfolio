const sideMenu = document.querySelector("#sideMenu");
const navBar = document.querySelector("nav");
const navLink = document.querySelector("nav ul");

function openMenu() {
  sideMenu.style.transform = "translateX(-16rem)"; // Open menu by sliding into view
}

function closeMenu() {
  sideMenu.style.transform = "translateX(16rem)"; // Close menu by sliding out of view
}

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    navBar.classList.add(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm"
    );
    navLink.classList.remove("bg-white", "shadow-sm", "bg-opacity-50");
  } else {
    navBar.classList.remove(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm"
    );
    navLink.classList.add("bg-white", "shadow-sm", "bg-opacity-50");
  }
});
