// Definizione della classe User che implementa l'interfaccia Smartphone
var User = /** @class */ (function () {
    function User(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
        this.credito = 0; // Credito iniziale a 0
        this.numeroChiamate = 0;
    }
    // Metodo per effettuare una ricarica
    User.prototype.ricarica = function (ammontare) {
        this.credito += ammontare;
    };
    // Metodo per effettuare una chiamata
    User.prototype.chiamata = function (minuti) {
        var costoChiamata = minuti * 20; // Costo fisso di 20 centesimi al minuto
        if (costoChiamata <= this.credito) {
            this.credito -= costoChiamata;
            this.numeroChiamate += minuti;
        }
        else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    };
    // Metodo per restituire il credito disponibile
    User.prototype.chiamata404 = function () {
        return this.credito;
    };
    // Metodo per restituire il numero di minuti passati in chiamata
    User.prototype.getNumeroChiamata = function () {
        return this.numeroChiamate;
    };
    // Metodo per azzerare il numero di chiamate effettuate
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    // Metodo per verificare il saldo residuo
    User.prototype.verificaSaldo = function () {
        console.log("Saldo residuo di ".concat(this.nome, " ").concat(this.cognome, ": ").concat(this.credito, " centesimi."));
    };
    // Metodo per verificare il numero di chiamate effettuate
    User.prototype.verificaNumeroChiamate = function () {
        console.log("Numero di minuti di chiamate effettuati da ".concat(this.nome, " ").concat(this.cognome, ": ").concat(this.numeroChiamate, " minuti."));
    };
    return User;
}());
// Interfaccia HTML per l'interazione con la classe User
function effettuaRicarica() {
    var nome = document.getElementById('nome').value;
    var cognome = document.getElementById('cognome').value;
    var ammontareRicarica = parseInt(document.getElementById('ammontareRicarica').value);
    var utente = new User(nome, cognome);
    utente.ricarica(ammontareRicarica);
    utente.verificaSaldo();
}
function effettuaChiamata() {
    var nome = document.getElementById('nome').value;
    var cognome = document.getElementById('cognome').value;
    var minutiChiamata = parseInt(document.getElementById('minutiChiamata').value);
    var utente = new User(nome, cognome);
    utente.chiamata(minutiChiamata);
    utente.verificaSaldo();
    utente.verificaNumeroChiamate();
}
function verificaSaldo() {
    var nome = document.getElementById('nome').value;
    var cognome = document.getElementById('cognome').value;
    var utente = new User(nome, cognome);
    utente.verificaSaldo();
}
function verificaNumeroChiamate() {
    var nome = document.getElementById('nome').value;
    var cognome = document.getElementById('cognome').value;
    var utente = new User(nome, cognome);
    utente.verificaNumeroChiamate();
}
function azzeraChiamate() {
    var nome = document.getElementById('nome').value;
    var cognome = document.getElementById('cognome').value;
    var utente = new User(nome, cognome);
    utente.azzeraChiamate();
    utente.verificaNumeroChiamate();
}
