import React, { useState } from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import axios from 'axios';
import {CONF} from './config';
import './index.css';
function App() {
  const [data, setData] = useState([{"fields":{"content":"여기에 본문이", "title":"예제"}}]);
  const searchApi = async(query, question="") => {
    try {
      query['commonQuery'] = question
      const article = await axios.post(CONF['BASE_URL'] + "/search" , query);
      setData(article['data']['sample']['document']);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Search Query")
    }
  }
  return (
    <div>
        {/* <!-- Header : 로고, 버튼, 검색 바 --> */}
        <Header searchApi={searchApi}/>
        {/* <!-- Result : 검색 결과 예시 및 실제 결과 --> */}
        <Content data={data}/>
        {/* <!-- Footer : copyright 등 조원 정보 및 문서화 사이트 연결 --> */}
        <Footer />
    </div>
  );
}

export default App;
