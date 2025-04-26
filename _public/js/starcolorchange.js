function preloadImages(imagesArray, callback) {
    let loadedImages = 0;
    const numImages = imagesArray.length;
  
    // If there are no images to preload, execute the callback immediately
    if (numImages === 0) {
      return callback();
    }
  
    for (let i = 0; i < numImages; i++) {
      const img = new Image();
      img.src = imagesArray[i];
  
      img.onload = () => {
        loadedImages++;
        if (loadedImages === numImages) {
          callback();
        }
      };
  
      img.onerror = () => {
        loadedImages++;
        console.error("Error loading image:", imagesArray[i]);
        if (loadedImages === numImages) {
          callback();
        }
      };
    }
  }

  const images = [
    "/images/9pointstar-cream.svg",
    "/images/9pointstar-blue.svg",
    "/images/9pointstar-red.svg"
  ];
  
  preloadImages(images, () => {
    console.log("All images preloaded!");
    // Perform actions that require the images to be loaded, 
    // such as initializing a slideshow or displaying them on the page.
  });


function isElementInViewport (el) {
    // Special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}

const section1 = document.querySelector("#firstgrid");
const section2 = document.querySelector("#recordssection")
const section3 = document.querySelector("#videossection");
const background = document.querySelector("#background");

function draw() {
    if (isElementInViewport(section1)) {
        background.style.backgroundImage = "url('/images/9pointstar-cream.svg')";
        console.log("section1");
    }
    else if (isElementInViewport(section2)) {
        background.style.backgroundImage = "url('/images/9pointstar-blue.svg')";
        console.log("section2");
    }
    else if (isElementInViewport(section3)) {
        background.style.backgroundImage = "url('/images/9pointstar-red.svg')";
        console.log("section3");
    }
}