document
  .querySelector("#shipping-btn")
  .addEventListener("click", handlePayment);
// get data from local storage
let data = JSON.parse(localStorage.getItem("cart-products")) || [];
let shippingAddr = JSON.parse(localStorage.getItem("shipping-info")) || [];

console.log(shippingAddr);
window.onload = displayData(data, shippingAddr);

function displayData(data) {
  // setting email id
  document.querySelector("#emailId").innerText = shippingAddr.email;
  //   setting addr
  document.querySelector("#address").innerText =
    shippingAddr.addr + " " + shippingAddr.addrOptional;
  let cartTotal = 0;

  document.querySelector("#methodOfShipping").innerText =
    shippingAddr.DeliveryOption;

  // console.log(data);
  data.forEach((element) => {
    // console.log(element);
    // console.log("Still Working!");
    let imageTd = document.createElement("td");
    let image = document.createElement("img");
    image.setAttribute("src", element.image);
    imageTd.append(image);

    let nameTd = document.createElement("td");
    let name = document.createElement("p");
    name.innerText = element.name;
    nameTd.append(name);
    // let btn = document.createElement("button");

    let qty = document.createElement("td");

    // Updated Cart price
    cartTotal += element.discountPrice;

    let total = document.createElement("td");
    total.innerText = element.discountPrice;

    let row = document.createElement("tr");
    row.append(imageTd, nameTd, total);

    //   displayData(row);
    // console.log(row);
    document.querySelector("tbody").append(row);
  });
  // console.log("Working");
  document.querySelector("#cart-total").innerText = Math.floor(cartTotal);

  //   total after discount
  // document.querySelector("#total-after-discount").innerText =
  //   Math.floor(cartTotal);
  document.querySelector("#cart-total2").innerText = Math.floor(cartTotal);
}

function handlePayment() {
  window.location.replace("./order-successful.html");
}
