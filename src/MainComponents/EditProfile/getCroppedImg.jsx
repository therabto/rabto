// getCroppedImg.js

export default function getCroppedImg(imageUrl, croppedAreaPixels) {
    const img = new Image();
    img.src = imageUrl;
  
    const canvas = document.createElement("canvas");
    canvas.width = croppedAreaPixels.width;
    canvas.height = croppedAreaPixels.height;
  
    const ctx = canvas.getContext("2d");
    ctx.drawImage(
      img,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      croppedAreaPixels.width,
      croppedAreaPixels.height
    );
    //  console.log("canvas",canvas);
     // Convert the canvas to a base64-encoded string
     const base64ImageData = canvas.toDataURL("image/jpeg");
    //  resolve(base64ImageData);
    return base64ImageData ;
  }
  