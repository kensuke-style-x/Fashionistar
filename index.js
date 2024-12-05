// Star Image 
let starImage = document.querySelector('.Star');

starImage.onclick = function() {

  let starSrc = starImage.getAttribute('src');

  if(starSrc === 'Star/IMG_E5683.JPG'){

    starImage.setAttribute('src','Star/thisWeeksStar');

  } else {

    starImage.setAttribute('src','Star/IMG_E5683.JPG');
  }
}// function


