// Async load the youtube video API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    var videos = document.getElementsByClassName("video");
    var video;
    for (var i = 0; i < videos.length; i++) {
        video = videos[i];
        player = new YT.Player(video.id, {
            width: video.dataset.width,
            height: video.dataset.height,
            videoId: video.id
        });
    }
}