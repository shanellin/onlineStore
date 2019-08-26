# online-store
(8/22)此專案主要用於熟悉vue.js 2.0、vue cli、vuex、vue-router

### 一、Life hook
1. 了解生命週期中的created、method、computed、watch、mounted各hook功能。<br>
2. 了解computed和watch的差異。

### 二、Template基礎用法
1. {{}}、v-if、v-show、v-module、@click、:bind。<br>
2. 如何使api回傳資料(非預先設好雙向綁定)響應到畫面中。<br>
3. 了解$set用法及源碼內容。<br>
4. 了解除了$set還有哪些方法可以使資料響應到畫面中。(push、pop...等)<br>
5. component建立。

### 三、組件溝通
1. 父組件傳子組件(props)。<br>
2. 子組件傳父組件(emit)。<br>
3. 非父子組件傳值(bus)。

### 四、Vuex
1. 理解store運作方式(component -> action -> mutation -> state)。<br>
2. 理解state、getter、mutation、action各自作用。<br>
3. 了解以上各自可傳入的值，如：mutation(state, payload)、action(context, payload)。<br>
4. 理解mapState、mapMutations...等之功用及mapState源碼內容，為什麼可以取得store的state值。<br>
5. 理解...mapState的展開符...用法和為甚麼要使對象得以混入到外部對象中。

### 五、Router
1. hash模式和history模式的差別，以及HTML5推出的pushState和replaceState。
2. 了解$router的push、replace、go的用法及差異。
3. router props傳參-query和params的使用時間(name or path)和差別(/ or ?)。
4. 重新定向-遇到非預期路徑可重新導向至指定路徑。
5. 路由嵌套-children。

### 六、測試
...

### 七、開發及生產模式
1. 透過.env、.env-dev、.env-prod區分開發/生產環境或api。
2. 如何在package.json設定模式。

### 八、發佈
#### 本地端(ngrok)：
1. https://ngrok.com/ 註冊&登入。
2. 下載ngrok執行檔，將ngrok.exe放進「C:\Windows\System32」。
3. cmd下「ngrok authtoken yourKey」。
4. cmd下「ngrok http 3000 -host-header="localhost:3000"」。

#### 線上版(Firebase)：
1. https://firebase.google.com/ 註冊&登入。
2. 使用Hosting進行dist發佈。

### 畫面設計出處

參照網上公開作品(https://www.cakeresume.com/vue%20cli3-works?locale=zh-TW)
