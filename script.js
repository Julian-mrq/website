// Add your animations and interactivity here
document.addEventListener('DOMContentLoaded', () => {
    // Example animation using GSAP
    gsap.from('h1', {duration: 1, y: -50, opacity: 0, ease: 'power3.out'});
    gsap.from('.project-card', {duration: 1, y: 50, opacity: 0, stagger: 0.2, ease: 'power3.out'});

    // Add more animations and interactivity as needed
});