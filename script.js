// Typing Animation
const typingText = "Predictive Systems | Data Analytics | Infrastructure Intelligence";
let i = 0;
const typingElement = document.querySelector(".typing");

function typeWriter() {
    if (i < typingText.length) {
        typingElement.innerHTML += typingText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}
typeWriter();

// Smooth scroll for navbar links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Smooth scroll for "View My Work" button
document.getElementById('work-btn').addEventListener('click', () => {
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
});

// Dark / Light Mode Toggle
const toggleBtn = document.getElementById('mode-toggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    toggleBtn.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
});
document.getElementById('download-cv').addEventListener('click', () => {
    const password = prompt("Enter the password to download my CV:");
    if (password === "MySecret123") {  // <-- set your password here
        window.location.href = "CharlesMuli_CV.pdf"; // CV file path
    } else {
        alert("Incorrect password! You cannot download the CV.");
    }
});