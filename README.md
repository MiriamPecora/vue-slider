<!-- CONSEGNA: -->
<!-- Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce -->

<!-- Risoluzione del problema: -->

-Inizializzo VueJS
-All'interno di data, inserisco l'array di oggetti che mi è stato fornito
-In methods, aggiungo un console log per sicurezza e lo richiamo usufruendo di .mounted
-Aggiungo v-cloak sul div con id:'app' per evitare lo sfarfallio al ricarimento della pagina
-Eseguo un ciclo v-for per l'array contenente le informazioni sulle slide per stamparlo in pagina
-Con v-show mi assicuro che solo una delle cinque immagini venga mostrata in pagina
-Creo due funzioni da legare ai bottoni in pagina per scorrere tra le slide
    -Aggiungo una condizione indicando che se l'index è < di 0 allora l'index dovrà assumere il valore dell'ultimo elemento dell'array
    -Aggiungo una condizione indicando che se l'index è >= della lunghezza dell'array allora l'index dovrà riassumere il valore di 0
-Aggiungo @click ai bottoni prev e next per renderli in ascolto delle funzioni per scorrere
Bonus 1:
    -Similmente a prima, con un v-for ciclo all'interno dell'array e recupero i valori di 'image' per inserirli all'interno delle src dei tag img. 
        -Una volta creati gli elementi per ogni elemento dell'array, creo una funzione di cui metto in ascolto le immagini nelle thumbnail
        -Nella funzione indico che la pic cliccata, equivale all'indice corrente, così da venire selezionata e passare come attiva
Bonus 2 & 3:
    -Creo un intervallo in mounted() per settare un timer per lo slideshow all'avvio del programma
    -Creo due funzioni:
        -Una per fermare lo slideshow al mouseover delle foto in primo piano
        -Una per re-startare lo slideshow al mouseleave delle foto