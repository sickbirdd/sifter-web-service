import {React, useState} from 'react';
import ContextBox from './ContextBox'

function Content({data, answer, isClick}) {

    return (
        <div className="main">
            {/* <!-- 
                초기 -> example ... 정답 예시 내용만 띄워둠
                text -> attachText ... text 입력 버튼 클릭 시 보여줌
                file -> attachFile ... 첨부 파일 버튼 클릭 시 보여줌
                정답 -> result ... 검색 시 결과 띄워줘야 한다
            --> */}
            <div className="example">
                <div className="rank">Top 1 {data[0]['fields']['title']}</div>
                <div className="answer">
                    {
                        `ANSWER : ${answer}`
                    }
                </div>  
                <div className="context">
                    {/* <!-- 
                        지문을 일부 띄워두고, 옆의 버튼을 누르면
                        버튼이 돌아가고, 지문 전체를 보여줘야함
                        다시 버튼을 누르면 지문 일부만 보이도록하고
                        다시 버튼을 돌려야함
                    --> */}
                    <span>{data[0]['fields']['content']}</span>
                    {/* <!-- <i class="fa-solid fa-caret-up"></i> : 버튼 1 --> */}
                    {/* <i class="fa-solid fa-caret-down"></i> <!-- : 버튼 2 --> */}
                </div>
            </div>
            <ContextBox isClick={isClick}/>
            <div className="attachFile">
                <span>Drag and drop your files!</span>
                {/* <!-- 끝나면 밑에 빼기 --> */}
                <div>input[type="file"]로 하면 디자인 하기 힘들듯</div>
                <div>div로 디자인 해놓은 부분에 자스로 드래그 앤 드롭 구현해야 할 듯</div>
            </div>
        </div>
    );
}
Content.defaultProps = {
    data: [{"fields":{"content":"여기에 본문이", "title":"예제"}}]
};
export default Content;