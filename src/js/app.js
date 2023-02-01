//  import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const main = document.querySelector(".main")
  const image = document.createElement("div")
  image.className ="image";

  const img = document.createElement("img");
  img.src = "https://images.pexels.com/photos/1918246/pexels-photo-1918246.jpeg"
  image.appendChild(img);
  
  main.appendChild(image);

  const btn = document.querySelector(".image")
  btn.addEventListener("click", doubleImage);

  function doubleImage() {
    image.style.transform = "scale(2)";


  }

});
