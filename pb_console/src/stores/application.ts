import { defineStore } from 'pinia';
import { getAppInfo, getAppFuncs } from "/@/api/apps"
import { Local } from '../utils/storage';

/**
 * 当前操作的应用
 * @methods setUserInfos 设置用户信息
 */
export const useApplications = defineStore('applications', {
    state: (): ApplicationState => ({
        appid: "",
        name: "",
        functionList: [],
        datebaseList: [],
        appInfo: {},
        appSetting: {}
    }),
    actions: {
        async appInit(){
            if(Local.get("appid")){
                this.appid = Local.get("appid")
            }
        },
        async appInfoInit() {
            const infoRes = await getAppInfo(this.appid)
            this.appInfo = infoRes.data
        },
        async appFuncsInit(appid: string) {
            const funcRes = await getAppFuncs(appid)
            this.functionList = funcRes.data
        },
        async setAppid(appid:string){
            this.appid = appid
            Local.set("appid",appid)
        }
    },
});
