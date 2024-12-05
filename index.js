let starImage = document.querySelector(".Star");

starImage.onclick = function() {

  let starSrc = starImage.getAtrribute('src');

  if(starSrc === "Star/IMG_E5683.JPG"){

    starImage.setAttribute('src',"Star/thisWeeksStar");

  } else {

    starImage.setAttribue('src',"Star/IMG_E5683.JPG");
  }
}// function


