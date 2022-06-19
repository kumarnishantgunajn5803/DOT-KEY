let Products = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_18_1_180x.png?v=1653385577",
    name: "72 HR Hydrating Probiotic Gel Moisturizer For Face With Hyaluronic & Rice Water| For Healthy,Soft Skin| Combination, Dry Skin| Women & Men",
    discountPrice: 670.05,
    qty: 1,
    id: 1,
    totalPrice: 670.05,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_18_1_180x.png?v=1653385577",
    name: "10% Niacinamide Face Serum With Zinc & Antioxidants| Treats Acne, Dark Spots & Acne Scars| For Oily, Sensitive ,Acne Prone Skin| Women & Men",
    discountPrice: 598.0,
    qty: 1,
    id: 2,
    totalPrice: 598.0,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_18_1_180x.png?v=1653385577",
    name: "CICA Niacinamide Night Gel With Green Tea, Tea Tree Oil & Hyaluronic| Reduces Acne & Dark Spots | Oily, Acne Prone & Sensitive Skin| Women & Men",
    discountPrice: 565.01,
    qty: 1,
    id: 3,
    totalPrice: 565.01,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_18_1_180x.png?v=1653385577",
    name: "10% AHA + 2% BHA EXFOLIATING GLOW HYDRO PEEL",
    discountPrice: 565.0,
    qty: 1,
    id: 4,
    totalPrice: 565.01,
  },
];
//  setting dummy localstore value
localStorage.setItem("cart-products", JSON.stringify(Products));

// getting localStorage value by key
let prod = JSON.parse(localStorage.getItem("cart-products")) || [];

// Initial product table
window.onload = displayData(prod);

// checkout button
document
  .querySelector("#continue-checkout")
  .addEventListener("click", function () {
    handleInformation();
  });

// displayData(prod);

// iterating pro and appending to table
function displayData(prod) {
  document.querySelector("tbody").innerText = "";
  let cartTotal = 0;
  prod.forEach((element) => {
    let imageTd = document.createElement("td");
    let image = document.createElement("img");
    image.setAttribute("src", element.image);
    imageTd.append(image);

    let nameTd = document.createElement("td");
    let name = document.createElement("p");
    name.innerText = element.name;
    let btn = document.createElement("button");

    // Remove button
    btn.innerText = "Remove";
    btn.setAttribute("id", "remove-btn");
    // btn.style.color='white';
    btn.addEventListener("click", function () {
      event.target.parentNode.parentNode.remove();
      handleProdRemove(element);
    });
    nameTd.append(name, btn);

    let qty = document.createElement("td");
    let qtyNum = document.createElement("input");
    qtyNum.setAttribute("id", "change-qty");
    qtyNum.setAttribute("type", "number");
    // Setting default value of input
    qtyNum.setAttribute("value", element.qty);
    qtyNum.setAttribute("min", "1");
    qtyNum.addEventListener("change", function () {
      handleQtyChange(event, element);
    });
    qty.append(qtyNum);

    // Updated Cart price
    cartTotal += element.discountPrice;

    let total = document.createElement("td");
    total.innerText = element.discountPrice;

    let row = document.createElement("tr");
    row.append(imageTd, nameTd, qty, total);

    //   displayData(row);
    // console.log(row);
    document.querySelector("tbody").append(row);
  });

  document.querySelector("#cart-total").innerText = Math.floor(cartTotal);
}

// function displayData(row) {
// //   document.getElementsByTagName("tbody").innerText = "Hello";
// }
function handleQtyChange(e, elem) {
  // console.log(e.target.value);
  let updatedPrice = elem.totalPrice * e.target.value;
  // console.log(updatedPrice);

  // update localStorag
  // elem.discountPrice = updatedPrice;
  // console.log(elem)
  let localCartData = JSON.parse(localStorage.getItem("cart-products"));
  // console.log(Array.isArray(localCartData));
  localCartData.map((el) => {
    if (el.id == elem.id) {
      el.discountPrice = Math.floor(updatedPrice);
      el.qty = e.target.value;
      return el;
    }
    return el;
  });
  // console.log(localCartData[3].qty, localCartData[3].discountPrice);
  localStorage.setItem("cart-products", JSON.stringify(localCartData));
  let data = JSON.parse(localStorage.getItem("cart-products"));
  displayData(data);
}

function handleProdRemove(element) {
  // remove product from existing arr
  let remove = JSON.parse(localStorage.getItem("cart-products"));
  // console.log(element);
  // console.log(data);
  let arr = remove.filter((elem) => elem.id != element.id);
  console.log(arr);
  localStorage.setItem("cart-products", JSON.stringify(arr));
  let data = JSON.parse(localStorage.getItem("cart-products"));
  displayData(data);
}

function handleInformation() {
  event.preventDefault();
  window.location.replace("./information.html");
}

// function updateTotalCartVal(prod) {

// }
