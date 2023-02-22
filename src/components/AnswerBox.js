import {React} from 'react';

function AnswerBox({text, rank, score}) {
    return (
        <span>
            <div className="rank">{`Top ${rank}`}</div>
            <div className="answer">
                {
                    `ANSWER : ${text}`
                }
            </div>
        </span>
    )
}

export default AnswerBox;