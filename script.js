//your code here
// get all elements with the data attribute "data-ns-test" set to "prices"
const priceElements = document.querySelectorAll('[data-ns-test="prices"]');

let totalPrice = 0;

// iterate over the price elements and add their values to the total price
priceElements.forEach((priceElement) => {
  totalPrice += parseFloat(priceElement.textContent);
});

// create a new row for the total price
const totalRow = document.createElement('tr');

// create a new cell for the total price
const totalCell = document.createElement('td');

// set the data attribute "data-ns-test" to "grandTotal" for the total cell
totalCell.setAttribute('data-ns-test', 'grandTotal');

// set the text content of the total cell to the total price
totalCell.textContent = totalPrice.toFixed(2);

// append the total cell to the total row
totalRow.appendChild(totalCell);

// append the total row to the table body
document.querySelector('tbody').appendChild(totalRow);
