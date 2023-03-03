import React from 'react';
import { useState } from 'react';
import EnrollmentForm from './components/EnrollmentForm';
import EnrolList from './components/EnrolList';


// EnrollmentForm이라는 폼을 return하도록
// 정의된 App 컴퍼넌트
const App = () => {
    const [program, setProgram] = useState("UG");   // 프로그램 종류
    const [ugseats, setUgSeats] = useState(0);        // UG 참가가능 인원수
    const [pgseats, setPgSeats] = useState(40);        // PG 참가가능 인원수

    // 과정 등록한 학생들 정보를 저장하는 변수 선언
    const [studDetails, setStudDetails] = useState({});

    const handleChange = (e) => {
        setProgram(e.target.value);
    };
    // 프로그램 별 참가가능 인원수를 변경하는 함수
    const setUpdateSeats = (modifiedSeats) => {
        if(program==="UG")setUgSeats(modifiedSeats);
        else setPgSeats(modifiedSeats);
    };
    return(
        <div className="App">
                <div className="programs" >
                    <h2 className="title">프로그램 참가 등록양식</h2>
                    <ul className="ulEnrol">
                        <li onChange={handleChange} className="parentLabels">
                            <input type="radio" value="UG" name="programGroup" defaultChecked/>학사과정
                            &nbsp;
                            <input type="radio" value="PG" name="programGroup"/>석사과정
                        </li>
                        <li>{program} 참가 가능 인원 : {(program==="UG")?ugseats:pgseats}</li>
                    </ul>

                </div>
            <EnrollmentForm chosenProgram={program}
                            currentSeat={(program==="UG")?ugseats:pgseats}
                            setUpdateSeats={setUpdateSeats}
                            setStudDetails={setStudDetails}
            />
            <EnrolList setStudDetails={setStudDetails}
                       studDetails={studDetails}
            />
        </div>
    );
};

// 컴퍼넌트나 모듈 형태로 작성하는 경우
// 기본적으로 내보낼 함수명 지정
export default App;