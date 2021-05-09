import Mock from 'mockjs'

Mock.mock('/api/user/login', {
  "code": 20000,
  "data": {
    "token": Mock.Random.guid(),
    "userName": 'admain',
    "message": '登录成功'
  }
});

Mock.mock('/api/user/logout', {
  "code": 20000,
  "data": {
    "message": '退出成功'
  }
});

