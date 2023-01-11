# -*- encoding: utf-8 -*-
'''
@File    :   application.py
@Time    :   2023/01/10 20:25:49
@Author  :   Wicos 
@Version :   1.0
@Contact :   wicos@wicos.cn
@Blog    :   https://www.wicos.me
@Desc    :   这里输入一些文件介绍
'''

# here put the import lib
import pprint
from fastapi import APIRouter, Request

from app.db.table import sys_db_table
from modules.basemodel import *
from modules.db import DB
from modules.funs import rt

db = DB()
sys_apps = APIRouter()

@sys_apps.post("/data")
async def apps_data(data:dataBaseModel):
    pipelinne = [
        {"$skip":data.length*(data.page -1)},
        {"$limit":data.length}
    ]
    res_apps = db.dbt_apps.aggregate(pipelinne).close()
    if res_apps:
        return rt(0,"success",{"data":res_apps,"allCount":100})
    else:
        return rt(0,"empty",{"data":[],"allCount":0})

@sys_apps.post("/create")
async def apps_create(data):
    pass

@sys_apps.post("/delete")
async def apps_delete(data):
    return 0