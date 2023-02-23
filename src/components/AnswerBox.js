import {React} from 'react';

function AnswerBox({text, score, img}) {
    return (
        <span>
            <div className="rank">
                {
                    (img === null) ? "" : <img alt="Medal" className="medal" src={img}/> 
                }
            </div>
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
        </span>
    )
}
AnswerBox.defaultProps = { 
    img: null,
    text: "정답 예시",
    score: 0.0
}
export default AnswerBox;