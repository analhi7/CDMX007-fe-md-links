const fs = require('fs');

const file = process.argv[2]

const readMyFile = async () => {
     
   const myPromise = new Promise((resolve, reject) => {

       //const readmeString = "";

     fs.readFile(file, (err, data) => {
  
       if (err) {
         reject (err);
       } else {

         resolve(data.toString())
       }
     })
  
   });
   const result = await myPromise
   return result
  }

  

 

module.exports= ReadMyFile;

   




// readMyFile(file).then((data) =>{
// console.log(data)
// })





  