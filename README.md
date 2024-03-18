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