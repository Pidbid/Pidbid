# -*- encoding: utf-8 -*-
'''
@File    :   basemodel.py
@Time    :   2023/01/08 18:46:57
@Author  :   Wicos 
@Version :   1.0
@Contact :   wicos@wicos.cn
@Blog    :   https://www.wicos.me
@Desc    :   基础类型定义
'''

# here put the import lib
from pydantic import BaseModel

class config(BaseModel):
    host:str
    
    
class userLogin(BaseModel):
    username:str
    password:str
    verifycode:str

class dataBaseModel(BaseModel):
    page:int
    length:int

class addBaseModel(BaseModel):
    name:str
    data:None
    
class updateBaseModel(BaseModel):
    name:str
    data:None

class deleteBaseModel(BaseModel):
    name:str

class collectionAdd(BaseModel):
    pass