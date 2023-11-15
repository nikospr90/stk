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
    form.style.display = 'flex';
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
    searchBar.style.display = 'flex';
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
    deleteBar.style.display = 'flex';
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
        title : document.getElementById('title').value.toLowerCase(),  
        genre : document.getElementById('genre').value.toLowerCase(),
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
    
    title.value = '';
    genre.value = '';
    age.value = '';

    alert('Data saved to local storage!'); 

}

//function som visar datan efter sökning
function findData() {
    if (localStorage.getItem('programsArray') === null ||
    localStorage.getItem('programsArray') === undefined) {
        alert('Databas är tom!');
    }
    else {

        let key = document.getElementById('key').value.toLowerCase();
        let searchDisplay = document.getElementById('searchDisplay');
        
        if (key === '') {
            alert('Skriv något först!');
        }
        else {
            let programsArray = JSON.parse(localStorage.getItem('programsArray'));

            let programFound = false;
            
            for (const program of programsArray) {

                if (program.title === key ||
                    program.genre === key ||
                    program.age === key) {
                    
                    document.getElementById('searchDisplay').value = 'Titel: '+ program.title + '\n' + 
                    'Tema: '+ program.genre + '\n' + 
                    'Åldersgräns: ' + program.age; 

                    searchDisplay.style.display = 'block';

                    programFound = true;
                    break;
                }
            }
            if (!programFound) {
                document.getElementById('searchDisplay').value = 'Program not found!';
                searchDisplay.style.display = 'block';
            }
        }
    }
}

function showAllData() {
    if (localStorage.getItem('programsArray') === null ||
    localStorage.getItem('programsArray') === undefined) {
        alert('Databas är tom!');
    }
    else {
        
        let programsArray = JSON.parse(localStorage.getItem('programsArray'));
        
        let display = '';
        
        programsArray.forEach(iteration2);
        
        function iteration2(prog) {
            
            display += 'Titel: ' + prog.title + '\n' + 
            'Tema: ' + prog.genre + '\n' + 
            'Åldersgräns: ' + prog.age + '\n\n';
            
        }
        let searchDisplay = document.getElementById('searchDisplay');
        searchDisplay.style.display = 'block';
        document.getElementById('searchDisplay').value = display;
    }
}

// Rensa data 
function clearItem() { 
    
    let key = document.getElementById('deleteInput').value;
    
    let parsedArray = JSON.parse(localStorage.getItem('programsArray'));
    
    console.log(parsedArray);
    
    for (let i = 0; i < parsedArray.length; i++) { 
        
        if (parsedArray[i].title === key) {
            
            parsedArray.splice(i, 1);
            
            let stringifiedArray = JSON.stringify(parsedArray);
            
            localStorage.setItem('programsArray', stringifiedArray);
            
        }
        
    }
    alert('Programet har tagits bort'); 
}

//Tar bort allt från localStorage   
function clearAll() { 
    if (localStorage.getItem('programsArray') === null){
        alert('Det finns ingeting att rensa');
    }
    else {
        localStorage.clear();
        alert('Databas har rensar!');
    }
}

// -------------- Buttons event listeners -------------- \\
//Spara button ----------------------------
let spara = document.getElementById('spara');

spara.addEventListener('click', saveData);

//Visa allt från localStorage----------
let all = document.getElementById('all');

all.addEventListener('click', showAllData);

//Sökning button----------------------------
let sökning = document.getElementById('find');

sökning.addEventListener('click', findData);

//Rensa button--------------------------------------
let deleteButton = document.getElementById('deleteProg');

deleteButton.addEventListener('click', clearItem);

//Rensa all button---------------------------------
let rensaAllt = document.getElementById('deleteAll');

rensaAllt.addEventListener('click', clearAll);

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'se'}, 'google_translate_element');
  }