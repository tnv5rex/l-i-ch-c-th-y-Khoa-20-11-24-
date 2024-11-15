// JavaScript cho hiệu ứng scroll mượt mà
document.querySelectorAll('header, section').forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.style.transform = 'scale(1.01)';
    });




    section.addEventListener('mouseleave', () => {
        section.style.transform = 'scale(1)';
    });
});

