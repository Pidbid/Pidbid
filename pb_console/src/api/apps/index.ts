import request from "/@/utils/request"


export function getApps(page:number,length:number){
    return request({
        url:"/apps/data",
        method:"post",
        data:{page,length}
    })
}