/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++  ESERCIZIO  +++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* 
- Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
-Stampare a schermo attraverso il for in tutte le proprietà;
- Creare un array di oggetti di studenti.
-Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
- Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. 
BONUS: (ma solo se il resto è fatto)
Curo per bene l’output dell’elenco studenti, creando un layout carino;
il “blocchetto studente” in pagina, sarà uguale per tutti, quindi potrei usare handlebars per gestire i blocchetti;
varie che vi vengono in mente per sperimentare;
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* +++++++++++++++++++++++++++++++  SVOLGIMENTO  ++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

$(document).ready(function(){
    
    // creo oggetto che descrive uno studente
    var studenteZero = {
        "nome": "Mario",
        "cognome": "Rossi",
        "eta": 18
    }

    //stampo tutte le proprietà
    for(var key in studenteZero){
        console.log(studenteZero[key]);
    }
    console.log("------------------------------------------------------------");
    
    // creo array di studenti
    var studenti = [
        {"nome": "Paolo", "cognome": "Cusimano", "eta": 18},
        {"nome": "Franco", "cognome": "Breda", "eta": 15},
        {"nome": "Giuseppe", "cognome": "Di Franco", "eta": 16},
        {"nome": "Amanda", "cognome": "Castagnetta", "eta": 13},
        {"nome": "Fiorella", "cognome": "Mannino", "eta": 17},
        {"nome": "Carlotta", "cognome": "Palumbo", "eta": 20},
    ] 

    // Ciclo su tutti gli studenti e stampo per ognuno nome e cognome;
    for(var i = 0; i < studenti.length; i++){
        console.log(studenti[i].nome + " " + studenti[i].cognome);
    }
    console.log("------------------------------------------------------------");
    
    // Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. 
    /* studenti.push({
        "nome": prompt("Inserisci nome"), 
        "cognome": prompt("Inserisci Cognome"), 
        "eta": prompt("Inserisci età")
    })
    for(var i = 0; i < studenti.length; i++){
        console.log(studenti[i].nome + " " + studenti[i].cognome + " " + studenti[i].eta + " anni");
    }
    console.log("------------------------------------------------------------"); */



    /* BONUS
    Utilizzo HandlerBars per dinamicizzare l'html */

    
    var source = $("#student-template").html();
    var template = Handlebars.compile(source);

    var lastStudentNum = 0;
    printStudents();
    
    $('#addStudent').on('click', function(){
        studenti.push({
            "nome": $('#addStudentName').val(), 
            "cognome": $('#addStudentSurname').val(), 
            "eta": $('#addStudentAge').val()
        })
        $('#addStudentName').val("");
        $('#addStudentSurname').val("");
        $('#addStudentAge').val("");
        console.log('stampo studenti dopo:');
        console.log(studenti);
        $('#mainStudents').html("");
        printStudents();
    })

    function printStudents(){
        for(var i = 0; i < studenti.length; i++){
            var context = {
                studentNum: i + 1,
                studentName: studenti[i].nome, 
                studentSurname: studenti[i].cognome, 
                studentAge: studenti[i].eta    
            };
            lastStudentNum = i;
            var html = template(context);
            $('#mainStudents').append(html)
        }
        console.log('stampo studenti prima:');
        console.log(studenti);
    }
    

})
