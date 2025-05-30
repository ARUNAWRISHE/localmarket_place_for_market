function updateTotal() {
    let total = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
        let price = parseFloat(item.getAttribute('data-price'));
        total += price;
    });
    document.getElementById('total-price').textContent = total;
}

function removeItem(event, button) {
    event.stopPropagation();
    button.closest('.cart-item').remove();
    updateTotal();
}

function goToProductPage(url) {
    window.location.href = url;
}

function buyAll() {
    const totalPrice = document.getElementById('total-price').textContent;
    alert("Proceeding to checkout with total amount: rupees " + totalPrice);
    
    // Redirect to buy-list.html after alert
    window.location.href = "buy-detail.html";
}
