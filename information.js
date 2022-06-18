document.querySelector("form").addEventListener("submit", shipping);

function shipping(event) {
  event.preventDefault();
  window.location.replace("./shipping.html");
}
