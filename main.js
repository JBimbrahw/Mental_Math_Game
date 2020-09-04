let operators = ["+" , "-", "X", "/"];
let operator = "";


function myFunction() {

    let difficulty = document.getElementById(diffvalue).innerHTML;
    console.log(difficulty);
    let maxnum = (difficulty > 5) ? 100 : 10;

    operator = operators[getRandomInt(4)];
    document.getElementById("operator").innerHTML = operator;
    document.getElementById("line").innerHTML = "____";

    //we always want quotients to be whole numbers
    if(operator == "/") {
        let num2 = getRandomInt(10);
        let num1 = num2*getRandomInt(10);
        document.getElementById("num2").innerHTML = num2;
        document.getElementById("num1").innerHTML = num1;
    }
    //we don't want negative differences
    else if(operator == "-") {
        let num1 = 0, num2 = 0;
        do {
            num1 = getRandomInt(maxnum);
            num2 = getRandomInt(maxnum);
        }
        while(num1 <= num2)
        
        document.getElementById("num2").innerHTML = num2;
        document.getElementById("num1").innerHTML = num1;
    }
    else {
        document.getElementById("num1").innerHTML = getRandomInt(maxnum);
        document.getElementById("num2").innerHTML = getRandomInt(maxnum);    
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function showAnswer() {
    switch(operator) {
        case "+":
            document.getElementById("ans").innerHTML = 
            Number(document.getElementById("num1").innerHTML)+
            Number(document.getElementById("num2").innerHTML);
            break;
        case "-":
                document.getElementById("ans").innerHTML = 
                document.getElementById("num1").innerHTML-
                document.getElementById("num2").innerHTML;
            break;
        case "X":
            document.getElementById("ans").innerHTML = 
            document.getElementById("num1").innerHTML*
            document.getElementById("num2").innerHTML;
            break;
        case "/":
            document.getElementById("ans").innerHTML = 
            document.getElementById("num1").innerHTML/
            document.getElementById("num2").innerHTML;
            break;
    }
}