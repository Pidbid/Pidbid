# -*- encoding: utf-8 -*-
"""
@File    :   user.py
@Time    :   2023/01/08 18:21:08
@Author  :   Wicos 
@Version :   1.0
@Contact :   wicos@wicos.cn
@Blog    :   https://www.wicos.me
"""

# here put the import lib
import bson
from fastapi import APIRouter

from modules.basemodel import *
from modules.db import DB
from modules.funs import rt,bson2json
from modules.passwords import hash_password
from modules.token import TOKEN
from modules.verifycode import VERIFYCODE

user = APIRouter()
db = DB()
token = TOKEN()
verifycode = VERIFYCODE()

@user.post("/login")
async def user_login(data:userLogin):
    if verifycode.verify(data.verifycode):
        hashed_pwd = hash_password(data.password)
        res_user = db.dbt_user.find_one({"username":data.username,"password":hashed_pwd})
        if res_user:
            res_user = bson2json(res_user)
            res_user["uid"] = res_user["_id"]
            del res_user["password"]
            res_token_create = token.create({"username":data.username})
            res_user.update({"token":res_token_create["token"]})
            res_user.update({"tokenExpired":res_token_create["tokenExpired"]})
            return rt(0,"login success",res_user)
        else:
            return rt(1,"username or password was wrong")
    else:
        return rt(1,"verify code was wrong")

@user.post("/code")
async def user_code():
    return rt(0,"create verifycode success",verifycode.create(4)) 


@user.post("/add")
async def user_add(data:userAdd):
    add_user = data
    add_user.password = hash_password(data.password)
    res_add = db.dbt_user.insert_one(add_user.json())
    if res_add:
        return rt(0,"user added")
    else:
        return rt(1,"wrong")


@user.post("/delete")
async def user_delete():
    pass

@user.post("/update")
async def user_udate():
    pass
