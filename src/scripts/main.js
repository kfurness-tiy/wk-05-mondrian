function newColor () {
  document.getElementsByClassName("color")[0].style.backgroundColor = color();
  document.getElementsByClassName("color")[1].style.backgroundColor = color();
  document.getElementsByClassName("color")[2].style.backgroundColor = color();
}

function color() {
  red = Math.floor(Math.random() * 255 );
  green = Math.floor(Math.random() * 255 );
  blue = Math.floor(Math.random() * 255 );
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  return rgbColor;
}

document.querySelector(".refresh").addEventListener('click', newColor);
