import request from '@/utils/request'
import type { ApiResponse, UserInfo } from './types'

export const userApi = {
	// 用户登录
	login: (data: { username: string; password: string }) => {
		return request.post<ApiResponse<{ token: string }>>('/auth/login', data)
	},

	// 获取用户信息
	getUserInfo: () => {
		return request.get<ApiResponse<UserInfo>>('/user/info')
	},

	// 更新用户信息
	updateUserInfo: (data: Partial<UserInfo>) => {
		return request.put<ApiResponse<UserInfo>>('/user/info', data)
	},

	// 修改密码
	changePassword: (data: { oldPassword: string; newPassword: string }) => {
		return request.put<ApiResponse>('/user/password', data)
	},
}
