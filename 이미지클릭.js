document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card a');

    cards.forEach(card => {
        card.addEventListener('click', (event) => {
            const href = card.getAttribute('href');
            window.location.href = href;
        });
    });
});
