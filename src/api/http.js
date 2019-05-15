import axios from 'axios'

axios.interceptors.request.use(config => {
    // do something before send the request, config can be modified
    return config
}, err => {
    return Promise.reject(err)
})

axios.interceptors.response.use(response => {
    return response.data // 可能需要再处理下data
}, err => {
    let errmsg = ''
    if (err && err.response) {
        switch (err.response.status) {
            case 500:
                errmsg = '服务端出错'
                break
            default:
                errmsg = '系统错误'
                break
        }
    } else {
        errmsg = '连接到服务器失败'
    }
    return Promise.reject(errmsg)
})

const http = {
    get (url, params) {
        return axios({
            method: 'GET',
            url,
            params: params || {}
        }).then(response => {
            return Promise.resolve(response)
        }).catch(err => {
            return Promise.reject(err)
        })
    },
    post (url, params) {
        return axios({
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            url,
            data: params || {}
        }).then(response => {
            return Promise.resolve(response)
        }).catch(err => {
            return Promise.reject(err)
        })
    }
}
export default http
