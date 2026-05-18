// Typewriter effect
const textToType = "Exploring the network world... Injecting venom into vulnerabilities...";
const typewriterElement = document.getElementById('typewriter-text');
let i = 0;

function typeWriter() {
    if (i < textToType.length) {
        typewriterElement.innerHTML += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Matrix background effect
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%""\'#&_(),.;:?!\\|{}<>[]^~';
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0'; // Green text
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// Scroll reveal effect
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Initialize
window.onload = () => {
    // Start typewriter after a small delay
    setTimeout(typeWriter, 1000);
    
    // Start matrix background
    setInterval(drawMatrix, 33);
    
    // Add reveal class to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => sec.classList.add('reveal'));
    
    // Check reveal on load
    reveal();
};

// Handle resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Handle scroll
window.addEventListener("scroll", reveal);
