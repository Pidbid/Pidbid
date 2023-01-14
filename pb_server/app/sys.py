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
from app.user import user
from app.application import sys_apps
from app.config import sys_config
from app.function import sys_function

db = DB()
sys_services = APIRouter()

# 文档操作操作
sys_services.include_router(sys_database, prefix="/database")

# 用户操作
sys_services.include_router(user, prefix="/user")

# 应用操作
sys_services.include_router(sys_apps, prefix="/apps")

# 基础预设数据获取
sys_services.include_router(sys_config,prefix="/config")

# 函数操作
sys_services.include_router(sys_function,prefix="/function")