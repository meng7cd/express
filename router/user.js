const express = require("express");

// 创建模块化路由
const router = express.Router();

// 监听/user下的所有路由，打印访问日志
router.use((req, res, next) => {
  console.log("url: ", req.url);
  console.log("Time: ", Date.now());
  next();
});

// 测试用户信息数据
const userInfo = {
  name: "Meng",
  age: 1,
};

// 获取用户信息
router.get("/getUserInfo", (req, res) => {
  res.send({
    code: 1,
    data: userInfo,
  });
});

// 更新用户信息
router.get("/updateUserInfo", (req, res) => {
  const setUserInfo = {
    name: "Dom",
  };
  res.send({
    code: 1,
    data: { ...userInfo, ...setUserInfo },
  });
});

module.exports = router;
