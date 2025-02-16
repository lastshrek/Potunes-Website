import request from '@/utils/request'
import type { ApiResponse, VersionInfo } from './types'

export * from './user'
export * from './music'
export * from './types'

// 获取版本信息
export const getVersionInfo = () => {
	return request.get<ApiResponse<VersionInfo>>('/v1/versions', {
		params: { platform: 'all' },
	})
}
