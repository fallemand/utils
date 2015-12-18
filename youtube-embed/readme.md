# Youtube Video Embed
We want to share two examples of youtube video insertion inside our webpage with a more efficient method than just insert the iframe tag.

### Example 1
##### Description
Insert just an image, with the appereance of a video, and on the click event, the image will transform itself into a video.
##### Pros
  - Reduce web page load (Just 20k in our example).
  - No javascript fallback. (The image will link to the youtube video page).
##### Cons
  - On some devices (cellphones), the video will not autostart after you click on the image, you will have to click twice.
##### Example
* [Example1]
##### HTML
```html
<a href="https://www.youtube.com/watch?v=E1apGVPWo78" class="video video--border video--nm" style="background-image: url('http://img.youtube.com/vi/E1apGVPWo78/0.jpg');" data-id="E1apGVPWo78">
    <div class="video-btn"></div>
</a>
```
##### JS
```js
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
```

##### CSS
```css
/* Video
---------------------------------------------------------------*/
.video,
.video-embed {
    max-width: 100%;
}

.video {
    position: relative;
    cursor: pointer;
    display: block;
    background-color: #000;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}

.video--border {
    border-top: 30px solid #000;
    border-bottom: 30px solid #000;
}

.video-btn {
    height: 50px;
    width: 70px;
    left: 50%;
    top: 50%;
    margin-left: -30px;
    margin-top: -30px;
    position: absolute;
	background-color: #333;
    background-color: rgba(0, 0, 0, .6);
	border-radius: 12px;
}

.video-btn:hover {
    background-color: #C33C2D;
}

.video-btn:before {
	content: "";
	position: absolute;
	left: 50%;
	top: 50%;
	width: 0;
	height: 0;
	margin-top: -15.5px;
	margin-left: -11px;
	border-top: 15px solid transparent;
	border-bottom: 15px solid transparent;
	border-left: 28px solid #FFF;
}

.video--nm {
    width:450px;
    height:247px;
}
```

### Example 2
##### Description
Asyc way of loading the video
##### Pros
  - Will autoplay in all devices
  - Will not insert image
##### Cons
  - Will not work if no javascript
  - More page load
##### Example
* [Example2]
##### HTML
```html
<div id="rKNeObQB_X0" class="video" data-width="450" data-height="247"></div>
```
##### JS
```js
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
```

##### CSS
```css
/* Video
---------------------------------------------------------------*/

.video,
.video-embed {
    max-width: 100%;
}
```

[//]: #
   [Example1]: <https://github.com/joemccann/dillinger>
   [Example2]: <https://github.com/joemccann/dillinger.git>
