//your code here
// Select the clock hands
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setClock() {
  const now = new Date();

  // Get current hours, minutes, and seconds
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Calculate degrees for each hand
  const secondsDegrees = ((seconds / 60) * 360) + 90; // Add 90 to offset initial rotation
  const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

  // Apply the rotation to the hands
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Call the setClock function every second to update the hands
setInterval(setClock, 1000);

// Initialize the clock immediately
setClock();
