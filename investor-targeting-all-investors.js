const fetch = require('node-fetch');
// const usersData = require('../data/usersData')
const headers = require('./data/getHeaders.json')
// const { Pool, Client } = require('pg')

const alphabets = [
  "1",
  "2",
  "3",
  "4"
]



alphabets.forEach((page, i) => {
  setTimeout(() => {
    fetch('https://datacloud1.smartkarma.com/v3/target-investors/institutions?sort=asc&page='+page, {
      headers: headers,
      method: 'GET',
   }).then(res =>  {
    console.log("response ok?="+res.ok+"  response.status="+res.status+"  for asc sort and page="+page)
    //console.log(res.status)
     //console.log(res)
     //console.log('--------------------------------------------------------')
     
  })
  }, i * 3000);
  setTimeout(() => {
    fetch('https://datacloud1.smartkarma.com/v3/target-investors/institutions?sort=desc&page='+page, {
      headers: headers,
      method: 'GET',
   }).then(res =>  {
     console.log("response ok?="+res.ok+"  response.status="+res.status+"  for desc sort and page="+page)
     //console.log(res.status)
     //console.log(res)
     //console.log('--------------------------------------------------------')  
  })
  }, i * 4000);
});




// alphabets.forEach(currentAlpha => {

//       fetch('https://silat-staging.smartkarma.com/v3/target-investors/institutions?starts_with='+currentAlpha+'&page=1', {
//          headers: headers,
//          method: 'GET',
//       }).then(res =>  {
//         console.log('--------------------------------------------------------')
//         console.log(res.ok)
//         console.log(res.status)
//         console.log(res)
//         console.log('--------------------------------------------------------')
        
//      })
//  })

// const client = new Client({
//   user: 'skadmin',
//   host: 'clients-api-staging.c8z9wqzjlfg3.ap-southeast-1.rds.amazonaws.com',
//   database: 'clients_api_staging',
//   password: '04Za7wdOX3xqQ3wPJ4L3',
//   port: 5432,
// })
// client.connect()
// client.query('update accounts set is_dormant=false where id in (2577,2576,2507,2580)', (err, res) => {
// client.end()
// console.log('External IP, Demo IP, Trial IP & Demo Syndicator/Issuer Paid IP have been marked as is-dormant=false')
// })