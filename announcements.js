document.addEventListener('DOMContentLoaded', () => {
    // 1. Header Load Animation
    const header = document.getElementById('mainHeader');
    // Activates the CSS transition for the header on page load
    header.classList.add('load-active'); 

    // 2. Intersection Observer for Looping Animations (announcement cards)
    const loopingElements = document.querySelectorAll('.announcement-card');

    const loopingObserverCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'active' class when the element comes into view
                entry.target.classList.add('active');
            } else {
                // Remove 'active' class when the element leaves view
                entry.target.classList.remove('active');
            }
        });
    };

    const loopingObserver = new IntersectionObserver(loopingObserverCallback, {
        root: null, // Use the viewport as the container
        threshold: 0.2, // Trigger when 20% of the item is visible
    });
    
    loopingElements.forEach(element => {
        loopingObserver.observe(element);
    });


    // 3. Intersection Observer for Once-Only Animations (H2 and Subtitle)
    const onceElements = document.querySelectorAll('.reveal-once');

    const onceObserverCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'active' class when the element comes into view
                entry.target.classList.add('active');
                // Stop observing after the first activation
                observer.unobserve(entry.target); 
            }
        });
    };

    const onceObserver = new IntersectionObserver(onceObserverCallback, {
        root: null,
        threshold: 0.5, // Trigger when 50% of the item is visible
    });

    onceElements.forEach(element => {
        onceObserver.observe(element);
    });
});