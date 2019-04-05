
// const fs = require('fs');
const readReadme = require('./readReadme')
const linkfinder = require('./searchlink')
const validate = require ('./validate')

//const dir = require('./readDir');
// const file = process.argv[2]

readReadme()
.then((data) => linkfinder(data))
  .then(links => validate(links))
  .then(linkStatus =>{
       console.log(linkStatus)
  })








