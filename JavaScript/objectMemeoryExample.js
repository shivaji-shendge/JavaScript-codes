let user = {
    username: "Shivaji_Shendge",
    age:24,
    isLogedIn:true
}

console.log(user.username);

//now giving user to another reference

let user2 =user;
user2.username="Vishal";
console.log(user.username);

