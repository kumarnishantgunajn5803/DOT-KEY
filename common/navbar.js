function afterclick() {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
}

document.getElementsByClassName('searchBtn')[0].addEventListener('mouseover', () => {
    document.getElementsByClassName('searchText')[0].style.display = 'block';
});

document.getElementsByClassName('searchText')[0].addEventListener('mouseover', () => {
    document.getElementsByClassName('searchText')[0].style.display = 'block';
});

document.getElementsByClassName('searchBtn')[0].addEventListener('mouseout', () => {
    document.getElementsByClassName('searchText')[0].style.display = 'none';
});

document.getElementsByClassName('searchText')[0].addEventListener('mouseout', () => {
    document.getElementsByClassName('searchText')[0].style.display = 'none';
});