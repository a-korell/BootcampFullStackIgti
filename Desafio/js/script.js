window.addEventListener('load', changeColor);
function changeColor() {
  let red = document.querySelector('#rangeRed').value;
  let green = document.querySelector('#rangeGreen').value;
  let blue = document.querySelector('#rangeBlue').value;
  let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
  colorResult.style.backgroundColor = color;
  document.querySelector('#textRed').value = red;
  document.querySelector('#textGreen').value = green;
  document.querySelector('#textBlue').value = blue;
}

document.getElementById('rangeRed').addEventListener('input', changeColor);
document.getElementById('rangeGreen').addEventListener('input', changeColor);
document.getElementById('rangeBlue').addEventListener('input', changeColor);
