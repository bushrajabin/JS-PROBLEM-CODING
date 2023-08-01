function clearDisplay() {
    document.getElementById("text1").value = "";
}

function showNumbers(value){
   document.getElementById("text1").value +=value;
}

function solveNumbers(){
    let x=document.getElementById("text1").value;
    let y=eval(x);
    document.getElementById("text1").value=y;
}


