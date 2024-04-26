document.getElementById("btn").addEventListener("click", () => {
  import("./module1.js").then((module) => {
    module.loading();
  });
});
