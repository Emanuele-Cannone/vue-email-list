// Genera 10 mail tramite api e stampale in una lista.
// Potete utilizzare questa api:
// https://flynn.boolean.careers/exercises/api/random/mail


var app = new Vue({
    el: '#contenitore',
    data:{
        email: '', // mi serve inizializzarlo vuoto per fare in modo di salvare ogni risultato
        listaEmail: [] // mi serve come contenitore per salvare ogni mail
    },
    created(){
        // creo un ciclo in modo che definisco quanti risultati dovrò prendere
        for (let i = 0; i < 10; i++) {
            
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail') 
            .then(result  => { // uso la funzione freccia così mi riconosce il 'this'
                this.email = result.data.response; // result è preso dalla mia funzione - data e response sono il percorso visualizzato nell'API
                this.listaEmail.push(this.email); // inserisco il risultato nell'array
            })
            
            
        }
        console.log(this.listaEmail); // vedo se non esplode il mondo
    }
});