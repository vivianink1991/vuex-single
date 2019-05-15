import types from '../../constants'

const state = {
    isFetching: false,
    staffList: [{
        id: 0,
        name: 'Anna'
    }]
}

const mutations = {
    [types.ADD_STAFF] (state, action) {
        state.staffList.push(action)
    },
    [types.LOAD_STAFFS_REQUEST] (state, action) {
        state.isFetching = true
    },
    [types.LOAD_STAFFS_SUCCESS] (state, action) {
        state.isFetching = false
        state.staffList = action.data || []
    },
    [types.LOAD_STAFFS_FAIL] (state, action) {
        state.isFetching = false
    }
}

export default {
    state,
    mutations
}
