// for of
const arr=[10,20,30,40,50]
for(let i of arr){
    console.log(i);
}

const greetings="Good Morning!"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}

// Map
const map= new Map()
map.set('IN',"India")
map.set('USA',"United states of america")

console.log(map);

//Object
const myObject ={
    'game1':'NFS',
    'game2':'Spiderman'
}
const myObject2 ={
    game1:'NFS',
    game2:'Spiderman'
}

//for of loop will not work for object
//for in loop
for(const val in myObject){
    console.log(val)
}