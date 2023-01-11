# -*- encoding: utf-8 -*-
"""
@File    :   verifycode.py
@Time    :   2023/01/10 03:11:18
@Author  :   Wicos 
@Version :   1.0
@Contact :   wicos@wicos.cn
@Blog    :   https://www.wicos.me
@Desc    :   verify code craete and verify
"""
# here put the import lib
import base64
import random
import time

from captcha.image import ImageCaptcha

from modules.db import DB

db = DB()


class VERIFYCODE:
    def __init__(self):
        self.db = db.dbt_verifycode

    def create(self, length: int = 4) -> str:
        code = ""
        image = ImageCaptcha(width=160, height=60)
        for i in range(4):
            n = random.randint(0, 9)
            b = chr(random.randint(65, 90))
            s = chr(random.randint(97, 122))
            code += str(random.choice([n, b, s]))
        db.dbt_verifycode.insert_one(
            {"code": code.lower(), "expired": int(time.time() + 300)}
        )
        img = image.generate(code)
        b64_image = base64.b64encode(img.read())
        return "data:image/png;base64," + str(b64_image, "utf-8")

    def verify(self, code: str) -> bool:
        res_code = self.db.find_one(
            {"code": code.lower(), "expired": {"$gt": int(time.time())}}
        )
        if res_code:
            return True
        else:
            return False
