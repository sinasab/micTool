// gross, side effects!
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

export function startStream() {
  // const audioContext = new AudioContext(
  //   document.querySelector('#current_recording')
  // );
  return navigator.mediaDevices.getUserMedia({audio: true})
    // .then(stream => {
    //   const mediaStreamSource = audioContext.createMediaStreamSource(stream);
    //   mediaStreamSource.connect(audioContext.destination);
    // })
    .catch(console.error);
}
