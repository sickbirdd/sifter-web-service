import {React, useState} from 'react';
import AnswerBox from './AnswerBox';
import GoldMedal from '../img/gold.png';
import SilverMedal from '../img/silver.png';
import BronzeMedal from '../img/bronze.png';
const images = [GoldMedal, SilverMedal, BronzeMedal, "", "", "", "", "", "", ""];
const types = ["gold", "silver", "bronze", "common", "common", "common", "common", "common", "common", "common"];
function ResultBox({result, isLoad, clickMode, index}) {
    const [visible, setVisible] = useState(false);
    return (
        <div className={isLoad ? "result" : "hide"}>
            {   
                isLoad ? <AnswerBox text={result['answer']} key={index} score={result['score']} img={images[index]} type={types[index]}/>:<div></div>
            }
            <div className={ (isLoad && clickMode !== 'none') ? "hide" : "showContext"}>
                <span>출처</span>
                <button className={visible ? "hide" : "downBtn"} onClick={() => isLoad ? setVisible(!visible) : ""}><i className="fa-solid fa-caret-down"></i></button>
                <button className={visible ? "upBtn" : "hide"} onClick={() => setVisible(!visible)}><i className="fa-solid fa-caret-up"></i></button>
            </div>
            {
                clickMode !== 'none' ? "" 
                :<div className={visible ? "context" : "hide"}>
                    {/* <!-- 
                        지문을 일부 띄워두고, 옆의 버튼을 누르면
                        버튼이 돌아가고, 지문 전체를 보여줘야함
                        다시 버튼을 누르면 지문 일부만 보이도록하고
                        다시 버튼을 돌려야함
                    --> */}
                    <div className='title'>&lt;{result['title']}&gt;</div>
                    <div>{result['content'].substr(0, result['start'])}</div>
                    <div className='answer'>{result['content'].substr(result['start'], result['answer'].length)}</div>
                    <div>{result['content'].substr(result['end'] + 1)}</div>
                </div>
            }
        </div>
    )
}
export default ResultBox;