let adviceText = document.querySelector(".adviceText");
let adviceN = document.querySelector(".number");
let button = document.querySelector("button");
///////////////////////////

button.addEventListener("click", () => {
  let promise = fetch("https://api.adviceslip.com/advice", {
    cache: "no-cache",
  });
  let response = promise
    .then((resp) => resp.json())
    .then((result) => {
      adviceText.innerText = result.slip.advice;
      adviceN.innerText = result.slip.id;
    });
});
