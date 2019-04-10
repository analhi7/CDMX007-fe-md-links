#!/usr/bin/env node
const readReadme = require('./readReadme')
const linkfinder = require('./searchlink')
const validate = require ('./validate')
const options = process.argv[3]

if(options =='--validate'){
readReadme()
.then((data) => linkfinder(data))
  .then(links => validate(links))
  .then(linkStatus =>{
       console.log(linkStatus)
  })

}

else {
     readReadme()
     .then((data) => console.log(data))     
}