let request = require('request');
let iconv = require('iconv-lite');
let cheerio = require('cheerio');
// model=模型 module=模块
function read(url, callback) {
  request({url, encoding: null}, function (err, res, body) {
    //如果没有错误并且响应的状态码为200的时候
    if (!err && res.statusCode == 200) {
      //把一个GBK类型的Buffer转成一个utf8的字符串
      body = iconv.decode(body, 'gbk');
      //把字符串转成jQuery对象
      let $ = cheerio.load(body);
      //可以迭代所有的A标签 拥有keyword类下面的list-title类的A标签
      //得到的是一个集合，可以通过each进行循环迭代 index索引 item每个元素
      let movies = [];
      $('.keyword a.list-title').each(function(index,item){
         let $this = $(item);
         let movie = {
           name:$this.text(),//a标签里的文本就是电影的名字
           url:$this.attr('href')//a标签的href属性就是超链接
         }
         console.log(`读到电影:${movie.name}`);
         movies.push(movie);
      });
      callback(err,movies);
    }
  });
}

/*let url = 'http://top.baidu.com/buzz?b=26';
read(url, function (err, movies) {
  console.log(movies);
});*/

module.exports = read;