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

## 使用到的第三方套件

1. node-sass ^5.0.0
2. ElementUI ^2.15.1
3. vue-property-decorator ^8.3.0
  相依於 vue-class-component 在使用 TypeScript 時可以更方便的用於型別檢查，且支援多種 Vue 功能的 Decorator。

## 我遇到的困難

1. 新版 vue-property-decorator 為了支援 Vue 3，因此對於 export 的物件做了些修正，習慣使用的 @Component decorator 被改為 @Options，讓我的程式一時無法編譯，我是查閱 GitHub 上其他開發者發的 Issue 後才知道，因為不確定還會遭遇什麼其他問題，我先暫時退版至習慣的版號使用。
