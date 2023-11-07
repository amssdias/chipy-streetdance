function addEventToMenuBarIcon() {
    const menuBarIcon = this.document.getElementById("navigation-bar__menu-icon");
    const menuList = document.getElementById("navigation-bar__list");

    menuBarIcon.addEventListener("click", function() {

        if (menuList.style.display === "none") {
            menuList.style.display = "flex";
        } else {
            menuList.style.display = "none";
        }

    })
}



window.addEventListener('load', function() {

    // Menu bar icon display
    addEventToMenuBarIcon()

});