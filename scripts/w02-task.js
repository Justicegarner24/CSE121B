/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Justice Garner';
let currentYear = '2023';
let profilePicture = 'images/mypicture.jpg'


/* Step 3 - Element Variables */

const nameElement = document.getElementById ('name');
const foodElement = document.getElementById ('food');
const yearElement = document.querySelector ('#year');
var imageElement = document.getElementById('image');


/* Step 4 - Adding Content */

nameElement.innerHTML = '<strong>${fullName}<strong>';
currentYear.textContent = '<strong>${currentYear}<strong>';
imageElement.setAttribute('src' , profilePicture);
imageElement.setAttribute('alt' , 'Profile image of [ProfilePicture]');



/* Step 5 - Array */

const favFoods = ['sushi', 'burgers', 'waffles', 'ribs'];




