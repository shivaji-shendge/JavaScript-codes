let first, second,add;
function acceptFirstNumber(){
        first=prompt("Enter first number",0);
}
function acceptSecondNumber(){
    second=prompt("Enter first number",0);
}
function calculateAddition(){
    let result = confirm("DO you want to cal;culate addition");
    if(result){
        add=parseInt(first)+parseInt(second);
        alert("Addition is :"+add);
    }
}