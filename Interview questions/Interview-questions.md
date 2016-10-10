提高题
----------------
#### 题目一：
```
if (!("a" in window)) {
    var a = 1;
}
alert(a);  //弹出a的值为？
```
*提示*：**in**的意思是，判断属性是否存在于某个对象中，存在则返回true，否则返回false

#### 题目二：
```
var a = 1;
var b = function a(x) {
        x && a(--x);
    };
alert(a);//弹出a的值为？
```
#### 题目三：
```
function a(x) {
    return x * 2;
}
var a;
alert(a);//弹出a的值为？
```
#### 题目四：
```
function b(x, y, a) {
    arguments[2] = 10;
    alert(a);//弹出a的值为？
}
b(1, 2, 3);
```
#### 题目五：
```
function b(x, y, a) {
    arguments[2] = 10;
    alert(a);//弹出a的值为？
}
b(1, 2);
```

以上题目出处：[!http://dmitry.baranovskiy.com/post/91403200](http://dmitry.baranovskiy.com/post/91403200)

#### 题目六
```
function Foo() {
    getName = function () { alert (1); };
    return this;
}
Foo.getName = function () { alert (2);};
Foo.prototype.getName = function () { alert (3);};
var getName = function () { alert (4);};
function getName() { alert (5);}

//请写出以下输出结果：
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();
```
### 问答题
#### 题目一：
给一个数组var arr = [3,4,6,7,10,39,5],找出数组中的最大值，使用Match.max函数。

#### 题目二：
给一个数组var arr = [3,4,6,7,10,39,5],
把这个数组的每一项转换成函数，调用这个函数可以打印出对应的数字。

#### 题目三：
给一个数组，数组中存多个对象，对这个数组进行排序，要求：按照对象中属性的个数从小到大排序
```
var arr = [
	{
		a:1,
		b:1,
		c:3
	},
	{
		a:1,
		b:1,
		c:3,
		d:5
	},
	{
		b:2,
		c:3
	},
	{
		a:1
	},
]
```
*提示：*可以使用Ecmascript2015最新特性做



