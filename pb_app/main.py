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

app = FastAPI()
templates = Jinja2Templates(directory="templates")
static = StaticFiles(directory="static")

# 跨域配置
app.add_middleware(
    CORSMiddleware,
    allow_origins=config.cors_origins,
    allow_credentials=config.cors_cookies,
    allow_methods=config.cors_methods,
    allow_headers=config.cors_headers
)

# console 主页
@app.route("/")
async def index_template(request: Request):
    return templates.TemplateResponse("index.html",{"request":request})



if __name__ == "__main__":
    uvicorn.run(app,host=config.host, port=config.port)
