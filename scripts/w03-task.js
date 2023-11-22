/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
function add (number1, number2) {
    return number1 + number2;
}

let addNumber1 = Number(document.querySelector('#add1').value);
let addNumber2 = Number(document.querySelector('#add2').value);
document.querySelector('#sum').value = add(addNumber1, addNumber2);

document.querySelector('#addNumbers').addEventListener('click'. addNumbers);
/* Function Expression - Subtract Numbers */
function Subtract (number1, number2) {
    return number1 - number2;
}

let subtractNumber1 = Number(document.querySelector('#subtract1').value);
let subtractNumber2 = Number(document.querySelector('#subtract2').value);
document.querySelector('#difference').value = add(subtractNumber1, subtractNumber2);

/* Arrow Function - Multiply Numbers */
function Multiply (number1, number2) {
    return number1 * number2;
}

let multiplyNumber1 = Number(document.querySelector('#factor1').value);
let multiplyNumber2 = Number(document.querySelector('#factor2').value);
document.querySelector('#product').value = add(multiplyNumber1, multiplyNumber2);

/* Open Function Use - Divide Numbers */
function Divide (number1, number2) {
    return number1 / number2;
}

let divideNumber1 = Number(document.querySelector('#dividend').value);
let divideNumber2 = Number(document.querySelector('#divisor').value);
document.querySelector('#quotient').value = add(divideNumber1, divideNumber2);

/* Decision Structure */
let subtotalField = document.getElementById('subtotal');
let membershipCheckbox = document.getElementById('membership');
let getTotalButton = document.getElementById('getTotalButton');
let totalSpan = document.getElementById('total');

getTotalButton.addEventListener('click', calculateTotal);

function calculateTotal() {
    const subtotal = parseFloat(subtotalField.value);

    const hasMembership = membershipCheckbox.checked;

    const discount = hasMembership ?0.15 : 0;

    const totalAmount = subtotal * (1 - discount);

    totalSpan.textContent = 'Total Due: $${totalAmount.toFixed(2)}';
}
/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

document.querySelector('#odds').innerHTML = numbersArray.filter(number => number %2);
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number %2 === 0);

numbersArray.reduce((sum, number) => sum + number)

numbersArray.map(number => number * 2)

numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
