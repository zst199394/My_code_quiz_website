// Getting all required elements
var startBtn=document.getElementById("start-btn");
var timerText =document.getElementById("timer");
var questionText=document.getElementById("question-text")
var timerCount;
var timer;
var currentQuestion = 0;
var choice1=document.getElementById("btn-1");
var choice2=document.getElementById("btn-2");
var choice3=document.getElementById("btn-3");
var choice4=document.getElementById("btn-4");

//if Start  byn clicked
/* timer starts and I am presented with a question */
// getting questions and answers from array
startBtn.addEventListener("click",function startGame(){
    document.getElementById("homepage").setAttribute("class","hidden-homepage") //hide the homepage
    document.getElementById("quiz-text").setAttribute("id","show-quiz")//show the questions
    questionText.textContent= questionBox[currentQuestion].question
    choice1.textContent= questionBox[currentQuestion].answers[0]
    choice2.textContent= questionBox[currentQuestion].answers[1]
    choice3.textContent= questionBox[currentQuestion].answers[2]
    choice4.textContent= questionBox[currentQuestion].answers[3]
    startTimer() 
    timerCount=5000;
    
  })

// WHEN I answer a question,presented with another question
//run next Question when clicked any button
//if userChoice=correctAnswer then append right ,if not wrong
choice1.addEventListener("click",function nextQuestion(){
  console.log("you choose"+questionBox[currentQuestion].answers[0])
  currentQuestion++
  questionText.textContent= questionBox[currentQuestion].question
  choice1.textContent= questionBox[currentQuestion].answers[0]
  choice2.textContent= questionBox[currentQuestion].answers[1]
  choice3.textContent= questionBox[currentQuestion].answers[2]
  choice4.textContent= questionBox[currentQuestion].answers[3]
  if(questionBox[currentQuestion].answers[0]===questionBox[currentQuestion].correctAnswer)
  document.getElementById("check-answer").append('Last answer : Correct !')
  else 
  document.getElementById("check-answer").append('Last answer: Wrong! !')
  
})
 choice2.addEventListener("click",function nextQuestion(){
    console.log("you choose"+questionBox[currentQuestion].answers[1])
    currentQuestion++
    questionText.textContent= questionBox[currentQuestion].question
    choice1.textContent= questionBox[currentQuestion].answers[0]
    choice2.textContent= questionBox[currentQuestion].answers[1]
    choice3.textContent= questionBox[currentQuestion].answers[2]
    choice4.textContent= questionBox[currentQuestion].answers[3]
    if(questionBox[currentQuestion].answers[1]===questionBox[currentQuestion].correctAnswer)
    document.getElementById("check-answer").append("Last answer : Correct !")
    else 
    document.getElementById("check-answer").append("Last answer: Wrong! !")
    
  })
  choice3.addEventListener("click",function nextQuestion(){
    console.log("you choose"+questionBox[currentQuestion].answers[2])
    currentQuestion++
    questionText.textContent= questionBox[currentQuestion].question
    document.getElementById("btn-1").textContent= questionBox[currentQuestion].answers[0]
    document.getElementById("btn-2").textContent= questionBox[currentQuestion].answers[1]
    document.getElementById("btn-3").textContent= questionBox[currentQuestion].answers[2]
    document.getElementById("btn-4").textContent= questionBox[currentQuestion].answers[3]
    if(questionBox[currentQuestion].answers[2]===questionBox[currentQuestion].correctAnswer)
    document.getElementById("check-answer").append("Last answer : Correct !")
    else 
    document.getElementById("check-answer").append("Last answer: Wrong! !")
    
  })
  choice4.addEventListener("click",function nextQuestion(){
    console.log("you choose"+questionBox[currentQuestion].answers[3])
    currentQuestion++
    questionText.textContent= questionBox[currentQuestion].question
    document.getElementById("btn-1").textContent= questionBox[currentQuestion].answers[0]
    document.getElementById("btn-2").textContent= questionBox[currentQuestion].answers[1]
    document.getElementById("btn-3").textContent= questionBox[currentQuestion].answers[2]
    document.getElementById("btn-4").textContent= questionBox[currentQuestion].answers[3]
    if(questionBox[currentQuestion].answers[3]===questionBox[currentQuestion].correctAnswer)
    document.getElementById("check-answer").append("Last answer : Correct !")
    else 
    document.getElementById("check-answer").append("Last answer: Wrong! !")
    
  }) 
//Timer start
function startTimer(){
timer = setInterval(function(){
timerCount--;
timerText.textContent = ("Time : "+ timerCount)

}); 
}
/*WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over*/
// THEN I can save my initials and score
/*if (currentQuestion=4){
function finishGame(){
    document.getElementById("scorePage").setAttribute("id","show-score")
  }
}*/

  

