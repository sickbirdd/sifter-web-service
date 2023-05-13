import {React} from 'react';
import trophy from '../img/trophy.png';
function AnswerBox({text, img, type}) {
    return (
        <div className={`answerbox ${type}`}>
            <div className="ranking">
                {
                        (img === "") ? <img alt="Medal" className="medal" src={trophy}/> : <img alt="Medal" className="medal" src={img}/> 
                }
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
    text: "정답 예시"
}
export default AnswerBox;