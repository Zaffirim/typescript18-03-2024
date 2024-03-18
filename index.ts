// Definizione dell'interfaccia per lo smartphone
interface Smartphone {
    credito: number;
    numeroChiamate: number;
}

// Definizione della classe User che implementa l'interfaccia Smartphone
class User implements Smartphone {
    nome: string;
    cognome: string;
    credito: number;
    numeroChiamate: number;

    constructor(nome: string, cognome: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.credito = 0; // Credito iniziale a 0
        this.numeroChiamate = 0;
    }

    // Metodo per effettuare una ricarica
    ricarica(ammontare: number) {
        this.credito += ammontare;
    }

    // Metodo per effettuare una chiamata
    chiamata(minuti: number) {
        const costoChiamata = minuti * 20; // Costo fisso di 20 centesimi al minuto
        if (costoChiamata <= this.credito) {
            this.credito -= costoChiamata;
            this.numeroChiamate += minuti;
        } else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    }

    // Metodo per restituire il credito disponibile
    chiamata404(): number {
        return this.credito;
    }

    // Metodo per restituire il numero di minuti passati in chiamata
    getNumeroChiamata(): number {
        return this.numeroChiamate;
    }

    // Metodo per azzerare il numero di chiamate effettuate
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }

    // Metodo per verificare il saldo residuo
    verificaSaldo() {
        console.log(`Saldo residuo di ${this.nome} ${this.cognome}: ${this.credito} centesimi.`);
    }

    // Metodo per verificare il numero di chiamate effettuate
    verificaNumeroChiamate() {
        console.log(`Numero di minuti di chiamate effettuati da ${this.nome} ${this.cognome}: ${this.numeroChiamate} minuti.`);
    }
}

// Interfaccia HTML per l'interazione con la classe User
function effettuaRicarica() {
    const nome = (<HTMLInputElement>document.getElementById('nome')).value;
    const cognome = (<HTMLInputElement>document.getElementById('cognome')).value;
    const ammontareRicarica = parseInt((<HTMLInputElement>document.getElementById('ammontareRicarica')).value);

    const utente = new User(nome, cognome);
    utente.ricarica(ammontareRicarica);
    utente.verificaSaldo();
}

function effettuaChiamata() {
    const nome = (<HTMLInputElement>document.getElementById('nome')).value;
    const cognome = (<HTMLInputElement>document.getElementById('cognome')).value;
    const minutiChiamata = parseInt((<HTMLInputElement>document.getElementById('minutiChiamata')).value);

    const utente = new User(nome, cognome);
    utente.chiamata(minutiChiamata);
    utente.verificaSaldo();
    utente.verificaNumeroChiamate();
}

function verificaSaldo() {
    const nome = (<HTMLInputElement>document.getElementById('nome')).value;
    const cognome = (<HTMLInputElement>document.getElementById('cognome')).value;

    const utente = new User(nome, cognome);
    utente.verificaSaldo();
}

function verificaNumeroChiamate() {
    const nome = (<HTMLInputElement>document.getElementById('nome')).value;
    const cognome = (<HTMLInputElement>document.getElementById('cognome')).value;

    const utente = new User(nome, cognome);
    utente.verificaNumeroChiamate();
}

function azzeraChiamate() {
    const nome = (<HTMLInputElement>document.getElementById('nome')).value;
    const cognome = (<HTMLInputElement>document.getElementById('cognome')).value;

    const utente = new User(nome, cognome);
    utente.azzeraChiamate();
    utente.verificaNumeroChiamate();
}