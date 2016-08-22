# angular-switch

angular-switch 简单易用的 angular switch

### 用法

```js
angular.module('app', ['uiSwitch']);
```

| 配置          |  值           | 说明   |
| ------------- | -----------  | -----  |
| size          | small/default(默认)/large | 设置 switch 的大小 字符串 |
| color         | green(默认)/blue/red      | 设置 switch 的颜色 字符串 |
| on            | 字符串      |    设置 switch 文本 |
| off           | 字符串      |    设置 switch 文本 |
| true-value    | 字符串 默认为 true      |   设置值 |
| false-value   | 字符串 默认为 false     |   设置值 |
| ng-model   | 必填     |   |
| on-change  | 函数     |   |


### 举例

```html
<ui-switch on="亮" off="灭" size="large" color="red" true-value="亮" false-value="灭"  ng-model="test3"></ui-switch>
```

更多例子 http://get-set.cn/angular-switch/example/


### 开发

```
npm run dev
```