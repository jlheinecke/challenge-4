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
    question: "Q1",
    answers: {
      1: "A1",
      2: "A2",
      3: "A3",
      4: "A4"
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
  // 1. start countdown
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
  question = 'Q1'
  return question

} 

function a1(){
var a
var b
var c
var d
  [a,b,c,d] = ['4','3','2','1']
  return [a,b,c,d]
} 

function check(){
  if (b1 ===)
}