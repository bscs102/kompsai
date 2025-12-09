document.addEventListener('DOMContentLoaded', () => {
    
    const header = document.getElementById('mainHeader');
    if (header) { 
        header.classList.add('load-active'); 
    }

    const revealElements = document.querySelectorAll('.reveal');

    const observerOptions = {
        root: null,
        threshold: 0.1,
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    revealElements.forEach(element => {
        observer.observe(element);
    });
});
