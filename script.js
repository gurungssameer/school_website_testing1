// right side nav bar feature

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const menuClose = document.getElementById('menu-close');
    const navMenu = document.getElementById('nav-menu');

    menuBtn.addEventListener('click', function() {
        navMenu.classList.add('active');
        menuClose.classList.add('show');
    });

    menuClose.addEventListener('click', function() {
        navMenu.classList.remove('active');
        menuClose.classList.remove('show');
    });
});
// auto writing
document.addEventListener('DOMContentLoaded', () => {
    const text = `At Bramha Kunja Shikshya Sadan, we are dedicated to nurturing young minds from Play Group to Class 10. 
     Join us on a journey of learning and growth in a supportive and inspiring environment.`;
    
    const element = document.getElementById('auto-text');
    const typingSpeed = 48; // Speed of typing in milliseconds
    const deletingSpeed = 20; // Speed of deleting in milliseconds
    const pauseDuration = 2000; // Pause duration before starting to delete

    let index = 0;
    let isTyping = true;

    function typeText() {
        if (isTyping) {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(typeText, typingSpeed);
            } else {
                isTyping = false;
                setTimeout(typeText, pauseDuration);
            }
        } else {
            if (index > 0) {
                element.textContent = text.substring(0, index - 1);
                index--;
                setTimeout(typeText, deletingSpeed);
            } else {
                isTyping = true;
                setTimeout(typeText, pauseDuration);
            }
        }
    }

    typeText(); // Start the typing effect
});

// clock timer
// script.js

// Function to format numbers with leading zeroes
function formatNumber(number) {
    return number < 10 ? '0' + number : number;
}

// Function to update the clock display
function updateClock() {
    const options = {
        timeZone: 'Asia/Kathmandu',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    const now = new Intl.DateTimeFormat('en-US', options).format(new Date());

    const [date, time] = now.split(', ');
    const [day, month, year] = date.split('/');
    const [hour, minute, second] = time.split(':');

    // Update the HTML elements with the current date and time
    document.getElementById('date').innerHTML = `${day}-${month}-${year}<br> Date`;
    document.getElementById('time').innerHTML = `${hour}:${minute}:${second}<br> Time`;
}

// Call updateClock immediately to set the initial values
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);

// image sliderr 
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})