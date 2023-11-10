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
let storage = [];

// save data
function saveData() {
    let myProgram = {

         title: document.getElementById('title').value,

         summary: document.getElementById('summary').value,

         age: document.getElementById('age').value,
    };
    
    let myProgram_string = JSON.stringify(myProgram);

    localStorage.setItem('myProgram', myProgram_string);

    let myProgram_to_obj = JSON.parse(localStorage.getItem('myProgram'));

    storage.push(myProgram_to_obj);

    console.log(storage);    
}

const spara = document.getElementById('spara');
spara.addEventListener('click', saveData);


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