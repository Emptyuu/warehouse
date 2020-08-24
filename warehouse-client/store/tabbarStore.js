const tabbar = {
	namespaced: true,
	state: {
		// 用户的属性
		list: [{
				iconPath: "home",
				selectedIconPath: "home-fill",
				text: '首页',
				customIcon: false,
				pagePath:'/pages/home/index'
			},
			{
				iconPath: "account",
				selectedIconPath: "account-fill",
				text: '我的',
				customIcon: false,
				pagePath:'/pages/my/index'
			}
		],
		current: 0
	},

	mutations: {
		// todo
		// AddInfo(state, data) {
		// 	// todo with state
		// }
	},
	actions: {
		// addInfo({
		// 	commit
		// }, data) {
		// 	commit('AddInfo', data)
		// }
		// todo
	}
}
export default tabbar
