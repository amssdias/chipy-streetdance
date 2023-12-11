if (window.innerWidth < 700) {
    const headerVideo = document.getElementById("header-video");
    headerVideo.src = "videos/header-video-phone.mp4"
}


// Home page, event for images become big
const images = document.querySelectorAll(".gallery-row--image");
const popUp = document.querySelector("#pop-up");
const popUpImg = document.querySelector("#pop-up-image");


popUp.addEventListener("click", function () {
    this.style.display = "none";
})


images.forEach(function (img) {
    img.addEventListener("click", function () {
        popUp.style.display = "flex";

        // Use original image
        const path = this.src.split("/");
        path.pop();
        const source = this.src.split("/").pop().split(".")[0].split("-").slice(0, 2).join("-");
        popUpImg.src = `${path.join("/")}/${source}.jpg`;
    })
})

