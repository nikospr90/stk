// -------------- functionallity -------------- \\

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


// -------------- database -------------- \\


//function som sparar datan
function saveData() {
    
    //Här skapas ett objekt med namn 'program' 
    let program = {
        
        // Objektet program har properties som läses från formulären
        // .value läser från input texten som skrivs
        title : document.getElementById('title').value, 
        genre : document.getElementById('genre').value,
        age : document.getElementById('age').value,
    };

    // här skapas en array 'programsArray' i localstorage i form av string 
    //om det finns ingeting än och omvandlas med JSON.parse till objekt
    // och sparas till en variable 'objArray' 
    const objArray = JSON.parse(localStorage.getItem('programsArray')) || [];

    //med hjälp av .push trycks objektet 'program' med alla sina properties till arrayn 'objArray' 
    objArray.push(program);

    //efter sparanden av objektet 'objArray' omvandlas med JSON.stringify till string
    //och sparas till localstorage
    localStorage.setItem('programsArray', JSON.stringify(objArray));
    
    alert('Data saved to local storage!'); 

    console.log(localStorage.getItem('programsArray'));
}

//function som visar datan efter sökning
function findData() {
    if (localStorage.getItem('programsArray') === null) {
        alert('Databas är tom!');
    }
    else {
        let key = document.getElementById('key').value;

        let programsArray = JSON.parse(localStorage.getItem('programsArray'));
        
        for (let i = 0; i < programsArray.length; i++) {

            if (programsArray[i].title === key ||
                programsArray[i].genre === key ||
                programsArray[i].age === key) {
                
                document.getElementById('display').value = 'Title: ' + programsArray[i].title + ', ' + 
                'Genre: ' + programsArray[i].genre + ', ' + 
                'Age: ' + programsArray[i].age; 


                // console.log(document.getElementById('display').value = 'Title: ' + programsArray[i].title + ', ' + 
                // 'Genre: ' + programsArray[i].genre + ', ' + 
                // 'Age: ' + programsArray[i].age);
            }
            else {
                document.getElementById('display').value = 'Program not found!';
            }
        }
    }
}


let spara = document.getElementById('spara');

spara.addEventListener('click', saveData);

let sökning = document.getElementById('find');

sökning.addEventListener('click', findData);













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