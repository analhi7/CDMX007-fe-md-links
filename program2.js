const fs = require('fs');


const linesNum = ()=>{


fs.readFile('./README.md', function(err, data) {
    if (err){
        console.log(err);
    }
    else {
    
    const findFiles = data.toString();
    console.log(findFiles)
        }})

    
}


    module.exports = linesNum(); 