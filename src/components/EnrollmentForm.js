import React from 'react';
import { useState } from 'react';
import '../App.css';
import { MdEdit, MdDelete } from 'react-icons/md';

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

    // 등록/수정 버튼 정의
    const [btnValue, setBtnValue] = useState('등록하기');
    const [studKey, setStudKey] = useState(0);

    const handleEdit = (key) => {
        // 수정할 학생 정보를 폼에 표시
        setFirstName(firstName);
        setLastName(lastName);
        setEmail(email);

        setStudKey(key);
        setBtnValue('수정하기');
    };

    // 등록하기 버튼을 누르면 setwelcomeMessage에 firstName과 lastName를 가져와
    // 환영 메세지를 만들어서 출력시킴
    const handleClick = (e) => {
        let msg = "더 이상 신청할 수 없습니다.";
        setMsgStyle("redOne");

        if(firstName==="")alert("이름을 입력해주세요.");
        else if(lastName==="")alert("성을 입력해주세요.");
        else if(email==="")alert("이메일을 입력해주세요.");

        // props로 전달받은 setUpdateSeats 함수를 이용해서
        // 상위 컴퍼넌트의 Seat 변수값을 조작함
        if(props.currentSeat>0&&(firstName!==""&&lastName!==""&&email!=="")){
            setMsgStyle("message");
            msg = `환영합니다, ${firstName} ${lastName} 님.\n
            ${email}로 메일이 전송되었습니다. 확인 부탁드립니다.`;
            props.setUpdateSeats(props.currentSeat-1);  // 참여 가능 인원수 감소

            // 등록 완료된 학생정보에 사용할 key 생성
            const rndKey = Math.floor(1000+Math.random()*9000);

            // 학생정보 등록할 때는 rndKey, 수정할 때는 studKey를 사용하도록 함
            const key = btnValue ==='등록하기'?rndKey:studKey

            // 생성한 key와 등록 완료된 학생정보를 props에 저장
            let stud = {key: key, fname: firstName, lname: lastName,
                        program: props.chosenProgram, email: email,
                        edit: <MdEdit className="actionIcon"
                        onClick={()=>handleEdit(key)} />,
                        // 삭제 아이콘 클릭하면 대상의 key를 넘김
                        delete: <MdDelete className="actionIcon"
                        onClick={()=>props.handleItemSelection('delete',key)} />
                        }
            props.setStudDetails(stud);
        }

        setwelcomeMessage(msg);
        e.preventDefault(); // submit 기능 중지
    };

    const handleInputChange = (setInput, e) => {
        setInput(e.target.value);
    };

    // Edit 누르면 출현하는 취소하기 버튼의 동작
    // 수정하기 상태에 폼에 입력된 데이터 제거
    // 버튼 원복
    const handleCancel = (e) => {
        setFirstName('');
        setLastName('');
        setEmail('');

        setBtnValue('등록하기')
        e.preventDefault();
    };

    return (
    <div>
        <div className="enrolContainer">
            <form className="enrolForm">
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
                        <button type="submit" className="btn"
                                id="btnEnrol" name="btnEnrol"
                                onClick={handleClick}>{btnValue}</button>
                        <button type="submit" className="btn"
                                id="btnCancel" name="btnCancel"
                                onClick={handleCancel}>취소하기</button>
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


