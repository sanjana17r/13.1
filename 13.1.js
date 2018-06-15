var str = "hello";
var uppercase = str.toUpperCase()//the following string is convertd to uppercase
n=uppercase.length;//this is the length of the string.

let promiseConvertUppercase = new Promise(function(resolve,reject){//this is a promise


    setTimeout(function(){//time is set to no.of seconds equal to string length
        if (uppercase)
        {
           resolve(uppercase)//if the condition is true ,the promise gets resolved.
        }
        else
        {//if the string is not converted to uppercase,it gets rejected,hence displaying the error message.
              reject("error 2");
        }
    },1000*n)
});
promiseConvertUppercase.then(function(result){// promise is called
      console.log(result);//prints HELLO.
}).catch(function(result){
    console.log(result);
});
