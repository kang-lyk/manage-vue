# manage-blty-vue

#### 介绍
用ant-design-vue做管理后台

#### 软件架构
软件架构说明

#### 安装前准备
全局安装nodeJs、npm、yarn是前提条件
安装太慢？
##### 临时使用淘宝镜像
`npm --registry https://registry.npm.taobao.org install express` express是指你要安装的包名
##### 持久使用
`npm config set registry https://registry.npm.taobao.org`
然后正常使用npm或yarn就好了

配置后可通过下面方式来验证是否成功
`npm config get registry`

前端人员可以全局安装vue-cli3
`
npm install -g @vue/cli
OR
yarn global add @vue/cli
`
然后可用 `vue ui` 打开图形化界面进行操作

#### 安装教程


1.  `yarn`或 `yarn install`

#### 使用说明

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### 角手架更多资料
See [Configuration Reference](https://cli.vuejs.org/zh/config/).

### 上线脚本要用到的命令
如果是第一次或前端要安装新的npm包
`npm install` 或 `yarn`
编译
`npm run build` 
