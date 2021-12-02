// Your code here

function moveDodgerLeft() { //this is creating a function to call on when we want to move the dodger left
  const leftNumbers = dodger.style.left.replace("px", "") //we create the varialbe leftNumbers to be the div "dodger"'s style for the left side, which is expressed in px, and we want to make it 0
  const left = parseInt(leftNumbers, 10); //this defined the variable left as a function of paseInt (which simply searches for an integer and parses it to the second parameter, a number object)
  if (left>0) { // this is saying that if the value of left is greater than 0...
    dodger.style.left =  `${left -1}px` //... return left minus 1px
  }
}


function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "")
  const left = parseInt(leftNumbers, 10);
  if (left<360) {
    dodger.style.left = `${left+1}px`
  }
}

// function moveDodgerLeft() {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);
  
//     if (left > 0) {
//       dodger.style.left = `${left - 1}px`;
//     }
//   };


//   function moveDodgerRight() {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);
  
//     if (left < 360) {
//       dodger.style.left = `${left + 1}px`;
//     }
//   };