# -*- encoding: utf-8 -*-
"""
@File    :   main.py
@Time    :   2023/01/07 18:52:35
@Author  :   Wicos 
@Version :   1.0
@Contact :   wicos@wicos.cn
@Blog    :   https://www.wicos.me
"""

# here put the import lib
import uvicorn
from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from modules.config import CONFIG
from modules.funs import db_setting
from app.sys import sys_services


config = CONFIG()
app = FastAPI()
templates = Jinja2Templates(directory="templates")
app.mount("/static", StaticFiles(directory="static"), name="static")

# 跨域配置
app.add_middleware(
    CORSMiddleware,
    allow_origins=db_setting("cors_origins"),
    allow_credentials=db_setting("cors_cookies"),
    allow_methods=db_setting("cors_methods"),
    allow_headers=db_setting("cors_headers")
)

# 中间件Token校验
# @app.middleware("http")
# async def verify_token(request:Request,call_next):
#     pass


# console 主页
@app.route("/")
async def index_template(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


# 系统操作
app.include_router(sys_services, prefix="/sys")



if __name__ == "__main__":
    uvicorn.run(app, host=config.host, port=config.port)
