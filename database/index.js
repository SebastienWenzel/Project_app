const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://senik:aze@cluster0.nmhcgfb.mongodb.net/twitter?retryWrites=true&w=majority')
        .then(() => {console.log('connexion db ok !')})
        .catch(err => console.log(err));