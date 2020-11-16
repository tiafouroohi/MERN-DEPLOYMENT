import React, {useState} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import From from '../components/Form';
import Form from '../components/Form';

const CreatePet = () => {
    const [pet, setPet] = useState({
        name: "",
        type: "",
        description: "",
        skillOne: "",
        skillTwo: "",
        skillThree: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        type: "",
        description: "",
        skillOne: "",
        skillTwo: "",
        skillThree: ""
    });

    const changeHandler = e => {
        setPet({
            ...pet,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/create/pet", pet)
            .then(response => {
                const res = response.data;
                if(res.message === "success"){
                    
                    navigate("/allpets");
                } else {
                    setErrors(res.data.errors);
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <>
        <h1> Create a Pet</h1>
        <Link to = "/allpets" > All Pets </Link>
        <Form
        changeHandler = {changeHandler}
        submitHandler = {submitHandler}
        pet = {pet}
        errors = {errors}
        action = "Add a Pet!"
        />  
        </>
    )
}

export default CreatePet;
