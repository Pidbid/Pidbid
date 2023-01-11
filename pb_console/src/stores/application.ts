import { defineStore } from 'pinia';
import { Local } from '/@/utils/storage';

/**
 * 当前操作的应用
 * @methods setUserInfos 设置用户信息
 */
export const useApplications = defineStore('applications', {
    state: (): ApplicationState => ({
        appid: "undefined",
        name:"",
        menuShow: false,
        functionList: [],
        datebaseList: [],
        menuList: []
    }),
    actions: {
        async app_init(){
            const current_app = Local.get("editApp")
            if(current_app){
                this.appid = current_app.appid
                this.name = current_app.name
            }
        },
        async setMenuShow(show: Boolean) {
            this.menuShow = show
        },
        async setFunctionList(data: Array<any>) {
            this.functionList = data
        },
        async setDatabaseList(data: Array<any>) {
            this.datebaseList = data
        },
        async setMenuList(data: Array<any>) {
            this.menuList = data
            // this.menuList.unshift()
        },
        async setAppid(appid: string) {
            const menu_array = ["functions", "database", "trusteeship"]
            this.appid = appid
            this.menuList.forEach((item, i) => {
                if(i!==0){
                    item.path = "/app/" + appid + "/" + menu_array[i-1]
                }
            })
        }
    },
});
