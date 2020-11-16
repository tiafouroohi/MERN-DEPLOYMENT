const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pets', {useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => console.log("Mongo DB connected"))
    .catch(err => console.log("Error", err));