// module.exports = () => {
//   // ...
// };

// const fs = require('fs');
const dir = require('./readDir');
// const file = process.argv[2]

dir().then((data) => {
     console.log(data)
})



