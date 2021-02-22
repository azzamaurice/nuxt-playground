export const actions = {
    callAction({ dispatch }, { id, path, payload }) {
        dispatch(`${id}/${path}`, payload, { root: true })
    }
}
