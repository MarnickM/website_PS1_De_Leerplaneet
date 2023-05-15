// definieer verbForms als een array van arrays
var verbForms = [  ["aimer", "aime", "aimes", "aime", "aimons", "aimez", "aiment"],
  ["aller","vais", "vas", "va", "allons", "allez", "vont"],
  ["avoir","ai", "as", "a", "avons", "avez", "ont"]
  // voeg hier meer werkwoorden toe...
];

// Definieer functie om user input te vergelijken met verwachte werkwoorden
function checkanswers() {

    //Ik denk dat dze lijn code weg mag
  const form = document.getElementById('form');
    
    
  //de oefening nummer in variabele steken en omzetten naar integer
  //nummer is hier het getal bovenaan de form die de oefening nummer bijhoud
  var nummer = document.getElementById('nummer').innerHTML; 
  nummer = parseInt(nummer);  
 
    
  //user inputs in variabele steken
  var jeInput = document.getElementById('je').value.trim().toLowerCase();
  var tuInput = document.getElementById('tu').value.trim().toLowerCase();
  var ilElleInput = document.getElementById('ilelle').value.trim().toLowerCase();
  var nousInput = document.getElementById('nous').value.trim().toLowerCase();
  var vousInput = document.getElementById('vous').value.trim().toLowerCase();
  var ilsEllesInput = document.getElementById('ilselles').value.trim().toLowerCase();

    //nummer kan gebruikt worden om de juiste verb array uit de 2d array te halen
    var verbForm = verbForms[nummer];
    
    //juiste antwoorden uit array in variabelen zetten
    var jeExpected = verbForm[1];
    var tuExpected = verbForm[2];
    var ilElleExpected = verbForm[3];
    var nousExpected = verbForm[4];
    var vousExpected = verbForm[5];
    var ilsEllesExpected = verbForm[6];

    //controle juist of fout. De tekstvak word groen of rood gemaakt
    if (jeInput === jeExpected) {
      document.getElementById('je').style.color = '#6cf7ab';
    } else {
      document.getElementById('je').style.color = '#eb0c0c';
    }

    if (tuInput === tuExpected) {
      document.getElementById('tu').style.color = '#6cf7ab';
    } else {
      document.getElementById('tu').style.color = '#eb0c0c';
    }

    if (ilElleInput === ilElleExpected) {
      document.getElementById('ilelle').style.color = '#6cf7ab';
    } else {
      document.getElementById('ilelle').style.color = '#eb0c0c';
    }

    if (nousInput === nousExpected) {
      document.getElementById('nous').style.color = '#6cf7ab';
    } else {
      document.getElementById('nous').style.color = '#eb0c0c';
    }

    if (vousInput === vousExpected) {
      document.getElementById('vous').style.color = '#6cf7ab';
    } else {
      document.getElementById('vous').style.color = '#eb0c0c';
    }

    if (ilsEllesInput === ilsEllesExpected) {
      document.getElementById('ilselles').style.color = '#6cf7ab';
    } else {
      document.getElementById('ilselles').style.color = '#eb0c0c';
    }
    
//knop voor volgende oefening zichtbaar maken
document.getElementById('next').style.visibility = 'visible';
    
//oplossing tonen en kleur ervan veranderen
    document.getElementById('lableje').innerHTML = 'Je ' + verbForm[1];
    document.getElementById('labletu').innerHTML = 'Tu ' + verbForm[2];
    document.getElementById('lableilelle').innerHTML = 'Il/Elle ' + verbForm[3];
    document.getElementById('lablenous').innerHTML =  'Nous ' + verbForm[4];
    document.getElementById('lablevous').innerHTML =  'Vous ' + verbForm[5];
    document.getElementById('lableilselles').innerHTML =  'Ils/Elles ' + verbForm[6];
    
    document.getElementById('lableje').style.color =  '#6cf7f7';
    document.getElementById('labletu').style.color =  '#6cf7f7';
    document.getElementById('lableilelle').style.color =  '#6cf7f7';
    document.getElementById('lablenous').style.color =  '#6cf7f7';
    document.getElementById('lablevous').style.color =  '#6cf7f7';
    document.getElementById('lableilselles').style.color =  '#6cf7f7';
} //einde functie


function nextexercise(){
    
    // de oefening nummer dat gebruikt word voor de checkanswers() functie verhoogen
    // in de html file
    var nummer = document.getElementById('nummer').innerHTML; 
    nummer = parseInt(nummer);
    nummer +=1;

    //werkwoord dat getoont word veranderen
    var verbForm = verbForms[nummer];
    document.getElementById('verb').innerHTML = verbForm[0];
    
    //oefening nummer veranderen
    document.getElementById('nummer').innerHTML = nummer;
    
    //inputs leegmaken
    document.getElementById('je').value = "";
    document.getElementById('tu').value = "";
    document.getElementById('ilelle').value = "";
    document.getElementById('nous').value = "";
    document.getElementById('vous').value = "";
    document.getElementById('ilselles').value = "";
    
    //knop voor volgende oefening verbergen
    document.getElementById('next').style.visibility = 'hidden';
    
    //oplossingen verbergen
    document.getElementById('lableje').innerHTML = "Je";
    document.getElementById('labletu').innerHTML =  "Tu";
    document.getElementById('lableilelle').innerHTML =  "il/Elle";
    document.getElementById('lablenous').innerHTML =  'Nous';
    document.getElementById('lablevous').innerHTML =  'Vous';
    document.getElementById('lableilselles').innerHTML =  'Ils/Elles';
    
    //zorgen dat de inputs niet meer groen of roodzijn volgened keer dat je iets ingeeft
    document.getElementById('je').style.color =  '#b3e9f6';
    document.getElementById('tu').style.color =  '#b3e9f6';
    document.getElementById('ilelle').style.color =  '#b3e9f6';
    document.getElementById('nous').style.color =  '#b3e9f6';
    document.getElementById('vous').style.color =  '#b3e9f6';
    document.getElementById('ilselles').style.color =  '#b3e9f6';
   
   
}