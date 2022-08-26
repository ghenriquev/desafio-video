let video = document.querySelector("#video1");

function play() {
  video.play();
}

function stop() {
  video.pause();
  video.currentTime = 0;
}

function aumentar() {
  video.playbackRate += 0.1;
}

function diminuir() {
  video.playbackRate -= 0.1;
}
