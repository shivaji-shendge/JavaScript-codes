const promiseOne = new Promise((resolve, reject) => {
    //Some Async Task
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

//shortcut
new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

// Taking parameter for then after resolve
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "shiva" , email:"example.com" })
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})

//Reject 
const promiseFour= new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Hitesh",password:"123"})
        }
        else{
           reject('Error: Something went wrong') 
        }
    },2000)
})
promiseFour
.then(function(user){
    console.log(user);
    return user.username
})
.then((username)=>{
        console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{
    console.log("Your promise is either resolved or rejected")
})

//promise 5
const promiseFive = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"JavaScript",password:"456"})
        }
        else{
           reject('ERROR: JS went wrong') 
        }
    },2000)
})

async function consumePromise5 (){
    try{
    const responce =await promiseFive
    console.log(responce);
    }
    catch(error){
        console.log(error);
    }
    
} 

consumePromise5();

// 
fetch('https://jsonplaceholder.typicode.com/users')
.then((responce)=>{
    return responce.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=console.log(error))

