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

//PR-3.1: Keypress event
function f(){
    var now = new Date();
    document.getElementById("dop").innerHTML=(now);
}

//PR-3.2: Keypress event
var rows = document.getElementById("rows");
var cols = document.getElementById("cols");
var btn1 = document.getElementById("btn1");
btn1.addEventListener("click",()=>{
document.write("<table border='2' width='50%'>");
for(let i=0; i<rows.value; i++)
{
document.write("<tr>")
for(j=0; j<cols.value; j++)
{
document.write("<td>" + "[" +i+"]" + "["+j+"]" + "</td>");
}
document.write("</tr>");
}
document.write("</table>");
});

//PR-4: Set & Clear (TImeout/Interval) Method
setTimeout(callme,2000);
  function callme() {
    document.getElementById("wrt").innerHTML=("Timeout");
  }
t = setTimeout(callme, 3000);
clearTimeout(t);

setInterval(callmee,2000);
  function callmee() {
    document.getElementById("wt").innerHTML=("Interval");
  }
te = setInterval(callmee, 3000);
clearInterval(te);

