import React, { useState } from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import axios from 'axios';
import {CONF} from './config';
import './index.css';
function App() {
  const [data, setData] = useState([{"fields":{"content":"본문", "title":"제목"}}]);
  const [topAnswers, setAnswer] = useState([{"answer":"정답", "answer_start":0, "score":"모델 점수"}]);
  const [isLoad, setLoad] = useState(false);
  const [isClick, setClick] = useState(false);
  const [modelPath, setModelPath] = useState(CONF['SPORTS_MODEL_PATH']);
  const [context, setContext] = useState("");

  const inferenceApi = (question, context) => {
    return new Promise(async(resolve, reject) => {
      try {
        const guess = await axios.get(CONF['BASE_URL'] + '/inference', {params: {context: context, question: question, top_k: 1}});
        console.log(guess);
        resolve(guess['data']);
      } catch (error) {
        reject(error);
      } finally {
        console.log("finally!")
      }
    });
  };

  const searchApi = (query, question="") => {
    return new Promise(async(resolve, reject) => {
      try {
        query['commonQuery'] = question;
        const article = await axios.post(CONF['BASE_URL'] + "/search" , query);
        resolve(article['data']['sample']['document']);
      } catch (error) {
        reject(error);
      } finally {
        console.log("Search Query")
      }
    });
  };
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
  };

  function search(question, context) {
    if(context.length === 0) { // context가 입력되지 않을 경우 => 검색엔진 사용
      searchApi(CONF['QUERY'], question)
      .then((data) => {
        inferenceApi(question, data[0]['fields']['content'])
        .then((answer) => {
          setAnswer(answer)
          setData(data)
        }).catch((err) => {
          console.log(err);
        });
      }).catch((err) => {
        console.log(err);
      });
      setLoad(true);
    } else{
      inferenceApi(question, context)
      .then((answer) => {
        setData([{"fields":{"content":context, "title":"입력한 문장"}}]);
        setAnswer(answer)
      }).catch((err) => {
        console.log(err);
      });
      setLoad(true);
    }
  };
  
  return (
    <div className='wrapper'>
        <div className='contentWrapper'>
          {/* <!-- Header : 로고, 버튼, 검색 바 --> */}
          <Header search={search} context={context} setContext={setContext} isLoad={isLoad} domainSelect={domainSelect} isClick = {isClick} setClick={setClick}/>
          {/* <!-- Result : 검색 결과 예시 및 실제 결과 --> */}
          <Content data={data} isLoad={isLoad} topAnswers={topAnswers} isClick={isClick} context={context} setContext={setContext}/>
        </div>
        {/* <!-- Footer : copyright 등 조원 정보 및 문서화 사이트 연결 --> */}
        <Footer isLoad={isLoad} />
    </div>
  );
}

export default App;
