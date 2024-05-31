document.addEventListener("DOMContentLoaded", function everything() {
    const numbers = document.querySelectorAll(".number");
    const text = document.querySelector("h1");
    const REMOVE_NUMBERS = document.querySelector("#delete");
    const REMOVE_LAST_NUM = document.querySelector("#delete-one");
    const mathOperators = document.querySelectorAll(".math");
    const equals = document.querySelector("#equals");
    let current = text.textContent; 
    let firstNum = "";
    let secondNum = "";
    let operator;
    let operatorClicked = false;
    let result;
    const point = document.querySelector("#point");
    const changeSigns = document.querySelector("#change-signs");
    let operate = function(x, y, action){
        switch(action){
            case "add":
                result = x+y;
                display(result);
            case "subtract":
                result = x-y;
                dsplay(result);
            case "multiply":
                result = x*y;
                display(result);
            case "divide":
                result = x/y;
                display(result);
        }
    }
    let displayValue = 0;
    display(displayValue);
    numbers.forEach(number =>
        number.addEventListener("click", function addToDisplay(number){
            if (text.textContent == 0){
                thingsLeft = 0;
                displayValue = number.target.value;
                display(displayValue);
            }
            else{
                thingsLeft = text.textContent;
                displayValue = number.target.value;
                display(thingsLeft + displayValue);
            }
            })
    )
    function display(x){
        text.textContent = x;
    }
    REMOVE_NUMBERS.addEventListener("click", () => {
        location.reload();
    })
    REMOVE_LAST_NUM.addEventListener("click", () => {
        let currentStuff = text.textContent;
        if (currentStuff.length > 1){
            displayValue = currentStuff.slice(0, currentStuff.length -1);
            display(displayValue);
        }
        else {
            display(0);
            operatorClicked = false;
        }
    })
    mathOperators.forEach(thing => 
        thing.addEventListener("click", () => {
            if (operatorClicked == true){
                evaluateOp();
                firstNum = text.textContent;
                operator = thing.id;
                display(firstNum + " " + thing.value + " ");
            }
            else{
                firstNum = text.textContent;
                operator = thing.id;
                display(firstNum + " " + thing.value + " ");
                operatorClicked = true;
            }
        })
    )
    equals.addEventListener("click",() =>{
        if(operatorClicked){
            evaluateOp();
            operatorClicked = false;
        }
        else{
            return;
        }
    } );
    function evaluateOp(){
        let equation = text.textContent;
        let array = equation.split(" ");
        for (let i = 0; i < array.length; i++){
            if (i == 0){
                firstNum = Number(array[i]);
            }
            else if (i == 2){
                secondNum = Number(array[i]);
            }
        }
        if (operator == "add"){
            display(firstNum + secondNum);
        }
        else if(operator == "subtract"){
            display(firstNum - secondNum);
        }
        else if(operator == "multiply"){
            display(firstNum * secondNum);
        }
        else{
            display(firstNum / secondNum);
        }
    }
    point.addEventListener("click", () => {
        current = text.textContent;
        display(current + ".")
    })
    changeSigns.addEventListener("click", () => {
        current = text.textContent;
        if (current.charAt(0) != "-"){
            display("-" + current);
        }
        else{
            display(current.slice(1));
        }
    })
})