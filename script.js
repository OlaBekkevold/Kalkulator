const fieldInput = document.getElementById("fieldInput");

// Selects all the buttons in the calculator and stores it in the variable buttons
const buttons = document.querySelectorAll(".button");

// Creates a function that logs the value of the button that is clicked
function add(event) {

    let buttonVal = event.target.innerHTML;
    console.log("Value of button:", buttonVal);

    const lastChar = fieldInput.innerHTML.slice(-1);
    const buttonClass = event.target.className;
    console.log("Button class:", buttonClass);

    // Checks if the button clicked is an operator and if the previous input also was a operator. If true, the new operator replaces the old one
    if (buttonClass.includes("operator") && (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/" || lastChar === ".")) {
        fieldInput.innerHTML = fieldInput.innerHTML.slice(0, -1);
    }

    fieldInput.innerHTML += buttonVal;
    console.log("New value:", fieldInput.innerHTML); 
}


// Adds an event listener to each button that calls the add function when clicked
buttons.forEach(function(button) {
    button.addEventListener("click", add);
})

const equalButton = document.getElementById("buttonEqual");

// This function takes the value of fieldInput and calculates the result. Then displays the reult in fieldInput
function calculate() {
    let result = eval(fieldInput.innerHTML);
    console.log("Result:", result);
    fieldInput.innerHTML = result;
}

// Adds an event listener to the equal button that calls the calculate function when clicked
equalButton.addEventListener("click", calculate);

function clear() {
    fieldInput.innerHTML = "";
}

document.getElementById("buttonCE").addEventListener("click", clear);

function remove() {
    fieldInput.innerHTML = fieldInput.innerHTML.slice(0, -1);

}

document.getElementById("buttonC").addEventListener("click", remove);


























/*let operator = prompt("Which operation do you want to use. +, -, * or /");

if (operator === "+" || operator === "-" || operator === "*" || operator === "/") {

    let num1 = parseInt(prompt("Enter your first number"));
    let num2 = parseInt(prompt("Enter your second number"));
    if(isNaN(num1) || isNaN(num2)) {
        alert("Please enter a number")
    } else {
        switch (operator) {
            case "+":
                alert(`${num1} ${operator} ${num2} = ` + (num1 + num2));
                break;
            case "-":
                alert(`${num1} ${operator} ${num2} = ` + (num1 - num2));
                break;
            case "*":
                alert(`${num1} ${operator} ${num2} = ` + (num1 * num2));
                break;
            case "/":
                alert(`${num1} ${operator} ${num2} = ` + (num1 / num2));
                break;
            default:
                alert("Invalid input. Please reload the page.")
    
        }


    }

    
} else {
    alert("Invalid operator")

}*/






  


