//On page load, set the event on each video
window.addEventListener('load', function() {
    var videos = document.getElementsByClassName("video"),
        button = document.createElement('div');
    button.classList.add('video-btn');
    for (var i = 0; i < videos.length; i++) {
        videos[i].addEventListener("click", loadVideoIframe);
        videos[i].style.backgroundImage = "url('http://img.youtube.com/vi/" + videos[i].dataset.id + "/0.jpg')";
        videos[i].classList.add('video--border');
        videos[i].style.width = videos[i].dataset.width + 'px';
        videos[i].style.height = videos[i].dataset.height + 'px';
        videos[i].innerHTML = '';
        videos[i].appendChild(button.cloneNode());
    }
});

//Load the embed video iframe
function loadVideoIframe(e) {
    this.removeEventListener("click");
    var iframe = document.createElement("iframe");
        iframe.setAttribute("class", "video-embed");
        iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.id +"?autoplay=1");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("height", this.offsetHeight);
        iframe.setAttribute("width", this.offsetWidth);
        iframe.setAttribute("allowfullscreen", true);
    this.innerHTML = "";
    this.appendChild(iframe);
    this.classList.remove("video--border");
    e.preventDefault();
}