// id3
document.querySelector("#img_id3").addEventListener("click", redirect_no1_id3);

// Tricky one
function redirect_no1_id3() {
    location.href = "../products-page/bodycare.html";
    location.href = "../products-page/haircare.html";
}
/* ----------------------------------------------------------------------------------------- */

// id4
// For first card
document.querySelector("#one_id4").addEventListener("click", redirect_no1_id4);

function redirect_no1_id4() {
    location.href = "../products-page/bodycare.html";
}
// For second card
document.querySelector("#two_id4").addEventListener("click", redirect_no2_id4);

function redirect_no2_id4() {
    location.href = "../products-page/haircare.html";
}
// For third card
document.querySelector("#three_id4").addEventListener("click", redirect_no3_id4);

function redirect_no3_id4() {
    location.href = "../products-page/bodycare.html";
}
// For fourth card
document.querySelector("#four_id4").addEventListener("click", redirect_no4_id4);

function redirect_no4_id4() {
    location.href = "../products-page/haircare.html";
}
// For fifth card
document.querySelector("#five_id4").addEventListener("click", redirect_no5_id4);

function redirect_no5_id4() {
    location.href = "../products-page/bodycare.html";
}
/* ----------------------------------------------------------------------------------------- */
// id 5 and 6

// #crouser
let imgArr_id5 = [
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/BBB-Live-Now-Banner-Desktop.gif?v=1655305012",
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/CICA_SPF_Home_Screen_Desktop_Banner.png?v=1655304812",
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/serum_esk.png?v=1655304812",
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/ctm_desk_3c37d209-83ed-42ad-a642-315bf880b0e5.png?v=1655304812",
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2-Vit-C_5.jpg?v=1651751278"
]

let url_arr_id5 = [
    "https://www.dotandkey.com/", "https://www.google.com/", "https://www.w3schools.com/", "https://www.dotandkey.com/", "https://developer.mozilla.org/en-US/"
]

let round_btn1 = document.querySelector("#round1_id5");
let round_btn2 = document.querySelector("#round2_id5");
let round_btn3 = document.querySelector("#round3_id5");
let round_btn4 = document.querySelector("#round4_id5");
let round_btn5 = document.querySelector("#round5_id5");

let img_id5 = document.querySelector("#crouser_img_id5");
let imgNum = 0;

if (imgNum == 0) {
    round_btn1.style.backgroundColor = "grey";
    round_btn2.style.backgroundColor = "white";
    round_btn3.style.backgroundColor = "white";
    round_btn4.style.backgroundColor = "white";
    round_btn5.style.backgroundColor = "white";
}

let btn1_id5 = document.querySelector("#btn1_id5");
btn1_id5.addEventListener("click", function () {

    if (imgNum == 1) {
        console.log("move to upto 50% off green");
        round_btn1.style.backgroundColor = "grey";
        round_btn2.style.backgroundColor = "white";
        round_btn3.style.backgroundColor = "white";
        round_btn4.style.backgroundColor = "white";
        round_btn5.style.backgroundColor = "white";
    }
    if (imgNum == 2) {
        console.log("move to 1 step skincare routine");
        round_btn1.style.backgroundColor = "white";
        round_btn2.style.backgroundColor = "grey";
        round_btn3.style.backgroundColor = "white";
        round_btn4.style.backgroundColor = "white";
        round_btn5.style.backgroundColor = "white";
    }
    if (imgNum == 3) {
        console.log("92% user saw");
        round_btn1.style.backgroundColor = "white";
        round_btn2.style.backgroundColor = "white";
        round_btn3.style.backgroundColor = "grey";
        round_btn4.style.backgroundColor = "white";
        round_btn5.style.backgroundColor = "white";
    }
    if (imgNum == 4) {
        console.log("breakup with acne");
        round_btn1.style.backgroundColor = "white";
        round_btn2.style.backgroundColor = "white";
        round_btn3.style.backgroundColor = "white";
        round_btn4.style.backgroundColor = "grey";
        round_btn5.style.backgroundColor = "white";
    }
    if (imgNum == 0) {
        console.log("breakup with acne");
        round_btn1.style.backgroundColor = "white";
        round_btn2.style.backgroundColor = "white";
        round_btn3.style.backgroundColor = "white";
        round_btn4.style.backgroundColor = "white";
        round_btn5.style.backgroundColor = "grey";
    }

    if (imgNum == 0) {
        imgNum = imgArr_id5.length - 1;
    }
    else {
        imgNum--;
    }
    img_id5.src = imgArr_id5[imgNum];
    img_id5.dataset.url = url_arr_id5[imgNum];
})

let btn2_id5 = document.querySelector("#btn2_id5");
btn2_id5.addEventListener("click", move_forward);


function move_forward() {
    if (imgNum == 0) {
        console.log("move to upto 50% off green");
        round_btn1.style.backgroundColor = "white";
        round_btn2.style.backgroundColor = "grey";
        round_btn3.style.backgroundColor = "white";
        round_btn4.style.backgroundColor = "white";
        round_btn5.style.backgroundColor = "white";
    }
    if (imgNum == 1) {
        console.log("move to 1 step skincare routine");
        round_btn1.style.backgroundColor = "white";
        round_btn2.style.backgroundColor = "white";
        round_btn3.style.backgroundColor = "grey";
        round_btn4.style.backgroundColor = "white";
        round_btn5.style.backgroundColor = "white";
    }
    if (imgNum == 2) {
        console.log("92% user saw");
        round_btn1.style.backgroundColor = "white";
        round_btn2.style.backgroundColor = "white";
        round_btn3.style.backgroundColor = "white";
        round_btn4.style.backgroundColor = "grey";
        round_btn5.style.backgroundColor = "white";
    }
    if (imgNum == 3) {
        console.log("breakup with acne");
        round_btn1.style.backgroundColor = "white";
        round_btn2.style.backgroundColor = "white";
        round_btn3.style.backgroundColor = "white";
        round_btn4.style.backgroundColor = "white";
        round_btn5.style.backgroundColor = "grey";
    }
    if (imgNum == 4) {
        console.log("breakup with acne");
        round_btn1.style.backgroundColor = "grey";
        round_btn2.style.backgroundColor = "white";
        round_btn3.style.backgroundColor = "white";
        round_btn4.style.backgroundColor = "white";
        round_btn5.style.backgroundColor = "white";
    }
    if (imgNum == imgArr_id5.length - 1) {
        imgNum = 0;
    } else {
        imgNum++;
    }
    img_id5.src = imgArr_id5[imgNum];
    img_id5.dataset.url = url_arr_id5[imgNum];
}
// round button

round_btn1.addEventListener("click", function () {
    imgNum = 0;
    img_id5.src = imgArr_id5[0];
    img_id5.dataset.url = url_arr_id5[imgNum];
    round_btn1.style.backgroundColor = "grey";
    round_btn2.style.backgroundColor = "white";
    round_btn3.style.backgroundColor = "white";
    round_btn4.style.backgroundColor = "white";
    round_btn5.style.backgroundColor = "white";
});


round_btn2.addEventListener("click", function () {
    imgNum = 1;
    img_id5.src = imgArr[imgNum];
    img_id5.dataset.url = url_arr_id5[imgNum];
    round_btn1.style.backgroundColor = "white";
    round_btn2.style.backgroundColor = "grey";
    round_btn3.style.backgroundColor = "white";
    round_btn4.style.backgroundColor = "white";
    round_btn5.style.backgroundColor = "white";
});


round_btn3.addEventListener("click", function () {
    imgNum = 2;
    img_id5.src = imgArr_id5[imgNum];
    img_id5.dataset.url = url_arr_id5[imgNum];
    round_btn1.style.backgroundColor = "white";
    round_btn2.style.backgroundColor = "white";
    round_btn3.style.backgroundColor = "grey";
    round_btn4.style.backgroundColor = "white";
    round_btn5.style.backgroundColor = "white";
});

round_btn4.addEventListener("click", function () {
    imgNum = 3;
    img_id5.src = imgArr_id5[imgNum];
    img_id5.dataset.url = url_arr_id5[imgNum];
    round_btn1.style.backgroundColor = "white";
    round_btn2.style.backgroundColor = "white";
    round_btn3.style.backgroundColor = "white";
    round_btn4.style.backgroundColor = "grey";
    round_btn5.style.backgroundColor = "white";
});

round_btn5.addEventListener("click", function () {
    imgNum = 4;
    img_id5.src = imgArr_id5[imgNum];
    img_id5.dataset.url = url_arr_id5[imgNum];
    round_btn1.style.backgroundColor = "white";
    round_btn2.style.backgroundColor = "white";
    round_btn3.style.backgroundColor = "white";
    round_btn4.style.backgroundColor = "white";
    round_btn5.style.backgroundColor = "grey";
});

// id5 imgae redirecting to page
document.querySelector("#crouser_img_id5").addEventListener("click", redirect_no1_id5);

function redirect_no1_id5() {
    let dir_img = document.querySelector("#crouser_img_id5");
    location.href = dir_img.dataset.url;
}

let img_Arr_id6 = ["https://cdn.shopify.com/s/files/1/0361/8553/8692/files/BBB_Up_sale_Sale_Desktop_BannerArtboard_2_1.jpg?v=1655305233",
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/BBB_Up_sale_Sale_Desktop_BannerArtboard_1_1.jpg?v=1655305234",
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/BBB_Up_sale_Sale_Desktop_BannerArtboard_3.jpg?v=1655305234"
]

let url_arr_id6 = [
    "https://www.dotandkey.com/", "https://www.google.com/", "https://www.w3schools.com/"
]


let round_btn1_id6 = document.querySelector("#round1_id6");
let round_btn2_id6 = document.querySelector("#round2_id6");
let round_btn3_id6 = document.querySelector("#round3_id6");

let imgNum_id6 = 0;

if (imgNum_id6 == 0) {
    let img_cr6 = document.querySelector("#cr_img6");
    img_cr6.src = img_Arr_id6[imgNum_id6];
    img_cr6.dataset.url = url_arr_id6[imgNum_id6];
    round_btn1_id6.style.backgroundColor = "grey";
    round_btn2_id6.style.backgroundColor = "white";
    round_btn3_id6.style.backgroundColor = "white";
}


round_btn1_id6.addEventListener("click", function () {
    imgNum_id6 = 0;
    let img_cr6 = document.querySelector("#cr_img6");
    img_cr6.src = img_Arr_id6[imgNum_id6];
    img_cr6.dataset.url = url_arr_id6[imgNum_id6];
    round_btn1_id6.style.backgroundColor = "grey";
    round_btn2_id6.style.backgroundColor = "white";
    round_btn3_id6.style.backgroundColor = "white";
});

round_btn2_id6.addEventListener("click", function () {
    imgNum_id6 = 1;
    let img_cr6 = document.querySelector("#cr_img6");
    img_cr6.src = img_Arr_id6[imgNum_id6];
    img_cr6.dataset.url = url_arr_id6[imgNum_id6];
    round_btn1_id6.style.backgroundColor = "white";
    round_btn2_id6.style.backgroundColor = "grey";
    round_btn3_id6.style.backgroundColor = "white";
});

round_btn3_id6.addEventListener("click", function () {
    imgNum_id6 = 2;
    let img_cr6 = document.querySelector("#cr_img6");
    img_cr6.src = img_Arr_id6[imgNum_id6];
    img_cr6.dataset.url = url_arr_id6[imgNum_id6];
    round_btn1_id6.style.backgroundColor = "white";
    round_btn2_id6.style.backgroundColor = "white";
    round_btn3_id6.style.backgroundColor = "grey";
});

// id6 imgae redirecting to page
document.querySelector("#cr_img6").addEventListener("click", redirect_no1_id6);

function redirect_no1_id6() {
    let dir_img_id6 = document.querySelector("#cr_img6");
    location.href = dir_img_id6.dataset.url;
}

setInterval(move_forward, 1600);

/* ----------------------------------------------------------------------------------------- */
// id 7

var products = [
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/prbox.jpg?v=1655304058",
        name: "72 HR Hydrating Probiotic Gel Moisturizer For Face With Hyaluronic & Rice Water| For Healthy,Soft Skin| Combination, Dry Skin| Women & Men",
        totalPrice: "Rs: 745.00",
        discountPrice: "Rs: 670.05",
        discount: "Save 10%",
        qty: 1,
        id: 0
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/20_VITC.jpg?v=1655379925",
        name: "10% Niacinamide Face Serum With Zinc & Antioxidants| Treats Acne, Dark Spots & Acne Scars| For Oily, Sensitive ,Acne Prone Skin| Women & Men",
        totalPrice: "Rs: 665.00",
        discountPrice: "Rs: 598.00",
        discount: "Save 10%",
        qty: 1,
        id: 1
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/ACNEBUSTING.jpg?v=1655370921",
        name: "CICA Niacinamide Night Gel With Green Tea, Tea Tree Oil & Hyaluronic| Reduces Acne & Dark Spots | Oily, Acne Prone & Sensitive Skin| Women & Men",
        totalPrice: "Rs: 595.00",
        discountPrice: "Rs: 565.01",
        discount: "Save 5%",
        qty: 1,
        id: 2
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/image-2.png?v=1635158596",
        name: "10% AHA + 2% BHA EXFOLIATING GLOW HYDRO PEEL",
        totalPrice: "Rs: 595.00",
        discountPrice: "Rs: 565.00",
        discount: "Save 5%",
        qty: 1,
        id: 3
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Untitled-1_2.png?v=1634903414",
        name: "Salicylic & French Green Clay Face Mask With Match Tea| Reduces Acne, Dark Spots & Blemishes| Oily & Acne Prone Skin| Women & Men",
        totalPrice: "Rs: 695.00",
        discountPrice: "Rs: 660.04",
        discount: "Save 5%",
        qty: 1,
        id: 4
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/5_ahaexfoliatingserum_360x.jpg?v=1611030475",
        name: "HYALURONIC + CERAMIDE HYDRATING FACE SERUM",
        totalPrice: "Rs: 665.00",
        discountPrice: "Rs: 598.00",
        discount: "Save 10%",
        qty: 1,
        id: 5
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/IMG_1809.jpg?v=1635158810",
        name: "12% AHA + 2% HYALURONIC EXFOLIATING SLEEP MASK",
        totalPrice: "Rs: 995.00",
        discountPrice: "Rs: 895.00",
        discount: "Save 10%",
        qty: 1,
        id: 6
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Artboard1_2.jpg?v=1635157945",
        name: "DEEP PORE FACIAL FOAM CLEANSER",
        totalPrice: "Rs: 425.00",
        discountPrice: "Rs: 395.00",
        discount: "Save 6%",
        qty: 1,
        id: 7
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/a.jpg?v=1634903074",
        name: "2% Salicylic Face Serum With Tea Tree Oil & Zinc | Treats Acne, Blemishes & Acne Scars| Oily, Acne Prone Skin| Women and Men",
        totalPrice: "Rs: 665.00",
        discountPrice: "Rs: 598.00",
        discount: "Save 10%",
        qty: 1,
        id: 8
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_4_85b8fcfc-89a1-49d0-bc95-e4d49dfd6619_360x.jpg?v=1646934817",
        name: "Watermelon Super Glow Vitamin C Face Wash Gel| For Oil Control & Deep Cleansing | Combination & Oily Skin |100% Sulphate Free| Women and Men",
        totalPrice: "Rs: 465.00",
        discountPrice: "Rs: 395.00",
        discount: "Save 10%",
        qty: 1,
        id: 9
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/GreenClayMask.png?v=1635159125",
        name: "Watermelon Super Glow Matte Face Cream With Glycolic | Minimizes Pores & Evens Skin Tone| Combination & Oily skin| Women & Men",
        totalPrice: "Rs: 595.00",
        discountPrice: "Rs: 565.00",
        discount: "Save 5%",
        qty: 1,
        id: 10
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Vitamin-C-serum-listing-image_1.png?v=1635158879",
        name: "5% AHA EXFOLIATING GLOW TONER",
        totalPrice: "Rs: 795.00",
        discountPrice: "Rs: 715.00",
        discount: "Save 10%",
        qty: 1,
        id: 11
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_360x.png?v=1652588012",
        name: "HYDRATING ROSE WATER TONER",
        totalPrice: "Rs: 695.00",
        discountPrice: "Rs: 626.00",
        discount: "Save 10%",
        qty: 1,
        id: 12
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_c062e82b-d61b-4fce-aff4-4cd2f46c6995_360x.jpg?v=1649326625",
        name: "Cica Calming Rapid ACNE Relief GEL Mask",
        totalPrice: "Rs: 595.00",
        discountPrice: "Rs: 535.02",
        discount: "Save 10%",
        qty: 1,
        id: 13
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-2_360x.jpg?v=1649323852",
        name: "CICA Niacinamide Night Gel With Green Tea, Tea Tree Oil & Hyaluronic| Reduces Acne & Dark Spots | Oily, Acne Prone & Sensitive Skin| Women & Men",
        totalPrice: "Rs: 595.00",
        discountPrice: "Rs: 565.01",
        discount: "Save 5%",
        qty: 1,
        id: 14
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_c062e82b-d61b-4fce-aff4-4cd2f46c6995_360x.jpg?v=1649326625",
        name: "Cica & Green Tea Face Wash With Salicylic| Treats Acne & Acne Scars| Oily, Acne Prone Skin| 100% Sulphate Free| Women & Men",
        totalPrice: "Rs: 595.00",
        discountPrice: "Rs: 395.00",
        discount: "Save 5%",
        qty: 1,
        id: 15
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_3057d434-6349-42b8-aefe-1673c8d24265_360x.jpg?v=1649327316",
        name: "10% Niacinamide Face Serum With Zinc & Antioxidants| Treats Acne, Dark Spots & Acne Scars| For Oily, Sensitive ,Acne Prone Skin| Women & Men",
        totalPrice: "Rs: 695.00",
        discountPrice: "Rs: 598.00",
        discount: "Save 10%",
        qty: 1,
        id: 16
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_fbc8a03b-7baf-4bad-b5af-1197213a128e_360x.jpg?v=1649324873",
        name: "CICA & Niacinamide Face Toner With Green Tea & Tea Tree Oil| Reduces Acne & Dark Spots| For Oil Control & Skin Irritation | Oily, Sensitive & Acne Prone Skin| 100% Alcohol Free| Women & Men",
        totalPrice: "Rs: 495.00",
        discountPrice: "Rs: 395.00",
        discount: "Save 10%",
        qty: 1,
        id: 17
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_2_ff47654b-ba0b-43c5-ac01-7888e451d4e7_360x.jpg?v=1646476750",
        name: "Salicylic & French Green Clay Face Mask With Match Tea| Reduces Acne, Dark Spots & Blemishes| Oily & Acne Prone Skin| Women & Men",
        totalPrice: "Rs: 695.00",
        discountPrice: "Rs: 660.04",
        discount: "Save 5%",
        qty: 1,
        id: 18
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_16adaf35-a138-4989-a2f0-e23e0dcd4578_360x.jpg?v=1649326809",
        name: "Cica Calming Rapid ACNE Relief GEL Mask",
        totalPrice: "Rs: 595.00",
        discountPrice: "Rs: 535.02",
        discount: "Save 10%",
        qty: 1,
        id: 19
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_1_11bc8a1c-3330-413c-8aaf-bd1ebdb23dbe_360x.jpg?v=1646476045",
        name: "2% Salicylic Face Serum With Tea Tree Oil & Zinc | Treats Acne, Blemishes & Acne Scars| Oily, Acne Prone Skin| Women and Men",
        totalPrice: "Rs: 665.00",
        discountPrice: "Rs: 598.00",
        discount: "Save 10%",
        qty: 1,
        id: 20
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_5fb360dd-6bd1-4242-8175-7ded79ad7ae3_360x.jpg?v=1654856547",
        name: "Cica Calming Acne Rescue Back & Body Spray| With Salicylic | Alcohol-Free",
        totalPrice: "Rs: 695.00",
        discountPrice: "Rs: 625.00",
        discount: "Save 10%",
        qty: 1,
        id: 21
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/acne_2_360x.jpg?v=1647255939",
        name: "5 Steps To Acne Free Skin",
        totalPrice: "Rs: 2,375.00",
        discountPrice: "Rs: 1,995.00",
        discount: "Save 16%",
        qty: 1,
        id: 22
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/gel1_360x.jpg?v=1647327988",
        name: "Acne Fighting Trio",
        totalPrice: "Rs: 1,785.00",
        discountPrice: "Rs: 1,517.00",
        discount: "Save 15%",
        qty: 1,
        id: 23
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_3_663ef15f-3847-4e70-a9f8-3a9dd335bb72_360x.jpg?v=1648088753",
        name: "INSTANT BUBBLE DETOX CLAY MASK",
        totalPrice: "Rs: 975.00",
        discountPrice: "Rs: 780.00",
        discount: "Save 15%",
        qty: 1,
        id: 24
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_0f431e19-6282-4e3c-8987-51859bf1275a_360x.jpg?v=1649327378",
        name: "Retinol & Ceramide Age Defense Night Cream For Face| Treats Fine Lines & Wrinkles | Mature, Combination, Dry Skin| Women & Men",
        totalPrice: "Rs: 945.00",
        discountPrice: "Rs: 850.02",
        discount: "Save 10%",
        qty: 1,
        id: 25
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-7_2_360x.jpg?v=1646476789",
        name: "RETINOL TIME REVERSE FACE SERUM",
        totalPrice: "Rs: 795.00",
        discountPrice: "Rs: 715.00",
        discount: "Save 10%",
        qty: 1,
        id: 26
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/09032021_Dot_Key-11814copy_360x.jpg?v=1625554418",
        name: "Retinol + Caffeine Eye Cream Concentrate",
        totalPrice: "Rs: 795.00",
        discountPrice: "Rs: 715.02",
        discount: "Save 10%",
        qty: 1,
        id: 27
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/nightwe_360x.png?v=1648088661",
        name: "RETINOL YOUTH RESTORE SLEEP MASK",
        totalPrice: "Rs: 1,295.00",
        discountPrice: "Rs: 1,036.00",
        discount: "Save 20%",
        qty: 1,
        id: 28
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_11_360x.webp?v=1644493946",
        name: "AGE DEFENSE + GLOW NIGHT SERUM",
        totalPrice: "Rs: 595.00",
        discountPrice: "Rs: 476.00",
        discount: "Save 20%",
        qty: 1,
        id: 29
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/day-night_1800x1800_1_360x.png?v=1628595712",
        name: "DAY & NIGHT CARE COMBO",
        totalPrice: "Rs: 1,590.00",
        discountPrice: "Rs: 1,431.00",
        discount: "Save 10%",
        qty: 1,
        id: 30
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-7_2_360x.jpg?v=1646476789",
        name: "PHA + Bakuchiol Daily Peel Serum",
        totalPrice: "Rs: 995.00",
        discountPrice: "Rs: 796.00",
        discount: "Save 20%",
        qty: 1,
        id: 31
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_2_360x.jpg?v=1644862670",
        name: "Rosehip Glow Elixir Face Oil",
        totalPrice: "Rs: 645.00",
        discountPrice: "Rs: 516.00",
        discount: "Save 20%",
        qty: 1,
        id: 32
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_360x.jpg?v=1639046540",
        name: "Youth Renewal Duo",
        totalPrice: "Rs: 1,340.00",
        discountPrice: "Rs: 1,206.00",
        discount: "Save 10%",
        qty: 1,
        id: 33
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/age_1_360x.jpg?v=1647261958",
        name: "5 Steps To Youthful Skin",
        totalPrice: "Rs: 2,775.00",
        discountPrice: "Rs: 1,995.00",
        discount: "Save 28%",
        qty: 1,
        id: 34
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_0b03915d-fd45-4f70-b766-e80d87e99975_360x.jpg?v=1639046585",
        name: "Your Bedtime Buddies",
        totalPrice: "Rs: 1,785.00",
        discountPrice: "Rs: 1,517.00",
        discount: "Save 15%",
        qty: 1,
        id: 35
    }
];
renderCarousel(0, 3, 's-category-change1');
initilizeSlick('s-category-change1');
initilizeSlick('s-category-change5');
initilizeSlick('s-category-change6');

function initilizeSlick(slickId) {
    var $slickEl = $('#' + slickId);
    if ($slickEl.hasClass('slick-initialized')) {
        $slickEl.slick('unslick');
    }
    $slickEl.slick({
        variableWidth: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        focusOnSelect: true,
        dots: false,
        infinite: true,
        responsive: [
            {
                arrows: false,
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                arrows: false,
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
}

function renderCarousel(startIndex, endIndex, carouselId) {
    let carouselElem = $('#' + carouselId);
    let carouselSectionHTML = '';
    products.slice(startIndex, endIndex).map(product => {
        let carouselHTML = `<div class="slide">
        <div class="slick-container">
            <div class="card-upper">
                <div class="discount">${product.discount}</div>
                <a href="javascript:;"><img
                        src="${product.image}"></a>
            </div>
            <div class="card-lower">
                <div class="review-div">
                    <span class="fa fa-star checked"></span>
                    <span>4.8 / 5</span>
                    <span style="color: blue">(20)</span>
                    <span style="float: right; transform: scale(1.25);" class="fa fa-heart-o" onclick="toggleHeart();"></span>
                </div>
                <p class="product-description">${product.name}</p>
                <div class="product-price">
                    <del style="color: grey;">${product.totalPrice}</del>
                    <b style="color: #FF6781;">${product.discountPrice}</b>
                </div>
                <div class="add-to-cart" onclick="addToCart('${product.name}')";>ADD TO CART</div>
            </div>
        </div>
    </div>`;
        carouselSectionHTML += carouselHTML;
    });
    carouselElem.html('');
    carouselElem.html(carouselSectionHTML);
}

function addToCart(productName) {
    let product = products.find(p => p.name === productName);
    let productsCart = JSON.parse(localStorage.getItem('cart-products'));
    productsCart ? productsCart.push(product) : productsCart = [product];
    localStorage.setItem('cart-products', JSON.stringify(productsCart));
}

function changeCategory(id) {
    document.querySelectorAll('.change').forEach(e => e.classList.remove('active'));
    document.querySelector('#' + id).classList.add('active');
    document.querySelectorAll('.category-s-slider').forEach(e => e.style.display = 'none');
    document.querySelector('#s-category-' + id).style.display = 'block';
    let indexVar = Number($('#s-category-' + id).data('carousel-id')) * 3;
    renderCarousel(indexVar - 3, indexVar, 's-category-' + id);
    initilizeSlick('s-category-' + id);
}

function toggleHeart() {
    $(event.target).toggleClass("fa-heart fa-heart-o");
}

/* ----------------------------------------------------------------------------------------- */
// id 9
// For first card
document.querySelector("#one_id9").addEventListener("click", redirect_no1_id9);

function redirect_no1_id9() {
    location.href = "./dummy_link_page_demo.html";
}

// For second card
document.querySelector("#two_id9").addEventListener("click", redirect_no2_id9);

function redirect_no2_id9() {
    location.href = "./dummy_link_page_demo.html";
}
// For third card
document.querySelector("#three_id9").addEventListener("click", redirect_no3_id9);

function redirect_no3_id9() {
    location.href = "./dummy_link_page_demo.html";
}
// For fourth card
document.querySelector("#four_id9").addEventListener("click", redirect_no4_id9);

function redirect_no4_id9() {
    location.href = "./dummy_link_page_demo.html";
}
/* ----------------------------------------------------------------------------------------- */
// id 12
document.querySelector("#one_id12").addEventListener("click", redirect_no1_id12);

function redirect_no1_id12() {
    location.href = "./dummy_link_page_demo.html";
}

/* ----------------------------------------------------------------------------------------- */
// id 13
//none

/* ----------------------------------------------------------------------------------------- */
// id 14 and15
//none

/* ----------------------------------------------------------------------------------------- */
// id 17
//none

/* ----------------------------------------------------------------------------------------- */
// id 19
let change_para = ["7-Day Glowing Skin challenge", "9 Reasons Why You Should Use Face Masks", "AHA vs BHA vs PHA: Skin Benefits & All You Need to Know", "5 Benefits of Drinking Matcha Tea: Make Your Skin Glow", "5 Common Underarm Problems & Their Solutions", "How To Lighten Underarms Quickly- 10 Effective Ways", "How To Lighten Underarms Quickly- 10 Effective Ways"];
let url_arr_id19 = [
    "https://www.dotandkey.com/", "https://www.google.com/", "https://www.w3schools.com/", "https://www.dotandkey.com/", "https://developer.mozilla.org/en-US/"
]

let btn1_id19 = document.querySelector("#btn1_id19");
btn1_id19.addEventListener("click", move_backward_id19);
let changeNum_id19 = 0;

function move_backward_id19() {
    let change_para_id19 = document.querySelector("#change_para_id19");
    console.log("check_backward");
    if (changeNum_id19 == 0) {
        changeNum_id19 = change_para.length - 1;
    }
    else {
        changeNum_id19--;
    }
    change_para_id19.innerHTML = change_para[changeNum_id19];

}
let btn2_id19 = document.querySelector("#btn2_id19");
btn2_id19.addEventListener("click", move_forward_id19);

function move_forward_id19() {
    let change_para_id19 = document.querySelector("#change_para_id19");
    console.log("check_forward");
    if (changeNum_id19 == change_para.length - 1) {
        changeNum_id19 = 0;
    }
    else {
        changeNum_id19++;
    }
    change_para_id19.innerHTML = change_para[changeNum_id19];

}

let read_more_btn_id19 = document.querySelector("#btn_id19");
read_more_btn_id19.addEventListener("click", article_id19);

function article_id19() {
    location.href = url_arr_id19[changeNum_id19];
}




