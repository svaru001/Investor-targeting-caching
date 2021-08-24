const fetch = require('node-fetch');
// const usersData = require('../data/usersData')
const headers = require('./data/getHeaders.json')
// const { Pool, Client } = require('pg')

const alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
]

// var displaySequence = function(){
//   compSequence.forEach(function(color, index){
//       setTimeout(function(){
//           $("#" + color).fadeTo(300, 0.5).fadeTo(300, 1.0);
//       },
//       1000 * index);
//   })
// }



alphabets.forEach((currentAlpha, i) => {
  setTimeout(() => {
    fetch('https://datacloud1.smartkarma.com/v3/target-investors/institutions?starts_with='+currentAlpha+'&sort=asc&page=1', {
      headers: headers,
      method: 'GET',
   }).then(res =>  {
     console.log("response ok?="+res.ok+"  response.status="+res.status+"  for alphabet="+currentAlpha+" &sort=asc  & page=1")
     //console.log(res.status)
     //console.log(res)
     //console.log('--------------------------------------------------------')
     
  })
  }, i * 3000);
  setTimeout(() => {
    fetch('https://datacloud1.smartkarma.com/v3/target-investors/institutions?starts_with='+currentAlpha+'&sort=asc&page=2', {
      headers: headers,
      method: 'GET',
   }).then(res =>  {
    console.log("response ok?="+res.ok+"  response.status="+res.status+"  for alphabet="+currentAlpha+" &sort=asc  & page=2")
    //console.log(res.status)
     //console.log(res)
     //console.log('--------------------------------------------------------')
     
  })
  }, i * 5000);

  setTimeout(() => {
    fetch('https://datacloud1.smartkarma.com/v3/target-investors/institutions?starts_with='+currentAlpha+'&sort=desc&page=1', {
      headers: headers,
      method: 'GET',
   }).then(res =>  {
     console.log("response ok?="+res.ok+"  response.status="+res.status+"  for alphabet="+currentAlpha+"  &sort=desc & page=1")
     //console.log(res.status)
     //console.log(res)
     //console.log('--------------------------------------------------------')
     
  })
  }, i * 3000);
  setTimeout(() => {
    fetch('https://datacloud1.smartkarma.com/v3/target-investors/institutions?starts_with='+currentAlpha+'&sort=desc&page=2', {
      headers: headers,
      method: 'GET',
   }).then(res =>  {
    console.log("response ok?="+res.ok+"  response.status="+res.status+"  for alphabet="+currentAlpha+" &sort=desc  & page=2")
    //console.log(res.status)
     //console.log(res)
     //console.log('--------------------------------------------------------')
     
  })
  }, i * 5000);
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

