// PR-1: Even Numbers (1 to 10)
document.write("<h4>1. Even Numbers Between 1 to 10</h4>");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        document.write(i + " ");
    }
}
document.write("<br><br>");


// PR-2: Odd Numbers (1 to 10)
document.write("<h4>2. Odd Numbers Between 1 to 10</h4>");
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        document.write(i + " ");
    }
}
document.write("<br><br>");
