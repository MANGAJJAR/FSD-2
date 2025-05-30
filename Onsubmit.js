import React from 'react';

export default function Form() {
    function handleSubmit(e){
        e.preventDefault();
        alert("Form Submitted");
    }

    function OnSubmit(e){
        e.preventDefault();
        alert("Form Change");
    }

    function onChange(e){
        console.log(e.target.value)
    }

    return (
       <form onSubmit={handleSubmit}>
            Name: <input type="text" onChange={onChange}/>
           <button type="submit">Submit</button>
           <button type="button" onClick={OnSubmit}>Check</button>
       </form>
    );
}
