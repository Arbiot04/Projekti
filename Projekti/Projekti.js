
function addToCart(productId) {
    
    var productName = "Men Clothes " + productId;
    
    var cartItem = document.createElement("li");
    cartItem.textContent = productName;

    var cartList = document.getElementById("cart-items");
    cartList.appendChild(cartItem);
}
