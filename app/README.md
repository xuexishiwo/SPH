# app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## 动态展示数据
1、先写api
    export const reqFloorList = ()=>mockRequests({url:'/floor',method:'get'});
2、vuex三件套
3、替换数据