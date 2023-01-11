import { defineStore } from 'pinia';
import Cookies from 'js-cookie';
import { Session } from '/@/utils/storage';

/**
 * 用户信息
 * @methods setUserInfos 设置用户信息
 */
export const useUserInfo = defineStore('userInfo', {
	state: (): UserInfosState => ({
		userInfos: {
			username: '',
			avatar: '',
			time: 0,
			roles: [],
			authBtnList: [],
			date:{}
		},
	}),
	actions: {
		async setUserInfos(userInfo:any=null) {
			// 存储用户信息到浏览器缓存
			if (Session.get('userInfo')) {
				this.userInfos = Session.get('userInfo');
			} else {
				const userInfos: any = Session.set("userInfo",userInfo)
				this.userInfos = userInfos;
			}
		}
	},
});
