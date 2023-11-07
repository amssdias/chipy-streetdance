if (window.innerWidth < 700) {
    const headerVideo = document.getElementById("header-video");
    headerVideo.src = "videos/header-video-phone.mp4"
}


window.addEventListener('load', function() {

    // Home page, event for images become big
    let images = document.querySelectorAll(".gallery-row--image");
    let popUp = this.document.querySelector("#pop-up");
    let img = document.querySelector("#pop-up-image");

    for (const image of images) {
        image.addEventListener("click", function() {            
            popUp.style.display = "flex";
            img.src = this.src;
        });
    }

    popUp.addEventListener("click", function() {
        this.style.display = "none";
    })

});