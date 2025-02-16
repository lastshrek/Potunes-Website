import request from '@/utils/request'
import type { ApiResponse, Track, Playlist } from './types'

export const musicApi = {
	// 获取推荐歌曲
	getRecommendTracks: (params: { limit: number }) => {
		return request.get<ApiResponse<Track[]>>('/music/recommend', { params })
	},

	// 获取播放列表
	getPlaylists: (params: { page: number; limit: number }) => {
		return request.get<ApiResponse<{ list: Playlist[]; total: number }>>('/music/playlists', { params })
	},

	// 获取播放列表详情
	getPlaylistDetail: (id: number) => {
		return request.get<ApiResponse<{ playlist: Playlist; tracks: Track[] }>>(`/music/playlist/${id}`)
	},

	// 创建播放列表
	createPlaylist: (data: { name: string; description?: string }) => {
		return request.post<ApiResponse<Playlist>>('/music/playlist', data)
	},

	// 添加歌曲到播放列表
	addToPlaylist: (playlistId: number, trackIds: number[]) => {
		return request.post<ApiResponse>(`/music/playlist/${playlistId}/tracks`, { trackIds })
	},

	// 搜索音乐
	searchMusic: (params: { keyword: string; type: 'track' | 'album' | 'artist'; page: number; limit: number }) => {
		return request.get<ApiResponse<{ list: any[]; total: number }>>('/music/search', { params })
	},
}
