const selectMode = require('./selectMode');
const fs = require("fs");

selectMode(process.argv);

if(process.argv[4]) {
  fs.writeFileSync(`${process.argv[4]}` , JSON.stringify(selectMode(process.argv), null, '\t'));
} else {
  console.log(selectMode(process.argv));
}
