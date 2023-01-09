# -*- encoding: utf-8 -*-
"""
@File    :   sys.py
@Time    :   2023/01/08 01:14:41
@Author  :   Wicos 
@Version :   1.0
@Contact :   wicos@wicos.cn
@Blog    :   https://www.wicos.me
"""

# here put the import lib
from fastapi import APIRouter, Request

from modules.db import DB
from app.db.database import sys_database

db = DB()
sys_services = APIRouter()
# 文档操作操作
sys_services.include_router(sys_database,prefix="/database")