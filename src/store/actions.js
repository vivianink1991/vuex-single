import http from '../api/http'
import types from './constants'

function fetchAction ({commit}, action) {
    let {fetchType, url, method = 'get', params = {}} = action

    const TYPE_REQUEST = `${fetchType}_REQUEST`
    const TYPE_SUCCESS = `${fetchType}_SUCCESS`
    const TYPE_FAIL = `${fetchType}_FAIL`

    commit(types[TYPE_REQUEST])

    return new Promise((resolve, reject) => {
        http[method](url, params).then(response => {
            if (response && response.code === 0) {
                commit(types[TYPE_SUCCESS], response)
            } else {
                commit(types[TYPE_FAIL], response)
            }
            resolve(response)
        }).catch(err => {
            commit(types.SYSTEM_ERROR, err)
            reject(err)
        })
    })
}

export default {
    fetchAction
}
