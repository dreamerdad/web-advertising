document.addEventListener('DOMContentLoaded', function () {
  var videos = document.querySelectorAll('video');
  videos.forEach(function (video) {
    video.muted = true;
    video.setAttribute('muted', '');
    video.playsInline = true;
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.autoplay = true;
    video.setAttribute('autoplay', '');
    video.preload = 'none';
    video.setAttribute('preload', 'none');
    var tryPlay = function () {
      var p = video.play();
      if (p && typeof p.then === 'function') {
        p.catch(function () {}); 
      }
    };
    tryPlay();
    setTimeout(tryPlay, 500);
  });
});
