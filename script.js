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
    timerCount=60; 
  })

// WHEN I answer a question,presented with another question
//run next Question when clicked any button
//if userChoice=correctAnswer then append right ,if not wrong
choice1.addEventListener("click",function nextQuestion(){
  if(questionBox[currentQuestion].answers[0]==questionBox[currentQuestion].correctAnswer)
  document.getElementById("check-answer").append('Last answer : Correct !')
  else 
  document.getElementById("check-answer").append('Last answer: Wrong! !')
  console.log(currentQuestion)
  console.log("you choose"+questionBox[currentQuestion].answers[0])
  if(currentQuestion===3)
  finishGame()
  currentQuestion++
  questionText.textContent= questionBox[currentQuestion].question
  choice1.textContent= questionBox[currentQuestion].answers[0]
  choice2.textContent= questionBox[currentQuestion].answers[1]
  choice3.textContent= questionBox[currentQuestion].answers[2]
  choice4.textContent= questionBox[currentQuestion].answers[3]
})
 choice2.addEventListener("click",function nextQuestion(){
    if(questionBox[currentQuestion].answers[1]==questionBox[currentQuestion].correctAnswer)
    document.getElementById("check-answer").append("Last answer : Correct !")
    else 
    document.getElementById("check-answer").append("Last answer: Wrong! !")
    console.log(currentQuestion)
    console.log("you choose"+questionBox[currentQuestion].answers[1])
   if(currentQuestion===3)
    finishGame()
    currentQuestion++
    questionText.textContent= questionBox[currentQuestion].question
    choice1.textContent= questionBox[currentQuestion].answers[0]
    choice2.textContent= questionBox[currentQuestion].answers[1]
    choice3.textContent= questionBox[currentQuestion].answers[2]
    choice4.textContent= questionBox[currentQuestion].answers[3]
    
  })
  choice3.addEventListener("click",function nextQuestion(){
     if(questionBox[currentQuestion].answers[2]==questionBox[currentQuestion].correctAnswer)
    document.getElementById("check-answer").append("Last answer : Correct !")
    else 
    document.getElementById("check-answer").append("Last answer: Wrong! !")
    console.log(currentQuestion)
    console.log("you choose"+questionBox[currentQuestion].answers[2])
    if(currentQuestion===3)
    finishGame()
    currentQuestion++
    questionText.textContent= questionBox[currentQuestion].question
    document.getElementById("btn-1").textContent= questionBox[currentQuestion].answers[0]
    document.getElementById("btn-2").textContent= questionBox[currentQuestion].answers[1]
    document.getElementById("btn-3").textContent= questionBox[currentQuestion].answers[2]
    document.getElementById("btn-4").textContent= questionBox[currentQuestion].answers[3]
 
  })
  choice4.addEventListener("click",function nextQuestion(){
    if(questionBox[currentQuestion].answers[3]==questionBox[currentQuestion].correctAnswer)
    document.getElementById("check-answer").append("Last answer : Correct !")
    else 
    document.getElementById("check-answer").append("Last answer: Wrong! !")
    console.log(currentQuestion)
    console.log("you choose"+questionBox[currentQuestion].answers[3])
    if(currentQuestion===3)
    finishGame()
    currentQuestion++
    questionText.textContent= questionBox[currentQuestion].question
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

} ,1000); 
}
/*WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over*/
// THEN I can save my initials and score
// 
// if(currentQuestion===3){
//   document.getElementsByClassName("btn").addEventListener("click",
  function finishGame(){
    currentQuestion=0
    console.log("You finished!!")
    document.getElementById("show-quiz").setAttribute("id","quiz-text") //hide question page
    document.getElementById("scorePage").setAttribute("id","show-score")//show scorepage
    clearInterval(timer)
    console.log(timerCount)
    document.getElementById("score").append("Your score is : "+timerCount)

   }

   var submitBtn =document.getElementById("submiit-btn");
   var username = document.getElementById("user-input");
   var recentScore =localStorage.getItem("recentScore")
   localStorage.setItem("highscores", JSON.stringify([]));
   console.log(localStorage.getItem("highscores"));
   timerCount=recentScore;
   submitBtn.addEventListener("click",saveHighscore)
   function saveHighscore(e){
     e.preventDefault();
    localStorage.setItem("name", username.value);
     var score ={
       score : recentScore,
       name: username.value
     }
     highscores.push(score);
     console.log(highscores);
    };


