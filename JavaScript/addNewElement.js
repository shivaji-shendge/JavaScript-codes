let newBtn =document.createElement("button");
newBtn.innerText="click me";
console.log(newBtn);

let div= document.querySelector("div");
//div.append(newBtn);
div.after(newBtn);

let newheading = document.createElement("h1");
newheading.innerHTML="<i> New heading added by javascript";

document.querySelector("body").prepend(newheading);