$(document).ready(function () {
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'assets/audio/ThisMomentiInTime.mp3');

  audioElement.addEventListener(
    'ended',
    function () {
      this.play();
    },
    false
  );

  var isPlaying = false;

  $('.play_music').on('click', function () {
    $('i', this).toggleClass('fa-play-circle fa-stop-circle');

    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }

    audioElement.onplaying = function () {
      isPlaying = true;
    };
    audioElement.onpause = function () {
      isPlaying = false;
    };
  });
});
