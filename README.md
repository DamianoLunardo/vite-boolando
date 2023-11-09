## Descrizione
Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout.
- Riprendere l'esercizio (html-css-boolando), ma la sfida è suddividerlo in componenti e provare a sfruttare SASS per rendere il nostro stile più leggibile e flessibile.
#### Bonus
- Popoliamo le voci dell’header (sia le tre voci testuali che le tre icone) dinamicamente sfruttando i data().

## Giorno 2
- Aggiungete il file “db.json” al progetto e importatelo in App (o nel compoinente Main se lo avete fatto), per averlo a disposizione nei data.
- Cicliamo sui prodotti e per ognuno di essi creiamo un componente Card.
- Aggiungiamo al componente Card la / le props necessarie affinché possa mostrare i dati di un prodotto.
- Modifichiamo, di conseguenza, i campi della card affinché mostrino i dati ricevuti da fuori.

## Giorno 3
- Impostiamo lo store globale con i dati che gestiscono la nostra app (i prodotti) e facciamo in modo che i componenti predano i dati dallo store.
Temporaneamente importate il json nello store. e controllate che lápp funzioni correttamente.
- Installiamo la libreria json-server e aggiungiamo al package.json lo script “server” necessario per avviarlo: “json-server --watch db.json” e di conseguenza avviamolo.
Rimuoviamo l’import del json dallo store che inizialmente dovra contenere un arrai vuoti di prodotti e poi facciamo in modo che la nostra App, all’avvio, faccia una chiamata GET al server json all’indirizzo http://localhost:3000/products e recuperando i dati dalla risposta li vada a salvare nello store globale.

## Giorno 4
- Facciamo in modo che al click sul nome del prodotto nella card venga emesso un evento “show” verso il componente padre. Nel componente padre, ascoltiamo l’evento e apriamo una modale che mostra tutte le informazioni testuali del prodotto. Nella modale è presente una X (o un pulsante) per chiuderla.

#### Bonus
- Proviamo a creare una modale più completa: mostriamo le immagini del prodotto sulla sinistra e le informazioni di testo sulla destra.

