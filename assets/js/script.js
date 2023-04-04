// 1. Click start:
// 2. Start countdown
// 3. Display question
// 4. Show right/wrong
// 5. If wrong deduct time

var btn = document.getElementsByClassName('btn');
var container = document.getElementsByClassName('container');

// const action = function(e) {
//   // get the current element's count
//   let numb = 'test'
//   e.target.children[0].innerHTML = numb;
// }

// for (let i = 0; i < btn.length; i++) {
//   btn[i].addEventListener('click', action);
// }


var myQuestions = [
  {
    question: "What language is used to add style to a web page?",
    answers: {
      1: "ABC",
      2: "NBC",
      3: "CSS",
      4: "HBO"
    },
    correctAnswer: "2"
  },
  {
    question: "Q2",
    answers: {
      1: "A1",
      2: "A2",
      3: "A3",
      4: "A4"
    },
    correctAnswer: "3"
  }
]
var q1
var a1
function start(){
  timer()
  var question = q1()
  // var answers = a1()
  var button = a1()
  $('p1').text(question)
  // $('p2').text(answers)
  $('#b1').text(button[0])
  $('#b2').text(button[1])
  $('#b3').text(button[2])
  $('#b4').text(button[3])

}

function q1(){
  question = 'What language is used to add style to a web page?'
  return question

} 

function a1(){
var a
var b
var c
var d
  [a,b,c,d] = ['NBC','ABC','CSS','HBO']
  return [a,b,c,d]
} 


var correct = 3


function check(input){

  if (input === correct){
    document.getElementById("message").innerHTML = "Correct!";
  } else document.getElementById("message").innerHTML = "Incorrect!";
  penalty();
}
var penalty
function penalty(){
  penalty = 5;
  console.log(penalty)
  return penalty;
}

function show() {
  var v1 = document.getElementById("show");
  var v2 = document.getElementById("hide");
  if (v1.style.display === "none") {
     v1.style.display = "block";
     v2.style.display = "none";
  } else {
     v1.style.display = "none";
     v2.style.display = "block";
  }
}

function timer(){
var timeleft = 60;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Time's Up!";
  } else {
    document.getElementById("countdown").innerHTML = "Time: " + timeleft;
  }
  timeleft -= 1;
}, 1000);}