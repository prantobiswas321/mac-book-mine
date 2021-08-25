function getExpenses(cost, costId) {
    const serviceCost = document.getElementById(costId);
    serviceCost.innerText = cost;
    const serviceCostNum = parseInt(serviceCost.innerText);
    return serviceCostNum;
}

function currentCost(costId) {
    const inputCost = document.getElementById(costId);
    const inputCostText = inputCost.innerText;
    return inputCostText;
}

function updateTotalPrice() {
    const totalPrice = document.getElementById('total-price');

    const memoryPrice = currentCost('extra-memory-cost');
    const storagePrice = currentCost('extra-storage-cost');
    const deliveryCost = currentCost('delivery-cost');

    const totalCost = 1299 + parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryCost);

    totalPrice.innerText = totalCost;

    // for footer total cost
    document.getElementById('total-cost-footer').innerText = totalCost;
    return totalCost;
}

// for 8GB memory button
document.getElementById('button-ram-8').addEventListener('click', function () {
    const memoryCost = getExpenses(0, 'extra-memory-cost');
    updateTotalPrice();
});
// for 16GB memory button
document.getElementById('button-ram-16').addEventListener('click', function () {
    const memoryCost = getExpenses(180, 'extra-memory-cost');
    updateTotalPrice();
});
// for 256GB storage button
document.getElementById('storage-btn-256').addEventListener('click', function () {
    const storageCost = getExpenses(0, 'extra-storage-cost');
    updateTotalPrice();
});
// for 512GB storage button
document.getElementById('storage-btn-512').addEventListener('click', function () {
    const storageCost = getExpenses(100, 'extra-storage-cost');
    updateTotalPrice();
});
// for 1TB storage button
document.getElementById('storage-btn-1').addEventListener('click', function () {
    const storageCost = getExpenses(180, 'extra-storage-cost');
    updateTotalPrice();
});
// free delivery cost
document.getElementById('free-delivery').addEventListener('click', function () {
    const deliveryCost = getExpenses(0, 'delivery-cost');
    updateTotalPrice();
});
// paid delivery cost
document.getElementById('paid-delivery').addEventListener('click', function () {
    const deliveryCost = getExpenses(20, 'delivery-cost');
    updateTotalPrice();
});
// for promo button
document.getElementById('promo-button').addEventListener('click', function () {
    const inputField = document.getElementById('promo-input');
    const inputFieldText = inputField.value;

    if (inputFieldText.toLowerCase() == 'stevekaku') {
        const totalPrice = updateTotalPrice();
        const discount = (totalPrice * 20) / 100;
        const newTotalPrice = totalPrice - discount;

        document.getElementById('total-cost-footer').innerText = newTotalPrice;
    }
    else if (inputFieldText == '') {
        alert('Input field is empty. Please enter the promo code!!')
    }
    else {
        alert('Invalid promo code!!');
    }
    inputField.value = '';
});