## 初始化项目
```
npm init -y
```

## 安装依赖的模块
```
npm install request cheerio async cron debug mongoose express ejs iconv-lite -S
```

## 连接服务器
### 连接服务器
如果需要是否yes,yes,如果需要输入密码 Zfpx2017
```
ssh root@ip
ssh root@120.27.250.23
```

### 更新操作系统
```
apt-get update
```

### 安装 npm
```
apt-get install npm
```

### 安装node的版本管理器
```
npm install n -g
```

### 安装 node
```
n 7.5
```

### 安装 mongodb
```
apt-get install mongodb
```

### 安装git
```
apt-get install git
```

### 下载并安装项目
```
git clone https://github.com/zhufengnodejs/201703crawl.git
cd 201703crawl
npm install

cd tasks
node main.js
ctrl+c退出

cd ..
node server.js
```
然后就可以通过浏览器访问我们的服务器


### 安装pm2
因为我们希望我们的服务在后台运行
```
npm install pm2 -g
pm2 start server.js --name 'crawl'
```
