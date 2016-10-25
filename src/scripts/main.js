function refresh () {
  console.log('cats');
  document.getElementsByClassName("color")[0].style.backgroundColor = 'blue';
  // "rgb(random(255),random(255),random(255))";
}


document.querySelector(".refresh").addEventListener('click', refresh);
