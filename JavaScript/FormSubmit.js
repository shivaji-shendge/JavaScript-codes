function handleForm(e){
    e.preventDefault();
    let fullName = document.getElementById("name").value;
    let city = document.getElementById("city").value;  
    
    let div2= document.getElementById("div2")
    div2.innerHTML=`<h2> Your Full Name is : ${fullName}     And city is : ${city}</h2>`

    document.getElementById("name").value="";
    document.getElementById("city").value="";

}