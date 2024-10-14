document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menuButton");
    const menu = document.getElementById("menu");

    // Kada se klikne na ikonu menija, dodaj/ukloni klasu 'show'
    menuButton.addEventListener("click", function() {
        menu.classList.toggle("show");
    });

    // Opcionalno: Klik van menija zatvara meni
    document.addEventListener("click", function(event) {
        if (!menuButton.contains(event.target) && !menu.contains(event.target)) {
            menu.classList.remove("show");
        }
    });
});
