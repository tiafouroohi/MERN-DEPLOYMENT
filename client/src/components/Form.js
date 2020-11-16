import React, {useState, useEffect} from 'react';

const Form = props => {
    const {pet, errors, changeHandler, submitHandler, action} = props;
    return (
        <>
         <form onSubmit = {submitHandler} >
             {
                 errors.name ?
                 <span>{errors.name.message}</span>:
                 <span></span>
             }
          
            <label htmlFor = "name" >Name :</label>
            <input type = "text" name = "name" onChange = {changeHandler} value = {pet.name} />


            {
                 errors.type ?
                 <span>{errors.type.message}</span>:
                 <span></span>
             }
            <label htmlFor = "type" >Type :</label>
            <input type = "text" name = "type" onChange = {changeHandler} value = {pet.type} />

            {
                 errors.description ?
                 <span>{errors.description.message}</span>:
                 <span></span>
             }
            <label htmlFor = "description" >Description:</label>
            <input type = "text" name = "description" onChange = {changeHandler} value = {pet.description} />
            
            <h3>Skills:</h3>
            <br></br>
            
            <label htmlFor = "skillOne" >Skill:</label>
            <input type = "text" name = "skillOne" onChange = {changeHandler} value = {pet.skillOne} />

            <label htmlFor = "skillTwo" >Skill:</label>
            <input type = "text" name = "skillTwo" onChange = {changeHandler} value = {pet.skillTwo} />

            <label htmlFor = "skillThree" >Skill:</label>
            <input type = "text" name = "skillThree" onChange = {changeHandler} value = {pet.skillThree} />

            <input type = "submit" value = {action} />

        </form>
            
        </>
    )
}

export default Form;
