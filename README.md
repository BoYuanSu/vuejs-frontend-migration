# Migrate legacy frontend to Vue

## 專案架構

1. 考量專案僅有單一頁面，所以選擇使用 Parcel.js 作為打包工具進行開發
1. 程式碼資料夾結構
   - 進入點為 index.html，引入 `/js/index.js`
   - `/js/index.js`: 引入 Vue，並 creat Vue instance。
   - `/js/plugins`: 存放專案使用的第三方套件使用 `axios` 進行 API 呼叫；`VeeValidate` 作為表單驗證工具，可實作各種驗證規則；調整各瀏覽器相容性 polyfill 放置於統一檔案中 `/js/plugins/polyfill.js`。
   - `/js/components`: 元件相關開發，template 由獨立 `.html` 檔開發，使用 `require` 引入。
   - `style/main.scss`: 樣式開發進入點。
1. Vue 版本選擇: 因為此架構並不會在打包時轉譯 template，所以必須使用含 compile 功能的 Vue 版本，`vue.common.js`，因為選用特定版本，所以在 `package.json` 要設定 alias，避免相依套件引用不同版本的 Vue 導致執行錯誤。

## 專案指令

### 專案設定

```bash
yarn
```

### 專案開發

UNIX System

```bash
yarn dev
```

Windows

```bash
yarn dev:win
```

### 專案建置

```bash
yarn build
```

實際打包指令
```
rm -rf ./dist && parcel build ./index.html -d ./dist --no-source-maps --no-cache
```
清除 `./dist` 路徑下的檔案，並打包 `./index.html`

### 專案部屬

```bash
yarn start
```

### Heroku 部屬設定
因為此專案需要 Proxy Server 轉送 API，所以 Buildpacks 選擇 `heroku/nodejs`

#### Procfile
專案打包完之後，依據此設定進行部屬，會執行 express server
```
web: yarn start
```
#### 參考資料
- [Deploy your first App with Heroku and Node.js](https://www.youtube.com/watch?v=MxfxiR8TVNU&ab_channel=JonnyKalambay)

### Express Server 功能說明

1. host static file
處理路徑 `./dist` 下的靜態檔案存取功能
1. proxy server
使用 ProxyMiddleware 功能，將 `^/api` 的請求都轉送至 `https://hw-web-api.herokuapp.com`；因為開發時會有 CORS 的問題，所以設定允許 CORS 存取。

#### 參考資料
- [在 Express 中提供靜態檔案](https://expressjs.com/zh-tw/starter/static-files.html)
- [用 Node.js 建立一個簡單的 Http Proxy](https://oldmo860617.medium.com/%E7%94%A8-node-js-%E5%BB%BA%E7%AB%8B%E4%B8%80%E5%80%8B%E7%B0%A1%E5%96%AE%E7%9A%84-http-proxy-5262e349a1ad)
- [Express cors middleware](https://expressjs.com/en/resources/middleware/cors.html)
- [Hello world example](https://expressjs.com/en/starter/hello-world.html)

