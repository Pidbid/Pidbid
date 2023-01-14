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
        #验证码表
        self.dbt_verifycode = self.db_main["sys-verifycode"]
        # 应用设置表
        self.dbt_setting = self.db_main["sys-setting"]
        # 用户表
        self.dbt_user = self.db_main["sys-users"]
        # 应用表
        self.dbt_apps = self.db_main["sys-apps"]
        # 应用基本设置表
        self.dbt_apps_setting = self.db_main["sys-apps-setting"]
        # 路径表
        self.dbt_apps_route = self.db_main["sys-apps-route"]
        # 整体基础配置表
        self.dbt_config = self.db_main["sys-init"]
        # 应用函数表
        self.dbt_apps_function = self.db_main["sys-apps-function"]
    
    def get_apps(self):
        pass