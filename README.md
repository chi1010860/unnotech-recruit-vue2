# unnotech-recruit-vue2

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

## 專案架構

```
- src
  |- assets                         全域的 scss 
      |- base.scss                  通用設定
      |- custom-element-ui.scss     自定義的 element-ui style
      |- theme.scss                 定義顏色風格
  |- components                     可重用的 Vue 元件
      |- BookCard.vue               傳入書籍物件，將書籍的名稱與圖片顯示出來
      |- BookDetail.vue             顯示目前選取書籍的價格與數量，並且使用者可做修改
      |- BookList.vue               顯示所有書籍的列表
  |- router
      |- index.ts                   定義前端路由
  |- services                       存放 server 提供的服務
      |- unnotech.dto.ts            定義與 server 溝通的資料介面
      |- unnotech.service.ts        定義特定端點的通用屬性
  |- utils                          可重用的函式
      |- screen-size-checker        檢查螢幕大小的函式
  |- views                          存放各種頁面
      |- Books.vue                  Books 頁面的主樣板
  App.vue                           Vue App 主元件
  main.ts                           Vue App 的進入點
  ...
```

## 我使用的第三方套件

1. `node-sass ^5.0.0`
   - 可定義變數、使用巢狀類別結構及引入其他 scss module
2. `ElementUI ^2.15.1`
   - 一個基於 Vue 的 Layout 與控制項元件框架，用於開發簡約且彈性的使用者介面
3. `vue-property-decorator ^8.3.0`
   - 相依於 vue-class-component，在使用 TypeScript 時可以更方便的用於型別檢查，且支援多種 Vue 功能的 decorator。
4. `axios ^0.21.1`
   - 用於實現 ajax 的 API 請求

## 設計思路

1. 為何要使用 ElementUI?
    排版的 JS 框架五花八門，選用 ElementUI 是因為它很好的支援了 Vue 框架在 Template 上的使用，處理 RWD 的需求很直覺，且它提供的 Button 與 InputNumber 樣式簡約、使用方便，因此我認為很適合這次的專案，順便也證明自己有能夠閱讀文件、引入開源程式的能力。
2. 為何使用 vue-property-decorator?
    以 TypeScript 開發前端程式碼是一個利於團隊協作、落實物件導向精神且符合程式即文件的方式，vue-property-decorator 很好的補足了 Vue 2 在支援 TypeScript 上的不足之處，它可以使我在以 class 編寫 Vue 元件時以 decorator 向 Vue 底層註冊 Prop, components 等屬性。
3. 為何要有 services 目錄?
    在越來越大的專案中，後端可能會根據不同目的開出不同的 API，或是單一前端可能會需要向不同的 server 發出請求，這時如果各種 API 散落在許多不同的 Vue 元件中，會造成重複的程式碼過多而維護困難，或是想在特定的幾支 API 掛上相同的 Token，也會難以擴充；這時候如果使用 service 將不同目的的 API 區分開來會更好管理。

## 我遇到的困難

1. 新版 `vue-property-decorator` 為了支援 Vue 3，因此對於 export 的物件做了些修正，例如我習慣使用的 `@Component` decorator 被改為 `@Options`，讓我的程式一時無法編譯，我是查閱 GitHub 上其他開發者發的 Issue 後才知道這個問題，因為不確定還會遭遇什麼其他問題，我先暫時退版至習慣的版號使用。
