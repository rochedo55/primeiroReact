import React from "react";
import Questions from "./Questions";
import Results from "./Results"

class Quiz extends React.Component {
    questions = [
        {
            statement: "qual a cor do cavalo1?",
            options: ["preto", "branco"]
        },
        {
            statement: "qual a cor do cavalo2?",
            options: ["preto", "branco"]
        }
    ]
    render(){
        return <div>
            <Questions></Questions>
            <Results></Results>
        </div>

    }
}
export default Quiz;