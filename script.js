const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const addProductButton = document.getElementById("add-product");
const cart = document.getElementById("cart");
const totalPriceSpan = document.getElementById("total-price");

let totalPrice = 0;

// Function to update the total price
function updateTotalPrice(amount) {
	totalPrice += amount;
	totalPriceSpan.textContent = totalPrice.toFixed(2);
}

//add product to cart
// Dynamically add a new product
addProductButton.addEventListener("click", () => {
	const nameOfProduct = productNameInput.value;
	updateTotalPrice(Number(productPriceInput.value));

	//console.log(productNameInput.value);
	const newProduct = document.createElement("li");
	// //newProduct.dataset.id = '3';

	newProduct.innerHTML = `${nameOfProduct} $${productPriceInput.value}  <button class="Removed">Remove</button>`;
	//adding the new product to the cart ID UL
	cart.appendChild(newProduct);
});

//to remove an item when tapping on "remove" button
cart.addEventListener("click", removeItem);

// Function to remove an item
function removeItem(event) {
	const item = event.target.closest("li");
	const price = parseFloat(item.dataset.price);
	updateTotalPrice(-price);
	item.remove();
}
