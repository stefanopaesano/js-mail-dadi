// Mail
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.





const domanda = prompt("Qualè la tua mail?");

const emaillista =[

    "stefanino@gmail.com",
    "stefanino2@gmail.com",
    "stefanino3@gmail.com",
    "stefanino4@gmail.com",
    "stefanino5@gmail.com",
    
    

]

console.log (emaillista)



if (emaillista.includes(domanda)) {
    
    console.log("Benvenuto, " + domanda + "! Accesso autorizzato.");
  } else {
    
    console.log("Spiacenti, l'accesso non è autorizzato per l'indirizzo email inserito.");
  }







