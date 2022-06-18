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
  document.querySelector("#email").innerText = shippingAddr[0].email;
  //   setting addr
  document.querySelector("#shipping-addr").innerText =
    shippingAddr[0].addr + " " + shippingAddr[0].addrOptional;
  let cartTotal = 0;
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
  document.querySelector("#total-after-discount").innerText =
    Math.floor(cartTotal);
}

function handlePayment() {
  window.location.replace("./payment.html");
}
