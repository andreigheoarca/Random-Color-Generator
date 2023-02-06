console.log("Random color generator");

const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
console.log(hexArray);

const generateBtn = document.querySelector(".btn");
const colorBox = document.querySelector(".color-box");
// console.log(generateBtn, colorBox);
const boxContent = document.querySelector(".box-text h2");
console.log(boxContent);

function randomHexGenerator() {
  let hexValue = "#";
  for (let i = 0; i < 6; i++) {
    // console.log(i);
    hexValue += hexArray[randomNumberGenerator()];
    console.log(hexValue);
  }
  return hexValue;
}
randomHexGenerator();

function randomNumberGenerator() {
  let randomNumber = Math.ceil(Math.random() * hexArray.length);
  //   console.log(randomNumber);
  return randomNumber;
}

generateBtn.addEventListener("click", function () {
  //   console.log(colorBox);
  colorBox.style.backgroundColor = randomHexGenerator();
  boxContent.innerHTML = randomHexGenerator();
});
