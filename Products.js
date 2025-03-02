const products = {
    "labrador": [
        { name: "Labrador Adult Food", price: "190.00", image: "LA.jpg" },
        { name: "Labrador Puppy Food", price: "150.00", image: "LP.webp" }
    ],
    "german-shepherd": [
        { name: "German Shepherd Adult Food", price: "190.00", image: "GA.webp" },
        { name: "German Shepherd Puppy Food", price: "150.00", image: "GP.jpg" }
    ],
    "poodle": [
        { name: "Poodle Adult Food", price: "190.00", image: "PA.webp" },
        { name: "Poodle Puppy Food", price: "150.00", image: "PP.jpg" }
    ]
};

let cart = [];

const productsContainer = document.querySelector('.products-container');
const breedSelect = document.getElementById('breed-select');
const cartItemsList = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');

function displayProducts(breed) {
    productsContainer.innerHTML = '';

    products[breed].forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="Images/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button class="add-to-cart" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
        `;

        productsContainer.appendChild(productCard);
    });

    // Attach Event Listeners to "Add to Cart" Buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

function updateCart() {
    cartItemsList.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - ₹${item.price} 
            <span class="remove-item" data-index="${index}">&#128465;</span>`;
        cartItemsList.appendChild(li);
        total += parseFloat(item.price);
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;

    document.querySelectorAll('.remove-item').forEach(icon => {
        icon.addEventListener('click', removeFromCart);
    });
}

function addToCart(event) {
    const name = event.target.getAttribute('data-name');
    const price = event.target.getAttribute('data-price');

    cart.push({ name, price });
    updateCart();
}

function removeFromCart(event) {
    const index = event.target.getAttribute('data-index');
    cart.splice(index, 1);
    updateCart();
}

breedSelect.addEventListener('change', (event) => {
    displayProducts(event.target.value);
});

// Display default category on page load
displayProducts("labrador");
