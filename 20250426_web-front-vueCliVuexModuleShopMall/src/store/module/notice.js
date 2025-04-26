export const notice = {
    state() {
        return {
            isModal: false,
            // isModal: true,
            공지글: '상태관리 공지사항 제목 입니다.',
        }
    },
    getters: {
        // 모달에서 변수 가져오기
        getModal(state) {
            return state;
        }

    },
    mutations: {
        setClickModalAction(state, payload) {
            state.isModal = payload.isModal;
            state.공지글 = payload.공지글;
        },
    },
    actions: {
        // 컴포넌트에서 보내온 변경메서드
        clickModalAction({
            commit
        }, payload) {
            console.log(payload);
            commit('setClickModalAction', payload)
        },
    },
}