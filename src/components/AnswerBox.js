import {React} from 'react';
import trophy from '../img/trophy.png';
function AnswerBox({text, score, img, type}) {
    return (
        <div className={`answerbox ${type}`}>
            <div className="ranking">
                {
                        (img === "") ? <img alt="Medal" className="medal" src={trophy}/> : <img alt="Medal" className="medal" src={img}/> 
                }
                <div className="score">
                    {
                        `${score.toFixed(5)}`
                    }
                </div>
            </div>
            <div className="answer">
                {
                    `ANSWER : ${text}`
                }
            </div>
            
        </div>
    )
}
AnswerBox.defaultProps = { 
    text: "정답 예시",
    score: 0.0
}
export default AnswerBox;