function countVowels(str) {
    count =0;
    for(const char of str){
        console.log(char);
        if (char=="a" || char=="e" || char=="i" || char=="o" || char=="u"){
            count++;
        }
    }
    console.log("No of vowels : "+count);
}
let Myname = prompt("Enter name", "Shivaji");
countVowels(Myname);