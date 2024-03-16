let quote =document.querySelector("main .quote");
let adviceId =document.querySelector("main .advice-id");
let dice =document.querySelector("main .dice");

function generateQuote(){
    dice.style.display="none";
    fetch("	https://api.adviceslip.com/advice")
    .then(response=>response.json())
    .then(response=>{
        console.log(response);
        adviceId.innerText=`ADVICE #${response.slip.id}`;
        quote.innerText=`"${response.slip.advice}"`;
        setTimeout(()=>{
            dice.style.display="block";
        },500)
    })
    .catch(err=>{console.log(err)});
    
}

dice.addEventListener("click",generateQuote);