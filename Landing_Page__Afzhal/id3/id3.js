document.querySelector("#img_id3").addEventListener("click",redirect_no1_id3);

// Tricky one
function redirect_no1_id3(){
    document.querySelector("#img_id3").innerHTML='';
    location.href="./dummy_link_page_demo.html";
}