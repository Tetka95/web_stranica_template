document.addEventListener("DOMContentLoaded", () => {

    const menuButton = document.getElementById("menuButton");

    const menu = document.getElementById("menu");


    // Toggle menu visibility on button click

    menuButton.addEventListener("click", () => {

        menu.classList.toggle("visible");

    });
});