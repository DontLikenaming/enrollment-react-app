import React from 'react';
import { useState } from 'react';
import EnrollmentForm from './components/EnrollmentForm';

// EnrollmentForm이라는 폼을 return하도록
// 정의된 App 컴퍼넌트
const App = () => {
    const [program, setProgram] = useState("UG");   // 프로그램 종류
    const [ugseats, setUgSeats] = useState(60);        // UG 참가가능 인원수
    const [pgseats, setPgSeats] = useState(0);        // PG 참가가능 인원수
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
                <div className="programs">
                    <label>학사 프로그램 참가 가능 인원수 : {ugseats} 명</label>
                    <br />
                    <label>석사 프로그램 참가 가능 인원수 : {pgseats} 명</label>
                    <br /><br />
                    <label>프로그램 종류 :&nbsp;
                        <select className="appDropDowns"
                                onChange={handleChange} value={program}>
                            <option value="UG">&nbsp;학사과정(대학생)&nbsp;</option>
                            <option value="PG">&nbsp;석사과정(대학원생)&nbsp;</option>
                        </select>
                        <br /><br />
                    </label>
                </div>
            <EnrollmentForm chosenProgram={program}
                            currentSeat={(program==="UG")?ugseats:pgseats}
                            setUpdateSeats={setUpdateSeats}
            />
        </div>
    );
};

// 컴퍼넌트나 모듈 형태로 작성하는 경우
// 기본적으로 내보낼 함수명 지정
export default App;