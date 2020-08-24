const install = (Vue, vm) => {
	Vue.prototype.$u.http.setConfig({
		baseUrl: 'http://192.168.124.5:3000',
		dataType: 'json',
		loadingText: '努力加载中~',
		loadingTime: 800,
		loadingMask: true, // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
		header: {
			'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
		},
	});
	Vue.prototype.$u.http.interceptor.request = (config) => { //拦截请求
		//获取token进行验证
		const token = uni.getStorageSync('token');
		if (token) {
			config.header.token = token;
			return config
		} else {
			return config
		}
	}
	Vue.prototype.$u.http.interceptor.response = (res) => { //返回拦截
		return res;
	}
}

export default {
	install
}
