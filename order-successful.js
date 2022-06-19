document.querySelector("#otp-confirm").addEventListener("click", handleOtp);

function handleOtp() {
  let otp = document.querySelector("#otp").value;
  if (otp == "1234") {
    alert("Opt is Correct");
    console.log("Opt is Correct");
  } else {
    alert("Opt is Wrong! try 1234");
    console.log("Opt is Wrong! try 1234");
    return;
  }
  document.querySelector("#box1").innerText = "";
  // Add a Div of saying order is successfull "Congratulations Order placed successfully page with redirect to homepage"--Abhishek

  // after 3 second back to home page

  // clear the cart
}

// document
//   .querySelector("#shipping-btn")
//   .addEventListener("click", handlePayment);
// get data from local storage
let data = JSON.parse(localStorage.getItem("cart-products")) || [];
let shippingAddr = JSON.parse(localStorage.getItem("shipping-info")) || [];

console.log(shippingAddr);
window.onload = displayData(data, shippingAddr);

function displayData(data, shippingAddr) {
  shippingAddr.forEach((elem) => {
    document.querySelector("#contact-info").innerText = elem.email;
    document.querySelector("#payment-methods").innerText =
      "COD Cash on Delivery";
    document.querySelector("#shipping-addr").innerText =
      elem.addr + " " + elem.addrOptional;
    document.querySelector("#billing-addr").innerText =
      elem.addr + " " + elem.addrOptional;
    document.querySelector("#shipping-method").innerText = elem.DeliveryOption;
  });
  // setting email id
  //   document.querySelector("#email").innerText = shippingAddr.email;
  //   setting addr
  //   document.querySelector("#address").innerText =
  // shippingAddr.addr + " " + shippingAddr.addrOptional;
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
  //   document.querySelector("#cart-total").innerText = Math.floor(cartTotal);

  //   total after discount
  //   document.querySelector("#total-after-discount").innerText =
  //     Math.floor(cartTotal);
}

// function handlePayment() {
//   let elem = document.getElementsByName("DeliveryOption");
//   console.log(elem);
//   let DeliveryOption = "";
//   for (let i = 0; i < elem.length; i++) {
//     if (elem[i].checked) {
//       DeliveryOption = elem[i].value;
//     }
//   }
//   let shippingAddr = JSON.parse(localStorage.getItem("shipping-info")) || [];
//   shippingAddr.DeliveryOption = DeliveryOption;
//   localStorage.setItem("shipping-info", JSON.stringify(shippingAddr));
//   console.log(shippingAddr);
//   window.location.replace("./payment.html");
// }
