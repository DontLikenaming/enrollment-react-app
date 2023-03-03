import React from 'react';
import {DetailsList} from '@fluentui/react/lib/DetailsList';
import '../EnrolList.css';

// 과정 등록 학생 리스트의 걸럼 정의

const Columns = [
    {
        key: 'fname', name: 'Fisrt Name', fieldName: 'fname', minWidth: 90, isResizable: false
    },
    {
        key: 'lname', name: 'Last Name', fieldName: 'lname', minWidth: 90, isResizable: false
    },
    {
        key: 'program', name: '과정', fieldName: 'program', minWidth: 90, isResizable: false
    },
    {
        key: 'email', name: '이메일', fieldName: 'email', minWidth: 130, isResizable: false
    },
];

// 테스트용 데이터 삽입 - 컬럼을 정의할 때 사용했던 fieldName으로 값을 초기화해야 함
let items = [];
for (let i = 1;i<5;++i){
    let data = {key: i, fname: 'fname'+i, lname: 'lname'+i, program: 'program', email: 'email'+i};
    items.push(data)
}

const EnrolList = () => {
    return(
        <div className="enrolList">
            <DetailsList items={items} columns={Columns} />
        </div>
    );
}
export default EnrolList;