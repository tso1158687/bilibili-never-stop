// You can get a reference to the video element by its tag, id or class
let video = document.querySelector('video');

video.addEventListener('pause', function() {
    console.log('Video is now paused');
    video.play();
});

video.addEventListener('play', function() {
    console.log('Video is now playing');
});
// Check if the video is playing
let isPlaying = video.currentTime > 0 && !video.paused && !video.ended
    && video.readyState > 2;
