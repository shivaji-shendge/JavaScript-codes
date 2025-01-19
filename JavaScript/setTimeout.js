const sayHellow = function(){
    console.log("Hello Shivaji!");
}

const ChangeText =function(){
    document.querySelector('h1').innerHTML="Best Person In the World" 
} 
const changeMe = setTimeout(ChangeText,5000)

//we can stop the setTimeout

document.querySelector('#stop').
addEventListener('click',function(){
    clearTimeout(changeMe)
    console.log("STOPPED")
})