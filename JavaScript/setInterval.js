const printDate = function(str){
    console.log(str, Date.now());
}

let intervalId = null;

// to stop the setInterval method we have

document.querySelector('#start').
addEventListener('click',function()
{
    intervalId= setInterval(printDate,1000,'hi')
})

document.querySelector('#stop').
addEventListener('click',function(){
    clearInterval(intervalId);
})
