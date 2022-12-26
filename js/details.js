// Element instances
let hoursEl = document.getElementById('calc-hours');

// Global variables
let hours = 1000 * 60 * 60;
let initialDate =  Math.abs(new Date(2021,3) - Date.now()); // Divides starting project date with today's date

// Update
hoursEl.textContent = Math.floor(initialDate / hours);