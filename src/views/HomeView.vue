<template>
	<main class="min-h-screen bg-black text-white relative overflow-hidden">
		<!-- 背景动画效果 -->
		<div class="absolute inset-0 z-0">
			<div
				class="absolute w-[500px] h-[500px] bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-3xl -top-20 -left-20 animate-blob"
			></div>
			<div
				class="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl -bottom-20 -right-20 animate-blob animation-delay-2000"
			></div>

			<!-- 漂浮元素 -->
			<div class="absolute inset-0 overflow-hidden z-50">
				<!-- 音符图标 - 左上角 -->
				<svg
					class="absolute w-8 h-8 text-white/20 floating-icon"
					style="--delay: 0s; top: 5%; left: 5%"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
				</svg>

				<!-- 第二个音符 - 右上角 -->
				<svg
					class="absolute w-6 h-6 text-white/10 floating-icon"
					style="--delay: 2s; top: 10%; right: 8%"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M9 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3H9z" />
				</svg>

				<!-- CD图标 - 左侧中部 -->
				<svg
					class="absolute w-12 h-12 text-white/15 rotating-icon"
					style="top: 40%; left: 3%"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1-1z"
					/>
				</svg>

				<!-- 波形图标 - 右侧中部 -->
				<svg
					class="absolute w-16 h-16 text-white/10 pulse-icon"
					style="top: 45%; right: 3%"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M7 4.5h2v15H7v-15zm4 2h2v11h-2v-11zm4-2h2v15h-2v-15zm4 2h2v11h-2v-11z" />
				</svg>

				<!-- 耳机图标 - 左下角 -->
				<svg
					class="absolute w-10 h-10 text-white/20 floating-icon"
					style="--delay: 1s; bottom: 15%; left: 8%"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						d="M12 3c-4.97 0-9 4.03-9 9v7c0 1.1.9 2 2 2h4v-8H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h4c1.1 0 2-.9 2-2v-7c0-4.97-4.03-9-9-9z"
					/>
				</svg>

				<!-- 播放图标 - 右下角 -->
				<svg
					class="absolute w-8 h-8 text-white/15 bounce-icon"
					style="bottom: 10%; right: 10%"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M8 5v14l11-7z" />
				</svg>

				<!-- 暂停按钮 - 左侧上部 -->
				<svg
					class="absolute w-5 h-5 text-white/15 floating-icon"
					style="--delay: 1.5s; top: 25%; left: 12%"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
				</svg>

				<!-- 列表图标 - 右侧上部 -->
				<svg
					class="absolute w-7 h-7 text-white/20 floating-icon"
					style="--delay: 2.5s; top: 30%; right: 15%"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
				</svg>

				<!-- 心形图标 - 底部中间 -->
				<svg
					class="absolute w-6 h-6 text-white/15 pulse-icon"
					style="bottom: 5%; left: 50%; transform: translateX(-50%)"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
					/>
				</svg>
			</div>
		</div>

		<!-- 内容区域 -->
		<div class="relative z-40">
			<!-- Hero Section -->
			<div class="container mx-auto px-4 py-20 fade-in">
				<div class="text-center max-w-3xl mx-auto">
					<h1 class="text-5xl font-bold mb-6">
						破破
						<span class="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
							欧美音乐的破界之选
						</span>
					</h1>
					<p class="text-gray-400 text-xl mb-8">
						发现、收藏你喜爱的欧美音乐。支持多平台同步，随时随地享受高品质音乐体验。
					</p>
					<div class="flex gap-4 justify-center">
						<!-- 桌面端下载按钮组 -->
						<div class="relative group">
							<button
								class="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 active:scale-95 inline-flex items-center gap-2"
								@click="downloadDesktopClient"
							>
								<span v-if="isMacOS" class="inline-flex items-center gap-2">
									<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path
											d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
										/>
									</svg>
									<span>macOS</span>
								</span>
								<span v-else-if="isWindows" class="inline-flex items-center gap-2">
									<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path
											d="M3 12V6.75l6-1.32v6.48L3 12m17-9v8.75l-10 .15V5.21L20 3M3 13l6 .09v6.81l-6-1.15V13m17 .25V22l-10-1.91V13.1l10 .15z"
										/>
									</svg>
									<span>Windows</span>
								</span>
								<span v-else>下载桌面客户端</span>
							</button>
							<!-- 桌面端下拉菜单 -->
							<div
								class="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10"
							>
								<button
									class="w-full px-4 py-2 text-left hover:bg-gray-100 inline-flex items-center gap-2 rounded-t-lg"
									@click="downloadMacClient"
								>
									<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path
											d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
										/>
									</svg>
									macOS 版
								</button>
								<button
									class="w-full px-4 py-2 text-left hover:bg-gray-100 inline-flex items-center gap-2 rounded-b-lg"
									@click="downloadWindowsClient"
								>
									<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path
											d="M3 12V6.75l6-1.32v6.48L3 12m17-9v8.75l-10 .15V5.21L20 3M3 13l6 .09v6.81l-6-1.15V13m17 .25V22l-10-1.91V13.1l10 .15z"
										/>
									</svg>
									Windows 版
								</button>
							</div>
						</div>

						<!-- 移动端下载按钮组 -->
						<div class="relative group">
							<button
								class="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 active:scale-95 inline-flex items-center gap-2"
								@click="downloadMobileApp"
							>
								<span v-if="isIOS" class="inline-flex items-center gap-2">
									<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path
											d="M16 2c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h8zm-4 14c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3-12H9c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z"
										/>
									</svg>
									<span>iOS</span>
								</span>
								<span v-else class="inline-flex items-center gap-2">
									<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path
											d="M6.18 4.52l1.29-2.23c.14-.24.06-.55-.18-.69-.24-.13-.55-.05-.69.19L5.26 4.1a7.95 7.95 0 00-3.24 6.39v9.71c0 .55.45 1 1 1h1.19v2.46c0 .74.6 1.34 1.34 1.34.74 0 1.34-.6 1.34-1.34V21.2h1.83v2.46c0 .74.6 1.34 1.34 1.34.74 0 1.34-.6 1.34-1.34V21.2h1.19c.55 0 1-.45 1-1v-9.71c0-2.6-1.3-4.89-3.27-6.27l1.29-2.23c.14-.24.06-.55-.18-.69-.24-.13-.55-.05-.69.19L8.3 4.1a7.95 7.95 0 00-2.12-.29c-.74 0-1.46.1-2.12.29zM4.07 12.72c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm7.86 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM15.94 4.52l1.29-2.23c.14-.24.06-.55-.18-.69-.24-.13-.55-.05-.69.19L15.02 4.1a7.95 7.95 0 00-3.24 6.39v9.71c0 .55.45 1 1 1h1.19v2.46c0 .74.6 1.34 1.34 1.34.74 0 1.34-.6 1.34-1.34V21.2h1.83v2.46c0 .74.6 1.34 1.34 1.34.74 0 1.34-.6 1.34-1.34V21.2h1.19c.55 0 1-.45 1-1v-9.71c0-2.6-1.3-4.89-3.27-6.27l1.29-2.23c.14-.24.06-.55-.18-.69-.24-.13-.55-.05-.69.19l-1.29 2.23a7.95 7.95 0 00-2.12-.29c-.74 0-1.46.1-2.12.29zm-2.11 8.2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm7.86 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
										/>
									</svg>
									<span>Android</span>
								</span>
							</button>
							<!-- 移动端下拉菜单 -->
							<div
								class="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10"
							>
								<button
									class="w-full px-4 py-2 text-left hover:bg-gray-100 inline-flex items-center gap-2 rounded-t-lg"
									@click="downloadIOSApp"
								>
									<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path
											d="M16 2c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h8zm-4 14c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3-12H9c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z"
										/>
									</svg>
									TestFlight
								</button>
								<button
									class="w-full px-4 py-2 text-left hover:bg-gray-100 inline-flex items-center gap-2 rounded-b-lg"
									@click="downloadAndroidApp"
								>
									<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path
											d="M6.18 4.52l1.29-2.23c.14-.24.06-.55-.18-.69-.24-.13-.55-.05-.69.19L5.26 4.1a7.95 7.95 0 00-3.24 6.39v9.71c0 .55.45 1 1 1h1.19v2.46c0 .74.6 1.34 1.34 1.34.74 0 1.34-.6 1.34-1.34V21.2h1.83v2.46c0 .74.6 1.34 1.34 1.34.74 0 1.34-.6 1.34-1.34V21.2h1.19c.55 0 1-.45 1-1v-9.71c0-2.6-1.3-4.89-3.27-6.27l1.29-2.23c.14-.24.06-.55-.18-.69-.24-.13-.55-.05-.69.19L8.3 4.1a7.95 7.95 0 00-2.12-.29c-.74 0-1.46.1-2.12.29zM4.07 12.72c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm7.86 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM15.94 4.52l1.29-2.23c.14-.24.06-.55-.18-.69-.24-.13-.55-.05-.69.19L15.02 4.1a7.95 7.95 0 00-3.24 6.39v9.71c0 .55.45 1 1 1h1.19v2.46c0 .74.6 1.34 1.34 1.34.74 0 1.34-.6 1.34-1.34V21.2h1.83v2.46c0 .74.6 1.34 1.34 1.34.74 0 1.34-.6 1.34-1.34V21.2h1.19c.55 0 1-.45 1-1v-9.71c0-2.6-1.3-4.89-3.27-6.27l1.29-2.23c.14-.24.06-.55-.18-.69-.24-.13-.55-.05-.69.19l-1.29 2.23a7.95 7.95 0 00-2.12-.29c-.74 0-1.46.1-2.12.29zm-2.11 8.2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm7.86 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
										/>
									</svg>
									安卓下载
								</button>
							</div>
						</div>

						<!-- 在线聆听按钮 -->
						<button
							class="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300 active:scale-95 inline-flex items-center gap-2"
							@click="goToOnlinePlayer"
						>
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
							</svg>
							<span>在线聆听</span>
						</button>
					</div>
				</div>
			</div>

			<!-- Features Section -->
			<!-- <div class="container mx-auto px-4 py-20">
				<div class="grid md:grid-cols-3 gap-8">
					<div class="bg-zinc-900 p-6 rounded-xl fade-in" style="--delay: 0s">
						<div class="w-12 h-12 bg-blue-500 rounded-lg mb-4 flex items-center justify-center">
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
								/>
							</svg>
						</div>
						<h3 class="text-xl font-bold mb-2">海量欧美音乐</h3>
						<p class="text-gray-400">老破严选，值得信赖</p>
					</div>
					<div class="bg-zinc-900 p-6 rounded-xl fade-in" style="--delay: 0.2s">
						<div class="w-12 h-12 bg-violet-500 rounded-lg mb-4 flex items-center justify-center">
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<h3 class="text-xl font-bold mb-2">多平台支持</h3>
						<p class="text-gray-400">手机、电脑多端同步，随时随地听音乐</p>
					</div>
					<div class="bg-zinc-900 p-6 rounded-xl fade-in" style="--delay: 0.4s">
						<div class="w-12 h-12 bg-green-500 rounded-lg mb-4 flex items-center justify-center">
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
						</div>
						<h3 class="text-xl font-bold mb-2">社区分享</h3>
						<p class="text-gray-400">发现志同道合的音乐爱好者，分享你的播放列表</p>
					</div>
				</div>
			</div> -->

			<!-- Screenshots Section -->
			<div class="container mx-auto px-4 py-20">
				<!-- 标题 -->
				<div class="text-center mb-16 fade-in-scale">
					<h2 class="text-4xl font-bold mb-4">界面展示</h2>
					<!-- <p class="text-gray-400">简约而不简单的设计，带来极致的音乐体验</p> -->
				</div>

				<!-- 图片展示区域 -->
				<div class="relative">
					<!-- 移动端展示 -->
					<div class="mb-16 fade-in-left" style="--delay: 0s">
						<h3 class="text-2xl font-bold mb-8">移动端</h3>
						<div class="relative">
							<!-- 移动端设备展示 -->
							<div class="flex gap-6 justify-center items-center">
								<div
									v-for="(image, index) in mobileScreenshots"
									:key="index"
									class="w-[280px] transform transition-all duration-500 rounded-2xl overflow-hidden bg-zinc-900"
									:class="[mobileActiveIndex === index ? 'scale-100 opacity-100 shadow-2xl' : 'scale-90 opacity-50']"
									@click="mobileActiveIndex = index"
								>
									<div class="relative pb-[216.67%]">
										<img :src="image.url" :alt="image.alt" class="absolute inset-0 w-full h-full object-cover" />
									</div>
									<!-- 图片标题 -->
									<div class="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
										<p class="text-center text-sm font-medium">{{ image.alt }}</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- PC端展示 -->
					<div class="fade-in-right" style="--delay: 0.2s">
						<h3 class="text-2xl font-bold mb-8">桌面端</h3>
						<div class="overflow-hidden rounded-2xl shadow-2xl bg-zinc-900">
							<div
								class="flex transition-transform duration-500"
								:style="{ transform: `translateX(-${pcActiveIndex * 100}%)` }"
							>
								<div v-for="(image, index) in pcScreenshots" :key="index" class="w-full flex-shrink-0">
									<div class="relative pb-[66.67%]">
										<img :src="image.url" :alt="image.alt" class="absolute inset-0 w-full h-full object-cover" />
									</div>
								</div>
							</div>
							<!-- PC端导航点 -->
							<div class="flex justify-center gap-2 p-4 bg-zinc-900/80 backdrop-blur-sm">
								<button
									v-for="(_, index) in pcScreenshots"
									:key="index"
									@click="pcActiveIndex = index"
									class="w-2 h-2 rounded-full transition-all duration-300"
									:class="[pcActiveIndex === index ? 'bg-purple-500 w-4' : 'bg-gray-600']"
								></button>
							</div>
						</div>
					</div>
				</div>

				<!-- 特性标签 -->
				<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
					<div
						v-for="(feature, index) in features"
						:key="index"
						class="bg-zinc-900/50 backdrop-blur-sm p-4 rounded-xl text-center fade-in-scale"
						:style="{ '--delay': `${index * 0.15}s` }"
					>
						<div class="text-2xl font-bold mb-2">{{ feature.value }}</div>
						<div class="text-gray-400 text-sm">{{ feature.label }}</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { getVersionInfo } from '@/api'
import type { VersionInfo } from '@/api/types' // 使用 type 导入解决 verbatimModuleSyntax 错误

// 操作系统判断
const isWindows = ref(false)
const isMacOS = ref(false)
const isIOS = ref(false)

// 轮播控制
const pcActiveIndex = ref(0)
const mobileActiveIndex = ref(0)

// PC端截图
const pcScreenshots = [
	{
		url: '/screenshots/pc-home.png',
		alt: '主界面',
	},
	{
		url: '/screenshots/pc-nowplaying.png',
		alt: '播放器',
	},
	{
		url: '/screenshots/pc-playlist.png',
		alt: '播放列表',
	},
]

// 移动端截图
const mobileScreenshots = [
	{
		url: '/screenshots/mobile-home.png',
		alt: '发现页',
		description: '探索你喜爱的音乐',
	},
	{
		url: '/screenshots/mobile-player.png',
		alt: '播放器',
		description: '沉浸式播放体验',
	},
	{
		url: '/screenshots/mobile-lyrics.png',
		alt: '歌词页',
		description: '精准歌词显示',
	},
]

// 特性数据
const features = [
	{ value: '高达75GB', label: '音乐数量' },
	{ value: '99.9%', label: '运行稳定性' },
	{ value: '50+', label: '用户数量' },
	{ value: '4.9分', label: '用户评分' },
]

// 下载链接状态
const downloadUrls = ref({
	windows: '',
	mac: '',
	android: '',
	ios: 'https://testflight.apple.com/join/LswWKGfh', // iOS TestFlight 链接固定
})

// 获取版本信息
const getVersion = async () => {
	try {
		const response = await getVersionInfo()
		console.log('版本信息:', response)
		// 确保 response.data 是数组
		const versions = Array.isArray(response.data) ? response.data : []

		// 遍历版本信息，设置下载地址
		versions.forEach((item: VersionInfo) => {
			switch (
				item.platform // 移除 toLowerCase()，使用原始平台名称
			) {
				case 'android':
					downloadUrls.value.android = item.a_url
					break
				case 'Windows':
					downloadUrls.value.windows = item.a_url
					break
				case 'MacOS': // 修改为完全匹配返回的 "MacOS"
					downloadUrls.value.mac = item.a_url
					break
			}
		})
	} catch (error: any) {
		console.error('获取版本信息失败:', error.message)
		if (error.response) {
			console.error('错误响应:', error.response)
		}
	}
}

// 修改下载处理函数
const downloadMacClient = () => {
	window.open(downloadUrls.value.mac, '_blank')
}

const downloadWindowsClient = () => {
	window.open(downloadUrls.value.windows, '_blank')
}

const downloadIOSApp = () => {
	window.open(downloadUrls.value.ios, '_blank')
}

const downloadAndroidApp = () => {
	window.open(downloadUrls.value.android, '_blank')
}

// 主按钮点击处理
const downloadDesktopClient = () => {
	if (isMacOS.value) {
		downloadMacClient()
	} else if (isWindows.value) {
		downloadWindowsClient()
	}
}

const downloadMobileApp = () => {
	if (isIOS.value) {
		downloadIOSApp()
	} else {
		downloadAndroidApp()
	}
}

// 跳转到在线播放器
const goToOnlinePlayer = () => {
	window.open('https://music.poche.pink', '_blank')
}

// 生命周期钩子
onMounted(() => {
	// 操作系统检测
	const userAgent = navigator.userAgent.toLowerCase()
	isWindows.value = userAgent.includes('windows')
	isMacOS.value = userAgent.includes('mac os')
	isIOS.value = /iphone|ipad|ipod/.test(userAgent)

	// 增强滚动动画
	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				// 当元素进入视口时添加动画
				if (entry.isIntersecting) {
					entry.target.classList.add('show')
				} else {
					// 当元素离开视口时移除动画（可选，取决于你是否想要重复动画）
					// entry.target.classList.remove('show')
				}
			})
		},
		{
			// 配置观察器选项
			root: null, // 使用视口作为根
			threshold: 0.1, // 当元素10%进入视口时触发
			rootMargin: '0px', // 可以调整这个值来提前或延后触发
		}
	)

	// 观察所有需要动画的元素
	document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-scale').forEach(el => {
		observer.observe(el)
	})

	// PC端自动轮播
	const pcAutoplay = setInterval(() => {
		pcActiveIndex.value = (pcActiveIndex.value + 1) % pcScreenshots.length
	}, 5000)

	// 移动端自动轮播
	const mobileAutoplay = setInterval(() => {
		mobileActiveIndex.value = (mobileActiveIndex.value + 1) % mobileScreenshots.length
	}, 5000)

	// 清理定时器
	onUnmounted(() => {
		clearInterval(pcAutoplay)
		clearInterval(mobileAutoplay)
	})

	getVersion()
})
</script>

<style>
@keyframes blob {
	0% {
		transform: translate(0px, 0px) scale(1);
	}
	33% {
		transform: translate(30px, -50px) scale(1.1);
	}
	66% {
		transform: translate(-20px, 20px) scale(0.9);
	}
	100% {
		transform: translate(0px, 0px) scale(1);
	}
}

.animate-blob {
	animation: blob 7s infinite;
}

.animation-delay-2000 {
	animation-delay: 2s;
}

/* 优化渐入动画 */
.fade-in {
	opacity: 0;
	transform: translateY(30px);
	transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
	transition-delay: var(--delay, 0s);
	will-change: opacity, transform;
}

.fade-in.show {
	opacity: 1;
	transform: translateY(0);
}

/* 为不同类型的元素添加不同的动画效果 */
.fade-in-left {
	opacity: 0;
	transform: translateX(-50px);
	transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
	transition-delay: var(--delay, 0s);
	will-change: opacity, transform;
}

.fade-in-right {
	opacity: 0;
	transform: translateX(50px);
	transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
	transition-delay: var(--delay, 0s);
	will-change: opacity, transform;
}

.fade-in-scale {
	opacity: 0;
	transform: scale(0.8);
	transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
	transition-delay: var(--delay, 0s);
	will-change: opacity, transform;
}

.fade-in-left.show,
.fade-in-right.show,
.fade-in-scale.show {
	opacity: 1;
	transform: translate(0) scale(1);
}

/* 漂浮动画 */
@keyframes floating {
	0% {
		transform: translate(0, 0) rotate(0deg);
	}
	33% {
		transform: translate(10px, -15px) rotate(10deg);
	}
	66% {
		transform: translate(-5px, 10px) rotate(-5deg);
	}
	100% {
		transform: translate(0, 0) rotate(0deg);
	}
}

.floating-icon {
	animation: floating 8s ease-in-out infinite;
	animation-delay: var(--delay, 0s);
}

/* 旋转动画 */
@keyframes rotating {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}

.rotating-icon {
	animation: rotating 20s linear infinite;
}

/* 脉冲动画 */
@keyframes pulse {
	0% {
		transform: scale(1);
		opacity: 0.5;
	}
	50% {
		transform: scale(1.1);
		opacity: 0.3;
	}
	100% {
		transform: scale(1);
		opacity: 0.5;
	}
}

.pulse-icon {
	animation: pulse 4s ease-in-out infinite;
}

/* 弹跳动画 */
@keyframes bounce {
	0%,
	100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-10px);
	}
}

.bounce-icon {
	animation: bounce 2s ease-in-out infinite;
}

/* 图片悬浮效果 */
.screenshot-hover {
	transition: all 0.3s ease;
}

.screenshot-hover:hover {
	transform: translateY(-5px);
	box-shadow:
		0 20px 25px -5px rgb(0 0 0 / 0.1),
		0 8px 10px -6px rgb(0 0 0 / 0.1);
}

/* 添加移动端卡片悬浮效果 */
@media (hover: hover) {
	.mobile-card:hover {
		transform: translateY(-8px);
	}
}
</style>
