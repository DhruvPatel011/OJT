let a = document.getElementById("a").innerHTML = "Hello My self Dhruv Patel ! I am learning JavaScript";
// alert(a);

// Types Of Variables.
var b = 5;
var c = 10;
var d = b + c;
document.getElementById("b").innerHTML = b + " + " + c + " = " + d;
let e = 5;
let f = 10;
let g = e * f;
document.getElementById("c").innerHTML = e + " * " + f + " = " + g;
const h = 5;
const i = 10;
const j = h - i;
document.getElementById("d").innerHTML = h + " - " + i + " = " + j;

// Data Type.
let k = 1;
document.getElementById("k").innerHTML = "Number: "+ typeof k;
let l = true;
document.getElementById("l").innerHTML = "Boolean: "+ typeof l;
let m = {name: "Alice", age: 25};
document.getElementById("m").innerHTML = "Object: "+ typeof m;

//Oprators
let n = 1;
let o = 2;
let p = o + (++n); //Pre-Increment
n++; //Post-Increment
document.getElementById("o").innerHTML = "Input : n=1, o=2, p= o + (++n)";
    if (p > 5){
        document.getElementById("n").innerHTML = "Output: P > 5";
    }
    else{
        document.getElementById("n").innerHTML = "Output: P < 5";
    }

//PR-1
let age = 18;
document.getElementById("age").innerHTML = "age = " + age;
if (age < 18){
    document.getElementById("elg").innerHTML = "Your not Eligible for Voting";
}
else{
    document.getElementById("elg").innerHTML =  "Your Eligible For Voting";
}

//PR-3
let num1 = 2;
document.getElementById("num1").innerHTML = "Number = " + num1;
if (num1 < 0){
    document.getElementById("n1op").innerHTML = "Number is Negative";
}
else{
    document.getElementById("n1op").innerHTML =  "Number is Positive";
}

//PR-5
let num2 = 8;
let num3 = 4;
document.getElementById("num2").innerHTML = "1st Number = " + num2;
document.getElementById("num3").innerHTML = "2nd Number = " + num3;
if (num2 < num3){
    document.getElementById("n2op").innerHTML = num2+" < "+num3;
}
else{
    document.getElementById("n2op").innerHTML =  num2+" > "+num3;
}

//PR-7
let usrr = "admin";
let pass = "admin@123";
document.getElementById("usr").innerHTML = "UserNamer: "+ usrr;
document.getElementById("pas").innerHTML = "Password: " + pass;
if (usrr === "admin" && pass === "admin@123"){
    document.getElementById("chk").innerHTML = "Login Successful";
}
else{
    document.getElementById("chk").innerHTML = "Plz Enter valid input";
}

//PR-9



























