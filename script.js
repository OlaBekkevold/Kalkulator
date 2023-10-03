const fieldInput = document.getElementById("fieldInput");

// Selects all the buttons in the calculator and stores it in the variable buttons
const buttons = document.querySelectorAll(".button");

// Creates a function that logs the value of the button that is clicked
function add(event) {

    let buttonVal = event.target.innerHTML;
    console.log("Value of button:", buttonVal);

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






  


