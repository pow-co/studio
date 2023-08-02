export function buf2hex(buffer: ArrayBuffer) {
    return Array.from(new Uint8Array(buffer))
      .map((x) => x.toString(16).padStart(2, '0'))
      .join('');
}

export function convertImageToBase64(imageUrl: string, callback: (imageUrl:string) => void) {
  var img = new Image();
  img.crossOrigin = "Anonymous"; // Important for images from other domains
  img.onload = function() {
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext('2d');
    ctx && ctx.drawImage(img, 0, 0, img.width, img.height);

    var base64String = canvas.toDataURL('image/png'); // You can change the format to 'image/jpeg' if needed

    callback(base64String);
  };

  img.src = imageUrl;
}

export function getFinalImageUrl(initialUrl: string, callback: (initialUrl: string) => void) {
  fetch(initialUrl, { method: 'HEAD', redirect: 'follow' })
    .then(response => {
      if (response.url) {
        callback(response.url);
      } else {
        console.error('Could not determine final URL');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}