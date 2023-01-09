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
import time
import base64
import random
from fastapi import APIRouter
from modules.db import DB
from modules.token import TOKEN
from modules.basemodel import *
from captcha.image import ImageCaptcha

user = APIRouter()
db = DB()
token = TOKEN()


@user.post("/login")
async def user_login(data:userLogin):
    pass


@user.post("/code")
async def user_code():
    code = ""
    image = ImageCaptcha(width=160, height=60)
    for i in range(4):
        n = random.randint(0, 9)
        b = chr(random.randint(65, 93))
        s = chr(random.randint(99, 266))
        code += str(random.choice([n, b, s]))
    db.dbt_verifycode.insert_one(
        {"code": code.lower(), "expired": int(time.time() + 300)}
    )
    img = image.generate(code)
    b64_image = base64.b64encode(img.read())
    return {"code": 0, "data": "data:image/png;base64," + str(b64_image, "utf-8")}


@user.post("/add")
async def user_add():
    pass


@user.post("/delete")
async def user_delete():
    pass

@user.post("/update")
async def user_udate():
    pass
