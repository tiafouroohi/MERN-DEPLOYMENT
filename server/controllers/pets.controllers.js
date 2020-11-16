const {Pet} = require ('../models/pets.models');

module.exports = {
    createPet: (req, res) => {
        Pet.exists({name: req.body.name})
        .then(petExists => {
            if(petExists){
                return Promise.reject({errors: {name: {message: "That pet is already in our shelter"}}});
            }
            return Pet.create(req.body)
        })
        .then(data => res.json({message: "successs", data: data}))
        .catch(err => res.json({message: "error", data: err}));
    },    

    allPet: (req, res) => {
        Pet.find()
        .then(data => res.json({message: "success", data: data}))
        .catch(err => res.json({message: "error", data: err}))
    },

    onePet: (req, res) => {
        Pet.findOne({_id:req.params.id})
            .then(data => res.json({message: "success", data: data}))
            .catch(err => res.json({message: "error", data: err}))       
    },

    updateOne: (req, res) => {
        Pet.exists ({_id: { $not: { $eq: req.params.id}}, name: req.body.name})
        .then(petExists => {
            if(petExists){
                return Promise.reject({errors: {name: {message: "That pet is already in our shelter"}}});
            }
            return Pet.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        })
            .then(data => res.json({message: "success", data: data}))
            .catch(err => res.json({message: "error", data: err}))
    },

    deletePet: (req, res) => {
        Pet.deleteOne({_id: req.params.id})
            .then(data => res.json({message: "success", data: data}))
            .catch(err => res.json({message: "error", data: err}))
    },

  
}