const https = require('https')
const http = require('http')


// const arrayLink = ['https://code-maven.com/reading-a-file-with-nodejs', 'https://www.w3schools.com/jsref/jsref_push.asp']

const status = async (data)=>{

   
   const newPromise = new Promise((resolve, reject) => {
    const newArrayLinks =[] 
    let solvedLinks = 0;
    data.forEach(function(linkUs){
    
   
    https.get(linkUs, (res) => {
        newArrayLinks.push(linkUs + ' ' + res.statusCode )
        solvedLinks += 1;
    
        if(data.length === solvedLinks) {
          resolve(newArrayLinks);
        }
      }).on('error', (e) => {

      reject(e)
      });
      
      
    })
   
  })
  const result = await newPromise
  return result
  }

module.exports = status






























// const arrayLink = ['https://code-maven.com/reading-a-file-with-nodejs', 'https://code-maven.com/read-a-file-with-nodejs']
// const validate = async () => {
 
//       linksArrayValidate = []
//       const newPromise = new Promise((resolve, reject) => {

//                  arrayLink.forEach(function (linkUs) {
//                 https.get(linkUs, (res) => {
//                   //  console.log(res.statusCode)
//                   const linkStatus = res.statusCode

//                   linksArrayValidate.push(linkStatus, linkUs)


//                 });
//                 resolve(linksArrayValidate)
//               }


//             )
//           });
//             const result = await newPromise
//             console.log(result)
//           }

//           validate()