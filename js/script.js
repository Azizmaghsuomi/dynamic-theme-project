const colorbtns = document.querySelectorAll(".btn");

colorbtns.forEach(function (colorbtn) {
  colorbtn.addEventListener("click", function (event) {
    let btnColor = event.target.dataset.color;

    document.documentElement.style.setProperty("--theme-color", btnColor);
  });
});
