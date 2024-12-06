//You are Star 
let heading = document.querySelector('h1');

function setUserName(){
  let nickName = prompt('Please enter your nickname.');
  if(!nickName){
    setUserName();
  } else {
    localStorage.setItem('name',nickName);
    heading.innerHTML = 'You are Star⭐️ ' + nickName;
  }
}

if(!localStorage.getItem('name')){
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  heading.innerHTML = 'You are Star⭐️' + storedName;
}

heading.onClick = function(){
  setUserName();
}

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


