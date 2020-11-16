import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const ViewPet = props => {
    const {id} = props;

    const [pet, setPet] = useState({
        name: "",
        type: "",
        description: "",
        skillOne: "",
        skillTwo: "",
        skillThree: ""
    });

    useEffect( () => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
        .then(response => {
            if(response.data.message == "error" || response.data.data == null){
                navigate("/allpets");
            } else {
                setPet(response.data.data);
            }
        })
        .catch(err => console.log(err));
    }, [id])

    const deleteHandler = i => {
        axios.delete(`http://localhost:8000/api/pet/${id}`)
        .then(response => {
            setPet(pet);
            navigate("/allpets");
        })
        .catch(err => console.log(err));
    }

  
   
    return (
        <>
        <Link to = "/allpets" >View All Pets</Link> | <Link to={`/pet/edit/${id}`}>Edit</Link>

        <h2>Details about: {pet.name}</h2>
        <h4>Pet type: {pet.type}</h4>
        <h4>Description: {pet.description}</h4>
        <h4>Skills:</h4>
        <p> {pet.skillOne} </p>
        <p> {pet.skillTwo} </p>
        <p> {pet.skillThree} </p>

        <button onClick = {() => deleteHandler(pet)}>Adopt This Pet</button>
        </>
    )
}

export default ViewPet
