var userScore=0;
var compScore=0;
var userScore_span=document.getElementById('user-score');
var compScore_span=document.getElementById('comp-score');
var result_p=document.getElementById('result');
var rock_div=document.getElementById('r');
var paper_div=document.getElementById('p');
var scissors_div=document.getElementById('s');
function computerChoice(){
    var choices=['r','p','s'];
    var randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}
computerChoice();
function convertletter(letter)
{
    if(letter=='r')return "Rock";
    if(letter=='p')return "Paper"
    return "Scissor";
}
function win(userChoice,CompChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    result_p.innerHTML=convertletter(userChoice) +" Beats "+ convertletter(CompChoice) + " You Win And Computer Loses...! ";
    document.getElementById(userChoice).classList.add('green-glow');
}
function draw(userChoice,CompChoice){
    result_p.innerHTML=convertletter(userChoice) +" Equal "+ convertletter(CompChoice) + " It's Draw Try Again... ";
}
function compwin(userChoice,CompChoice){
    compScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    result_p.innerHTML=convertletter(userChoice) +" Beats "+ convertletter(CompChoice) + " Computer Win And You Loses...! ";
}
function game(userChoice){
    var CompChoice=computerChoice();
    if(userChoice===CompChoice)
    {
        draw(userChoice,CompChoice);
    }
    else if(userChoice =='r' && CompChoice =='s' || userChoice =='s' && CompChoice =='p'||userChoice =='p' && CompChoice =='r')
    {
        win(userChoice,CompChoice);
    }
    else if(userChoice =='s' && CompChoice =='r' || userChoice =='p' && CompChoice =='s'||userChoice =='r' && CompChoice =='p')
    {
       compwin(userChoice,CompChoice);
    }
   
}
function Rock(){
    game('r');
}
function Paper(){
    game('p');
}
function Scissor(){
    game('s');
}