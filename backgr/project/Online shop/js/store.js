document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.dataset.productId;
        addToCart(productId);
    });
});

function addToCart(productId) {
    fetch('/cart/add.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: productId, quantity: 1 }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Added to cart:', data);
        updateCartDisplay();
    })
    .catch(error => console.error('Error adding to cart:', error));
}

function updateCartDisplay() {
    fetch('/cart.js')
        .then(response => response.json())
        .then(cart => {
            document.querySelector('.cart-count').textContent = cart.item_count;
        });
}
