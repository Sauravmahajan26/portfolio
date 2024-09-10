const sideMenu = document.querySelector("#sideMenu");

function openMenu() {
  sideMenu.style.transform = "translateX(-16rem)"; // Open menu by sliding into view
}

function closeMenu() {
  sideMenu.style.transform = "translateX(16rem)"; // Close menu by sliding out of view
}
