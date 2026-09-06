/* 
    questo file definisce la struttura della pagina
    può contenere HTML CSS Javascript e tag EJS che contengono dati dell'applicazione 
*/

const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'ejs'); // imposto template engine predefinito dell'applicazione EJS

// route che mostra l'elenco degli items
app.get('/', (req, res) => {

    const title = 'Homepage';

    const items = [
        {id:1,name:'Item 1'},
        {id:2,name:'Item 2'},
        {id:3,name:'Item 3'}
    ];

    res.render('index', { title, items });
});

// route che mostra un item
// id: è la parte variabile della route
app.get('/item/:id', (req, res) => {

    const id = req.params.id;
    
    const item = {
        id: id, 
        name: `Item ${id}`
    };
    
    res.render('item', { item });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});