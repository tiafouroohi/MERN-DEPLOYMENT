const controller = require('../controllers/pets.controllers');

module.exports = app => {
    app.post('/api/create/pet', controller.createPet);
    app.get("/api/allpets", controller.allPet);
    app.get("/api/pet/:id", controller.onePet);
    app.patch("/api/pet/edit/:id", controller.updateOne);
    app.delete("/api/pet/:id", controller.deletePet)
}