# 力控中间服务 API

## 1.接口描述

### 1.1 接口请求 URL：

> http://192.168.1.108:8090

本接口用于查询或设置力控节点数据

### 1.2 请求类型

> post

### 1.3 请求头参数

| 参数          | 值                     | 类型   |
| :------------ | :--------------------- | :----- |
| ContentType   | application/json       | string |
| Authorization | Basic YWRtaW46MTIzNDU2 | string |

## 2.查询节点数据

### 2.1 查询参数

| 参数   | 值       | 类型   | 说明         |
| :----- | :------- | :----- | :----------- |
| Action | getData  | string | 请求方法名称 |
| Params | ParamObj[] | array  | 请求参数     |

ParamObj:

| 参数   | 值           | 类型  | 说明         |
| :----- | :------------| :-----| :----------- |
| TagName| 力控点位名称 |string |如：S\\J101.PV|

### 2.2 返回值

| 参数  | 值          | 类型  | 说明               |
| :---- | :---------- | :---- | :----------------- |
| state | 状态 | bool  | 请求服务器返回状态 |
| items | itemObj[]     | array | 返回数据数组       |
| msg | 消息文本 | string | 返回的消息提示   |

itemObj:

| 参数 | 值 | 类型 | 说明|
| :----- | :-----| :-----|:-----|
| state | 状态 |bool|节点查询状态|
| tagname | 力控点位名称 |string|节点名称|
| value | 力控点位值 |string|节点值|
| msg | 返回消息 |string|节点消息|

## 3.设置节点数据

### 3.1 查询参数

| 参数   | 值       | 类型   | 说明         |
| :----- | :------- | :----- | :----------- |
| Action | setData  | string | 请求方法名   |
| Params | ParamObj[] | array  | 请求参数数组 |

ParamObj:

| 参数 | 值 | 类型 | 说明|
| :----- | :-----| :-----|:-----|
| TagName | 力控点位名称 |string| |
| Value | 设置点位值 |string| |
| Timeout | 超时还原数据(可选)ms |int |超过设定值后，还原参数为力控原有值|

### 3.2 返回值

| 参数  | 值          | 类型  |
| :---- | :---------- | :---- |
| state | 状态 | bool  |
| items | itemObj[]     | array |
| msg | 消息文本 | string |

itemObj:

| 参数 | 值 | 类型 |
| :----- | :-----| :-----|
| state | 状态 |bool|
| tagname | 力控点位名称 |string|
| value | null |string|
| msg | 返回消息 |string|

## 4.监控节点

### 4.1 查询参数

| 参数   | 值       | 类型   | 说明         |
| :----- | :------- | :----- | :----------- |
| Action | watchTag  | string | 请求方法名   |
| Params | ParamObj[] | array  | 请求参数数组 |

ParamObj:

| 参数 | 值 | 类型 | 说明|
| :----- | :-----| :-----|:-----|
| TagName | 力控点位名称 |string| |
| BackUrl | 回调地址 |string|节点变化回调地址 |
| Token | Token |string | Token力控缓存 |

### 4.2 返回值

| 参数  | 值          | 类型  |
| :---- | :---------- | :---- |
| state | 状态 | bool  |
| items | itemObj[]     | array |
| msg | 消息文本 | string |

itemObj:

| 参数 | 值 | 类型 |
| :----- | :-----| :-----|
| state | 状态 |bool|
| tagname | 力控点位名称 |string|
| value | null |string|
| msg | 返回消息 |string|

### 4.3 回调参数（服务器接收回调参数）

| 参数 | 值 | 类型 | 说明|
| :----- | :-----| :-----|:-----|
| TagName | 力控点位名称 |string|变化的节点名称 |
| Value | 力控点位值 |string |  变化的节点参数 |
| Token | Token |string |   |


### 4.4 回调返回（服务器接收回调返回值）

| 参数 | 值 | 类型 | 说明|
| :----- | :-----| :-----|:-----|
| State | 状态 |bool|回调状态 |

## 5.删除监控节点

### 5.1 请求参数

| 参数   | 值       | 类型   | 说明         |
| :----- | :------- | :----- | :----------- |
| Action | DelWatchTag  | string | 请求方法名   |
| Params | ParamObj[] | array  | 请求参数数组 |

ParamObj:

| 参数 | 值 | 类型 | 说明|
| :----- | :-----| :-----|:-----|
| TagName | 力控点位名称 |string| |

### 5.2 返回值

| 参数  | 值          | 类型  |
| :---- | :---------- | :---- |
| state | 状态 | bool  |
| items | itemObj[]     | array |
| msg | 消息文本 | string |

itemObj:

| 参数 | 值 | 类型 |
| :----- | :-----| :-----|
| state | 状态 |bool|
| tagname | 力控点位名称 |string|
| value | null |string|
| msg | 返回消息 |string|


## 6.获取全部监控节点

### 6.1 请求参数

| 参数   | 值       | 类型   | 说明         |
| :----- | :------- | :----- | :----------- |
| Action | GetWatchTags  | string | 请求方法名   |

### 6.2 返回值

| 参数  | 值          | 类型  |
| :---- | :---------- | :---- |
| state | 状态 | bool  |
| items | itemObj[]     | array |
| msg | 消息文本 | string |

itemObj:

| 参数 | 值 | 类型 |
| :----- | :-----| :-----|
| state | 状态 |bool|
| WatchTags | 全部监控点位 |array|
| msg | 返回消息 |string|

WatchTags:

| 参数 | 值 | 类型 |
| :----- | :-----| :-----|
| TagName | 力控点位名称 |string|
| BackUrl | 回调地址 |string|
| Token | 回调Token |string|



## 7.获取历史数据

### 7.1 请求参数

| 参数   | 值       | 类型   | 说明         |
| :----- | :------- | :----- | :----------- |
| Action | GetHisData  | string | 请求方法名   |
| Params | ParamObj[] | array  | 请求参数数组 |

ParamObj:

| 参数 | 值 | 类型 | 说明|
| :----- | :-----| :-----|:-----|
| TagName | 力控点位名称 |string| |
| Time | 时间 |string |如："2022-04-22 14:20:10"|

### 7.2 返回值

| 参数  | 值          | 类型  |
| :---- | :---------- | :---- |
| state | 状态 | bool  |
| items | itemObj[]    | array |
| msg | 消息文本 | string |


itemObj:

| 参数 | 值 | 类型 | 说明|
| :----- | :-----| :-----|:-----|
| state | 状态 |bool|节点查询状态|
| tagname | 力控点位名称 |string|节点名称|
| value | 值 |string|节点值|
| time | 值 |string|时间|
| msg | 返回消息 |string|节点消息|
