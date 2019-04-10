// module.exports = () => {
//   // ...
// };

// const fs = require('fs');
const chalk = require('chalk')
const dir = require('./readDir');
const readReadme = require('./readReadme')
// const file = process.argv[2]

dir()
.then(data => {
     data.forEach(element => {
          readReadme(element)     
     });  
})



