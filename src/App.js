import React, { useState } from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import axios from 'axios';
import {CONF} from './config';
import './index.css';
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLoad, setLoad] = useState(false);
  const [clickMode, setClick] = useState("none");
  const [modelPath, setModelPath] = useState(CONF['SPORTS_MODEL_PATH']);
  const [context, setContext] = useState("");
  const [file, setFile] = useState();
  
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
      let mrc_result = null
      if(question === ''){
        alert('질문을 입력해주세요');
      }
      else {
        setLoading(true);
        if(clickMode === "none"){
          mrc_result = await axios.get(CONF['BASE_URL'] + '/inference', {params: {question: question}});
        } else if(clickMode === "context"){
          if(context === ''){
            alert('본문을 입력해주세요');
          }
          mrc_result = await axios.post(CONF['BASE_URL'] + '/inference', {question: question, context: context});
        } else if(clickMode === "file"){
          const formData = new FormData();
          formData.append("file", file);
          formData.append("question", question)
          mrc_result = await axios.post(CONF['BASE_URL'] + '/inference/file', formData, {headers: {"Content-Type": "multipart/form-data"}});
        }
        setData(mrc_result["data"]);
        setLoading(false);
        setLoad(true);
      }
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
          <Header search={search} context={context} loading = {loading} isLoad={isLoad} domainSelect={domainSelect} clickMode={clickMode} setClick={setClick}/>
          {/* <!-- Result : 검색 결과 예시 및 실제 결과 --> */}
          <Content search={search} data={data} isLoad={isLoad} clickMode={clickMode} context={context} setContext={setContext} setFile={setFile}/>
        </div>
        {/* <!-- Footer : copyright 등 조원 정보 및 문서화 사이트 연결 --> */}
        <Footer isLoad={isLoad} />
    </div>
  );
}

export default App;