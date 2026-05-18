//PR-1: Focus & Change events
var product = document.getElementById("product");
var qunatity = document.getElementById("quantity");
var amount = document.getElementById("amount");
var prize = document.getElementById("prize");
product.addEventListener("change",()=>{
prize.value = product.value;
});
amount.addEventListener("focus",()=>{
amount.value=product.value * qunatity.value;
});

//PR-2: mouseover and mouseout events
function changeImage() {
  document.getElementById("demoImg").src =
    "../imgs/image.png";
}
function restoreImage() {
  document.getElementById("demoImg").src =
    "../imgs/image copy.png";
}


