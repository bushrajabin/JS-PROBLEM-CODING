function fizzBuzz(){
    // let val=[];
    for(var i=0;i<=100;i++){
        if(i%15===0){
            console.log("fizzBuzz");
        }else if(i%3===0){
            console.log("Fizz");
        }else if (i%5===0){
            console.log("Buzz");
        }
        else{
           console.log(i) 
        }

    }

    // return val;
    
}
// let result=fizzBuzz(100);
// console.log(result);
fizzBuzz()