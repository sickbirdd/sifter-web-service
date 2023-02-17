import {search_api, inference_api} from '../apis/api.js';
import React, { useState } from 'react';

function Content() {
    return (
        <div class="main">
            {/* <!-- 
                초기 -> example ... 정답 예시 내용만 띄워둠
                text -> attachText ... text 입력 버튼 클릭 시 보여줌
                file -> attachFile ... 첨부 파일 버튼 클릭 시 보여줌
                정답 -> result ... 검색 시 결과 띄워줘야 한다
            --> */}
            <div class="example">
                <div class="rank">Top 1</div>
                <div class="answer">
                    ANSWER : ~~~~~~~~~~
                </div>  
                <div class="context">
                    {/* <!-- 
                        지문을 일부 띄워두고, 옆의 버튼을 누르면
                        버튼이 돌아가고, 지문 전체를 보여줘야함
                        다시 버튼을 누르면 지문 일부만 보이도록하고
                        다시 버튼을 돌려야함
                    --> */}
                    <span>지문 ~~~~</span>
                    {/* <!-- <i class="fa-solid fa-caret-up"></i> : 버튼 1 --> */}
                    {/* <i class="fa-solid fa-caret-down"></i> <!-- : 버튼 2 --> */}
                </div>
            </div>
            <div class="attachText">
                {/* <!-- 
                    오른쪽 상단에 X 버튼을 누르면 창 비활성화
                    지문 입력 후, 입력 버튼 누르면 입력되도록
                --> */}
                <button class="exitBtn">
                    <i class="fa-solid fa-circle-xmark"></i>
                </button>
                <textarea cols="30" rows="10" placeholder=""></textarea>
                <button class="textAttachBtn">입력</button>
            </div>
            <div class="attachFile">
                <span>Drag and drop your files!</span>
                {/* <!-- 끝나면 밑에 빼기 --> */}
                <div>input[type="file"]로 하면 디자인 하기 힘들듯</div>
                <div>div로 디자인 해놓은 부분에 자스로 드래그 앤 드롭 구현해야 할 듯</div>
            </div>
        </div>
    );
}

export default Content;