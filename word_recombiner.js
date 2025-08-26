// unfinished draft of the JS file, written in JDScript for prototyping

var totalwordcount = 2 ^ "word".length;

function makenewword(word, recombinations) {
  for (let i of word) {
    //...
  }

  var tempword = word;
  for (let i of word) {
    tempword = tempword.slice(1); // pop off first letter
    var newword = i;
  }
}

function _ready() {
  var word = "hello"; // change this to be the input from html
  var recombinations = new Array(totalwordcount);
  makenewword(word, recombinations);
}
