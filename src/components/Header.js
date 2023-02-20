import MainLogo from '../img/android-chrome-192x192.png';
import SearchLogo from '../img/favicon-32x32.png';
import React, { useState } from 'react';
import {CONF} from '../config';
function Header({searchApi, isLoad, domainSelect}) {
    const [question, setQuestion] = useState("");
    const [domain, setDomain] = useState("Sport");
    const handleOnKeyPress = e => {
        if (e.key === 'Enter') {
            searchApi(CONF['QUERY'], question); // Enter 입력이 되면 클릭 이벤트 실행
        }
    };
    return (
        <header className={isLoad ? "logoSmall" : "logoBig"}>
            {/* <!-- 
                MainLogo : 사진 크기 큰 것(정답 들어오면 비활성화)
                SearchLogo: 사진 크기 작은 것(정답 들어오면 활성화)
                CSS 파트에 header 관련 배치 달라지는 부분 적용 
            --> */}
            {
                isLoad ? 
                <img 
                    alt="LOGO-SMALL" className="logo" src={SearchLogo}  
                /> : 
                <img 
                    alt="LOGO-BIG" className="logo" src={MainLogo} 
                />
            }
            <div className="buttons">
                {/* <!-- 
                    TEXT 입력 버튼 클릭시 main 파트에 text 입력 창 띄워짐
                --> */}
                <button className="textBtn">
                    <i className="fa-solid fa-file-lines"></i>
                    <span>TEXT 입력</span>
                </button>
                {/* <!-- 
                    첨부 파일 버튼 클릭시 main 파트에 Drag&Drop 창 띄워짐
                --> */}
                <button className="attachBtn">
                    <i className="fa-solid fa-file-arrow-up"></i>
                    <span>첨부 파일</span>
                </button>
                {/* <!-- 
                    ? 버튼에 마우스 호버 시 설명서가 뜬다.
                    PC가 아닌 경우 따로 옆에 뜨도록 만들어야 할 듯
                --> */}
                <button className="helpBtn">
                    <i className ="fa-solid fa-circle-question"></i>
                    <div className="helpText">
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
            <div className="searchBar">
                {/* <!-- 
                    초기에는 Default 도메인이 써져있고 
                    드롭다운 선택지 클릭 시 그 도메인으로 바뀐 후
                    모델도 바뀌도록 해야함
                --> */}
                <div className="dropdown">
                    <button className="dropBtn">
                        <span>{domain}</span>
                        <i className="fa-solid fa-caret-down"></i>
                    </button>
                    <div className="dropdownContent">
                        <button onClick={() => setDomain(domainSelect("SPORTS"))}>Sports</button>
                        <button onClick={() => setDomain(domainSelect("IT"))}>IT</button>
                        <button onClick={() => setDomain(domainSelect("ERICA"))}>ERICA</button>
                    </div>
                </div>
                {/* <!-- 
                    밑에 돋보기 버튼 누르면 내용 입력, ENTER 입력 시 내용 입력
                --> */}

                <input 
                    className="searching" type="text" placeholder="질문을 입력해주세요." 
                    onChange={(e)=>{setQuestion(e.target.value);}} 
                    onKeyDown={handleOnKeyPress}
                />
                <button className="searchBtn" onClick={() => searchApi(CONF['QUERY'], question)}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </header>
    );
}

export default Header;