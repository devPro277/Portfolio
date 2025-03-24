function saveOrder() {
    const username = document.getElementById('username').value;
    const address = document.getElementById('address').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const dough = document.getElementById('dough').value;
    const size = document.getElementById('size').value;

  const toppings = [];
  const toppingCheckboxes = document.querySelectorAll('.topping-checkboxes input:checked');
    toppingCheckboxes.forEach(checkbox => {
        toppings.push(checkbox.value);
    });

  const totalPrice = calculateTotalPrice(dough, size, toppings);
    const orderSummary = `
       <h2>Order Summary</h2>
       <p><strong>Username:</strong> ${username}</p>
       <p><strong>Address:</strong> ${address}</p>
       <p><strong>Phone Number:</strong> ${phoneNumber}</p>
       <p><strong>Dough:</strong> ${dough}</p>
       <p><strong>Size:</strong> ${size} cm</p>
       <p><strong>Toppings:</strong> ${toppings.join(', ')}</p>
       <p><strong>Total Price:</strong> $${totalPrice}</p>
    `;

    document.getElementById('orderSummary').innerHTML = orderSummary;
}

function calculateTotalPrice(dough, size, toppings) {
  let basePrice = 0;
    switch (dough) {
        case 'Thin':
           basePrice += 25;
           break;
        case 'Medium':
           basePrice += 30;
           break;
        case 'Thick':
           basePrice += 40;
           break;
        default:
            break;
    }
    basePrice += size / 10;
    const toppingsPrice = toppings.length * 2;
    return basePrice + toppingsPrice;
}
