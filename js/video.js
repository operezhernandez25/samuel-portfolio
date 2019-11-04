var mainVideo = $('.carousel-video');
var mainVideo2 = $('.carousel-video-2');

var arboVideo = $('.arbo-video');

if ($(window).width() < 480) {
  
    mainVideo.append("<source type='video/mp4' src='./videos/carousel/marca-video-mobile.mp4' />");
    arboVideo.append("<source type='video/mp4' src='./videos/ARBO_MOBILE.mp4' />");
    mainVideo2.append("<source type='video/mp4' src='./videos/carousel/carousel-video-2-mobile.mp4' />");

} else {
    
  mainVideo.append("<source type='video/mp4' src='./videos/carousel/Marca-video-desktop.mp4' />");
  arboVideo.append("<source type='video/mp4' src='./videos/ARBO.mp4' />");
  mainVideo2.append("<source type='video/mp4' src='./videos/carousel/carousel-video-2.mp4' />");
}

// Wait until sources are appended to call MediaElements.js
mainVideo.mediaelementplayer();
arboVideo.mediaelementplayer();