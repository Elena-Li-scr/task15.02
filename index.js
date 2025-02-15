function off() {
  document.querySelector(".off").style.display = "flex";
  document.querySelector(".on").style.display = "none";
  document.querySelector(".container").style.background = "#fefee7";
}

function on() {
  document.querySelector(".off").style.display = "none";
  document.querySelector(".on").style.display = "flex";
  document.querySelector(".container").style.background = " #1f1768";
}
