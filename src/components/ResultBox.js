import {React, useState} from 'react';
import AnswerBox from './AnswerBox';
import GoldMedal from '../img/gold.png';
import SilverMedal from '../img/silver.png';
import BronzeMedal from '../img/bronze.png';
const images = [GoldMedal, SilverMedal, BronzeMedal, "", "", "", "", "", "", ""];
const types = ["gold", "silver", "bronze", "common", "common", "common", "common", "common", "common", "common"];
function ResultBox({result, isLoad,  clickMode, index}) {
    const [visible, setVisible] = useState(false);
    return (
        <div className="result">
            {   
                isLoad ? <AnswerBox text={result['answer']} key={index} img={images[index]} type={types[index]}/>:<div></div>
            }
            <div className="showContext">
                <span>출처</span>
                <button className={visible ? "hide" : "downBtn"} onClick={() => isLoad ? setVisible(!visible) : ""}><i className="fa-solid fa-caret-down"></i></button>
                <button className={visible ? "upBtn" : "hide"} onClick={() => setVisible(!visible)}><i className="fa-solid fa-caret-up"></i></button>
            </div>
            <div className={visible ? "context" : "hide"}>
                {/* <!-- 
                    지문을 일부 띄워두고, 옆의 버튼을 누르면
                    버튼이 돌아가고, 지문 전체를 보여줘야함
                    다시 버튼을 누르면 지문 일부만 보이도록하고
                    다시 버튼을 돌려야함
                --> */}
                {result['title'] ? <div className='title'>&lt;{result['title']}&gt;</div> : ""}
                {result['domain'] === "HYU" ? 
                    <div className='url'>
                        <a href={result['url']} target='_blank' rel='noreferrer'>본문 URL로 이동</a>
                        <iframe title='url_link' src={result['url']} seamless></iframe>
                    </div>
                    : <div className='paragraph'>
                        {result['content'].substr(0, result['start'])}
                        <span className='answerPart'>{result['content'].substr(result['start'], result['end'] - result['start'])}</span>
                        {result['content'].substr(result['end'])}
                    </div>
                }
                <div className="score">
                    {`score : ${result['score'].toFixed(5)}`}
                </div>
            </div>
        </div>
    )
}
export default ResultBox;