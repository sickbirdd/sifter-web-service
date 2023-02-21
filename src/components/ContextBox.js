function ContextBox({isClick, setContext}) {

    if(isClick){
        return (
            <div className="attachText">
                {/* <!-- 
                    오른쪽 상단에 X 버튼을 누르면 창 비활성화
                    지문 입력 후, 입력 버튼 누르면 입력되도록
                --> */}
                <button className="exitBtn">
                    <i className="fa-solid fa-circle-xmark"></i>
                </button>
                <textarea cols="30" rows="10" placeholder="" onChange={(e) => setContext(e.target.value)}></textarea>
                <button className="textAttachBtn">입력</button>
            </div>
        )
    } else {
        return null
    }
}

export default ContextBox;