# -*- encoding: utf-8 -*-
'''
@File    :   db.py
@Time    :   2023/01/08 00:39:11
@Author  :   Wicos 
@Version :   1.0
@Contact :   wicos@wicos.cn
@Blog    :   https://www.wicos.me
'''

# here put the import lib
import pymongo
from modules.config import CONFIG

config = CONFIG()

class DB:
    def __init__(self):
        self.client_main = pymongo.MongoClient(config.db_uri)
        # self.db_app_client = pymongo.MongoClient(config.db_app_uri)
        self.db_init()

    def db_init(self):
        #数据库
        self.db_main = self.client_main.pidbid
        # self.db_app = self.db_app_client.pidbid
        #验证码表
        self.dbt_verifycode = self.db_main["sys-verifycode"]
        # 应用设置表
        self.dbt_setting = self.db_main["sys-setting"]
    
    def get_apps(self):
        pass