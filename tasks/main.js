let read = require('./read');
let write = require('./write');
let async = require('async');
let {Movie} = require('../model');
let url = 'http://top.baidu.com/buzz?b=26';
async.waterfall([
  function(callback){
    Movie.remove({},callback);
  },
  function(data,callback){
     read(url,callback);
  },
  function(movies,callback){
     write(movies,callback);
  }
],function(err,result){
  console.log(result);
  console.log('全部任务完成!');
});
// __v: 0, 版本号 解决并发修改问题
// 0  -> 1000
// 1000  ->