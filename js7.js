//IDENTIFYING THE BIGGEST NUMBER AMONG THREE NUMBERS
let a=prompt("ENTER THE VALUE OF A");
let b=prompt("ENTER THE VALUE OF B");
let c=prompt("ENTER THE VALUE OF C");
let big=(a>((b>c)?b:c))?a:((b>c)?b:c);
console.log(`BIGGEST NUMBER AMONG GIVEN THREE IS ${big}`);