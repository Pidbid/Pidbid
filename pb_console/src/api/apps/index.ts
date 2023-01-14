import request from "/@/utils/request"


export function getApps(page:number,length:number){
    return request({
        url:"/apps/data",
        method:"post",
        data:{page,length}
    })
}

export function getAppInfo(appid:string){
    return request({
        url:"/apps/info",
        method:"post",
        data:{appid}
    })
}

export function getAppFuncs(appid:string,page:number,length:number){
    return request({
        url:"/apps/funcs",
        method:"post",
        data:{appid,page,length}
    })
}

export function getAppRoutes(appid:string){
    return request({
        url:"/apps/route",
        method:"post",
        data:{appid}
    })
}