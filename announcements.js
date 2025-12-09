document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('mainHeader');
    header.classList.add('load-active'); 

    const loopingElements = document.querySelectorAll('.announcement-card');

    const loopingObserverCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    };

    const loopingObserver = new IntersectionObserver(loopingObserverCallback, {
        root: null,
        threshold: 0.2,
    });
    
    loopingElements.forEach(element => {
        loopingObserver.observe(element);
    });


    const onceElements = document.querySelectorAll('.reveal-once');

    const onceObserverCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    };

    const onceObserver = new IntersectionObserver(onceObserverCallback, {
        root: null,
        threshold: 0.5,
    });

    onceElements.forEach(element => {
        onceObserver.observe(element);
    });
});
