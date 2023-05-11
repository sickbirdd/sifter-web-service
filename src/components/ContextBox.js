import { useState } from "react";

function ContextBox({clickMode, context, setContext, setFile}) {
    const [fileName, setFileName] = useState("Drag and drop your files or Click here!");

    const dragDrop = (e) => {
        e.preventDefault();

        const files = [...e.dataTransfer?.files];

        console.log(files[0]);
        setFile(files[0]);
        setFileName(files[0].name);
    }

    const inputFile = (e) => {
        e.preventDefault();

        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    }

    if(clickMode === "context"){
        return (
            <div className="attachText">

                {/* <!-- 
                    오른쪽 상단에 X 버튼을 누르면 창 비활성화
                    지문 입력 후, 입력 버튼 누르면 입력되도록
                --> */}
                <textarea cols="26" rows="12" value={context} onChange={(e) => setContext(e.target.value)}></textarea>
                <button className="resetBtn" onClick={() => setContext('')}>
                <i class="fa-solid fa-eraser fa-lg"></i>
                </button>
            </div>
        )
    } else if(clickMode === "file") {
        return (
            <div className="attachFile" onDragOver={(e) => e.preventDefault()} onDrop={(e) => dragDrop(e)}>
                <input type="file" multiple id="file" onChange={(e) => inputFile(e)} />
                <label htmlFor="file">
                    <i className={
                        fileName === "Drag and drop your files or Click here!" 
                        ? "fa-solid fa-box-open fa-2xl" 
                        : "fa-solid fa-box fa-2xl"
                        }
                    ></i>
                    <span>{fileName}</span>
                </label>
            </div>
        )
    } else {
        return null;
    }
}

export default ContextBox;
