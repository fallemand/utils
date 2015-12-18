//On page load, set the event on each video
window.addEventListener('load', function() {
    var videos = document.getElementsByClassName("video");
    for (var i = 0; i < videos.length; i++) {
        videos[i].addEventListener("click", loadVideoIframe);
    }
});

//Load the embed video iframe
function loadVideoIframe(e) {
    this.removeEventListener("click");
    this.classList.add
    var iframe = document.createElement("iframe");
        iframe.setAttribute("class", "video-embed");
        iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.id+"?autoplay=1");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("height", this.offsetHeight);
        iframe.setAttribute("width", this.offsetWidth);
        iframe.setAttribute("allowfullscreen", true);
    this.innerHTML = "";
    this.appendChild(iframe);
    this.classList.remove("video--border");
    e.preventDefault();
}