if (window.innerWidth < 700) {
    const headerVideo = document.getElementById("header-video");
    headerVideo.src = "videos/header-video-phone-low.mp4"
}


window.addEventListener('load', function() {

    // Home page, event for images become big
    let images = document.querySelectorAll(".gallery-row--image");
    let popUp = this.document.querySelector("#pop-up");
    let img = document.querySelector("#pop-up-image");

    for (const image of images) {
        image.addEventListener("click", function() {            
            popUp.style.display = "flex";

            // Use original image
            let source = this.src.split("-").slice(0, 2).join("-")
            img.src = `${source}.jpg`;
        });
    }

    popUp.addEventListener("click", function() {
        this.style.display = "none";
    })

});