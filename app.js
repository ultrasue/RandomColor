const colorExample = document.getElementById("color-example");
const hexCode = document.querySelector(".hex");
const rgbCode = document.querySelector(".rgb");
const refreshColorBtn = document.getElementById("refresh-color");

function generateRandomNum(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function generateRgbColor() {
  const r = generateRandomNum(0, 255);
  const g = generateRandomNum(0, 255);
  const b = generateRandomNum(0, 255);
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
  const brightness = 0.21 * r + 0.72 * g + 0.07 * b;
  if (brightness < 80) {
    colorExample.style.textShadow = "1px 1px 2px white";
  } else {
    colorExample.style.textShadow = "";
  }
}

setColor();

refreshColorBtn.onclick = function () {
  setColor();
  const minRadius = 20;
  const maxRadius = 80;
  colorExample.style.borderTopLeftRadius =
    generateRandomNum(minRadius, maxRadius) +
    "% " +
    generateRandomNum(minRadius, maxRadius) +
    "%";
  colorExample.style.borderTopRightRadius =
    generateRandomNum(minRadius, maxRadius) +
    "% " +
    generateRandomNum(minRadius, maxRadius) +
    "%";
  colorExample.style.borderBottomRightRadiu =
    generateRandomNum(minRadius, maxRadius) +
    "% " +
    generateRandomNum(minRadius, maxRadius) +
    "%";
  colorExample.style.borderBottomLeftRadius =
    generateRandomNum(minRadius, maxRadius) +
    "% " +
    generateRandomNum(minRadius, maxRadius) +
    "%";
  colorExample.style.width = generateRandomNum(300, 600) + "px";
  colorExample.style.height = generateRandomNum(350, 600) + "px";
};
