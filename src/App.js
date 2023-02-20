import React, { useState } from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import axios from 'axios';
import {CONF} from './config';
import './index.css';
function App() {
  const [data, setData] = useState([{"fields":{"content":"여기에 본문이", "title":"예제"}}]);
  const [answer, setAnswer] = useState("정답 예시");
  const [isLoad, setLoad] = useState(false);
  const [isClick, setClick] = useState(false);
  const [modelPath, setModelPath] = useState(CONF['SPORTS_MODEL_PATH']);

  const inferenceApi = async (question, context) => {
    try {
      const query = {
        inputs: {
            context: context,
            question: question
        },
        parameters: {
            "top_k": 1
        }
      }
      const guess = await axios.post(CONF['BASE_URL'] + modelPath, query, { headers: {Authorization: CONF['TOKEN']} });
      setAnswer(guess['data']['answer']);
      console.log(guess);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finally!")
    }
  };
  const searchApi = async(query, question="") => {
    try {
      query['commonQuery'] = question
      const article = await axios.post(CONF['BASE_URL'] + "/search" , query);
      setLoad(true);
      setData(article['data']['sample']['document']);
      inferenceApi(question, article['data']['sample']['document'][0]['fields']['content']);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Search Query")
    }
  }
  const domainSelect = (sel) => {
    if(sel === "SPORTS") {
      setModelPath(CONF['SPORTS_MODEL_PATH']);
      console.log(CONF['SPORTS_MODEL_PATH']);
    }
    else if(sel === "IT") {
      setModelPath(CONF['IT_MODEL_PATH']);
      console.log(CONF['IT_MODEL_PATH']);
    }
    else if(sel === "ERICA") {
      setModelPath(CONF['ERICA_MODEL_PATH']);
      console.log(CONF['ERICA_MODEL_PATH']);
    }
    else sel = "NULL";
    return sel;
  }
  return (
    <div>
        {/* <!-- Header : 로고, 버튼, 검색 바 --> */}
        <Header searchApi={searchApi} isLoad={isLoad} domainSelect={domainSelect} isClick = {isClick} setClick={setClick}/>
        {/* <!-- Result : 검색 결과 예시 및 실제 결과 --> */}
        <Content data={data} answer={answer} isClick={isClick}/>
        {/* <!-- Footer : copyright 등 조원 정보 및 문서화 사이트 연결 --> */}
        <Footer />
    </div>
  );
}

export default App;
