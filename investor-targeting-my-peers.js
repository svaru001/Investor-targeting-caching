const fetch = require('node-fetch');
// const usersData = require('../data/usersData')
const headers = require('./data/getHeaders.json')
// const { Pool, Client } = require('pg')

const isins =
  ["SG1V12936232",
"SG1S03926213,SG2C32962814,SG2D18969584",
"SG1J27887962",
"SG1P32918333,SG1T60930966,SG2D18969584,SG2G02994595",
"SG1M77906915,SG1P32918333,SG2C32962814",
"SG1T75931496,SG1U89935555",
"ID1000095003,ID1000096605",
"ID1000096605,ID1000109507",
"PHY6957L1062,SG1J26887955",
"MYL5225OO007,SG1DG2000005,SG1Y37945678",
"SGXC75818630",
"ID1000094204,ID1000095003,ID1000096605,ID1000109507",
"SG1T56930848",
"ID1000129208,ID1000135700",
"ID1000135700",
"SG1CI9000006,SG1M77906915,SG1S03926213,SG1T70931228,SG1Z70955880,SG2D63974620,SG2G07995670",
"SG1CI9000006,SG1M77906915,SG1S03926213,SG1T70931228,SG1Z70955880,SG2C32962814,SG2C57965205,SG2G07995670",
"SG1CI9000006,SG1M51904654,SG1M77906915,SG1P32918333,SG1Q52922370,SG1S03926213,SG1T70931228,SG1U25933169,SG2C32962814,SG2C57965205,SG2D63974620,SG2G07995670",
"ID1000102502,ID1000106206,ID1000125305,ID1000128804",
"ID1000097405,ID1000102502",
"SG1CI9000006,SG1M51904654,SG1M77906915",
"ID1000129703,ID1000130305",
"SG1H36875612,SG2F25986140",
"SG1R50925390",
"TH0661010007",
"SG2D00968206",
"ID1000117500",
"SG1Y45946619",
"SG1AA5000001,SG1T66931158,SG2F08984575,SGXC80011726",
"ID1000125305",
"ID1000121601",
"ID1000095003,ID1000109507",
"SG2F08984575",
"MU0117U00026",
"SG1J27887962,SG1W66939735",
"TH0991010008",
"SG1CI1000004,SG1P32918333,SG1Q52922370,SG2G60000004,SGXC37098255,SGXC75818630",
"SG1J26887955",
"SG1M51904654,SG1T60930966,SG2D18969584,SG2G02994595",
"ID1000122807",
"SG1CI9000006,SG1M77906915,SG1S03926213,SG1Z70955880,SG2C32962814,SG2C57965205,SG2D63974620",
"ID1000061302",
"KYG6382M1096",
"TH0961010Y04",
"ID1000111602",
"ID1000122807",
"BMG684371393",
"SG1CI1000004,SG1D61018413,SG1N31909426,SG1R95002270",
"ID1000106206",
"BMG524401079,HK0016000132,HK0101000591,SG1J27887962",
"BMG684371393",
"SG1Q75923504,SG1T75931496,SGXE78822223",
"US98850P1093",
"SG1X84942272",
"SG1J27887962,SG1R89002252,SG1S83002349",
"SG1Q75923504,SG1T56930848",
"SGXE54479022",
"SG1AA5000001,SG1AB8000006,SG1CI1000004,SG1CI9000006,SG1DE2000000,SG1M51904654,SG1M77906915,SG1S03926213,SG1T60930966,SG1T66931158,SG1T70931228,SG1U25933169,SG1W27938677,SG2C32962814,SG2D18969584,SG2F55990442,SG2G03994610,SG2G07995670,SG2G60000004,SGXC16332337,SGXC37098255",
"JP3436100006",
"KYG040111059,KYG5496K1242,KYG982771092",
"SG1M77906915,SG1P32918333,SG1S03926213,SG2C32962814,SG2D18969584,SG2F55990442,SG2G60000004",
"SG1J26887955",
"ID1000129208,ID1000135700",
"SG1T75931496,SG1V12936232",
"KYG972281037,US36257Y1091",
"SG1CD7000009,SG1DA7000003",
"SGXE65086469",
"SG1U25933169",
"SG1Y37945678",
"SG1CI1000004",
"SG1S18926810,SG1T60930966,SG2F55990442,SG2G02994595",
"SG1CI1000004,SGXC37098255,SGXC75818630",
"SG1CI1000004,SGXC75818630,SGXC80011726",
"SG1Q52922370",
"TH3545010003",
"SG1BA1000003",
"SG0531000230,SG1BA1000003"
]


isins.forEach((isin, i) => {
  setTimeout(() => {
    fetch('https://datacloud1.smartkarma.com/v3/target-investors/peers?isins='+isin+'&sort=asc&page=1', {
      headers: headers,
      method: 'GET',
   }).then(res =>  {
    console.log("response ok?="+res.ok+"  response.status="+res.status+"  for isin="+isin+' asc+page#1 ')
    //console.log(res.status)
     //console.log(res)
     console.log('--------------------------------------------------------')
     
  })
  }, i * 3000);
  setTimeout(() => {
    fetch('https://datacloud1.smartkarma.com/v3/target-investors/peers?isins='+isin+'&sort=asc&page=2', {
      headers: headers,
      method: 'GET',
   }).then(res =>  {
    console.log("response ok?="+res.ok+"  response.status="+res.status+"  for isin="+isin+' asc+page#2 ')
     //console.log(res.status)
     //console.log(res)
     //console.log('--------------------------------------------------------')  
  })
  }, i * 5000);
  setTimeout(() => {
    fetch('https://datacloud1.smartkarma.com/v3/target-investors/peers?isins='+isin+'&sort=desc&page=1', {
      headers: headers,
      method: 'GET',
   }).then(res =>  {
    console.log("response ok?="+res.ok+"  response.status="+res.status+"  for isin="+isin+' desc+page#1 ')
    //console.log(res.status)
     //console.log(res)
     //console.log('--------------------------------------------------------')
     
  })
  }, i * 7000);
  setTimeout(() => {
    fetch('https://datacloud1.smartkarma.com/v3/target-investors/peers?isins='+isin+'&sort=desc&page=2', {
      headers: headers,
      method: 'GET',
   }).then(res =>  {
    console.log("response ok?="+res.ok+"  response.status="+res.status+"  for isin="+isin+' desc+page#2 ')
     //console.log(res.status)
     //console.log(res)
     //console.log('--------------------------------------------------------')  
  })
  }, i * 9000);
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