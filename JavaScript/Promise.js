// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const promiseOne = new Promise(function(resolve,reject) {
    setTimeout(() => {
        console.log("hello")
        resolve("hello123")
    },1000)
    
    
})
promiseOne.then(function(user){
    console.log("hello 1" + user)
})

new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Async Task 2")
        resolve("resolved")
    },1000)
}).then(function(e){
    console.log("hii message is " + e)
})
    
const promiseThree = new Promise(function(resolve,reject) {
    setTimeout(() => {
        var error = false;
        if(error)
        {
            reject("error something went wrong")
        }
        else
        {
            resolve({name:"Arshad" , age: 21 , height: 129})
        }
    }, 1000)
})

promiseThree.catch(function(){
    console.log("this is error")
}).then(function(user){
    console.log("this is resolved ")
    return user.age
}).then(function(x){
    console.log("my age is " + x)
})

const promiseFive = new Promise(function(resolve,reject) {
     setTimeout(() => {
        var error = false;
        if(error)
        {
            reject("error something went wrong")
        }
        else
        {
            resolve({name:"Arshad" , age: 21 , height: 129})
        }
    }, 1000)
    
})

async function callpromise5(){
    const response = await promiseFive;
    console.log("response is " + response)
}
callpromise5()
