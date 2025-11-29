const burgerButton = document.getElementById('burger-button');
const burgerIcon = document.getElementById('burger-icon');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

if (burgerButton) {
    burgerButton.addEventListener('click', () => {
        burgerIcon.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden');
    });
}