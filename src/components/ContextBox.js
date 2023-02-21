function ContextBox(props) {

    if(props.isClick){
        return (
            <div className="attachText">
                {/* <!-- 
                    오른쪽 상단에 X 버튼을 누르면 창 비활성화
                    지문 입력 후, 입력 버튼 누르면 입력되도록
                --> */}
                <textarea cols="30" rows="10" placeholder="본문을 입력하세요."></textarea>
            </div>
        )
    } else {
        return null
    }
}

export default ContextBox;