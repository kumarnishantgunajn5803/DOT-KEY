let change_para=["7-Day Glowing Skin challenge","9 Reasons Why You Should Use Face Masks","AHA vs BHA vs PHA: Skin Benefits & All You Need to Know","5 Benefits of Drinking Matcha Tea: Make Your Skin Glow","5 Common Underarm Problems & Their Solutions","How To Lighten Underarms Quickly- 10 Effective Ways","How To Lighten Underarms Quickly- 10 Effective Ways"];
let url_arr_id19 = [
    "https://www.dotandkey.com/", "https://www.google.com/", "https://www.w3schools.com/", "https://www.dotandkey.com/", "https://developer.mozilla.org/en-US/"
]

let btn1_id19 = document.querySelector("#btn1_id19");
btn1_id19.addEventListener("click", move_backward_id19);
let changeNum_id19 = 0;

function move_backward_id19(){
    let change_para_id19= document.querySelector("#change_para_id19");
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

function move_forward_id19(){
    let change_para_id19= document.querySelector("#change_para_id19");
    console.log("check_forward");
    if (changeNum_id19 == change_para.length - 1) {
        changeNum_id19 = 0;
    }
    else {
        changeNum_id19++;
    }
    change_para_id19.innerHTML = change_para[changeNum_id19];

}

let read_more_btn_id19= document.querySelector("#btn_id19");
read_more_btn_id19.addEventListener("click",article_id19);

function article_id19(){
    location.href= url_arr_id19[changeNum_id19];
}


