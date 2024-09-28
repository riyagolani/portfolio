document.addEventListener('DOMContentLoaded', (event) => {
    const handwrittenElements = document.querySelectorAll('.handwritten');
    const downArrow = document.querySelector('.down-arrow');
    const aboutSection = document.getElementById('about');
    
    // Typewriter effect
    handwrittenElements.forEach((element, index) => {
        const text = element.textContent;
        element.textContent = '';
        
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                element.textContent += text[i];
            }, 100 * i + (index * 1000));
        }
    });

    // Down arrow click event
    downArrow.addEventListener('click', () => {
        aboutSection.classList.toggle('hidden');
        downArrow.style.transform = aboutSection.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
    });
});