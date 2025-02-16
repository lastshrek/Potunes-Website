// API 响应的通用格式
export interface ApiResponse<T = any> {
	code: number
	message: string
	data: T
}

// 版本信息接口
export interface VersionInfo {
	id: number
	a_version: string
	a_url: string
	platform: string
	updateText: string
	updated_at: string
	created_at: string
}

// 用户相关接口的类型定义
export interface UserInfo {
	id: number
	username: string
	avatar: string
	// ... 其他用户信息字段
}

// 音乐相关接口的类型定义
export interface Track {
	id: number
	title: string
	artist: string
	album: string
	cover: string
	url: string
	// ... 其他音乐信息字段
}

export interface Playlist {
	id: number
	name: string
	cover: string
	trackCount: number
	// ... 其他播放列表字段
}
