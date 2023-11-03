import React, {useState} from "react";

function StringStateVariables(){

    const [firstName, setFirstName] = useState("Shreya");
    
    return(
        <div>
            <h2> String State Variables</h2>
            <p> First Name: {firstName } </p>
            <input className="form-control"
            value={firstName }
            onChange={(event) => setFirstName(event.target.value)} />
        </div>
    );
}

export default StringStateVariables;