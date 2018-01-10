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
    }, 160);
    if (searchValue) {
        window.location.href = `${"https://www.google.com/search?q="}${searchValue.toString()}`;
    }  
}