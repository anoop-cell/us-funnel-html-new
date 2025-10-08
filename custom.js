// Timer Code - Multiple Instance Support
document.addEventListener("DOMContentLoaded", function () {
  // Find all timer containers
  const timerContainers = document.querySelectorAll('.timer-container');
  
  timerContainers.forEach(container => {
    const minutesEl = container.querySelector('.minutes');
    const secondsEl = container.querySelector('.seconds');
    
    // Get initial time from the minutes element, or default to 35 minutes
    const initialMinutes = parseInt(minutesEl.textContent) || 35;
    const totalSeconds = initialMinutes * 60;
    
    function updateDisplay(timeLeft) {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      minutesEl.textContent = String(minutes).padStart(2, '0');
      secondsEl.textContent = String(seconds).padStart(2, '0');
    }
    
    function startTimer(duration) {
      let timeLeft = duration;
      updateDisplay(timeLeft); // initial render
      
      const interval = setInterval(() => {
        timeLeft--;
        if (timeLeft < 0) {
          clearInterval(interval);
          updateDisplay(0);
          return;
        }
        updateDisplay(timeLeft);
      }, 1000);
    }
    
    startTimer(totalSeconds);
  });
});