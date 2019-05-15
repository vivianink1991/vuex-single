import types from './constants'

export const state = {
    systemMsg: ''
}

export const mutations = {
    [types.SYSTEM_ERROR] (state, action) {
        state.systemMsg = action.errMsg
    }
}
