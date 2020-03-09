import React from "react";

function Questions(props) {
    const options = props.options.map(opt => <buttom key={opt}>{opt}</buttom>) // percorrer as opcoes
    return <div>
        <h2>{props.statement}</h2>
        {options}
    </div>
}
  
export default Questions;
  