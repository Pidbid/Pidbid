# -*- encoding: utf-8 -*-
"""
@File    :   function.py
@Time    :   2023/01/13 17:53:24
@Author  :   Wicos 
@Version :   1.0
@Contact :   wicos@wicos.cn
@Blog    :   https://www.wicos.me
@Desc    :   route function about functions
"""

# here put the import lib
import time
from fastapi import APIRouter, Request

from modules.basemodel import *
from modules.db import DB
from modules.funs import rt, bson2json
from modules.passwords import generate_rand_str

db = DB()
sys_function = APIRouter()

@sys_function.post("/info")
async def function_info(data:functionInfo):
    info_func = db.dbt_apps_function.find_one({"appid":data.appid,"id":data.functionid})
    return rt(0,"get function info success",bson2json(info_func))

@sys_function.post("/create")
async def function_create(data:functionCreate):
    code_init=""
    if data.type == "route":
        code_init = db.dbt_config.find_one({"mode":"function_init_route_code"})["code"]
    if data.type == "common":
        code_init = db.dbt_config.find_one({"mode":"function_init_common_code"})["code"]
    func_data = {
        "appid":data.appid,
        "description":data.description,
        "tag":data.tag,
        "name":data.name,
        "id":data.id,
        "code":code_init,
        "create_at":int(time.time()),
        "update_at":int(time.time()),
        "type":data.type
    }
    fun_add = db.dbt_apps_function.insert_one(func_data)
    return rt(0,"success",bson2json(fun_add))

@sys_function.post("/update")
async def function_update(data:functionUpdate):
    res_update = db.dbt_apps_function.update_one({"id":data.functionid},{"$set":data.data})
    print(res_update)
    return rt(0,"function update success")

@sys_function.post("/delete")
async def function_delete():
    """
    删除函数
    """
    pass


@sys_function.post("/tags")
async def function_tags(data:applicationInfo):
    res_tag = db.dbt_apps_function.find({"appid":data.appid})
    tags = []
    for t in res_tag:
        tags = list(set(tags+t["tag"]))
    return rt(0,"get function tags success",tags)
