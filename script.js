function showMessage() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    
    // Create popup
    const popup = document.createElement('div');
    popup.className = 'message-popup';
    popup.innerHTML = `
        <h3>Hello! 👋</h3>
        <p>Welcome to your web application! This is a sample interactive element.</p>
        <button class="close-button" onclick="closeMessage()">Close</button>
    `;
    
    // Add to page
    document.body.appendChild(overlay);
    document.body.appendChild(popup);
    
    // Store references for closing
    window.currentOverlay = overlay;
    window.currentPopup = popup;
    
    // Close on overlay click
    overlay.addEventListener('click', closeMessage);
}

function closeMessage() {
    if (window.currentOverlay) {
        document.body.removeChild(window.currentOverlay);
        window.currentOverlay = null;
    }
    if (window.currentPopup) {
        document.body.removeChild(window.currentPopup);
        window.currentPopup = null;
    }
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for any future anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add loading animation
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Add keyboard support for popup
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && window.currentPopup) {
        closeMessage();
    }
});