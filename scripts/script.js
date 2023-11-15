// -------------- functionallity -------------- \\

// show/hide settings
// läsas knappar och div/rutorna
let form = document.getElementById('regform');
let register = document.getElementById('register');

let searchBar = document.getElementById('searchbar');
let search = document.getElementById('search');

let deleteBar = document.getElementById('deleteBar');
let deletion = document.getElementById('delete');


//om en ruta är aktiv de andra stänger

//Registrera ruta show/hide settings
function showForm() {
    if ( form.style.display === 'none') {
    form.style.display = 'flex';
    searchBar.style.display = 'none';
    deleteBar.style.display = 'none';
    }
    else {
    form.style.display = 'none';
    }
    
}

register.addEventListener('click', showForm);


//Search ruta show/hide settings
function showSearchBar() {
    if (searchBar.style.display === 'none') {
    searchBar.style.display = 'flex';
    form.style.display = 'none';
    deleteBar.style.display = 'none';
    }
    else {
    searchBar.style.display = 'none';
    }
}

search.addEventListener('click', showSearchBar);


//Delete ruta show/hide settings

function showDeleteBar() {
    if (deleteBar.style.display === 'none') {
    deleteBar.style.display = 'flex';
    searchBar.style.display = 'none';
    form.style.display = 'none';
    }
    else {
    deleteBar.style.display = 'none';
    }
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
    //Kollar om det finns objekt 'ProgramsArray' i localstorage
    if (localStorage.getItem('programsArray') === null ||
    localStorage.getItem('programsArray') === undefined) {
        alert('Databas är tom!');
    }
    else {
        //om det finns objektet hämtar 'key' från html samt 'searchDisplay'
        let key = document.getElementById('key').value.toLowerCase();
        let searchDisplay = document.getElementById('searchDisplay');
        //om 'key' är tom, så skickas alert
        if (key === '') {
            alert('Skriv något först!');
        }
        //annars omvandlas objektet 
        else {
            let programsArray = JSON.parse(localStorage.getItem('programsArray'));

            let programFound = false;
            
            let display = '';
            //om 'key' matchar någon av de objektets properties i programsArray
            //stoppar in allt som hittas en matchning till temp
            //avslöjas searchDisplay som 'block, stoppas in temp till searchDisplay
            //och rensas 'key' fält, programfound blir true 
            for (const program of programsArray) {

                if (program.title === key ||
                    program.genre === key ||
                    program.age === key) {
                    
                    display += 'Titel: '+ program.title + '\n' + 
                    'Tema: '+ program.genre + '\n' + 
                    'Åldersgräns: ' + program.age + '\n\n'; 

                    searchDisplay.style.display = 'block';
                    
                    document.getElementById('searchDisplay').value = display;

                    document.getElementById('key').value = '';
                        
                    programFound = true;
                }
            }
            //om programFound är fortfarande false då betyder att 
            //det hittades inget program som matchar 'key'
            if (!programFound) {
                document.getElementById('searchDisplay').value = 'Program not found!';
                searchDisplay.style.display = 'block';
            }
        }
    }
}

//function som visar all data
function showAllData() {

    if (localStorage.getItem('programsArray') === null ||
    localStorage.getItem('programsArray') === undefined) {
        alert('Databas är tom!');
        console.log('Databas är tom!');
    }
    else {
        
        let clearButton = document.getElementById('clear');
        
        let programsArray = JSON.parse(localStorage.getItem('programsArray'));
        
        let display = '';

        //stoppar in arrayn i foreach loopen som aktiverar funktionen loopArray
        programsArray.forEach(loopArray);

        //loopar genom arrayn, stoppar in alla data in display 
        function loopArray(prog) {
            
            display += 'Titel: ' + prog.title + '\n' + 
            'Tema: ' + prog.genre + '\n' + 
            'Åldersgräns: ' + prog.age + '\n\n';
            
        }
        let searchDisplay = document.getElementById('searchDisplay');
        
        //avslojas 'searchDisplay' och knappen 'clear' som 'block'
        searchDisplay.style.display = 'block';
        clearButton.style.display = 'block';

        //stoppar display till searchDisplay som visar alla data
        document.getElementById('searchDisplay').value = display;
    }
}

//enkel function som ta bort texten från textarea
function clearTextArea() {
    document.getElementById('searchDisplay').value = '';
}

// Rensa data 
function clearItem() { 
    
    let key = document.getElementById('deleteInput').value;
    
    if (key === '') {
        alert('Skriv något först!');
    }
    else {
        //hämtas arrayn från localstorage, omvandlas till objektet i parsedArray 
        let parsedArray = JSON.parse(localStorage.getItem('programsArray'));
        
        for (let i = 0; i < parsedArray.length; i++) { 
            //om 'key' matchar objektets 'title' i arrayn 'parsedArray'
            if (parsedArray[i].title === key) {

                //tas bort objektet som ligger i 'i' in arrayn 'parsedArray' för lengden 1
                parsedArray.splice(i, 1);
                
                //görs förändrat arrayn till string och sparas till localstorage igen
                localStorage.setItem('programsArray', JSON.stringify(parsedArray));
                
                alert('Programet har tagits bort'); 
                
                break;
            }
            else {
                
                alert('Programet finns inte!'); 
                
                break;
                
            }
        }
    }
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

// -------------- Buttons med eventListeners -------------- \\

//Clear button för textarea ---------------
let clear = document.getElementById('clear');

clear.addEventListener('click', clearTextArea);

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

// -------------- Google Translate -------------- \\
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'se'}, 'google_translate_element');
}

