navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
window.AudioContext = window.AudioContext || window.webkitAudioContext;

function hasGetUserMedia() {
  return !!navigator.getUserMedia;
};

function hasAudioContext() {
  return !!window.AudioContext;
}

export function compatibilityCheck() {
  return hasGetUserMedia() && hasAudioContext();
}

export function getStream() {
  return navigator.mediaDevices.getUserMedia({audio: true})
    .then(stream => new MediaRecorder(stream))
    .catch(console.error);
}
