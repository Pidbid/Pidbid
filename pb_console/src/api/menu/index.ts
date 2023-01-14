import request from '/@/utils/request';
import { useApplications } from '/@/stores/application';
import { storeToRefs } from 'pinia';
import pinia from '/@/stores/index';
const storesApplication = useApplications(pinia)
const { appid } = storeToRefs(storesApplication)
/**
 * 后端控制路由，isRequestRoutes 为 true，则开启后端控制路由
 * @method getAdminMenu 获取后端动态路由菜单(admin)
 * @method getTestMenu 获取后端动态路由菜单(test)
 */
export function useMenuApi() {
	const menu_url = appid.value.length > 0?'/route/application':'/route/dashborad'
	return request({
		url: menu_url,
		method: 'post',
		data: { appid:appid.value },
	});
}
