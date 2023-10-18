let arr=[];
let max;
max=Number.MAX_VALUE;
while (max) {
    arr.push(max%2);
    max=Math.floor(max/2);
}
arr.reverse();
console.log(`Number of one digits: ${arr.filter((el)=>el).length}`);
console.log(`Number of zero digits: ${arr.filter((el)=>!el).length}`);
console.log(`The binary representation of Number.MAX_VALUE: ${arr.join("")}`);

// The output means that Number.MAX_VALUE = (2**1024-1)-(2**971-1) = 2**1024 - 2**971
// Not 2**1024 - 1
