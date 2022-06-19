document.querySelector("form").addEventListener("submit", shipping);

let data = JSON.parse(localStorage.getItem("cart-products")) || [];

window.onload = displayData(data);

function displayData(data) {
  // document.querySelector("tbody").innerText = "";
  let cartTotal = 0;
  // console.log(data);
  data.forEach((element) => {
    console.log(element);
    console.log("Still Working!");
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
  document.querySelector("#cart-total2").innerText = Math.floor(cartTotal);
}

// let loginDetails = [];

function shipping(event) {
  event.preventDefault();
  let obj = {
    email: document.querySelector("#email").value,
    country: document.querySelector("#country").value,
    firstName: document.querySelector("#first-name").value,
    lastName: document.querySelector("#last-name").value,
    addr: document.querySelector("#addr").value,
    addrOptional: document.querySelector("#addr-optional").value,
    mbl: document.querySelector("#mbl").value,
  };
  // loginDetails.push(obj);
  localStorage.setItem("shipping-info", JSON.stringify(obj));
  window.location.replace("./shipping.html");
}
