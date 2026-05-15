const video = document.createElement('video');
video.src = 'video/Century-vs-OES.mp4';
video.controls = true;
video.width = 500;
video.height = 300;

document.getElementById('video-container').appendChild(video);