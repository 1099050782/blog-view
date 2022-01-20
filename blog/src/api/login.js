import {request} from '../utils/request'

export function getLogin(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
