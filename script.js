/*------------------- 
       Function 
-------------------*/

function NoExtraCost(number) {
    const cost = document.getElementById(number);
    cost.innerText = 0;
    const value = cost.innerText
    return value;
}
function Cost180(number) {
    const cost = document.getElementById(number);
    cost.innerText = 180;
    const value = cost.innerText
    return value;
}
// Price Update
function updatePrice() {
    const memoryCostText = document.getElementById('memory-cost');
    const memoryCostAmount = parseInt(memoryCostText.innerText);
    const storageCostText = document.getElementById('storage-cost');
    const storageCostAmount = parseInt(storageCostText.innerText);
    const deliveryCostText = document.getElementById('delivery-cost');
    const deliveryCostAmount = parseInt(deliveryCostText.innerText);
    const total = 1299 + memoryCostAmount + storageCostAmount + deliveryCostAmount;
    return total;
}
// total Price
function total() {
    const TotalCostText = document.getElementById('sub-total');
    const total = updatePrice();
    TotalCostText.innerText = total;
    const value = TotalCostText.innerText;
    return value;
}
// grand Total Price
function GrandTotal() {
    const TotalCostText = document.getElementById('total');
    const total = updatePrice();
    TotalCostText.innerText = total;
    const value = TotalCostText.innerText;
    return value;
}

/*---------------------------- 
       addEventListener 
---------------------------*/
// Memory
document.getElementById('momory').addEventListener('click', function () {
    const value = NoExtraCost('memory-cost');
    total();
    GrandTotal()
});
document.getElementById('add-memory').addEventListener('click', function () {
    const value = Cost180('memory-cost');
    total();
    GrandTotal()

});
// Storage
document.getElementById('storage').addEventListener('click', function () {
    const value = NoExtraCost('storage-cost');
    total();
    GrandTotal()
});
document.getElementById('add-512').addEventListener('click', function () {
    const value = document.getElementById('storage-cost');
    value.innerText = 100;
    total();
    GrandTotal()
});
document.getElementById('add-1T').addEventListener('click', function () {
    const value = Cost180('storage-cost');
    total();
    GrandTotal()
});
// Delivery
document.getElementById('delivary').addEventListener('click', function () {
    const value = NoExtraCost('delivery-cost');
    total();
    GrandTotal()
});
document.getElementById('quick-delivery').addEventListener('click', function () {
    const value = document.getElementById('delivery-cost');
    value.innerText = 20;
    total();
    GrandTotal();
});
// Discount
document.getElementById('discount').addEventListener('click', function () {
    const input = document.getElementById('input');
    const inputValue = input.value;
    console.log(inputValue);
    if (inputValue == 'stevekaku') {
        const number = document.getElementById('total');
        const value = GrandTotal();
        const discount = parseFloat(value);
        const price = discount * 0.2;
        number.innerText = discount - price;
        var x = document.getElementById("warning");
        x.innerText = '';
    }
    else {

        var x = document.getElementById("warning");
        x.innerText = 'Invalid Promo Code';
    }
    input.value = '';
});

