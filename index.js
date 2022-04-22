function changeColor() {
  let one = document.getElementById("slider1").value;
  let two = document.getElementById("slider2").value;
  let three = document.getElementById("slider3").value;
  //color3.style.backgroundColor = "hsl(" + three + ", 25%, 50%)";
  //color2.style.backgroundColor = "hsl(" + two + ", 50%, 25%)";
  //color1.style.backgroundColor = "hsl(" + one + ", 25%, 50%)";

  let color1 = document.getElementsByClassName("color1");
  for (let i = 0; i < color1.length; i++) {
    color1[i].style.backgroundColor = "hsl(" + one + ", 25%, 50%)";
  }
  let color2 = document.getElementsByClassName("color2");
  for (let x = 0; x < color2.length; x++) {
    color2[x].style.backgroundColor = "hsl(" + two + ", 50%, 25%)";
  }
  let color3 = document.getElementsByClassName("color3");
  for (let z = 0; z < color3.length; z++) {
    color3[z].style.backgroundColor = "hsl(" + three + ", 25%, 75%)";
  }
}

document.getElementById("slider1").addEventListener("input", changeColor);
document.getElementById("slider2").addEventListener("input", changeColor);
document.getElementById("slider3").addEventListener("input", changeColor);
