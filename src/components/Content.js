import {React, useState} from 'react';
import ContextBox from './ContextBox';
import ResultBox from './ResultBox';
function Content({search, data, isLoad, clickMode, context, setContext, setFile}) {
    const [more, setMore] = useState(false);
    return (
        <div className="main">
            <ContextBox clickMode={clickMode} context={context} setContext={setContext} setFile={setFile} isLoad={isLoad}/>
            {/* <!-- 
                초기 -> example ... 예시 질문 버튼
                text -> attachText ... text 입력 버튼 클릭 시 보여줌
                file -> attachFile ... 첨부 파일 버튼 클릭 시 보여줌
                정답 -> result ... 검색 시 결과 띄워줘야 한다 (더보기 버튼 누를 시 top-k)
            --> */}
            {data.length !== 0 ? <ResultBox key={0} result={data[0]} index={0} isLoad={isLoad} clickMode={clickMode}/> : ""}
            <div className={ isLoad ? "" : "hide"}>
                <span>더보기</span>
                <button className={more ? "hide" : "downBtn"} onClick={() => isLoad ? setMore(!more) : ""}><i className="fa-solid fa-caret-down"></i></button>
                <button className={more ? "upBtn" : "hide"} onClick={() => setMore(!more)}><i className="fa-solid fa-caret-up"></i></button>
            </div>
            <div className={ more ? "realview" : "preview"}>
                {data.length !== 0 ? <ResultBox key={1} result={data[1]} index={1} isLoad={isLoad} clickMode={clickMode}/> : ""}
            </div>      
            <div className={ more ? "blurrr" : "hide"}>
                {
                    data.slice(3).map((result, index) => {return <ResultBox key={index+2} result={result} index={index+2} isLoad={isLoad} clickMode={clickMode}/>})
                }
            </div>
        </div>
    );
}
Content.defaultProps = {
    isLoad: false,
    data: [{"fields":{"content":"여기에 본문이", "title":"예제"}}],
};
export default Content;