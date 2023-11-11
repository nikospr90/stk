// form show/hide settings
let form = document.getElementById('regform');
let register = document.getElementById('register');

function showForm() {
    if (form.style.display === 'none') {
    form.style.display = 'block';}
    else {
    form.style.display = 'none';}
}

register.addEventListener('click', showForm);

// search bar show/hide settings
let searchBar = document.getElementById('searchbar');
let search = document.getElementById('search');

function showSearchBar() {
    if (searchBar.style.display === 'none') {
    searchBar.style.display = 'block';}
    else {
    searchBar.style.display = 'none';}
}

search.addEventListener('click', showSearchBar);

// database



// let summaries = [];
// let ages = [];
// let num = 2;
// let num2 = 3;


// localStorage.setItem('number', num);

// localStorage.setItem('number2', num2);

const titles = [];

let title = document.getElementById('title');

localStorage.setItem('title', JSON.stringify(title.value));

let rdy_title = JSON.parse(localStorage.getItem('title'));



saveData(rdy_title);


function saveData(e) {
    
    titles.push(e);
    
    console.log(titles);
}

console.log(localStorage);













// let title = document.getElementById('title');

// localStorage.setItem('title', JSON.stringify(title.value));

// let rdy_title = localStorage.getItem('title');

// console.log(localStorage);




let spara = document.getElementById('spara');

//spara.addEventListener('click', saveData);


//  /* Tre funktioner, en som sparar data, en som hämtar data och visar, en som rensar. */ 
//  // Funktion som sparar data lokalt function 
//  function saveData() { const newData = document.getElementById('title').value; 
//     //hämta värdet från formulär 
//     console.log(newData); 
//     let existingData = localStorage.getItem('savedData'); 
//     // hämta tidigare data 
//     existingData = existingData ? JSON.parse(existingData) : []; 
//     //om det finns data sedan innan, konvertera från JSON till objekt, annars skapa en tom array. 
//     existingData.push(newData);
//     //lägg till data 
//     localStorage.setItem('savedData', JSON.stringify(existingData));
//     //gör om data till sträng, spara i local 
//     alert('Data saved to local storage!'); 
//     document.getElementById('title').value = ''; // Clear input field 
//     } 
//  // Visa sparad data 
//  function showData() { const savedData = localStorage.getItem('savedData'); 
//     if (savedData) { 
//         const parsedData = JSON.parse(savedData); 
//         //gör om JSON till objekt 
//         if (parsedData.length > 0) { 
//             alert('Data hämtad från local stoarage: ' + parsedData.join(', ')); }
//         else { alert('Ingen data hittad'); } 
//     } 
//     else { 
//         alert('Ingen data hittad'); } 
// } 
// // Rensa data 
// function clearStorage() { 
//     localStorage.removeItem('savedData'); 
//     alert('Local storage cleared'); 
// }