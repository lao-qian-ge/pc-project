//http.ts
import type { AxiosError, AxiosRequestConfig } from 'axios'
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
let { VITE_APP_BASE_API_URL } = import.meta.env;

axios.defaults.timeout = 30000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.baseURL = import.meta.env.MODE == 'production' ? VITE_APP_BASE_API_URL : ''
interface ResType<T> {
  result?: any[];
  code: number,
  data?: T,
  message?: string,
  [propName: string]: any;
}

interface Http {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>
  post<T>(url: string, params?: unknown): Promise<ResType<T>>
}

const request: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .get(url, { params })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .post(url, JSON.stringify(params))
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
}
export default request

