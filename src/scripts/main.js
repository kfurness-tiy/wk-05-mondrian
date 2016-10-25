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

function randomDiv () {
    return Math.floor(Math.random() * 8);
}

function userInput () {
  return document.getElementById('input').value
}

function chooseColor (input) {
  switch (input) {
    case 'red':
      return 'red';
      break;
    case 'orange':
      return 'orange';
      break;
    case 'yellow':
      return 'yellow';
      break;
    case 'green':
      return 'green';
      break;
    case 'blue':
      return 'blue';
      break;
    case 'purple':
      return 'purple';
      break;
    case 'black':
      return 'black';
      break;
    case 'brown':
      return 'brown';
      break;
    case 'gray':
      return 'gray';
      break;
    default:
      return 'Please choose a color from the list below'
  }
}

function toScreen(chosen) {
  console.log(chosen);
  // var num = randomDiv();
  document.getElementsByClassName('random')[2].style.backgroundColor = chosen;
}

function pickColor () {
  var input = userInput();
  var chosen = chooseColor(input);
  toScreen(chosen);
}

document.querySelector(".refresh").addEventListener('click', newColor);

document.querySelector(".pickColor").addEventListener('click', pickColor);
