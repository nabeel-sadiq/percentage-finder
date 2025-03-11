const numInput = document.querySelector(".num-input");
const percentageInput = document.querySelector(".percentage-input");
const btn = document.querySelector("button");
const h1 = document.querySelector("h1");

btn.onclick = () => {
  let result = (eval(percentageInput.value) / 100) * eval(numInput.value);
  h1.textContent = result;
}
