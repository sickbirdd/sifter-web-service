// import MainLogo from '../img/android-chrome-192x192.png';
// import SearchLogo from '../img/favicon-32x32.png';

import MainLogo from '../img/Symbol+typo.png';
import SearchLogo from '../img/Frame Symbol.png';
import SearchBtn from '../img/Symbol Logo.png';
import React, { useState } from 'react';

function Header({search, context, isLoad, domainSelect, clickMode, setClick}) {
    const [question, setQuestion] = useState("");
    const [domain, setDomain] = useState("Sport");
    const handleOnKeyPress = e => {
        if (e.key === 'Enter') {
            search(question, context);
        }
    };

    function contextAction(actionName) {
        if(clickMode === actionName){
            setClick("none")
        } else{
            setClick(actionName);
        }
    };

    return (
        <header>
            <div className={isLoad ? "head logoSmall" : "head logoBig"}>
                {/* <!-- 
                    MainLogo : 사진 크기 큰 것(정답 들어오면 비활성화)
                    SearchLogo: 사진 크기 작은 것(정답 들어오면 활성화)
                    CSS 파트에 header 관련 배치 달라지는 부분 적용 
                --> */}
                {
                    isLoad ? 
                    <img 
                        alt="LOGO-SMALL" className="logo" src={SearchLogo} 
                        onClick={() => window.location.reload()} 
                    /> : 
                    <img 
                        alt="LOGO-BIG" className="logo" src={MainLogo} 
                        onClick={() => window.location.reload()} 
                    />
                }

                <div className={isLoad ? "notLogo Small" : "notLogo Big"}>
                    <div className={isLoad ? "buttons btnSmall" : "buttons btnBig"}>
                        
                        {/* <!-- 
                            ? 버튼에 마우스 호버 시 설명서가 뜬다.
                            PC가 아닌 경우 따로 옆에 뜨도록 만들어야 할 듯
                        --> */}

                        <button className={isLoad ? "textBtnHead" : "hide"} onClick={() => contextAction("context")}>
                            <i className="fa-solid fa-file-lines"></i>
                            <div className="inputText">TEXT 입력</div>
                        </button>
                        {/* <!-- 
                            첨부 파일 버튼 클릭시 main 파트에 Drag&Drop 창 띄워짐
                        --> */}
                        <button className={isLoad ? "attachBtnHead" : "hide"}onClick={() => contextAction("file")}>
                            <i className="fa-solid fa-file-arrow-up"></i>
                            <div className="fileText">파일 첨부</div>
                        </button>

                        <button className="helpBtn">
                            <i className ="fa-solid fa-circle-info"></i>
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
                    
                    <div className={isLoad ? "searchBar searchSmall" : "searchBar"}>
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
                        <button className="searchBtn" onClick={() => search(question, context)}>
                            {/* <i className="fa-solid fa-magnifying-glass"></i> */}
                            <img alt="Search-Logo" src={SearchBtn}/>
                        </button>
                    </div>
                </div>

                <div className={isLoad ? "hide" : "example"}>
                    {/* <!-- 
                        TEXT 입력 버튼 클릭시 main 파트에 text 입력 창 띄워짐
                    --> */}
                    <button className="textBtn" onClick={() => contextAction("context")}>
                        <div className='tile-icon'><i className="fa-solid fa-file-lines"></i></div>
                        <div>TEXT 입력</div>
                    </button>
                    {/* <!-- 
                        첨부 파일 버튼 클릭시 main 파트에 Drag&Drop 창 띄워짐
                    --> */}
                    <button className="attachBtn" onClick={() => contextAction("file")}>
                        <div className='tile-icon'><i className="fa-solid fa-file-arrow-up"></i></div>
                        <div>파일 첨부</div>
                    </button>
                    <button className='exampleBtn one' onClick={() => search("메시 소속 팀", "")}>
                        <div className='tile-icon'><i className ="fa-solid fa-circle-question"></i></div>
                        <div>예시 질문 1</div>
                    </button> 
                    <button className='exampleBtn two' onClick={() => search("마이클 조던 신장", "")}>
                        <div className='tile-icon'><i className ="fa-solid fa-circle-question"></i></div>
                        <div>예시 질문 2</div>
                    </button> 
                    <button className='exampleBtn three' onClick={() => search("2020 롤드컵 우승팀", "")}>
                        <div className='tile-icon'><i className ="fa-solid fa-circle-question"></i></div>
                        <div>예시 질문 3</div>
                    </button>
                    <button className='exampleBtn four' onClick={() => search("2020-2021 유로파리그 우승팀", "")}>
                        <div className='tile-icon'><i className ="fa-solid fa-circle-question"></i></div>
                        <div>예시 질문 4</div>
                    </button> 
                    <button className='exampleBtn five' onClick={() => search("2020 한국시리즈 우승팀", "")}>
                        <div className='tile-icon'><i className ="fa-solid fa-circle-question"></i></div>
                        <div>예시 질문 5</div>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;