import React, { useState } from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Page404 from './components/Page404';
import axios from 'axios';
import {CONF} from './config';
import './index.css';
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLoad, setLoad] = useState(false);
  const [clickMode, setClick] = useState("none");
  const [domain, setDomain] = useState("SPORTS");
  const [context, setContext] = useState("");
  const [file, setFile] = useState();
  const [status, setStatus] = useState(200);
  
  const domainSelect = (sel) => {
    if(sel === "SPORTS") {
      setDomain("SPORTS");
    }
    else if(sel === "IT") {
      setDomain("IT");
    }
    else if(sel === "ERICA") {
      setDomain("ERICA");
    }
    else sel = "NULL";
    return sel;
  };

  const search = async(question, context) =>{
    try {
      let mrc_result = null
      setLoading(true);
      if(question === ''){
        alert('질문을 입력해주세요');
      }
      else {
        if(clickMode === "none"){
          mrc_result = await axios.get(CONF['BASE_URL'] + '/inference', {params: {question: question, domain: domain}});
        } else if(clickMode === "context"){
          if(context === ''){
            alert('본문을 입력해주세요');
          }
          else {
             mrc_result = await axios.post(CONF['BASE_URL'] + '/inference', {question: question, context: context, domain: domain});
          }
        } else if(clickMode === "file"){
          if(file === undefined){
            alert('파일을 넣어주세요');
          }
          else {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("question", question)
            mrc_result = await axios.post(CONF['BASE_URL'] + '/inference/file', formData, {headers: {"Content-Type": "multipart/form-data"}, domain: domain});
          }
        }
        setData(mrc_result["data"]);
        setLoad(true);
      }
    } catch (error) {
      if (error.response.status === 404) {
        setLoad(true);
        setStatus(404);
        console.log('404 Error')
      }
    } finally {
      setLoading(false);
      console.log("Query Execution")
    }
  };
  
  return (
    <div className='wrapper'>
        <div className='contentWrapper'>
          {/* <!-- Header : 로고, 버튼, 검색 바 --> */}
          <Header search={search} context={context} loading = {loading} isLoad={isLoad} domainSelect={domainSelect} clickMode={clickMode} setClick={setClick}/>
          {/* <!-- Result : 검색 결과 예시 및 실제 결과 --> */}
          {
            
            status === 404 ? <Page404/> : 
            <Content search={search} data={data} isLoad={isLoad} clickMode={clickMode} context={context} setContext={setContext} setFile={setFile}/>
          }
        </div>
        {/* <!-- Footer : copyright 등 조원 정보 및 문서화 사이트 연결 --> */}
        <Footer isLoad={isLoad} />
    </div>
  );
}

export default App;