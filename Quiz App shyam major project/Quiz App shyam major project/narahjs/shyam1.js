//----------probability section js starts here----probab button accesed here-------

const probability = document.querySelector("#sam2");
const next_btn = QuestionBox.querySelector("#next1");
//for adding question of probabilities.
probability.onclick = () =>{
  category.classList.add("none");
  infobox.classList.remove("activeinform");
  QuestionBox.classList.add("activeQuiz");
  showQuestion(0);
  queCounter(1);

} 

//if next button is clicked then it show the probability question--------------
next_btn.onclick = () => {
    
     if( que_count < PROBABILITY_Q.length - 1 ){
        que_count++;
        que_numb++;
        showQuestion(que_count);
        queCounter(que_numb);
        countdown();
         
      next_btn.style.display = "none";
     }
     else{
        console.log("question completed");
        showResultbox();
        
        // user_Name_Input = user_Name;
        // showscore()
     }
   
}
//getting questions and options from probabibility.--------------------------------------------
function showQuestion(index){
       const que_text = document.querySelector(".question");
       
       let que_tag = '<span>' + PROBABILITY_Q[index].numb +". " + PROBABILITY_Q[index].question +'</span>';
       let option_tag = '<span class="option">' + PROBABILITY_Q[index].options[0] + '</span>'
                        +'<span class="option">' + PROBABILITY_Q[index].options[1] +'</span>'
                        +'<span class="option">' + PROBABILITY_Q[index].options[2] + '</span>'
                        +'<span class="option">' + PROBABILITY_Q[index].options[3] + '</span>';
       que_text.innerHTML = que_tag;
       option_list.innerHTML = option_tag;

       const option =  option_list.querySelectorAll(".option");
       for (let i = 0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
       }
}
 //function check either its is right or wrong options-----------------------------------------------------
function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAns = PROBABILITY_Q[que_count].answer;
    let allOptions = option_list.children.length;
    let scorebox= document.querySelector("#score");
    scorebox.innerText = "score";


    if(userAns == correctAns){
        answer.classList.add("correct");
        console.log("Answer is Correct");
        score++;
        scorebox.innerHTML = "Score :" + score;
        run();
    }else{
        answer.classList.add("incorrect");
        console.log("Answer is Wrong");
        scorebox.innerHTML = "Score :" + score;
        //if answer is incorrect then automatically  selected the correct answer.
        for(let i = 0 ; i < allOptions; i++){

            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class","option correct");
            }  
        }
    };
    attempt++;
    //once user selected disabled all options-----------------------------------------------------
    
    for(let i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled");
    } 
    next_btn.style.display ="block";

}
//for changing the question count.------------------------------------------------
    function queCounter(index) {
      const top_question_count = QuestionBox.querySelector(".Questions_count");
      let totalQuestioncount = "<span>" + index + "/" + PROBABILITY_Q.length + "</span>";
      top_question_count.innerHTML = totalQuestioncount;
    }
   
//probability js ends here--------------