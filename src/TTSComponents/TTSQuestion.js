import React from "react";

function TTSQuestion(props) {
    return(
        <div className="d-flex felx-row align-items-baseline">
            <div className="pr-2">
                <p>{props.question}</p>
            </div>
        </div>
    );
}

export default TTSQuestion;