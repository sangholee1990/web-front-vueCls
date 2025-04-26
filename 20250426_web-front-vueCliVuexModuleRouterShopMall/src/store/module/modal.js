export const modal = {
    state(){
        return {
            isModal: false,
            공지글:''
        }
    },
    getters:{
        getModal(state){
            return state
        }
    },
    mutations:{   // setters 상태관리 변수 변경 
        setClickModalOpenAction(state, payload){
            state.isModal = payload.isModal
            state.공지글 = payload.공지글
        },        
        setClickModalCloseAction(state, payload){
            state.isModal = payload.isModal
            state.공지글 = payload.공지글
        }
    }, 
    actions:{
        // 컴포넌트에서 보내온 변경메서드
        // 모달창 열기 메서드({커밋}, 패일로드)
        clickModalOpenAction({commit}, payload){
            // console.log( payload );
            commit('setClickModalOpenAction', payload)
        },
        clickModalCloseAction({commit}, payload){
            // console.log( payload );
            commit('setClickModalCloseAction', payload)
        }
    }
}