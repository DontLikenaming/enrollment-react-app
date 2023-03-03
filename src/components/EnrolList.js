import React from 'react';
import { useEffect } from 'react';
import { DetailsList } from '@fluentui/react/lib/DetailsList';
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
        key: 'program', name: 'program', fieldName: 'program', minWidth: 90, isResizable: false
    },
    {
        key: 'email', name: 'e-mail', fieldName: 'email', minWidth: 130, isResizable: false
    },
];

// 컬럼을 정의할 때 사용했던 fieldName으로 값을 초기화해야 함
let items = [];

const EnrolList = (props) => {
    // 과정 등록 학생의 데이터가 추가될 때마다 UI를 재런더링 하기 위해
    // useEffect 리엑트 훅 사용
    // useEffect : 컴퍼넌트 생명주기에 따라 DOM 랜더링 처리
    // props 객체에 값이 존재할 때마다 detailsList에 렌더링해서 화면에 표시함
    useEffect(() => {
        const curItemKey = props.studDetails.key;
        if(curItemKey){
            items = [...items, props.studDetails];
            props.setStudDetails({});
        }
    }, [props]);

    return(
        <div className="enrolList">
            <DetailsList items={items} columns={Columns} />
        </div>
    );
}
export default EnrolList;