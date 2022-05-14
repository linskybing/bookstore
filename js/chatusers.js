const searchBar = document.querySelector(".users .search input"),
    searchBtn = document.querySelector(".users .search button");

searchBtn.addEventListener('click', function () {
    searchBar.classList.toggle("active");
    searchBar.focus();
    searchBtn.classList.toggle("active");
})

document.querySelector('.chaticon').addEventListener('click', function () {
    document.querySelector('.wrapper').classList.toggle('close');
})