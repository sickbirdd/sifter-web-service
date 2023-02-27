import { useState } from "react";

function ContextBox({clickMode, context, setContext, setFile}) {
    const [fileName, setFileName] = useState("파일 이름이 들어갈 곳 업로드 하면 보인다. 그러니 지금은 없다");
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
                <button className="exitBtn" onClick={() => setContext('')}>
                    <i className="fa-solid fa-circle-xmark"></i>
                </button>
                <textarea cols="30" rows="10" value={context} onChange={(e) => setContext(e.target.value)}></textarea>
            </div>
        )
    } else if(clickMode === "file") {
        return (
            <div className="attachBtn" onDragOver={(e) => e.preventDefault()} onDrop = {(e) => dragDrop(e)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum. 
                <h3>{fileName}</h3>
            </div>
        )
    } else {
        return null;
    }
}

export default ContextBox;
