const mongoose = require ('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"]
    },

    type: {
        type: String,
        required: [true, "Type of animal is required"],
        minlength: [3, "Type must be at least 3 characters long"]
    },

    description: {
        type: String,
        required: [true, "Description is needed"],
        minlength: [3, "Description must be at least 3 characters long"]
    },

    skillOne: {
        type: String,
    },

    skillTwo: {
        type: String,
    },

    skillThree: {
        type: String,
    }
    
}, {timestamps: true});

const Pet = mongoose.model("Pet", PetSchema);

module.exports = {
    Pet
}