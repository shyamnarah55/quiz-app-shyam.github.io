//accesing html elements here---------------------------------------------------------------------------------
const infobox = document.querySelector(".information_box");
const Continue = document.querySelector("#continue");
const category =document.querySelector(".cat_box");
const Reset = document.querySelector("#Reset_button");
const QuestionBox = document.querySelector(".Question_box");
let answer_options = document.querySelector(".Answer_options");
const option_list = document.querySelector(".Answer_options");
const result_box = document.querySelector(".Result_box");
const restart = document.querySelector(".restart");
const  Quit = document.querySelector(".quit");
const timer =document.querySelector('#timer');
let que_count=0;
let que_numb=1;
let score = 0;
let val ="";
let correctAnswers =0;
let wrongAnswers = 0;
let totalQuestion = 10;
let attempt = 0;
let percent_result= 0;

 //timer section is started here.-------
 var timeLeft = 300;
 var time_take = 0;
 var elem = document.querySelector('#timer');
 
 var timerId = setInterval(countdown, 1000);

//for display username on webpage.-------------
printname =()=>{
  const val = document.querySelector('#user_name').value;
  const user_Name = document.querySelector(".name-result").innerHTML = val  + " " +  "your Result is ";
  document.querySelector('#displayname').innerHTML = "Welcome" + " " +val;
}
// countdown timer created here-------------------
 function countdown() {
   if (timeLeft == 00) {
    
     clearTimeout(timerId);
     doSomething();
     updateLocalStorage();
   } else {
     elem.innerHTML = timeLeft;
     timeLeft--;
   }
 };
    ///time taken----------------
    function run(){
      let TimeRemaining = timeLeft -  time_take -300 ;
      let x = Math.abs(TimeRemaining);
      result_box.querySelector(".time-taken").innerHTML =
      "<b>Total Time Taken is </b>:" +x + "seconds";
    }
    
//If continue button clicked--------------
Continue.onclick = () => {
    category.classList.add("activeinfo");
    infobox.classList.remove("category");
    showQuestion[0];
    queCounter(0);
    

};
//when restart onclick.--------------------------------------------------------------------------------------
//when click on go to home it reload and display the first page.
restart.addEventListener("click", () => {
    window.location.reload(true); // Window reload at result page
});
 
//for remove activeinfo---------------------------------------------------------------------------------------------
Reset.onclick = () =>{
    category.classList.remove("activeinfo");
 
    
};
//show result when alll the sections are completed .-----------------------------------------------------------------
function showResultbox(){
  infobox.style.display = "none";
  category.classList.remove("activeinfo");
  QuestionBox.classList.remove("activeQuiz");
  result_box.classList.add("activeResult");
 

function wrong_Ans(){
  wrongAnswers = totalQuestion - score;
  result_box.querySelector(".wrong").innerHTML = "<b>WrongAnswers</b> :" + wrongAnswers;
}
function  correct_Ans(){
  correctAnswers = totalQuestion - wrongAnswers;
  result_box.querySelector(".correct").innerHTML = "<b> CorrectAnswers:</b> " + correctAnswers;
}
function percentage(){
  percent_result = (correctAnswers / totalQuestion) * 100;
  result_box.querySelector(".Percentage").innerHTML = "<b> Percentage :</b> " + percent_result +"%";
}
function time(){
  time_taken =  totaltime - timeLeft;
  result_box.querySelector(".time-taken").innerHTML = "<b> Total Time Taken :</b> " +time_taken +" seconds";

}

wrong_Ans();
correct_Ans();
percentage();
run();
};
//showresultbox ends here.----------------------------------------------------------------------------------------------
