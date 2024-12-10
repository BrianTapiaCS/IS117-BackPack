// Add to Cart Button Logic
document.querySelectorAll('.product-button').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-name');
        alert(`${productName} has been added to your cart!`);
    });
});

// Smooth Scrolling for Navbar Links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    });
});
// Add to Cart Button Logic
document.querySelectorAll('.product-button').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-name');
        alert(`🎒 "${productName}" has been added to your cart!`);
    });
});

// Smooth Scrolling for Navbar Links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});


