import { useState } from "react";

function ContextBox({clickMode, context, setContext, setFile}) {
    const [fileName, setFileName] = useState("Drag and drop your files! (PDF, Word, PPT)");
    const dragDrop = (e) => {
        e.preventDefault();

        const files = [...e.dataTransfer?.files];

        console.log(files[0]);
        setFile(files[0]);
        setFileName(files[0].name)
    }

    if(clickMode === "context"){
        return (
            <div className="attachText">

                {/* <!-- 
                    오른쪽 상단에 X 버튼을 누르면 창 비활성화
                    지문 입력 후, 입력 버튼 누르면 입력되도록
                --> */}
                <textarea cols="26" rows="13" value={context} onChange={(e) => setContext(e.target.value)}></textarea>
                <button className="exitBtn" onClick={() => setContext('')}>
                    {/* <i className="fa-solid fa-circle-xmark"></i> */}
                    초기화
                </button>
            </div>
        )
    } else if(clickMode === "file") {
        return (
            <div className="attachFile" onDragOver={(e) => e.preventDefault()} onDrop = {(e) => dragDrop(e)}>
                <span>{fileName}</span>
            </div>
        )
    } else {
        return null;
    }
}

export default ContextBox;
