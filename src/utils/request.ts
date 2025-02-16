import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'

// 创建 axios 实例
const request: AxiosInstance = axios.create({
	baseURL: 'https://api.poche.pink', // 直接使用固定的API地址
	timeout: 15000, // 请求超时时间
	headers: {
		'Content-Type': 'application/json',
	},
})

// 请求拦截器
request.interceptors.request.use(
	config => {
		// 在发送请求之前做些什么
		const token = localStorage.getItem('token')
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`
		}
		return config
	},
	error => {
		// 对请求错误做些什么
		return Promise.reject(error)
	}
)

// 响应拦截器
request.interceptors.response.use(
	(response: AxiosResponse) => {
		// 对响应数据做点什么
		const { data } = response
		// 移除状态码判断，直接返回数据
		return data
	},
	error => {
		// 对响应错误做点什么
		if (error.response?.status === 401) {
			// 处理 401 未授权的情况
			localStorage.removeItem('token')
			window.location.href = '/login'
		}
		return Promise.reject(error)
	}
)

export default request
