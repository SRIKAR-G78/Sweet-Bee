// Navigation highlighting
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        // Real navigation: scroll to section if exists, else set hash
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            const sectionId = href.slice(1);
            const section = document.getElementById(sectionId);
            if (section) {
                e.preventDefault();
                section.scrollIntoView({ behavior: 'smooth' });
            } else {
                // fallback: set hash
                window.location.hash = href;
            }
        }
    });
});

// Cart functionality (show modal only, no alert)
document.getElementById('cart-icon').addEventListener('click', function(e) {
    e.preventDefault();
    cartModal.style.display = 'flex';
});

// Profile section (show modal only, no alert)
document.getElementById('account-icon').addEventListener('click', function(e) {
    e.preventDefault();
    profileModal.style.display = 'flex';
});

// Modal logic for cart and profile
const cartModal = document.getElementById('cart-modal');
const profileModal = document.getElementById('profile-modal');
const closeCart = document.getElementById('close-cart');
const closeProfile = document.getElementById('close-profile');

// Show cart modal
if (document.getElementById('cart-icon')) {
    document.getElementById('cart-icon').addEventListener('click', function(e) {
        e.preventDefault();
        cartModal.style.display = 'flex';
    });
}
// Show profile modal
if (document.getElementById('account-icon')) {
    document.getElementById('account-icon').addEventListener('click', function(e) {
        e.preventDefault();
        profileModal.style.display = 'flex';
    });
}
// Close modals
closeCart.addEventListener('click', function() {
    cartModal.style.display = 'none';
});
closeProfile.addEventListener('click', function() {
    profileModal.style.display = 'none';
});
// Hide modal when clicking outside content
window.addEventListener('click', function(event) {
    if (event.target === cartModal) cartModal.style.display = 'none';
    if (event.target === profileModal) profileModal.style.display = 'none';
});

// Demo actions for checkout and logout
const checkoutBtn = document.getElementById('checkout-btn');
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function() {
        // Removed alert for checkout
    });
}
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
        // Removed alert for logout
    });
} 