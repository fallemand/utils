# Youtube Video Embed
We want to share two examples of how to insert Youtube videos in a more efficient way than just insert the iframe tag.

### Example 1
##### Description
Insert just an image, with the appereance of a video, and on the click event, the image will transform itself into a video.
##### Pros
  - Reduce web page load (Just 20k in our example).
  - Will work if javascript is not enabled (The image will link to the youtube video page).
  
##### Cons
  - On some devices (cellphones), the video will not autostart after you click on the image, you will have to click twice.
  
##### Example
* [Example1]

##### HTML
Without no-js fallback
```html
<div class="video" data-id="E1apGVPWo78" data-width="450" data-height="247"></div>
```
With no-js fallback
```html
<a href="https://www.youtube.com/watch?v=E1apGVPWo78" class="video video--border video--size-if-no-js" style="background-image: url('http://img.youtube.com/vi/E1apGVPWo78/0.jpg');" data-id="E1apGVPWo78" data-width="450" data-height="247">
    <div class="video-btn"></div>
</a>
```

##### JS
```js
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
        iframe.setAttribute("height", this.dataset.width);
        iframe.setAttribute("width", this.dataset.height);
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

.video--size-if-no-js {
    width:450px;
    height:247px;
}
```

### Example 2
##### Description
Asyc way of loading the video iframe using the [YoutubeAPI]

##### Pros
  - Will autoplay in all devices
  - Will not insert image
  
##### Cons
  - Will not work if no javascript
  - More resources are loaded on the page load (520k in our example)
  
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
   [Example1]: <http://fallemand.github.io/utils/youtube-embed/example1/>
   [Example2]: <http://fallemand.github.io/utils/youtube-embed/example2/>
   [YoutubeAPI]: <https://developers.google.com/youtube/iframe_api_reference?hl=es>
   
