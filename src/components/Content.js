import {React, useState} from 'react';
import ContextBox from './ContextBox';
import ResultBox from './ResultBox';
function Content({data, isLoad, clickMode, context, setContext, setFile}) {
    const [exam, setExam] = useState(-1);
    return (
        <div className="main">
            {/* <!-- 
                초기 -> example ... 정답 예시 내용만 띄워둠
                text -> attachText ... text 입력 버튼 클릭 시 보여줌
                file -> attachFile ... 첨부 파일 버튼 클릭 시 보여줌
                정답 -> result ... 검색 시 결과 띄워줘야 한다
            --> */}
            <div className={isLoad ? "hide" : "hide"}>
                <div className='exampleList'>
                    <button className='exampleBtn' onClick={() => exam !== 1 ? setExam(1) : setExam(-1)}>예시 질문 1</button> 
                    <button className='exampleBtn' onClick={() => exam !== 2 ? setExam(2) : setExam(-1)}>예시 질문 2</button> 
                    <button className='exampleBtn' onClick={() => exam !== 3 ? setExam(3) : setExam(-1)}>예시 질문 3</button> 
                    <button className='exampleBtn' onClick={() => exam !== 4 ? setExam(4) : setExam(-1)}>예시 질문 4</button> 
                    <button className='exampleBtn' onClick={() => exam !== 5 ? setExam(5) : setExam(-1)}>예시 질문 5</button>
                </div>
                <div className={exam === -1 ? "hide" : "exampleAnswer " + exam}>
                    <div>예시 정답 {exam}</div>
                    <div>예시 지문 {exam}</div>
                </div>
            </div>
            {
                data.map((result, index) => {return <ResultBox key={index} result={result} index={index} isLoad={isLoad} clickMode={clickMode}/>})
            }
            <ContextBox clickMode={clickMode} context={context} setContext={setContext} setFile={setFile}/>
            {/*<div className="attachFile">
                <span>Drag and drop your files!</span>
                <!-- 끝나면 밑에 빼기 --> 
                <div>input[type="file"]로 하면 디자인 하기 힘들듯</div>
                <div>div로 디자인 해놓은 부분에 자스로 드래그 앤 드롭 구현해야 할 듯</div>
            </div>*/}
        </div>
    );
}
Content.defaultProps = {
    isLoad: false,
    data: [{"fields":{"content":"여기에 본문이", "title":"예제"}}],
};
export default Content;