// # [JSL04] Submission: Monster Ternary Operator

// #### Challenge 1: Flavor Selection
// Given a variable that holds a user's preferred type of Monster Energy drink, 
// print whether the user prefers a "Regular" or "Sugar-free" variety. If the preference is not set, default to "Regular".

// Challenge 1: Flavor Selection
let userPreference = 'Sugar-free';
let flavor = userPreference === 'Sugar-free' ? 'Sugar-free' : 'Regular';// Possible values: 'Regular', 'Sugar-free', or undefined
console.log(`The user prefers ${flavor} Monster Energy.`);

//Explanation:

//Here, the code checks if the userPreference variable is 'Sugar-free'.
//If it is, it will set the flavor variable to 'Sugar-free'.
//If it's not, meaning if it's 'Regular' or undefined, it will default to 'Regular'.
//Then, it prints out the user's preference using string interpolation.



// #### Challenge 2: Stock Check
// You have a variable that tracks the number of Monster Energy cans left in the fridge. 
// Use a ternary operator to print "Time to restock!" if the number is less than 5, or "We're stocked!" if the number is 5 or more.

// Challenge 2: Stock Check
let cansLeft = 3;// Any number of cans
let stockStatus = cansLeft < 5 ? 'Time to restock!' : "We're stocked!";
console.log(stockStatus);

//Explanation:

//The code uses a ternary operator to check if the number of cansLeft is less than 5.
//If it is, it will set stockStatus to 'Time to restock!'.
//Otherwise, meaning if there are 5 or more cans left, it will set stockStatus to "We're stocked!".
//Then, it prints out the stock status.



// #### Challenge 3: Workout Intensity
// Based on the current heart rate, determine if the user should drink a Monster Energy drink to boost their workout. 
// If the heart rate is below 100 bpm, print "Boost needed!", otherwise, print "Energy levels are high!".

// Challenge 3: Workout Intensity
let heartRate = 95; // Current heart rate in bpm
let boostNeeded = heartRate < 100 ? 'Boost needed!' : 'Energy levels are high!';
console.log(boostNeeded);

//Explanation:

//It uses a ternary operator to check if the heartRate is less than 100 bpm.
//If it is, the code will set boostNeeded to 'Boost needed!'.
//Otherwise, meaning if it's 100 bpm or higher, it would set boostNeeded to 'Energy levels are high!'.
//Then, it will print out whether a boost is needed or not.



// #### Challenge 4: Temperature Suitability
// Monster Energy drinks are best served cold. Given the current temperature, use a ternary to print "Chilled to perfection!" 
// if the temperature is below or equal to 5°C, or "Needs a cooler!" if above 5°C.

//  Challenge 4: Temperature Suitability
let currentTemp = 4;// Current temperature in °C
let drinkServing = currentTemp <= 5 ? 'Chilled to perfection!' : 'Needs a cooler!';
console.log(drinkServing);

//Explanation:

//The code uses a ternary operator to check if the currentTemp is less than or equal to 5°C.
//If it is, the code will set drinkServing to 'Chilled to perfection!'.
//Otherwise, meaning if it's above 5°C, it would set drinkServing to 'Needs a cooler!'.
//Then, it will print out the suitability of the temperature for serving the drink.



// #### Challenge 5: Late Night Coding Session
// Determine if it's a good idea to have a Monster Energy drink based on the current hour.
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!",
// otherwise, print "Better stick to water."

// Define the current hour in 24-hour format 

//  Challenge 5: Late Night Coding Session
let currentHour = 22;
let drinkDecision = (currentHour >= 7 && currentHour <= 24) ? 'Unleash the beast!' : 'Better stick to water.';
console.log(drinkDecision);

//Explanation:

//Then the code uses a ternary operator to check if the currentHour is between 7am and midnight (24-hour format).
//If it is, it will be set to drinkDecision to 'Unleash the beast!'.
//Otherwise, meaning if it's past midnight or before 7am, the code would be set to drinkDecision to 'Better stick to water.'.
//Then, it will print out whether it's a good idea to have a drink based on the current hour.


// Write your code below this line to determine if it's a good idea to have a Monster Energy drink based on the current hour
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!"
// Otherwise, print "Better stick to water."






// In each of these challenges, the ternary operator is used to decide between two options based on a condition, 
// demonstrating its utility for concise conditional logic. Remember that while ternaries can make the code more succinct, 
// they should be used judiciously to maintain readability, especially for more complex conditions.
