import Logo from '../img/android-chrome-192x192.png'
import React, { useState } from 'react';
import config from '../config.json';
function Header({searchApi}) {
    const [question, setQuestion] = useState("");
    return (
        <header>
            {/* <!-- 
                정답 들어오면 비활성화
                초기 Logo : 사진 크기 큰 것
                CSS 파트에 header 관련 배치 달라지는 부분 적용 
            --> */}
            <img class="logo" src={Logo} />
            {/* <!-- 
                정답 들어오면 활성화
                사지 크기 작아지고, CSS 파트에 header 관련 배치 달라지는 부분 적용 
            -->
            <!-- <img class="logo" src="./img/favicon-32x32.png" /> --> */}
            <div class="buttons">
                {/* <!-- 
                    TEXT 입력 버튼 클릭시 main 파트에 text 입력 창 띄워짐
                --> */}
                <button class="textBtn">
                    <i class="fa-solid fa-file-lines"></i>
                    <span>TEXT 입력</span>
                </button>
                {/* <!-- 
                    첨부 파일 버튼 클릭시 main 파트에 Drag&Drop 창 띄워짐
                --> */}
                <button class="attachBtn">
                    <i class="fa-solid fa-file-arrow-up"></i>
                    <span>첨부 파일</span>
                </button>
                {/* <!-- 
                    ? 버튼에 마우스 호버 시 설명서가 뜬다.
                    PC가 아닌 경우 따로 옆에 뜨도록 만들어야 할 듯
                --> */}
                <button class="helpBtn">
                    <i class="fa-solid fa-circle-question"></i>
                    <div class="helpText">
                        <div>설명서</div>
                        <ol>
                            <li>DOMAIN 선택</li>
                            <li>검색어 입력</li>
                            <li>검색을 원하는 TEXT 입력 가능</li>
                            <li>검색을 원하는 첨부 파일 첨부 가능</li>
                        </ol>
                    </div>
                </button>
            </div>
            <div class="searchBar">
                {/* <!-- 
                    초기에는 Default 도메인이 써져있고 
                    드롭다운 선택지 클릭 시 그 도메인으로 바뀐 후
                    모델도 바뀌도록 해야함
                --> */}
                <div class="dropdown">
                    <button class="dropBtn">
                        <span>DOMAIN</span>
                        <i class="fa-solid fa-caret-down"></i>
                    </button>
                    <div class="dropdownContent">
                        <a href="#">Sport</a>
                        <a href="#">IT</a>
                        <a href="#">ERICA</a>
                    </div>
                </div>
                {/* <!-- 
                    밑에 돋보기 버튼 누르면 내용 입력, ENTER 입력 시 내용 입력
                --> */}
                <input class="searching" type="text" placeholder="검색어 입력" onChange={(e)=>{setQuestion(e.target.value);}} />
                <button class="searchBtn" onClick={() => searchApi(config['queryInit'], question, true)}>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </header>
    );
}

export default Header;