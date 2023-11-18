// document.addEventListener("DOMContentLoaded", () => {
//     const hoursInput = document.getElementById("hours");
//     const minutesInput = document.getElementById("minutes");
//     const secondsInput = document.getElementById("seconds");
//     const startTimerButton = document.getElementById("start-timer");
//     const activeTimersList = document.getElementById("active-timers-list");

//     const timers = []; // Array to store active timers

//     startTimerButton.addEventListener("click", () => {
//         // Validate user input and create a timer object
//         const hours = parseInt(hoursInput.value || 0);
//         const minutes = parseInt(minutesInput.value || 0);
//         const seconds = parseInt(secondsInput.value || 0);

//         if (hours === 0 && minutes === 0 && seconds === 0) {
//             alert("Please enter a valid time.");
//             return;
//         }

//         const timer = {
//             hours,
//             minutes,
//             seconds,
//             interval: null,
//         };

//         timers.push(timer); // Add the timer to the array

//         // Create a timer display element
//         const timerElement = document.createElement("li");
//         timerElement.classList.add("timer-item");
//         const timerDisplay = document.createElement("span");
//         timerDisplay.textContent = `Time Left: ${formatTime(timer)}`;
//         timerElement.appendChild(timerDisplay);

//         // Add a 'Stop Timer' button
//         const stopButton = document.createElement("button");
//         stopButton.textContent = "Stop Timer";
//         stopButton.addEventListener("click", () => {
//             clearInterval(timer.interval); // Stop the timer
//             timerElement.remove(); // Remove the timer display
//             const index = timers.indexOf(timer);
//             if (index !== -1) {
//                 timers.splice(index, 1); // Remove the timer from the array
//             }
//         });

//         timerElement.appendChild(stopButton);
//         activeTimersList.appendChild(timerElement);

//         // Start the timer interval
//         timer.interval = setInterval(() => {
//             updateTimer(timer, timerDisplay);
//         }, 1000);
//     });

//     function formatTime(timer) {
//         // Format the timer as HH:MM:SS
//         return `${timer.hours.toString().padStart(2, "0")}:${timer.minutes.toString().padStart(2, "0")}:${timer.seconds.toString().padStart(2, "0")}`;
//     }

//     function updateTimer(timer, timerDisplay) {
//         // Update the timer display and check if it's done
//         if (timer.hours === 0 && timer.minutes === 0 && timer.seconds === 0) {
//             clearInterval(timer.interval); // Stop the timer
//             timerDisplay.textContent = "Timer Expired"; // Change the display
//         } else {
//             // Decrement the time remaining
//             if (timer.seconds > 0) {
//                 timer.seconds--;
//             } else if (timer.minutes > 0) {
//                 timer.seconds = 59;
//                 timer.minutes--;
//             } else {
//                 timer.seconds = 59;
//                 timer.minutes = 59;
//                 timer.hours--;
//             }
//             timerDisplay.textContent = `Time Left: ${formatTime(timer)}`; // Update the display
//         }
//     }
// });
const activetimers = document.getElementById("active-timers-section");
function Startnewtimer() {
  const hours = document.getElementById("hours").value || 0;
  const minutes = document.getElementById("minutes").value || 0;
  const seconds = document.getElementById("seconds").value || 0;
  console.log(hours, minutes, seconds);
  if (hours === 0 && minutes === 0 && seconds === 0) {
    alert("Please enter a valid time.");
    return;
  }
  const total_time_in_seconds =
    parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
  createTimer(total_time_in_seconds);
}

function createTimer(time_in_seconds) {
  const timerdiv = document.createElement("div");
  const timerDisplay = document.createElement("span");
  timerdiv.appendChild(timerDisplay);

  const timeInterval = setInterval(() => {
    time_in_seconds--;
    const display_hours = Math.floor(time_in_seconds / 3600);
    const display_minutes = Math.floor(time_in_seconds / 60);
    const display_seconds = Math.floor(time_in_seconds % 60);
    timerDisplay.innerHTML = `TimeLeft:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${display_hours}:${display_minutes}:${display_seconds}`;

    // timerDisplay.textContent = `TimeLeft:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${display_hours}:${display_minutes}:${display_seconds}`;
    console.log("working");
    if (time_in_seconds <= 0) {
      clearInterval(timeInterval);
      const end_msg = document.createElement("div");
      end_msg.innerText = "Timer is Up !";
      timerdiv.style.backgroundColor = "#f0f757";
      timerdiv.innerHTML = "";
      end_msg.appendChild(deletebutton);
      timerdiv.appendChild(end_msg);
      const timerAudio = document.getElementById("timerAudio");
      timerAudio.play();
    }else{
        timerdiv.appendChild(stopButton);
    }
  }, 1000);
  const stopButton = document.createElement("button");
  stopButton.textContent = `Stop`;
  stopButton.onclick = () => clearInterval(timeInterval);

  const deletebutton = document.createElement("button");
  deletebutton.textContent = `Delete`;
  deletebutton.onclick = () => {
    clearInterval(timeInterval);
    timerdiv.remove();
  };
  activetimers.appendChild(timerdiv);
//   timerdiv.appendChild(stopButton);
  //timerdiv.appendChild(deletebutton);
  //clearInterval(timeInterval);
}
