const fs = require('fs');

const {stat} = fs;
const filePath = './takeout/t.jpg';
stat(filePath,function (err,stats){
    if(err){
      console.error(err);
      return;
    }
    console.log(stats.size);
})

