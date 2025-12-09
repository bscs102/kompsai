// --- JavaScript script.js ---

// Wait for the entire HTML document to load before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Header Load Animation
    const header = document.getElementById('mainHeader');
    if (header) { 
        // Add 'load-active' class to make the header slide in 
        header.classList.add('load-active'); 
    }

    // 2. Scroll-Reveal Animation Setup
    const revealElements = document.querySelectorAll('.reveal');

    // Options for the IntersectionObserver
    const observerOptions = {
        root: null, // Viewport is the root
        threshold: 0.1, // Trigger when 10% of the element is visible
    };

    // Callback function for when elements intersect the viewport
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'active' class to trigger the reveal animation
                entry.target.classList.add('active');
            } else {
                // Optional: Remove 'active' class to re-hide the element when it scrolls away
                entry.target.classList.remove('active');
            }
        });
    };

    // Create the observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Tell the observer which elements to watch
    revealElements.forEach(element => {
        observer.observe(element);
    });
});