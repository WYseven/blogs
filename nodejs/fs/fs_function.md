fs模块学习笔记
-------------

## 标记(flags)记录

```
'r' - 读取文件内容，文件不存在会抛出错误
'w' - 打开文件进行编写，文件不存在则创建，文件存在则从头写入
'wx'- 跟'w'功能类似，不同的是如果目标文件存在则写入失败
'a' - 打开文件追加内容，文件不存在则创建一个
'ax' - 跟'w'功能类似，不同的是如果目标文件存在则追加写入失败
```

## 方法学习

**fs.readFile**
异步读取文件内容
```
fs.writeFile(fileName,[options],[callback(error,data)]);
```
- fileName  <String>  
    文件名
- options <Object> | <String>
    设置参数
    ```
    encoding <String> | <Null>
		编码，default = null
	flag <String>
		操作模式，default = 'r'
    ```
- callback 回调函数
    ```
    参数：
        error 错误信息
        data 读取的内容
    ```
*如果没用指定encoding，返回原生的buffer*

**fs.writeFile**
异步写入文件内容，如果文件存在则替换文件的内容，可以写入字符串或buffer数据
```
fs.writeFile(fileName,data,[options],[callback(error,data)]);

- fileName  <String>  
    文件名
 
- data <String> | <Buffer>
    写入文件的数据，字符串或Buffer
    
- options <Object> | <String>
    设置参数
	```
	encoding <String> | <Null>
		编码，default = 'utf-8'
	mode <Number>
		文件模式（权限），default = 0o666
	flag <String>
		操作模式，default = 'w'
	```
- callback <Function>
    回调函数
```



**fs.appendFile**
异步操作追加数据到指定文件
```
fs.writeFile(fileName,data,[options],[callback(error,data)]);

- fileName  <String>  
    文件名
- data <String> | <Buffer>
    写入文件的数据，字符串或Buffer
- options <Object> | <String>
    设置参数
	```
	encoding <String> | <Null>
		编码，default = 'utf-8'
	mode <Number>
		文件模式（权限），default = 0o666
	flag <String>
		操作模式，default = 'a'
	```
- callback <Function> 
    回调函数
```


**fs.unlink**
异步删除指定的文件，如果删除的文件不存在，则会抛出一个错误
```
fs.unlink(path,[callback(error,data)]);
```

**fs.rmdir**
异步删除指定的文件夹，如果删除的文件不存在或文件不为空，则会抛出一个错误
```
fs.rmdir(path,[callback(error,data)]);
```

**fs.mkdir**
异步创建文件夹，如果创建的文件夹已经存咋，则会抛出一个错误
```
fs.mkdir(path,[callback(error,data)]);
```

**fs.readdir**
异步读取文件夹内容，如果文件夹不存在或读取的不是一个文件夹，则会抛出一个错误
```
fs.readdir(path,[callback(error,data)]);
```
*读取文件夹中的文件名存在一个数组中，通过callback的第二个参数得到这个数组*

**fs.stat**
异步得到关于文件/文件夹的信息
```
fs.stat(path,[callback(error,stat)]);
```
*callback的第二个参数是一个fs.Stats类的实例化对象，通过这个对象调用方法判断文件的类型*

**fs.Stats**
这是一个类，通过这个类实例化一个对象，这个对象有方法判断文件的类型
```
stat.isFile():判断是否是文件
stat.isDirectory():判断是否是文件夹
```
*示例*：
```javascript
fs.stat("./fs.js",(error,stat)=>{
    console.log(stat.constructor === fs.Stats);  //true
    console.log(stat.isFile());   //true
    console.log(stat.isDirectory()); //false
});
```
