document.getElementById('images').addEventListener('click',function(e){
    console.log("Clicked inside the ul");
},false)

console.log("Following is an example of bubbling up propogation")
document.getElementById('owl').addEventListener('click',function(e){
    console.log("Owl Clicked");
},false)

document.getElementById('google').addEventListener('click',function(e){
    e.preventDefault()
},false)

//Now we want to remove images from screen disappear
document.querySelector("#images").addEventListener('click',function(e){
   
    console.log(e);
    console.log(e.target);
    console.log(e.target.parentNode)
    console.log(e.target.tagName)
    if(e.target.tagName==='IMG'){
        let removeIt = e.target.parentNode
        removeIt.remove()
       //R better approach
       // removeIt.parentNode.removeChild(removeIt)
    }
   
})