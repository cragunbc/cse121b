/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Brantley Cragun";
let currentYear = 2023;
let profilePicture = 'images/profilepicture.png';


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */
const favoriteFoods = ["Pizza", " Chicken", " BBQ", " Pork", " Tacos", " Hamburgers"];
document.querySelector("#food").textContent = favoriteFoods;
const additionalFood = " Sandwiches";
favoriteFoods.push(additionalFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;