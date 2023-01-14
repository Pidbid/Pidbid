import request from "/@/utils/request"


export function getConfigInfo(mode:string){
    return request({
        url:"/config/info",
        method:"post",
        data:{mode}
    })
}