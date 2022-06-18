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


setInterval(move_forward, 3500);



