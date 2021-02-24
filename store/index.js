export const actions = {
    callAction({ dispatch }, { module, method, payload }) {
        dispatch(`${module}/${method}`, payload, { root: true })
    }
}

export const getters = {
    callGetter: (_state, _getters, _rootState, rootGetters) => ({ module, getter }) => {
        return rootGetters[`${module}/${getter}`] || undefined
    }
}
