const colorExample = document.getElementById("color-example");
const hexCode = document.querySelector(".hex");
const rgbCode = document.querySelector(".rgb");
const refreshColorBtn = document.getElementById("refresh-color");

function generateRandomNum(max) {
  return Math.floor(Math.random() * (max + 1));
}

function generateRgbColor() {
  const r = generateRandomNum(255);
  const g = generateRandomNum(255);
  const b = generateRandomNum(255);
  return [r, g, b];
}

function rgbToHex(rgb) {
  let hexColor = "#";
  for (let i = 0; i < rgb.length; i++) {
    let toHex = rgb[i].toString(16);
    if (toHex.length < 2) {
      toHex = "0" + toHex;
    }
    hexColor += toHex;
  }
  return hexColor;
}

function setColor() {
  const [r, g, b] = generateRgbColor();
  const hexColor = rgbToHex([r, g, b]);
  colorExample.style.backgroundColor = hexColor;
  rgbCode.textContent = `rgb(${r}, ${g}, ${b})`;
  hexCode.textContent = hexColor;
}

setColor();
refreshColorBtn.addEventListener("click", setColor);
