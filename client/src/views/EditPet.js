import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import Form from '../components/Form';

const EditPet = props => {
    const {id} = props;

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
        axios.patch(`http://localhost:8000/api/pet/edit/${id}`, pet)
        .then(response => {
            const res = response.data;
            if(res.message === "error"){
                setErrors(res.data.errors);
            } else {
                navigate(`/pet/${id}`);
            }
        })
        .catch(err => console.log(err));
    }

    useEffect( () => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
        .then(response => {
            if(response.data.message === "error" || response.data.data == null) {
                navigate("/");
            } else {
                setPet(response.data.data);
            }
        })
        .catch(err => console.log(err))
    }, [id])

    return (
        <>
        <h2>Edit {pet.name}</h2>
        <Form
        changeHandler = {changeHandler}
        submitHandler = {submitHandler}
        pet = {pet}
        errors = {errors}
        action = "Update This Pet"
        />
            
        </>
    )
}

export default EditPet;
