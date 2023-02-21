function ContextBox({isClick, context, setContext}) {
    if(isClick){
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
    } else {
        return null
    }
}

export default ContextBox;
