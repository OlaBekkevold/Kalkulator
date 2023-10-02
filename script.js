let fieldInput = document.getElementById("fieldInput").innerHTML;

// Selects all the buttons in the calculator and stores it in the variable buttons
const buttons = document.querySelectorAll(".button");

// Creates a function that logs the value of the button that is clicked
function add(event) {

    let buttonVal = event.target.innerHTML;
    console.log("Value of button:", buttonVal);

    document.getElementById("fieldInput").innerHTML += buttonVal;
    console.log("New value:", document.getElementById("fieldInput").innerHTML); 
}





// Adds an event listener to each button that calls the add function when clicked
buttons.forEach(function(button) {
    button.addEventListener("click", add);
})


























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






  


