Error-First 回调模式
------------------
错误优先回调模式

#### 两条规则：

1.回调函数的第一个参数保留给一个Error对象，如果有操作发生，错误信息将通过回调函数的第一个参数返回

2.回调函数的第二个参数为成功返回的数据，如果没有错误发生，err（第一个参数）讲设置为null，成功返回的数据将通过第二个参数返回

例如：

```javascript
fs.writeFile('1.txt', 'hello', function(err, data) {
	console.log(err);
	console.log(data);
})
```
