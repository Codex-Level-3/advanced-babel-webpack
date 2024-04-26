export function loading() {
  const text = document.getElementById("loadedText");
  text.innerText = "I Loaded!";
  console.log("I'm loading . . .");
}

export function unusedFunction() {
  console.log("I will not be used.");
}
