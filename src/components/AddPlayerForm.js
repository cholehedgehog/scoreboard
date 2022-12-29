import React, { useState } from "react";

const AddPlayerForm = (props) => {
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addPlayer(value);
        setValue('')
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            {console.log(value)}
            <input 
                type = "text"
                value = {value}
                placeholder = "Enter a player's name"
                onChange={(event) => setValue(event.target.value)}
            />
            <input 
                type = "submit"
                value = "add player"
            />
        </form>
    );
}

export default AddPlayerForm;