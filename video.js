const video = document.createElement('video');
video.src = 'https://www.youtube.com/watch?v=5d8nuC_y_Kk';
video.controls = true;
video.width = 450;
video.height = 400;

document.getElementById('video-container').appendChild(video);