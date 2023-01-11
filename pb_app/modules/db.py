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
        self.client = pymongo.MongoClient("mongodb://{}:{}@{}:{}".format(config.db_username,config.db_password,config.db_host,config.db_port))
        self.db_init()

    def db_init(self):
        #数据库
        self.db_main = self.client.pidbid
        #验证码表
        self.dbt_verifycode = self.db_main["verifycode"]
    
    def get_apps(self):
        pass