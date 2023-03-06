import React from 'react';
import { useEffect } from 'react';
import { DetailsList } from '@fluentui/react/lib/DetailsList';
import '../EnrolList.css';

// 과정 등록 학생 리스트의 걸럼 정의
// 각 컬럼 앞뒤로 수정, 삭제 버튼 추가
const Columns = [
    {
        key: 'edit', name : 'Edit', fieldName: 'edit', minWidth: 50,
        isResizable: false
    },
    {
        key: 'fname', name: 'Fisrt Name', fieldName: 'fname', minWidth: 90,
        isResizable: false
    },
    {
        key: 'lname', name: 'Last Name', fieldName: 'lname', minWidth: 90,
        isResizable: false
    },
    {
        key: 'program', name: 'Program', fieldName: 'program', minWidth: 90,
        isResizable: false
    },
    {
        key: 'email', name: 'E-mail', fieldName: 'email', minWidth: 130,
        isResizable: false
    },
    {
        key: 'delete', name : 'Delete', fieldName: 'delete', minWidth: 50,
        isResizable: false
    }
];

// 컬럼을 정의할 때 사용했던 fieldName으로 값을 초기화해야 함
let items = [];

const EnrolList = (props) => {
    // 과정 등록 학생의 데이터가 추가될 때마다 UI를 재런더링 하기 위해
    // useEffect 리엑트 훅 사용
    // useEffect : 컴퍼넌트 생명주기에 따라 DOM 랜더링 처리
    // props 객체에 값이 존재할 때마다 detailsList에 렌더링해서 화면에 표시함
    useEffect(() => {
        // 삭제 기능
        // eslint-disable-next-line no-restricted-globals
        if(props.action==='delete'&&confirm('정말로 삭제하시겠습니까?')){
            // 삭제 대상 아이템을 key로 가져옴
            const deleteItem = items.filter(
                (item) => item.key === props.selItemKey
            )[0];
            // 삭제 대상 아이템만 제외하고 다시 items 객체 생성
            items = items.filter((item)=>item!==deleteItem);
            // 삭제로 인한 참가 가능 인원수 복구
            props.restoreSeats(deleteItem.program);
        }
        else {  // confirm에서 취소를 누른 경우
            props.setAction('');    //action 초기화
        }

        // 등록하기와 수정하기를 구분하는 조건 추가
        const curItemKey = props.studDetails.key;
        if(curItemKey){
            // 전달받은 키와 리스트에 있는 키가 일치하는 항목의 index 찾기
            const idx = items.findIndex((item)=>item.key===curItemKey);
            // 전달받은 키와 일치하는 항목이 리스트에 존재하면 수정하기 수행
            if(idx>-1){items = items.map(
                (item)=>item.key === curItemKey?props.studDetails:item
            )}
            // 일치하는 항목이 존재하지 않으면 등록하기 수행
            else {items = [...items, props.studDetails];}
            props.setStudDetails({});
        }

    });

    return(
        <div className="enrolList">
            <DetailsList items={items} columns={Columns} />
        </div>
    );
}
export default EnrolList;