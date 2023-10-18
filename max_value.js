// substracts decreasing powers of 2 until the last significant digit
//
// Note: for the code to be meaningful,
// and for the loop to be finite,
// the processed number should be
// an uninterrupted series of powers of 2
// e.g. 1000 ; 110 ; 111000 ; 11111
// and the power should be the power of the highest significant bit
// e.g. 3 ; 2 ; 5 ; 4 ; respectively with the examples above

function substract(n,power) {
  while(n) {
    n -= 2**power;
    power--;
  }
  // last significant digit's power:
  return power+1; // account for the last decrement
}

// the largest value a number can hold is 2**1024 minus something :)

let result = substract(Number.MAX_VALUE,1023)
console.log(`The last significant bit is 2**${result}`);
