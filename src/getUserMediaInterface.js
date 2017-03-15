export function hasGetUserMedia() {
  return !!navigator.getUserMedia;
};

// gross, side effects!
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
