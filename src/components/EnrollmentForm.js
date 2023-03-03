import React from 'react';
import { useState } from 'react';
import '../App.css';

const EnrollmentForm = (props) => {
    // 폼에 입력한 내용(First Name, Last Name, e-mail)을 기억시키기 위해
    // state형 변수 선언
    // --------------------------------------------------------
    // onChange 이벤트가 발생하면 입력된 값을
    // 각각 setFirstName, setLastName, setEmail을 통해 저장함
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    // state형 변수에 저장된 값을 환영 메세지로 출력하기 위해 선언
    const [welcomeMessage, setwelcomeMessage] = useState('');

    const [msgStyle, setMsgStyle] = useState('');
    // 등록하기 버튼을 누르면 setwelcomeMessage에 firstName과 lastName를 가져와
    // 환영 메세지를 만들어서 출력시킴
    const handleSubmit = (e) => {
        if(firstName===""||lastName==="")return false;
        let msg = "더 이상 신청할 수 없습니다.";
        setMsgStyle("redOne");
        // props로 전달받은 setUpdateSeats 함수를 이용해서
        // 상위 컴퍼넌트의 Seat 변수값을 조작함
        if(props.currentSeat>0){
            setMsgStyle("message");
            msg = `환영합니다, ${firstName} ${lastName} 님.
            ${email}로 메일이 전송되었습니다. 확인 부탁드립니다.`;
            props.setUpdateSeats(props.currentSeat-1);  // 참여 가능 인원수 감소
        }
        setwelcomeMessage(msg);
        e.preventDefault(); // submit 기능 중지
    };
    const handleInputChange = (setInput, e) => {
        setInput(e.target.value);
    };

    return (
    <div>
        <div className="enrolContainer">
            <form className="enrolForm" onSubmit={handleSubmit}>
                <ul className="ulEnrol">
                    <li>
                        <label htmlFor="FirstName"></label>
                        <input type="text"
                               id="FirstName" name="firstName"
                               className="inputFields"
                               placeholder="First Name"
                               value={firstName}
                               onChange={(e)=>
                               {handleInputChange(setFirstName,e)}}/>
                    </li>
                    <li>
                        <label htmlFor="LastName"></label>
                        <input type="text"
                               id="LastName" name="lastName"
                               className="inputFields"
                               placeholder="Last Name"
                               value={lastName}
                               onChange={(e)=>
                               {handleInputChange(setLastName,e)}}/>
                    </li>
                    <li>
                        <label htmlFor="Email"></label>
                        <input type="text"
                               id="Email" name="email"
                               className="inputFields"
                               placeholder="E-mail"
                               value={email}
                               onChange={(e)=>
                               {handleInputChange(setEmail,e)}}/>
                    </li>
                    <li id="center-btn">
                        <button type="submit"
                                id="btnEnrol" name="btnEnrol"
                                onClick={handleSubmit}>등록하기</button>
                    </li>
                    <li>
                        <label id="studentMsg" className={msgStyle}>{welcomeMessage}</label>
                    </li>
                </ul>
            </form>
        </div>
    </div>
    );
};

export default EnrollmentForm;


