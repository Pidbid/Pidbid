# -*- encoding: utf-8 -*-
'''
@File    :   funs.py
@Time    :   2023/01/08 19:02:25
@Author  :   Wicos 
@Version :   1.0
@Contact :   wicos@wicos.cn
@Blog    :   https://www.wicos.me
@Desc    :   公共函数
'''

# here put the import lib
from modules.db import DB

db=DB()

def db_setting(config:str):
    return db.dbt_setting.find_one({"type":config})["data"]

def rt(code:int,msg:str=None,data:any=None):
    return_context = {"code":code}
    if msg:
        return_context.update({"msg":msg})
    if data:
        return_context.update({"data":data})
    return return_context