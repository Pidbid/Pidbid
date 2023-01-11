# -*- encoding: utf-8 -*-
'''
@File    :   config.py
@Time    :   2023/01/08 20:06:58
@Author  :   Wicos 
@Version :   1.0
@Contact :   wicos@wicos.cn
@Blog    :   https://www.wicos.me
@Desc    :   配置文件
'''

# here put the import lib
import os

class CONFIG:
    def __init__(self):
        self.db_init()
    
    def db_init(self):
        self.db_main = ""