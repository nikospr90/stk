// -------------- functionallity -------------- \\

// show/hide settings
let form = document.getElementById('regform');
let register = document.getElementById('register');

let searchBar = document.getElementById('searchbar');
let search = document.getElementById('search');

let deleteBar = document.getElementById('deleteBar');
let deletion = document.getElementById('delete');

//Form show/hide settings
function showForm() {
    if ( form.style.display === 'none') {
    form.style.display = 'block';
    searchBar.style.display = 'none';
    deleteBar.style.display = 'none';
    }
    else {
    form.style.display = 'none';}
    
}



register.addEventListener('click', showForm);

//Search bar show/hide settings
function showSearchBar() {
    if (searchBar.style.display === 'none') {
    searchBar.style.display = 'block';
    form.style.display = 'none';
    deleteBar.style.display = 'none';
    }
    else {
    searchBar.style.display = 'none';}
}

search.addEventListener('click', showSearchBar);


//Delete option show/hide settings

function showDeleteBar() {
    if (deleteBar.style.display === 'none') {
    deleteBar.style.display = 'block';
    searchBar.style.display = 'none';
    form.style.display = 'none';
    }
    else {
    deleteBar.style.display = 'none';}
}

deletion.addEventListener('click', showDeleteBar);


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
    if (localStorage.getItem('programsArray') === null ||
    localStorage.getItem('programsArray') === undefined) {
        alert('Databas är tom!');
    }
    else {
        let key = document.getElementById('key').value;
        
        let programsArray = JSON.parse(localStorage.getItem('programsArray'));
        
        programsArray.forEach(iteration1);
        
        function iteration1(obj) {
            if (obj.title === key){
                document.getElementById('display').value = 'Title: '+ obj.title + ', ' + 
                'Genre: '+ obj.genre + ', ' + 
                'Age: ' + obj.age; 
            }
            else {
                document.getElementById('display').value = 'Program not found!';
            }
        }
    }
}

//Sökning button
let sökning = document.getElementById('find');

sökning.addEventListener('click', findData);


function showAllData() {
    if (localStorage.getItem('programsArray') === null ||
    localStorage.getItem('programsArray') === undefined) {
        alert('Databas är tom!');
    }
    else {
        
        let programsArray = JSON.parse(localStorage.getItem('programsArray'));
            
        for (let i = 0; i < programsArray.length; i++) { 

            programsArray.forEach(iteration2);
        
            function iteration2(prog) {
                
                document.getElementById('display').value = 'Title: '+ prog.title + ','+ 
                'Genre: '+ prog.genre + ','+ 
                'Age:' + prog.age;
            }
        }
          
        
    }
}

let all = document.getElementById('all');

all.addEventListener('click', showAllData);






// Rensa data 
function clearStorage() { 

    let data = document.getElementById('display2').value;
    
    let existingData = localStorage.getItem('programsArray');  
    
    let parsedData = JSON.parse(existingData);
    
    console.log(parsedData);

    for (let i = 0; i < parsedData.length; i++) { 
    
        if (parsedData[i].title === data) {
            
            
            parsedData.splice(i, 1);

            let bleh = JSON.stringify(parsedData);
            
            localStorage.setItem('programsArray', bleh);
            
        }
        
    }
    alert('Item is cleared'); 
}

//Buttons event listeners
//Spara button
let spara = document.getElementById('spara');

spara.addEventListener('click', saveData);


//Rensa button
let deleteButton = document.getElementById('delete2');

deleteButton.addEventListener('click', clearStorage);