const chalk = require('chalk');
// console.log(chalk.blue('lets check Mark0 kowledge!'));
var readlineSync = require('readline-sync');
console.log("NOTE: please use lowerCased Alphabets only")
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
var title = readlineSync.question("Have you Completed Mark1? -");


if (title === "yes" || "YES" || "Yes" || "YEs" ) {
var score = 0;

function Mark0(question, answer) {
var questionAnswer = readlineSync.question(question)

if (questionAnswer === answer){
  console.log(chalk.green("Whoa!!.. Correct!"));
  score = score + 1
} else {
console.log(chalk.red("Oops!!..!"));
  
}
console.log("~~~~~~~~~~~~~~~~~~~~~~");

console.log("your Score is : ", score)
}


var QuestionOne = {
  question: "1) What is the Full form of CLI? \n a. CommandLine Interface \n b. ComputerLine InterFace  ",
  answer: "a"

}

var QuestionTwo = {
  question: "2) Which function do you use to output your Name in javascript? \n a.console.log \n b.print " ,
  answer: "a" 
}

var QuestionThree = {
  question: "3) How do we concat Strings? \n a. + \n b., \n c. both \n d. None ",
  answer: "c"
}
var QuestionFour = {
  question: "4) Choose correct Syntax of defining function. \n a. Function FunctionName(arguments) \n b. Function FunctionName(parameters)  ",
  answer: "b"
}
var QuestionFive = {
  question: "5) Choose correct Syntax of calling function. \n a. FunctionName(arguments) \n b. FunctionName(parameters)  ",
  answer: "a"
}

var QuestionSix = {
  question: "6) Choose which one is correct Syntax of ForLoop \n a. for (var i=0, i<= 10, i++) \n b. for (var i=0; i<= 10; i++) ",
  answer: "b"
}
var QuestionSeven = {
  question: "7) Choose which one is correct Syntax of array \n a. var arrayName = {1,2,3,4} \n b. var arrayName = [1,2,3,4] ",
  answer: "b"
}
var QuestionEight = {
  question: "8) Which one of the following is not type of Data Structure \n a. Array \n b. Function ",
  answer: "b"
  }
  var QuestionNine = {
  question: "9) Which one of the following is not method of Array \n a. console.log() \n b. array.lengh ",
  answer: "a"
  }
  var QuestionTen = {
  question: "10) Are Paramaeters and Arguments are Same? \n a. Yes \n b. No ",
  answer: "b"
  }

  var arrayofQuestion = [QuestionOne,QuestionTwo,QuestionThree,QuestionFour,QuestionFive,QuestionSix,QuestionSeven,QuestionEight,QuestionNine,QuestionTen]

  for (var i=0; i<arrayofQuestion.length; i++) {
    var currentQuestion = arrayofQuestion[i];
   Mark0(currentQuestion.question, currentQuestion.answer)
  }

  if (score <= 5){
  console.log(chalk.red("your score is: " + score + " Learn more.."))
} else {
  console.log(chalk.green("Your score is: " + score +" you are doing good"))
}

} else {
  console.log("Learn Web development budy!.. ")
}
