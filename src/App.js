import React, { useState } from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import axios from 'axios';
import {CONF} from './config';
import './index.css';
function App() {
  const [data, setData] = useState([]);
  const [isLoad, setLoad] = useState(false);
  const [isClick, setClick] = useState(false);
  const [modelPath, setModelPath] = useState(CONF['SPORTS_MODEL_PATH']);
  const [context, setContext] = useState("");
  
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

  const search = async(question, context) =>{
    try {
      console.log(context.length);
      const mrc_result = context.length === 0 ? 
      await axios.get(CONF['BASE_URL'] + '/inference', {params: {question: question}}) :
      await axios.post(CONF['BASE_URL'] + '/inference', {question: question, context: context});
      setData(mrc_result["data"]);
      setLoad(true);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Query Execution")
    }
  };
  
  return (
    <div className='wrapper'>
        <div className='contentWrapper'>
          {/* <!-- Header : 로고, 버튼, 검색 바 --> */}
          <Header search={search} context={context} isLoad={isLoad} domainSelect={domainSelect} isClick = {isClick} setClick={setClick}/>
          {/* <!-- Result : 검색 결과 예시 및 실제 결과 --> */}
          <Content search={search} data={data} isLoad={isLoad} isClick={isClick} context={context} setContext={setContext}/>
        </div>
        {/* <!-- Footer : copyright 등 조원 정보 및 문서화 사이트 연결 --> */}
        <Footer isLoad={isLoad} />
    </div>
  );
}

export default App;
