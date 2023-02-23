import {React} from 'react';

function AnswerBox({text, score, img, type}) {
    return (
        <div className={`answerbox-${type}`}>
            {
                    (img === null) ? "" : <img alt="Medal" className="medal" src={img}/> 
            }
            <div className="answer">
                {
                    `ANSWER : ${text}`
                }
            </div>
            <div className="score">
                {
                    `${score.toFixed(5)}`
                }
            </div>
        </div>
    )
}
AnswerBox.defaultProps = { 
    img: null,
    text: "정답 예시",
    score: 0.0
}
export default AnswerBox;