
// Logo Slider

$(document).ready(function(){
  $("#owl-example1").owlCarousel({
      loop: true,
      items: 5,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplaySpeed: 3000,
      smartSpeed: 3000,
      autoplayHoverPause: true,
      nav: false,
      margin: 0, // Disable default spacing
      responsive: {
          0: {
              items: 2
          },
          600: {
              items: 2
          },
          1000: {
              items: 6
          }
      }
  });
});





   




/*
$(document).ready(function(){
  $("#owl-example2").owlCarousel({
      loop: true,             // Enables infinite looping
      margin: 30,
      items: 4,
      autoplay: false,        // Enables automatic sliding
      autoplayTimeout: 4000, // Time between slides in milliseconds
      autoplaySpeed: 2000,
      smartSpeed: 2000,
      autoplayHoverPause: true, // Pause on hover
      responsive : {
          0 : {
              items : 2
          },
          600 : {
              items : 2
          },
          1000 : {
              items : 4
          }
      },
      nav: true,              // Enable navigation arrows
      navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>']
  });
});   */






$(document).ready(function(){
    // Initialize Owl Carousel
    $("#owl-example2").owlCarousel({
        items: 2,
        loop: false,
        margin: 20,
        nav: true,           // Disable navigation arrows
        dots: false,           // Enable dots navigation
        autoplay: false,      // Disable autoplay
  autoplayTimeout: 4000, // Time between slides in milliseconds
      autoplaySpeed: 2000,
      smartSpeed: 2000,

        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 2
            },
            1024: {
                items: 2 
            }
        },  

        nav: true,              // Enable navigation arrows
      navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>']
    });
    
    // Stop carousel when video starts playing
    $('.owl-carousel').on('click', 'iframe', function() {
        $("#owl-example2").trigger('stop.owl.autoplay');
    });
    
    // Pause all videos when carousel slides
    $("#owl-example2").on('changed.owl.carousel', function(event) {
        // Get all iframes and pause them
        $('.owl-carousel iframe').each(function() {
            var iframe = $(this);
            var player = new Vimeo.Player(iframe[0]);
            player.pause();
        });
    });
});








    
 























$(document).ready(function(){
  $("#owl-example3").owlCarousel({
      loop: true,             // Enables infinite looping
      margin: 30,
      items: 3,
      autoplay: true,        // Enables automatic sliding
      autoplayTimeout: 5000, // Time between slides in milliseconds
      autoplaySpeed: 1000,
      smartSpeed: 1000,
      autoplayHoverPause: true, // Pause on hover
      responsive : {
          0 : {
              items : 1
          },
          600 : {
              items : 2
          },
          1000 : {
              items : 3
          }
      },
      nav: true,              // Enable navigation arrows
      navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>']
  });
});  






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











         // Called after form submission or click
         function playVideo() {
             const container = document.querySelector('.video-placeholder');
             container.outerHTML = `<div id="video-wrapper" class="relative max-w-3xl w-full bg-black rounded-xl overflow-hidden h-full"
         style="width: 100% !important; max-width: 100% !important;height: 100% !important; max-height: 100% !important;">
         
         <!-- Video -->
         <video
           id="main-video"
           poster="https://webinar.wallstreetmojo.com/wp-content/uploads/2025/09/image.webp"
           playsinline
           webkit-playsinline
           autoplay
           muted
           preload="metadata"
           class="w-full h-auto"
         >
           <source src="https://player.vimeo.com/progressive_redirect/playback/1115054040/rendition/1080p/file.mp4?loc=external&signature=e126867f880aeea49341e4b374257d2c0e798f37c482bed8c5ad74f448665efd" type="video/mp4">
           Your browser does not support the video tag.
         </video>
         
         <!-- Center Play Button (fallback if autoplay blocked) -->
         <button id="center-play-btn"
           class="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition">
           <div class="bg-white/80 text-black rounded-full p-6 shadow-lg text-3xl">▶</div>
         </button>
         
         <!-- CTA Sign Up (appears at 31:40) -->
         <button
         class="vsl-signup absolute top-3 right-3 text-white text-sm font-semibold rounded-lg shadow-lg transition hidden">
         <a href="#courses"
                     class="inline-flex items-center bg-white text-primary px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 text-sm justify-center " style="
         background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
         
         color: white;
         border: 1px solid #ffffff54;
         box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.1);
         ">
                     Enroll Now</a>
         </button>
         
         
         
         <!-- Bottom Controls -->
         <div id="bottom-controls" class="absolute bottom-0 left-0 w-full bg-black/70 flex items-center gap-3 px-3 py-2 text-white text-sm opacity-100 transition-opacity duration-500">
         <div id="time-display" class="min-w-[80px]">00:00 / 00:00</div>
         
         <!-- Play/Pause -->
         <button id="play-btn" class="bg-white/10 text-white text-lg px-2 py-1 rounded">▶</button>
         
         <!-- Play/Pause + Mute (top-left corner) -->
         <button id="mute-btn" class="bg-white/10 text-white text-lg px-2 py-1 rounded">🔇</button>
         
         <!-- Timeline -->
         <input type="range" id="timeline" min="0" value="0" class="flex-1 accent-red-500">
         
         <!-- Speed -->
         <select id="speed-select" class="bg-black/70 border border-gray-500 rounded px-1">
         <option value="0.5">0.5x</option>
         <option value="0.75">0.75x</option>
         <option value="1" selected>1x</option>
         <option value="1.25">1.25x</option>
         <option value="1.5">1.5x</option>
         <option value="1.75">1.75x</option>
         <option value="2">2x</option>
         </select>
         
         <button id="fullscreen-btn" class="bg-white/10 text-white px-2 py-1 rounded">⛶</button>
         </div>
         </div>
         
         <!-- Countdown Timer below video -->
         <div id="unlock-timer" class="text-center mt-3 text-lg font-semibold text-gray-800">
         Financial Modeling Unlocks In <span id="countdown" class="text-green-600">31:40</span> mins
         </div>
         
         <!-- CTA button below video -->
         <div class="flex justify-center mt-4">
         <button
         class="vsl-signup hidden text-white text-sm font-semibold rounded-lg shadow-lg transition cu-ctabg hidden"
         ><a href="#courses"
                     class="inline-flex items-center bg-white text-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 text-xl w-auto justify-center sm:w-80" style="
         background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
         
         color: white;
         border: 1px solid #ffffff54;
         box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.1);
         ">
                     Enroll Now</a>
         </button>
         </div>`;
         
             initCustomVideoPlayer(); // <-- attach all event listeners after video exists
         }
         
         function initCustomVideoPlayer() {
             const video = document.getElementById("main-video");
             const playBtn = document.getElementById("play-btn");
             const muteBtn = document.getElementById("mute-btn");
             const timeline = document.getElementById("timeline");
             const timeDisplay = document.getElementById("time-display");
             const speedSelect = document.getElementById("speed-select");
             const fullscreenBtn = document.getElementById("fullscreen-btn");
             const bottomControls = document.getElementById("bottom-controls");
             const signupButtons = document.querySelectorAll(".vsl-signup");
             const countdownEl = document.getElementById("countdown");
             const centerPlayBtn = document.getElementById("center-play-btn");
         
             const unlockTime = 31 * 60 + 40;
             let countdownRemaining = unlockTime;
             let countdownInterval = null;
         
             // ✅ Play button
             playBtn.addEventListener("click", () => {
                 if (video.paused) {
                     video.play();
                 } else {
                     video.pause();
                 }
             });
         
             // ✅ Center play button (only shows before video plays)
             centerPlayBtn.addEventListener("click", () => {
                 video.play();
             });
         
             video.addEventListener("play", () => {
                 playBtn.textContent = "⏸";
                 centerPlayBtn.style.display = "none"; // hide center play button
                 startCountdown();
             });
         
             video.addEventListener("pause", () => {
                 playBtn.textContent = "▶";
                 centerPlayBtn.style.display = "flex"; // show center play button again
                 stopCountdown();
             });
         
             // ✅ Mute button
             muteBtn.addEventListener("click", () => {
                 video.muted = !video.muted;
                 muteBtn.textContent = video.muted ? "🔇" : "🔊";
             });
         
             // ✅ Timeline + time display
             video.addEventListener("timeupdate", () => {
                 timeline.value = (video.currentTime / video.duration) * 100;
                 timeDisplay.textContent =
                     formatTime(video.currentTime) + " / " + formatTime(video.duration);
         
                 if (video.currentTime >= unlockTime) {
                     signupButtons.forEach((btn) => btn.classList.remove("hidden"));
         
                     document.getElementById("unlock-timer").style.display = "none";
                         const bottomCTA = document.querySelector('#video-wrapper > div.flex.justify-center.mt-4');
                         if (bottomCTA) bottomCTA.style.marginTop = "50px";
         
                 }
             });
         
             timeline.addEventListener("input", () => {
                 video.currentTime = (timeline.value / 100) * video.duration;
             });
         
             // ✅ Speed control
             speedSelect.addEventListener("change", () => {
                 video.playbackRate = parseFloat(speedSelect.value);
             });
         
             // ✅ Fullscreen
             fullscreenBtn.addEventListener("click", () => {
                 if (video.requestFullscreen) video.requestFullscreen();
                 else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
             });
         
             // ❌ Remove auto-hide controls
             bottomControls.style.opacity = "1"; // always visible
         
             // ------------------------
             // Countdown helpers
             // ------------------------
             function startCountdown() {
                 if (!countdownInterval && countdownRemaining > 0) {
                     countdownInterval = setInterval(() => {
                         if (!video.paused) {
                             countdownRemaining--;
                             updateCountdownDisplay();
                             if (countdownRemaining <= 0) {
                                 clearInterval(countdownInterval);
                                 signupButtons.forEach((btn) => btn.classList.remove("hidden"));
                             }
                         }
                     }, 1000);
                 }
             }
         
             function stopCountdown() {
                 clearInterval(countdownInterval);
                 countdownInterval = null;
             }
         
             function updateCountdownDisplay() {
                 const mins = Math.floor(countdownRemaining / 60)
                     .toString()
                     .padStart(2, "0");
                 const secs = Math.floor(countdownRemaining % 60)
                     .toString()
                     .padStart(2, "0");
                 countdownEl.textContent = `${mins}:${secs}`;
             }
         
             function formatTime(seconds) {
                 const mins = Math.floor(seconds / 60)
                     .toString()
                     .padStart(2, "0");
                 const secs = Math.floor(seconds % 60)
                     .toString()
                     .padStart(2, "0");
                 return `${mins}:${secs}`;
             }
         
         
         }
         
         
    

// DOM Elements
const popupOverlay = document.getElementById('popup-overlay');
const popupForm = document.getElementById('popup-form');
const closeBtn = document.getElementById('close-btn');
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const submitText = document.getElementById('submit-text');
const loadingText = document.getElementById('loading-text');
const videoPlaceholder = document.querySelector('.video-placeholder');
const videoWrapper = document.getElementById('video-wrapper');

// Variable to track if form has been submitted
let formSubmittedSuccessfully = false;

// Open popup when clicking video placeholder
if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Only show popup if video hasn't been unlocked yet
        if (!formSubmittedSuccessfully) {
            openPopup();
        }
    });
}

// Function to open popup
function openPopup() {
    popupOverlay.classList.add('active');
}

// Close popup function
function closePopup() {
    popupOverlay.classList.remove('active');
    if (!formSubmittedSuccessfully) {
        contactForm.reset();
    }
}

// Close popup events
closeBtn.addEventListener('click', closePopup);

popupOverlay.addEventListener('click', function(e) {
    if (e.target === popupOverlay) {
        closePopup();
    }
});

// Escape key to close popup
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && popupOverlay.classList.contains('active')) {
        closePopup();
    }
});

// Function to get UTM parameters from URL
function getUTMParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
        utm_term: urlParams.get('utm_term') || '',
        utm_content: urlParams.get('utm_content') || ''
    };
}

// Form submission
contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Show loading state
    submitBtn.disabled = true;
    submitText.classList.add('hidden');
    loadingText.classList.remove('hidden');

    // Get form data
    const formData = new FormData(contactForm);
    const utmParams = getUTMParameters();

    // Create form data for submission
    const submitData = new FormData();
    submitData.append('fullname', formData.get('fullname'));
    submitData.append('email', formData.get('email'));
    submitData.append('background', formData.get('background'));
    submitData.append('utm_source', utmParams.utm_source);
    submitData.append('utm_medium', utmParams.utm_medium);
    submitData.append('utm_campaign', utmParams.utm_campaign);
    submitData.append('utm_term', utmParams.utm_term);
    submitData.append('utm_content', utmParams.utm_content);

    try {
        console.log('Submitting data...');

        // Replace with your Google Apps Script Web App URL
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzSKUXo-Ek5qhRegdnuPka3wUEcivcKc-uO1RKpe4lQ28F56myD7gisM-K6GRp7HNw3/exec';

        const response = await fetch(scriptURL, {
            method: 'POST',
            body: submitData
        });

        console.log('Form submitted successfully!');

        // Fire Facebook Lead event if fbq is available
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Lead');
        }

        // Mark form as successfully submitted
        formSubmittedSuccessfully = true;

        // Close the popup
        closePopup();

        // Wait for popup close animation, then play video
        setTimeout(() => {
            playVideo();
        }, 400);

    } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting the form. Please try again.');
        submitBtn.disabled = false;
        submitText.classList.remove('hidden');
        loadingText.classList.add('hidden');
    }
});

// Function to replace placeholder with actual video
function playVideo() {
    videoWrapper.innerHTML = `
        <div class="video-player-container">
            <!-- Video -->
            <video
                id="main-video"
                poster="https://webinar.wallstreetmojo.com/wp-content/uploads/2025/09/image.webp"
                playsinline
                webkit-playsinline
                autoplay
                preload="metadata"
            >
                <source src="https://player.vimeo.com/progressive_redirect/playback/1115054040/rendition/1080p/file.mp4?loc=external&signature=e126867f880aeea49341e4b374257d2c0e798f37c482bed8c5ad74f448665efd" type="video/mp4">
                Your browser does not support the video tag.
            </video>

            <!-- Center Play Button -->
            <div id="center-play-btn" class="center-play-btn" style="display: none;">
                <div class="center-play-btn-icon">▶</div>
            </div>

            <!-- CTA Sign Up (appears at 31:40) -->
            <div class="vsl-signup" style="display: none;">
                <a href="#courses">Enroll Now</a>
            </div>

            <!-- Bottom Controls -->
            <div class="bottom-controls">
                <div class="time-display" id="time-display">00:00 / 00:00</div>
                <button id="play-btn" class="control-btn">▶</button>
                <button id="mute-btn" class="control-btn">🔇</button>
                <input type="range" id="timeline" class="timeline" min="0" value="0">
                <select id="speed-select" class="speed-select">
                    <option value="0.5">0.5x</option>
                    <option value="0.75">0.75x</option>
                    <option value="1" selected>1x</option>
                    <option value="1.25">1.25x</option>
                    <option value="1.5">1.5x</option>
                    <option value="1.75">1.75x</option>
                    <option value="2">2x</option>
                </select>
                <button id="fullscreen-btn" class="control-btn">⛶</button>
            </div>
        </div>

        <!-- Countdown Timer below video -->
        <div id="unlock-timer" class="unlock-timer">
            Financial Modeling Unlocks In <span id="countdown" class="countdown">31:40</span> mins
        </div>

        <!-- CTA button below video -->
        <div class="bottom-cta">
            <div class="vsl-signup" style="display: none;">
                <a href="#courses" class="button">Enroll Now</a>
            </div>
        </div>
    `;

    initCustomVideoPlayer();
}

// Initialize custom video player
function initCustomVideoPlayer() {
    const video = document.getElementById("main-video");
    const playBtn = document.getElementById("play-btn");
    const muteBtn = document.getElementById("mute-btn");
    const timeline = document.getElementById("timeline");
    const timeDisplay = document.getElementById("time-display");
    const speedSelect = document.getElementById("speed-select");
    const fullscreenBtn = document.getElementById("fullscreen-btn");
    const signupButtons = document.querySelectorAll(".vsl-signup");
    const countdownEl = document.getElementById("countdown");
    const centerPlayBtn = document.getElementById("center-play-btn");
    const unlockTimer = document.getElementById("unlock-timer");

    const unlockTime = 31 * 60 + 40; // 31:40 in seconds
    let countdownRemaining = unlockTime;
    let countdownInterval = null;

    // Auto-play video
    video.play().catch(e => {
        console.log("Autoplay prevented:", e);
        centerPlayBtn.style.display = 'flex';
    });

    // Play/Pause button
    playBtn.addEventListener("click", () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    // Center play button
    centerPlayBtn.addEventListener("click", () => {
        video.play();
    });

    video.addEventListener("play", () => {
        playBtn.textContent = "⏸";
        centerPlayBtn.style.display = "none";
        startCountdown();
    });

    video.addEventListener("pause", () => {
        playBtn.textContent = "▶";
        centerPlayBtn.style.display = "flex";
        stopCountdown();
    });

    // Mute button
    muteBtn.addEventListener("click", () => {
        video.muted = !video.muted;
        muteBtn.textContent = video.muted ? "🔇" : "🔊";
    });

    // Timeline + time display
    video.addEventListener("timeupdate", () => {
        timeline.value = (video.currentTime / video.duration) * 100;
        timeDisplay.textContent = formatTime(video.currentTime) + " / " + formatTime(video.duration);

        if (video.currentTime >= unlockTime) {
            signupButtons.forEach((btn) => {
                btn.style.display = 'block';
            });
            unlockTimer.style.display = 'none';
        }
    });

    timeline.addEventListener("input", () => {
        video.currentTime = (timeline.value / 100) * video.duration;
    });

    // Speed control
    speedSelect.addEventListener("change", () => {
        video.playbackRate = parseFloat(speedSelect.value);
    });

    // Fullscreen
    fullscreenBtn.addEventListener("click", () => {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        }
    });

    // Countdown helpers
    function startCountdown() {
        if (!countdownInterval && countdownRemaining > 0) {
            countdownInterval = setInterval(() => {
                if (!video.paused) {
                    countdownRemaining--;
                    updateCountdownDisplay();
                    if (countdownRemaining <= 0) {
                        clearInterval(countdownInterval);
                        signupButtons.forEach((btn) => {
                            btn.style.display = 'block';
                        });
                    }
                }
            }, 1000);
        }
    }

    function stopCountdown() {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }

    function updateCountdownDisplay() {
        const mins = Math.floor(countdownRemaining / 60).toString().padStart(2, "0");
        const secs = Math.floor(countdownRemaining % 60).toString().padStart(2, "0");
        countdownEl.textContent = `${mins}:${secs}`;
    }

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
        const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
        return `${mins}:${secs}`;
    }
}

// Better fullscreen handling for mobile
function toggleFullscreen() {
    const container = document.querySelector('.video-player-container');
    const video = document.getElementById('main-video');
    
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        // Enter fullscreen
        if (container.requestFullscreen) {
            container.requestFullscreen();
        } else if (container.webkitRequestFullscreen) {
            container.webkitRequestFullscreen();
        } else if (video.webkitEnterFullscreen) {
            // iOS specific
            video.webkitEnterFullscreen();
        }
    } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }

}













   
