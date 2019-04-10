
const fetch = require('node-fetch');


const validate = (data)=> {
    
    //  const newArry = []
    data.forEach( element => {

    fetch(element)
    .then(res => {
     const  linksStatus = `${element}` + ' ' + res.status + ' ' + res.statusText
    //  newArry.push(linksStatus)
     console.log(linksStatus)
    
    })
    .catch(err => console.log(err))
},
)
 
}

module.exports = validate