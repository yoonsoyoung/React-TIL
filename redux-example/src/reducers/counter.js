import * as types from '../actions/ActionTypes';

// reducer 의 초기 상태 지정
const initialState = {
    number: 0,
    dummy: 'dumbdumb',
    // dumbObject: {
    //     d: 0,
    //     u: 1,
    //     m: 2,
    //     b: 3
    // }
};

export default function counter(state = initialState, action) {
// ES6 의 기본 인수 문법 사용 => 함수의 파라미터에 기본인수를 적는 것. 해당 파라미터가 undefined일 때 기본인수를 가져다 사용.

switch(action.type) {
    case types.INCREMENT:
        // retrun {number: state.number + 1 };  // state의 값을 이용해서 새 값을 만들고 객체를 생성해서 반환

        // spread operator 사용. `...state` 라고 적으면 기존에 있던 값이 initalState의 값으로 다 복수
        return { 
            ...state, 
            number: state.number + 1,
            // dumbObject: {...state.dumbObject, u: 0} // u만 덮어씌우기
        }; // 기존의 값을 덮어 씌우기
    case types.DECREMENT:
        return {
            ...state,
            number: state.number - 1
        };
    default:
        return state;
}

}