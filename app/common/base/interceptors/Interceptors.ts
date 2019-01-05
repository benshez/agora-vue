import axios from 'axios';
import store from '@common/base/store';

export default function () {
    axios.interceptors.response.use(
        response => response,
        reason => {
            store.dispatch('error/appendError', reason)
            return Promise.reject(reason)
        })
}