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
    startTimer(5000) 
    timerCount=5000;
    
  })

// WHEN I answer a question
//THEN I am presented with another question
//run next Question when clicked answers
document.getElementById("btn-1").addEventListener("click",function nextQuestion(){
  currentQuestion++
  document.getElementById("question-text").textContent= questionBox[currentQuestion].question
  document.getElementById("btn-1").textContent= questionBox[currentQuestion].answers[0]
  document.getElementById("btn-2").textContent= questionBox[currentQuestion].answers[1]
  document.getElementById("btn-3").textContent= questionBox[currentQuestion].answers[2]
  document.getElementById("btn-4").textContent= questionBox[currentQuestion].answers[3]
  if(this===correctAnswer)
  append("Last answer : Correct !")
  else 
    append("Last answer: Wrong! !")

})
document.getElementById("btn-2").addEventListener("click",function nextQuestion(){
    currentQuestion++
    document.getElementById("question-text").textContent= questionBox[currentQuestion].question
    document.getElementById("btn-1").textContent= questionBox[currentQuestion].answers[0]
    document.getElementById("btn-2").textContent= questionBox[currentQuestion].answers[1]
    document.getElementById("btn-3").textContent= questionBox[currentQuestion].answers[2]
    document.getElementById("btn-4").textContent= questionBox[currentQuestion].answers[3]
    if(this===correctAnswer)
    append("Last answer : Correct !")
    else 
      append("Last answer: Wrong! !")
  
  })
  document.getElementById("btn-3").addEventListener("click",function nextQuestion(){
    currentQuestion++
    document.getElementById("question-text").textContent= questionBox[currentQuestion].question
    document.getElementById("btn-1").textContent= questionBox[currentQuestion].answers[0]
    document.getElementById("btn-2").textContent= questionBox[currentQuestion].answers[1]
    document.getElementById("btn-3").textContent= questionBox[currentQuestion].answers[2]
    document.getElementById("btn-4").textContent= questionBox[currentQuestion].answers[3]
    if(this===correctAnswer)
    append("Last answer : Correct !")
    else 
      append("Last answer: Wrong! !")
  
  })
  document.getElementById("btn-4").addEventListener("click",function nextQuestion(){
    currentQuestion++
    document.getElementById("question-text").textContent= questionBox[currentQuestion].question
    document.getElementById("btn-1").textContent= questionBox[currentQuestion].answers[0]
    document.getElementById("btn-2").textContent= questionBox[currentQuestion].answers[1]
    document.getElementById("btn-3").textContent= questionBox[currentQuestion].answers[2]
    document.getElementById("btn-4").textContent= questionBox[currentQuestion].answers[3]
    if(this===correctAnswer)
    append("Last answer : Correct !")
    else 
      append("Last answer: Wrong! !")
  
  })
//if userChoice=correctAnswer then append right ,if not wrong



//Timer start
var userChoice =
function startTimer(){
timer = setInterval(function(){
timerCount--;
timerText.textContent = ("Time : "+ timerCount)

}); 
}

/*
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over*/
// THEN I can save my initials and score

