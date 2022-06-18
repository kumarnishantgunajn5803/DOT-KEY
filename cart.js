let Products = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_18_1_180x.png?v=1653385577",
    name: "72 HR Hydrating Probiotic Gel Moisturizer For Face With Hyaluronic & Rice Water| For Healthy,Soft Skin| Combination, Dry Skin| Women & Men",
    originalPrice: "Rs: 745.00",
    discountPrice: 670.05,
    discount: "Save 10%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_18_1_180x.png?v=1653385577",
    name: "10% Niacinamide Face Serum With Zinc & Antioxidants| Treats Acne, Dark Spots & Acne Scars| For Oily, Sensitive ,Acne Prone Skin| Women & Men",
    originalPrice: "Rs: 665.00",
    discountPrice: 598.0,
    discount: "Save 10%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_18_1_180x.png?v=1653385577",
    name: "CICA Niacinamide Night Gel With Green Tea, Tea Tree Oil & Hyaluronic| Reduces Acne & Dark Spots | Oily, Acne Prone & Sensitive Skin| Women & Men",
    originalPrice: "Rs: 595.00",
    discountPrice: 565.01,
    discount: "Save 5%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_18_1_180x.png?v=1653385577",
    name: "10% AHA + 2% BHA EXFOLIATING GLOW HYDRO PEEL",
    originalPrice: "Rs: 595.00",
    discountPrice: 565.0,
    discount: "Save 5%",
  },
];
//  setting dummy localstore value
localStorage.setItem("cart-products", JSON.stringify(Products));

// getting localStorage value by key
let prod = JSON.parse(localStorage.getItem("cart-products")) || [];

// iterating pro and appending to table
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
    handleProdRemove(event, element);
  });
  nameTd.append(name, btn);

  let qty = document.createElement("td");
  let qtyNum = document.createElement("input");
  qtyNum.setAttribute("id", "change-qty");
  qtyNum.setAttribute("type", "number");
  qtyNum.setAttribute("value", "1");
  qtyNum.setAttribute("min", "1");
  qtyNum.addEventListener("change", function () {
    handleQtyChange(event, element);
  });
  qty.append(qtyNum);

  let total = document.createElement("td");
  total.innerText = element.discountPrice;

  let row = document.createElement("tr");
  row.append(imageTd, nameTd, qty, total);

  //   displayData(row);
  console.log(row);
  document.querySelector("tbody").append(row);
});

// function displayData(row) {
// //   document.getElementsByTagName("tbody").innerText = "Hello";
// }
function handleQtyChange(e, elem) {
  console.log(e.target.value);
  let updatedPrice = elem.discountPrice * e.target.value;
  console.log(updatedPrice);

  // update localStorag
  elem.discountPrice = updatedPrice;
  // console.log(elem)
  let localCartData = JSON.parse(localStorage.getItem("cart-products"));
  console.log(Array.isArray(localCartData));
  localCartData.map((el) => {
    if (el != elem) {
      return el;
    }
    //    else{
    //        el.
    //    }
  });
  // localStorage.set
}

function handleProdRemove(e, element) {
  // remove product from existing arr
  let arr = prod.filter((elem) => elem != element);
  localStorage.setItem("cart-products", JSON.stringify(arr));
  console.log(JSON.parse(localStorage.getItem("cart-products")).length);
}

function handleInformation() {
  event.preventDefault();
  window.location.replace("./information.html");
}

// checkout button
document
  .querySelector("#continue-checkout")
  .addEventListener("click", function () {
    handleInformation();
  });
