const defaultState = {
    name: ``
}

export default {
    namespaced: true,
    state() {
        return {
            ...defaultState
        }
    },
    actions: {
        setName({ commit }, name) {
            commit(`SET_NAME`, name)
        }
    },
    getters: {
        getName({ name }) {
            return name
        }
    },
    mutations: {
        SET_NAME(state, name) {
            state.name = name
        }
    }
}
