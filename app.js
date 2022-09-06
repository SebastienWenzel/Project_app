const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
//si aucun fichier n'est spécifier dans le require (par defaut index.js)
const index = require('./routes');  
//spécifier le port
const port = process.env.PORT || 3000;
 
//définir le folder pour nos vues
app.set('views', path.join(__dirname, 'views'));
//view engine permet éviter de réécrire extension
app.set('view engine', 'pug');
 
app.use(morgan('short'));
//static
app.use(express.static(path.join(__dirname, 'public')));
//middleware natif : récupération des datas method POST
app.use(express.json());
//data sous un autre format que json
app.use(express.urlencoded({extended: true}));
 
//route
app.use(index);
 
 
//Ecoute du port
app.listen(port);