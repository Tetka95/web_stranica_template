document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menuButton");
    const menu = document.getElementById("menu");

    menuButton.addEventListener("click", function() {
        menu.classList.toggle("show");
    });

    document.addEventListener("click", function(event) {
        if (!menuButton.contains(event.target) && !menu.contains(event.target)) {
            menu.classList.remove("show");
        }
    });
});
