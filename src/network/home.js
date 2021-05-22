import { request } from "./request.js"


export function getHomeMultidata() {
    return request({
        // url: 'http://123.207.32.32:8000/home/multidata'
        url: 'http://152.136.185.210:7878/api/m5/home/multidata'
    })
}
export function getHomeGoods(type, page) {
    return request({
        url: 'http://152.136.185.210:7878/api/m5/home/data',
        params: {
            type,
            page
        }
    })
}