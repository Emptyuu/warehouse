const install = (Vue, vm) => {
	Vue.prototype.$u.http.setConfig({
		baseUrl: 'http://192.168.124.5:3000',
		dataType: 'json',
		loadingText: '努力加载中~',
		loadingTime: 800,
		loadingMask: true, // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
	});
	Vue.prototype.$u.http.interceptor.request = (config) => { //拦截请求
		return config
	}
	Vue.prototype.$u.http.interceptor.response = (res) => {	//返回拦截
		return res;
	}
}

export default {
	install
}
