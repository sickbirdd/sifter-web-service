import './index.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import {search_api, inference_api} from './apis/api.js';
import React, { useState } from 'react';

function App() {
  return (
    <body>
        {/* <!-- Header : 로고, 버튼, 검색 바 --> */}
        <Header />
        {/* <!-- Result : 검색 결과 예시 및 실제 결과 --> */}
        <Content />
        {/* <!-- Footer : copyright 등 조원 정보 및 문서화 사이트 연결 --> */}
        <Footer />
    </body>
  );
}

export default App;
