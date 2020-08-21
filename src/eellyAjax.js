import axios from 'axios'
const eellyAjax = axios.create({
    baseURL: process.env.VUE_APP_AJAX_URL,
    method: 'POST',
    timeout: 30000,
    headers: { 'X-Custom-Header': 'foobar' }
})

export {
    eellyAjax,
    axios
}
