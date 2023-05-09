import React from 'react';
import img404 from '../img/error-404.png';
function Page404() {
    return (
        <div>
            <img className='img404' src={img404}/>
            <h2> 
                문서를 찾을 수 없습니다. 다시 검색해주세요.
            </h2>
        </div>
    );
}

export default Page404;