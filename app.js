// 导入 express
const express = require("express");

// 导入 userRouter
const userRouter = require("./router/user.js");

// 创建 web 服务器
const app = express();

// 指定web服务资源目录
app.use('/', express.static("www"));

// 指定静态资源目录
app.use("/static", express.static("public"));

// 注册user路由
app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("Express Server running at http://127.0.0.1:3000");
});
