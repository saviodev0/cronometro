let number = document.querySelector("h1")
let zero = 0
let cron


function started(){
cron = setInterval(function()  {
    zero++
    number.innerHTML = zero
}, 1000);
}

function stoped(){
clearInterval(cron)

}

function reset (){
clearInterval(cron)
let zero = 0

number.innerHTML = 0
}
