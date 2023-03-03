import React from 'react';
import { useState } from 'react';
import '../App.css';

const EnrollmentForm = (props) => {
    // 폼에 입력한 내용(First Name과 Last Name)을 기억시키기 위해
    // state형 변수 선언
    // --------------------------------------------------------
    // onBlur 이벤트가 발생하면 입력된 값을
    // 각각 setFirstName과 setLastName을 통해 저장함
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // state형 변수에 저장된 fname과 lname을 환영 메세지로 출력하기 위해 선언
    const [welcomeMessage, setwelcomeMessage] = useState('');

    // 등록하기 버튼을 누르면 setwelcomeMessage에 firstName과 lastName를 가져와
    // 환영 메세지를 만들어서 출력시킴
    const handleSubmit = (e) => {
        if(firstName===""||lastName==="")return false;
        setwelcomeMessage(`환영합니다, ${firstName} ${lastName} 님.`);
        e.preventDefault(); // submit 기능 중지
    };
    return (
        <div>
            <form className="enrolForm" onSubmit={handleSubmit}>
                <h1>{props.chosenProgram} 등록양식</h1>
                <div>
                    <label>First Name</label>
                    <input type="text" name="fname" onBlur={(e)=>setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lname" onBlur={(e)=>setLastName(e.target.value)} />
                </div>
                <div>
                    <button type="submit">등록하기</button>
                </div>
            </form>

            <label id="studentMsg" className="message" >{welcomeMessage}</label>
        </div>
    );
};

export default EnrollmentForm;


