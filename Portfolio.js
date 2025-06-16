// smooth scrolling 
window.scrollTo({
    top: 500, 
    left: 0,  
    behavior: 'smooth', 
});

// theme toggle 
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});


// Contact Form 
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const fullName = document.getElementById('FullName').value.trim();
    const emailAddress = document.getElementById('EmailAddress').value.trim();
    const mobileNumber = document.getElementById('MobileNumber').value.trim();
    const message = document.getElementById('Message').value.trim();
    
    // Confirm details before saving
    const shouldSave = confirm("Send message?");
    
    if (shouldSave) {
        const contact = {
            fullName,
            emailAddress,
            mobileNumber,
            message,
            timestamp: new Date().toISOString()
        };
        
        let messages = JSON.parse(localStorage.getItem('contacts')) || [];
        messages.push(contact);
        localStorage.setItem('contacts', JSON.stringify(messages));
        
        alert("Message sent successfully!");
        form.reset();
    } else {
        alert("Cancelled.");
    }
});


// Scroll Reveal animation 
ScrollReveal().reveal('.reveal', {
distance: '50px',
origin: 'bottom',
duration: 1000,
delay: 200,
easing: 'ease-in-out',
reset: true,
});


// left scroll receal 
ScrollReveal().reveal('.from-left', {
    distance: '50px',
    origin: 'left',
    duration: 2000,
    delay: 200,
    reset: true,
    
});


// right scroll reveal 
ScrollReveal().reveal('.from-right',{
    distance: '50px',   
    origin: 'right',
    duration: 2000,
    delay: 200,
    reset:true,
})


// footer
document.getElementById('year').textContent = new Date().getFullYear();
