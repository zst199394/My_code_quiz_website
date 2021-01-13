// Getting all required elements
var startBtn=document.getElementById("start-btn");
var timerText =document.getElementById("timer");
var timerCount =0;
var timer;
var quizText=document.getElementById("quiz-text");
var answerText=document.getElementById("answr-text")


//if Start  byn clicked
/* create function
THEN a timer starts and I am presented with a question*/
startBtn.addEventListener("click",function startGame(){
    document.getElementById("homepage").setAttribute("class","hidden-homepage"); //hide the homepage
    document.getElementById("quiz-text").setAttribute("class","show-quiz");
    showQuestions(0);
  })



// getting questions and answers from array
function showQuestions(index){
    displayQuiz();
    startTimer(0);
quizText.innerHtml = questionBox[index].question;
answerText.innerHtml= questionBox[index].answers;


    
}
//Timer start
function startTimer(){
timer = setInterval(function(){
timerCount++;
timerText.textcontent ="Time : "+ timerCount;

},);
}
/*WHEN I answer a question
THEN I am presented with another question

WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over*/
// THEN I can save my initials and score

