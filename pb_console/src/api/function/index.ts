import request from "/@/utils/request"


export function getFunData(appid:string,page:number,length:number){
    return request({
        url:"/function/data",
        method:"post",
        data:{appid,page,length}
    })
}

export function getFunTags(appid:string){
    return request({
        url:"/function/tags",
        method:"post",
        data:{appid}
    })
}

export function createFunc(data:Object){
    return request({
        url:"/function/create",
        method:"post",
        data:data
    })
}

export function getFuncInfo(appid:string,functionid:string){
    return request({
        url:"/function/info",
        method:"post",
        data:{appid,functionid}
    })
}

export function funcUpdate(functionid:string,data:Object){
    return request({
        url:"/function/update",
        method:"post",
        data:{functionid,data}
    })
}