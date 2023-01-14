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
from pydantic import BaseModel,conlist

class config(BaseModel):
    host:str
    
    
class userLogin(BaseModel):
    username:str
    password:str
    verifycode:str

class userAdd(BaseModel):
    username:str
    password:str
    rules:list

class userLoginDate(BaseModel):
    login:int
    create:int

class userAddBase(BaseModel):
    username:str
    password:str
    nickname:str
    avatar:str
    login_ip:str
    date:userLoginDate
    

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

class applicationType(BaseModel):
    name:str
    space_size:int
    memory_size:int
    
class applicationCreate(BaseModel):
    name:str
    
class applicationInfo(BaseModel):
    appid:str

class applicationRoute(BaseModel):
    appid:str
    
class initConfig(BaseModel):
    mode:str
    
class applicationFunData(BaseModel):
    appid:str
    page:int
    length:int

class functionInfo(BaseModel):
    """
    获取云函数的信息
    """
    appid:str
    functionid:str
    
class functionCreate(BaseModel):
    """
    云函数添加
    """
    id:str
    appid:str
    name:str
    tag:list
    description:str=""
    type:str
    
class functionUpdate(BaseModel):
    """
    函数更新
    """
    functionid:str
    data:dict
    