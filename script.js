// Getting all required elements
var startBtn=document.getElementById("start-btn");
var timerText =document.getElementById("timer");
var timerCount;
var timer;
var currentQuestion = 0;
//if Start  byn clicked
/* create function
THEN a timer starts and I am presented with a question*/
// getting questions and answers from array
startBtn.addEventListener("click",function startGame(){
    document.getElementById("homepage").setAttribute("class","hidden-homepage") //hide the homepage
    document.getElementById("quiz-text").setAttribute("id","show-quiz")//show the questions
    document.getElementById("question-text").textContent= questionBox[currentQuestion].question
    document.getElementById("btn-1").textContent= questionBox[currentQuestion].answers[0]
    document.getElementById("btn-2").textContent= questionBox[currentQuestion].answers[1]
    document.getElementById("btn-3").textContent= questionBox[currentQuestion].answers[2]
    document.getElementById("btn-4").textContent= questionBox[currentQuestion].answers[3]
    startTimer() 
    timerCount=5000;
    
  })

//  run next Question
var questionBtn=document.getElementsByClassName("btn")
 questionBtn.addEventListener("click",function nextQuestion(){
  currentQuestion++
  document.getElementById("question-text").textContent= questionBox[currentQuestion].question
  document.getElementById("btn-1").textContent= questionBox[currentQuestion].answers[0]
  document.getElementById("btn-2").textContent= questionBox[currentQuestion].answers[1]
  document.getElementById("btn-3").textContent= questionBox[currentQuestion].answers[2]
  document.getElementById("btn-4").textContent= questionBox[currentQuestion].answers[3]
})

  

//Timer start
function startTimer(){
timer = setInterval(function(){
timerCount--;
timerText.textContent = ("Time : "+ timerCount)

}); 
}
/*WHEN I answer a question
THEN I am presented with another question

WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over*/
// THEN I can save my initials and score

