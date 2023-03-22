function reverseString(str) {
  // type your code here
  const split = str.split("")
  const backwards = []
  for (let i = split.length - 1; i !== -1; i--){
    backwards.push(split[i])
  }
  const join = backwards.join("")
  return join

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
