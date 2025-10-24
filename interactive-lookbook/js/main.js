document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const cursor = document.querySelector('.cursor');
    const pages = document.querySelectorAll('.page');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const graphicElements = document.querySelectorAll('.graphic-element');

    // Custom cursor
    document.addEventListener('mousemove', e => {
        gsap.to(cursor, { duration: 0.3, x: e.clientX, y: e.clientY, ease: 'power2.out' });
    });

    // Scroll-based page animations
    pages.forEach(page => {
        gsap.to(page, {
            scrollTrigger: {
                trigger: page,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleClass: 'is-active',
                scrub: 1,
            },
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out'
        });
    });

    // Gallery hover effects
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(cursor, { scale: 2, backgroundColor: 'var(--dusty-rose)', duration: 0.3 });
        });
        item.addEventListener('mouseleave', () => {
            gsap.to(cursor, { scale: 1, backgroundColor: 'transparent', duration: 0.3 });
        });
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.btn-submit');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(cursor, { scale: 2.5, backgroundColor: 'var(--dusty-rose)', duration: 0.3 });
        });
        button.addEventListener('mouseleave', () => {
            gsap.to(cursor, { scale: 1, backgroundColor: 'transparent', duration: 0.3 });
        });
    });

    // Parallax for graphic elements
    graphicElements.forEach(el => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1.5
            },
            y: () => Math.random() * -200 - 100,
            x: () => Math.random() * 100 - 50,
            rotation: () => Math.random() * 360 - 180,
            ease: 'none'
        });
    });
});