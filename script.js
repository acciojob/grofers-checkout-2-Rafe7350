// get all elements with the data attribute "data-ns-test" set to "prices"
const priceElements = document.querySelectorAll('[data-ns-test="prices"]');

let totalPrice = 0;

// iterate over the price elements and add their values to the total price
priceElements.forEach((priceElement) => {
  totalPrice += parseFloat(priceElement.textContent);
});

// get the grand total cell
const grandTotalCell = document.querySelector('[data-ns-test="grandTotal"]');
const grandTotal = parseFloat(grandTotalCell.textContent);

// check if the total price equals the grand total
if (totalPrice === grandTotal) {
  console.log("Total prices match the grand total.");
} else {
  console.log("Total prices do not match the grand total.");
}

