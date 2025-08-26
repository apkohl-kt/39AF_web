// unfinished draft of the JS file, written in JDScript for prototyping

word = document.getElementById("form1").value;
wordpermutations = factorial(word)

function factorial(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) { res *= i; }
    return res;
}

document.getElementById("output").innerHTML = wordpermutations;





//function makenewword(word, recombinations) {
  //for (let i of word) {
    //...
  //}
  //var tempword = word;
  //for (let i of word) {
    //tempword = tempword.slice(1); // pop first letter
    //var newword = i;
  //}  
//}

//function main() {
  //var word = "hello"; // change this to be the input from html
  //var totalwordcount = factorial(word.length);
  //console.log(totalwordcount);
  //console.log("Try programiz.pro");
  //var recombinations = new Array(totalwordcount);
  //for (let i of totalwordcount) {
    //makenewword(word, recombinations);
  //}
//}
