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
  const [context, setContext] = useState("");

  const inferenceApi = (question, context) => {
    return new Promise(async(resolve, reject) => {
      try {
        const query = {
          inputs: {
              context: context,
              question: question
          },
          parameters: {
              "top_k": 1,
              "wait_for_model": true
          }
        }
        const guess = await axios.post(CONF['BASE_URL'] + modelPath, query, { headers: {Authorization: CONF['TOKEN']} });
        resolve(guess['data']['answer']);
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
    <div>
        {/* <!-- Header : 로고, 버튼, 검색 바 --> */}
        <Header search={search} context={context} isLoad={isLoad} domainSelect={domainSelect} isClick = {isClick} setClick={setClick}/>
        {/* <!-- Result : 검색 결과 예시 및 실제 결과 --> */}
        <Content data={data} isLoad={isLoad} answer={answer} isClick={isClick} context={context} setContext={setContext}/>
        {/* <!-- Footer : copyright 등 조원 정보 및 문서화 사이트 연결 --> */}
        <Footer />
    </div>
  );
}

export default App;
