const express = require('express');
const app = express();
const port = 8089; // 指定端口号
const auth = require('basic-auth');

app.get('/admins/hi', (req, res) => {

    var credentials = auth(req)

    // 登录认证检验
    if (!credentials || !check(credentials.name, credentials.pass)) {
        res.statusCode = 401
        res.setHeader('WWW-Authenticate', 'Basic realm="example"')
        res.end('Access denied')
    } else {
		res.send('Hello World!')
	}

});

// 检查权限
const check = function (name, pass) {
    var valid = false;

    // 判读账号密码是否匹配
    if (('waylau' === name) && ('123456' === pass)) {
        valid = true;
    }
    return valid
}

app.listen(port, () => console.log(`Server listening on port ${port}!`));


