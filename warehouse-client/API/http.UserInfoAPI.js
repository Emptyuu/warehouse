const install = (Vue, vm) => {

	vm.$u.UserInfoApi = {
		// 获取用户联系人列表
		GetUserContacts: (params) => vm.$u.post('/userInfo/contacts', params)
	}


	//  let verifyToken = ({token}) => vm.$u.post('/users/verifyToken',{token:token})
	// vm.$u.api = {verifyToken};
}

export default {
	install
}
