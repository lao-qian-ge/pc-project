import request from '@/service/http'
import * as T from './types'

// const loginApi: T.ILoginApi = {
//     login(params: object) {
//         return request.post('/login', params)
//     }
// }
export function getBanner() {
    return request.get(
        '/mq/mqbiz/mqHomepageImage/outside/list');
}
export function getNewsType() {
    return request.get('/mq/mqbiz/mqInfoType/outside/list');
}
export function getNewsInfo(data: object) {
    return request.get('/mq/mqbiz/mqInfo/outside/list', data);
}
export function mqCompanyAddress() {
    return request.get('/mq/mqbiz/mqCompanyAddress/outside/list');
}
export function queryById(data: object) {
    return request.get('/mq/mqbiz/mqInfo/outside/queryById', data);
}
export function addInfo(data: object) {
    return request.post('/mq/mqbiz/mqSettlementEvaluation/outside/add', data);
}
export function addNewContact(data: object) {
    return request.post('/mq/mqbiz/mqNewContact/outside/addNewContact', data);
}
export function addmqMembers(data: object) {
    return request.post('/mq/mqbiz/mqMembers/outside/add', data);
}