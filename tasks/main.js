let read = require('./read');
let write = require('./write');
let async = require('async');
let url = 'http://top.baidu.com/buzz?b=26';
async.waterfall([
  function(callback){
     read(url,callback);
  },
  function(movies,callback){
     write(movies,callback);
  }
],function(err,result){
  console.log('全部任务完成!');
});