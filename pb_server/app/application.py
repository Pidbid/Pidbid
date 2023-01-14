# -*- encoding: utf-8 -*-
"""
@File    :   application.py
@Time    :   2023/01/10 20:25:49
@Author  :   Wicos 
@Version :   1.0
@Contact :   wicos@wicos.cn
@Blog    :   https://www.wicos.me
@Desc    :   这里输入一些文件介绍
"""

# here put the import lib
from fastapi import APIRouter, Request

from app.db.table import sys_db_table
from modules.basemodel import *
from modules.db import DB
from modules.funs import rt, bson2json


db = DB()
sys_apps = APIRouter()


@sys_apps.post("/data")
async def apps_data(data: dataBaseModel):
    pipelinne = [{"$skip": data.length * (data.page - 1)}, {"$limit": data.length}]
    res_apps = [i for i in db.dbt_apps.aggregate(pipelinne)]
    if res_apps:
        return rt(0, "success", {"data": bson2json(res_apps), "allCount": 100})
    else:
        return rt(0, "empty", {"data": [], "allCount": 0})


@sys_apps.post("/create")
async def apps_create(data):
    pass


@sys_apps.post("/delete")
async def apps_delete(data):
    return 0


# get single application info
@sys_apps.post("/info")
async def apps_info(data: applicationInfo):
    res_info = db.dbt_apps.find_one({"appid": data.appid})
    return rt(0, "get application info success", bson2json(res_info))


@sys_apps.post("/route")
async def apps_route(data: applicationInfo):
    res_route = db.dbt_apps_route.aggregate(
        [
            {"$match": {"appid": data.appid,"depth":1}}, 
            {"$graphLookup":{
                "from":"sys-apps-route",
                "startWith":"$routeid",
                "connectFromField":"routeid",
                "connectToField":"parentid",
                "as":"children"
                }
             },
            {"$sort": {"update_at": -1}}
        ]
    )
    return rt(0, "succcess", bson2json([i for i in res_route]))


@sys_apps.post("/funcs")
async def apps_function(data: applicationFunData):
    res_funcs = db.dbt_apps_function.aggregate(
        [
            {"$match": {"appid": data.appid}},
            {"$skip": (data.page - 1) * data.length},
            {"$limit": data.length},
        ]
    )
    res_allcount = db.dbt_apps_function.count_documents({"appid": data.appid})
    return rt(
        0,
        "success",
        {"data": bson2json([i for i in res_funcs]), "allcount": res_allcount},
    )
