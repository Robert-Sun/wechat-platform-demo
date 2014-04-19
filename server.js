var port = 18080;
var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var wechat = require('wechat');

var routes = require('./routes/index');
var users = require('./routes/users');
var tuangou = require('./routes/tuangou');
var zufang = require('./routes/zufang');
var waimai = require('./routes/waimai');
var zhekou = require('./routes/zhekou');
var qiuzhi = require('./routes/qiuzhi');

var app = express();

var sexGirls = ['001.jpg', '002.jpg', '003.jpg', '004.jpg', '005.jpg', '006.jpg'];

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/tuangou', tuangou);
app.use('/zufang', zufang);
app.use('/waimai', waimai);
app.use('/zhekou', zhekou);
app.use('/qiuzhi', qiuzhi);

app.use('/wechat', wechat('tinker', function (req, res, next) {
  console.log('route wechat...');
  var message = req.weixin;
  console.log('message.ToUserName: ' + message.ToUserName);
  console.log('message.MsgType: ' + message.MsgType);
  console.log('message.Content: ' + message.Content);

  if (message.MsgType === 'text') {
    if (message.Content === '1') {
      res.reply('哈哈，你个傻叉，这你也信呀，哪来的折扣');
    } else if (message.Content === '2') {

    } else if (message.Content === '3') {

    } else if (message.Content === '4') {

    } else if (message.Content === '5') {

    } else if (message.Content === '6') {
      res.reply([
        {
          title: '看到美女请淡定',
          description: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈啊哈哈啊哈哈哈哈啊哈哈哈哈哈啊哈哈哈哈哈哈啊哈哈哈哈哈哈哈啊 哈哈哈啊哈哈啊哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈啊哈哈哈哈',
          picurl: 'http://livinginemacs.duapp.com/images/' + sexGirls[Math.floor(Math.random() * sexGirls.length)]
        }
      ]);
    } else {
      res.reply({
        content: '【折扣商铺】\n 回复 1 或 折扣 查看所有<a href="http://livinginemacs.duapp.com/zhekou">合作折扣商铺</a>\n\n\n【外卖商城】\n 回复 2 或 外卖 进入<a href="http://livinginemacs.duapp.com/waimai">外卖商城</a>，足不出户品尝各种美食\n\n\n【团购秒杀专区】\n 回复 3 或 团购 进入<a href="http://livinginemacs.duapp.com/tuangou">秒杀专区</a>，好运随你来，大礼带回家\n\n\n【招聘求职】\n 回复 4 或 求职 进入<a href="http://livinginemacs.duapp.com/qiuzhi">求职专区</a>，各种职位随你挑\n\n\n【房屋出租】\n 回复 5 或 租房 进入<a href="http://livinginemacs.duapp.com/zufang">房屋出租专区</a>，出租房求租房尽在掌握\n\n\n 【美女图片】\n 回复 6 或 美女 即可看各种美女图片哦，哈哈，保密',
        type: 'text'
      });
    }
  }

/*
  if (message.FromUserName === 'diaosi') {
    res.reply('hehe');
  } else if (message.FromUserName === 'text') {
    res.reply({
      content: 'text object',
      type: 'text'
    });
  } else if (message.FromUserName === 'hehe') {
    res.reply({
      type: "music",
      content: {
        title: "来段音乐吧",
        description: "一无所有",
        musicUrl: "http://mp3.com/xx.mp3",
        hqMusicUrl: "http://mp3.com/xx.mp3"
      }
    });
  } else {
    res.reply([
      {
        title: '你来我家接我吧',
        description: '这是女神与高富帅之间的对话',
        picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
        url: 'http://nodeapi.cloudfoundry.com/'
      }
    ]);
  }
 */
}));

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});



app.listen(port);