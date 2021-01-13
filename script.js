// Getting all required elements
var startBtn=document.getElementById("start-btn");
var timerText =document.getElementById("timer");
var timerCount =0;
var timer;




//if Start  byn clicked
/* create function
THEN a timer starts and I am presented with a question*/
// getting questions and answers from array
startBtn.addEventListener("click",function startGame(){
    document.getElementById("homepage").setAttribute("class","hidden-homepage") //hide the homepage
    document.getElementById("quiz-text").setAttribute("id","show-quiz")//show the questions
    var quizText=document.getElementById("show-quiz")
    var currentQuestion = 0;
    quizText.textContent= questionBox[currentQuestion].question
    document.getElementById("btn-1").textContent= questionBox[currentQuestion].answers[0]
    document.getElementById("btn-2").textContent= questionBox[currentQuestion].answers[1]
    document.getElementById("btn-3").textContent= questionBox[currentQuestion].answers[2]
    document.getElementById("btn-4").textContent= questionBox[currentQuestion].answers[3]
    startTimer(0) 
  })
  

//Timer start
function startTimer(){
timer = setInterval(function(){
timerCount++;
timerText.textContent = ("Time : "+ timerCount);

} ); 
}
/*WHEN I answer a question
THEN I am presented with another question

WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over*/
// THEN I can save my initials and score

