"use strict";
const searchForm = document.forms.search;

searchForm.onsubmit = function (event) {
    event.preventDefault();    
    goToPage(); 
};

const searchButton = document.querySelector('.search-button');
searchButton.onclick = function (event)  {
    event.preventDefault();
    goToPage();
}

function goToPage() {   
    let searchValue = searchForm.elements.input.value;
    setTimeout(() =>{ 
        searchForm.elements.input.value = '';
    }, 180);
    window.location.href = `${"https://www.google.by/search?q="}${searchValue.toString()}`;  
}