let {Movie} = require('../model');
function write(movies,callback){
  Movie.create(movies).then(callback);
}
module.exports = write;