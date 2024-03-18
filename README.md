node v16.0.0
npm i -g create-umi
npx create-umi ai-prmadg
cd ai-prmadg
npm install electron@12.0.11 electron-builder@22.10.5

# package.json
  "scripts": {
    "dev": "umi dev",
    "postinstall": "umi setup",
    "setup": "umi setup",
    "start": "npm run dev",
    "electron": "electron .",
    "build": "umi build && electron-builder"
  }

# 环境问题-可以如下操作
npm install rollup@latest

# 项目
## 解决什么需求
一款自足研发的APP AI-PRMADG
根据需求，创建项目，构建前后端项目的基础包(可独立运行)，产出（项目文件架构包，库表构建文件包，接口SWAGE文件包，前后端设计文档），构建产出实现全自动化。

适用于项目经理，运维工作，从（创建，计划，跟踪，版本，迭代，报告等），至结项。 
适用于前端架构，生成基本项目文件包，设计概要文档。
适用于后端架构，生成数据建表文件，接口设计文档以及SWAGE文件，设计概要文档。

简称 PRMADG App
全称：项目资源管理与接口文档生成应用（Project Resource Management and API Documentation Generation Application）

优点：需求设定 一键产出（项目管理文件，前端项目包，后端接口SWAGE包，表结构构建脚本包，前后端设计概要文档），规格统一，产出文件依赖产出模板。

### Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)


### Follow
<img src="https://raw.githubusercontent.com/Timtance/tuijs/HEAD/follow.jpg" width="100px">


## MIT LICENSE
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
