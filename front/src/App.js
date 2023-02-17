import React, { useState } from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css';
import axios from 'axios';
function App() {
  const [data, setData] = useState([{"fields":{"content":"여기에 본문이", "title":"예제"}}]);
  const searchApi = async(query, question="", isRequest=false) => {
    try {
      if(isRequest===false || question==="")return;
      const search_url = `http://localhost:3000/search`
      query['commonQuery'] = question
      console.log(search_url, query);
      const article = await axios.post(search_url, query);
      console.log(article['data']['sample']['document'])
      setData(article['data']['sample']['document']);
      return article
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Search Query")
    }
  }
  return (
    <body>
        {/* <!-- Header : 로고, 버튼, 검색 바 --> */}
        <Header searchApi={searchApi}/>
        {/* <!-- Result : 검색 결과 예시 및 실제 결과 --> */}
        <Content data={data}/>
        {/* <!-- Footer : copyright 등 조원 정보 및 문서화 사이트 연결 --> */}
        <Footer />
    </body>
  );
}

export default App;
