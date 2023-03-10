import React from 'react';
import ReactDOM from 'react-dom';
// App 컴퍼넌트 가져오기(import) 선언문
import App from './App';

// ReactDom 라이브러리 render 함수를 이용해서
// index.html 태그들 중 id가 app인 요소에
// 해당 컴퍼넌트를 표시함
// render(컴퍼넌트, 표시위치)

// App이라는 컴퍼넌트를 #root에 표시
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

