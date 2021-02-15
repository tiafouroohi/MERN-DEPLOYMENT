import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const HomePage = () => {
    const [pet, setPet] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:8000/api/allpets")
        .then(response => setPet(response.data.data))
        .catch(err => console.log(err));
    }, [])

    const deleteHandler = i => {
        axios.delete(`http://localhost:8000/api/pet/${pet[i]._id}`)
        .then(response => {
            setPet(pet.filter((item, index) => index !== i));
        })
        .catch(err => console.log(err));
    }
    return (
        <>
        <Link to = "/create/pet">Add a Pet</Link>
        <h3>All Pets Here</h3>
        <ul>
            {
                pet.map( (item, i) => <li key = {i}> {item.name}| {item.type} | {item.description} | {item.skill} | <Link to={`/pet/${item._id}`}>Details</Link> | <Link to={`/pet/edit/${item._id}`}>Edit</Link> <button onClick={() => deleteHandler(i)}>Adopt this Pet!</button> </li>)
            }
        </ul>
            
        </>
    )
}

export default HomePage;
