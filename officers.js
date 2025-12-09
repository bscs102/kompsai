document.addEventListener('DOMContentLoaded', () => {
    // Select all elements that have the 'reveal' class
    const revealElements = document.querySelectorAll('.reveal');

    // Define options for the Intersection Observer
    const observerOptions = {
        root: null, // viewport
        threshold: 0.1, // Trigger when 10% of the item is visible
    };

    // Callback function runs when elements intersect the viewport based on options
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If element is visible, add the 'active' class to start the animation
                entry.target.classList.add('active');
            } else {
                // If element is not visible, remove the 'active' class (optional, but allows re-triggering animation on scroll back)
                entry.target.classList.remove('active');
            }
        });
    };

    // Create the Intersection Observer instance
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Start observing each element
    revealElements.forEach(element => {
        observer.observe(element);
    });
});