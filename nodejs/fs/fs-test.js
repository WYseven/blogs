/**
 * Created by seven on 2016/10/8.
 */
let fs = require('fs');

/*fs.writeFileSync("a.txt","hello123456",{flag:'w'},(error,data)=>{
    console.log(erro);
    console.log(data);
})*/

/*fs.writeFile("a.txt","wangyun123",{flag:"w+"},(error,data)=>{
    console.log(error,data);
});*/

/*fs.readFile("a.txt",(error,data)=>{
    console.log(data.toString());
});*/

/*fs.unlink('./a.txt',(error,data)=>{
    console.log(error,data);
})*/
/*fs.mkdir("./abc",(error,data)=>{
    console.log(error,data);
})*/

/*fs.readdir("./fs",(error,data)=>{
    console.log(error,data);
})*/
/*fs.stat("./fs.js",(error,stat)=>{
    console.log(stat.constructor === fs.Stats);  //true
    console.log(stat.isFile());   //true
    console.log(stat.isDirectory()); //false
});*/

/*fs.rmdir("./abc",(error,data)=>{
    console.log(error,data);
});*/

var rmdirFunction = (path,cb) =>{

}
//删除文件或文件夹 异步方式
rmdirFunction("./abc",(error,data)=>{
})

fs.watchFile("./abc/3.txt",(cur,prev)=>{
    console.log(cur.mtime,prev.mtime);
})



