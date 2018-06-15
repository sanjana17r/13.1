var str = "hello";
var uppercase = str.toUpperCase()
n=uppercase.length;

let promiseConvertUppercase = new Promise(function(resolve,reject){

    setTimeout(function(){
        if (uppercase){
       resolve(uppercase)
        }
        else{
              reject("error 2");
        }
    },1000*n)
});
promiseConvertUppercase.then(function(result){
console.log(result);
}).catch(function(result){
    console.log(result);
});
