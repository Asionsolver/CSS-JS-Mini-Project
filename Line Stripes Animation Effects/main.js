
function stripes() {
    let sizeW = Math.random() * 3;
  let stripes = document.createElement("div");
  stripes.classList.add("lines");
  document.body.appendChild(stripes);
  stripes.style.left = Math.random() * innerWidth + "px";
  stripes.style.width = 1 + sizeW + "px";
  stripes.style.background = "hsl(" + Math.floor(Math.random() * 60) + "deg, 100%, 50%)";

  setTimeout(function () {
    document.body.removeChild(stripes);
  }, 2000);
}

setInterval(function () {
  stripes();
}, 20);
