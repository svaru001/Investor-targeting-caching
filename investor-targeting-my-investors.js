const fetch = require('node-fetch');
// const usersData = require('../data/usersData')
const headers = require('./data/getHeaders.json')
// const { Pool, Client } = require('pg')

const isins = ["SG1M80907371",
"KYG884931042",
"JP3979210006",
"ID1000098205",
"SG2G04994999",
"HK0014000126",
"SG1U27933225",
"JP3981400009",
"SG1AB5000009",
"HK0688002218",
"ID1000061302",
"JP3528600004",
"ID1000127202",
"ID1000141104",
"SGXC39411175",
"BMG988031446",
"KYG748071019",
"SG1BJ4000001",
"INE532F01054",
"IT0001353140",
"INE481N01025",
"AU0000056269",
"SG2F25986140",
"TH8601010003",
"SG1BA1000003",
"SG1D61018413",
"TH0221B10Z05",
"TH0450010Y08",
"TH0363010Z02",
"HK0435036626",
"INE020801028",
"ID1000131808",
"KYG183221004",
"HK0388045442",
"SG2F65991521",
"PHY0488F1004",
"SG1EE4000006",
"SG1I59882965",
"HK0291001490",
"HK0023000190",
"SGXE65086469",
"SG1W66939735",
"KYG525681477",
"SG1DA4000006",
"FR0011675362",
"SG2F86994413",
"JP3837800006",
"SG1ED2000000",
"SG1Y37945678",
"INE040A01034",
"SGXE45760753",
"IL0011328858",
"BMG9310X1065",
"SG1AI3000006",
"TH0961010Y04",
"SG1X13940751",
"BMG5485F1692",
"SG1B51001017",
"INE364U01010",
"KYG713321035",
"KYG9829N1025",
"TH0781010002",
"TH0839010Y02",
"CA5980292059",
"HK2778034606",
"SG1AB8000006",
"INE332A01027",
"SGXE78822223",
"SG1O33912138",
"SG1F60858221",
"KR7002790004",
"SG1J49001550",
"MYL1619OO005",
"SG1DA7000003",
"TH0991010008",
"SGXC59097235",
"TH0689010Z00",
"TH4536010Z09",
"TH5047010001",
"AU000000LNG0",
"SGXZ53262598",
"AU000000HAS0",
"SG1T60930966",
"AU0000060055",
"JP3481200008",
"SG1O42912715",
"TH0219010Z06",
"INE684F01012",
"SG1R89002252",
"SG1S83002349",
"ID1000128804",
"INE075I01017",
"SG1N89910219",
"SGXE10224322",
"PHY6142T1052",
"SG2D51973063",
"SG2P56002559",
"NZMADE0001S4",
"HK0000139300",
"SG1V73937608",
"KYG826051099",
"SGXE73993458",
"SG2G03994610",
"BMG2155Y1075",
"TH0405010Y02",
"CNE1000002V2",
"TH9132010009",
"SG1P66918738",
"ID1000140601",
"TH0002010Z06",
"ID1000072507",
"KYG5496K1242",
"MYL5225OO007",
"SG1R50925390",
"ID1000116403",
"AU000000BSX5",
"SG1CD7000009",
"INE010A01011",
"SG1M31001969",
"KYG982771092",
"KR7009830001",
"ID1000125305",
"TH8859010002",
"AU0000114977",
"SG1V35936920",
"SG1M77906915",
"SG2D63974620",
"HK0017000149",
"ID1000106206",
"KYG261681079",
"BMG1985B1138",
"KYG0519B1023",
"SG1AE2000006",
"SG1T75931496",
"SG1DJ0000001",
"ID1000122807",
"KYG972281037",
"BMG524401079",
"ID1000138001",
"JP3131430005",
"SG2F55990442",
"KYG9449A1004",
"SGXE21576413",
"SG1S03926213",
"US98850P1093",
"SG1N31909426",
"SG2C32962814",
"SG1Y45946619",
"KYG1122A1013",
"GB0005405286",
"SG1BF4000009",
"ID1000143407",
"TH0016010R14",
"TH9527010002",
"SG2D87975520",
"SG2F77993036",
"MX01R0000006",
"CNE100003G67",
"SG1P15916395",
"SG2F08984575",
"KYG9222R1065",
"JP3394400000",
"SG2G86000004",
"SG1AJ2000005",
"TW0002605003",
"JP3933850004",
"SG1EB6000000",
"TH3871010Z01",
"CA74836M1068",
"SG1T56930848",
"TH0661010007",
"SG1CI9000006",
"US40522L1089",
"SG1Q75923504",
"HK0000069689",
"ZAE000015889",
"ID1000117500",
"SGXE54866863",
"ID1000060007",
"JP3311400000",
"JP3780050005",
"US2243991054",
"ID1000113301",
"INE486A01013",
"KYG7814S1021",
"JP3205900008",
"ID1000055007",
"ID1000121601",
"DE0005313704",
"SGXC80011726",
"SG1U25933169",
"BMG045121024",
"JE00B5BCW814",
"KYG2110P1000",
"SG1M55904841",
"KYG6074A1085",
"BMG524181036",
"KYG8087W1015",
"ID1000103609",
"PHY0001Z1040",
"SG1S04926220",
"ID1000126907",
"NZNZAE0001S5",
"TH0201A10Y01",
"ID1000135700",
"HK1883037637",
"KYG1987U1013",
"GB0005405286",
"SG1X09940682",
"SG1X84942272",
"KYG8586D1097",
"HK0267001375",
"KYG1941T1094",
"MU0117U00026",
"INE949L01017",
"BMG4587L1090",
"KYG9830T1067",
"SG2F48989824",
"TH0143010Z08",
"US7223041028",
"INE262H01013",
"SG1CI1000004",
"SG1H97877952",
"TH5073010008",
"PHY1973T1008",
"SG1T70931228",
"TH7753010001",
"SG1DH9000006",
"BMG8585U1027",
"SG2G02994595",
"KYG7397A1067",
"KYG9828G1082",
"SG1W27938677",
"KR7036570000",
"ID1000097405",
"JP3734800000",
"SG1J27887962",
"KYG875721634",
"VGG270541169",
"SGXC75818630",
"KYG2163M1033",
"SGXE48766716",
"VN000000VIB1",
"SG1M51904654",
"ID1000109507",
"ID1000099807",
"INE238A01034",
"MYL5235SS008",
"ID1000137805",
"SG1V12936232",
"PHY0005M1090",
"HK0101000591",
"SGXC16332337",
"US81141R1005",
"KYG2110A1114",
"SG1DH2000003",
"JP3386370005",
"KYG8572D1135",
"SGXE61652363",
"SG1H36875612",
"US23344D1081",
"ID1000124001",
"BMG5320C1082",
"NL0013654783",
"SGXE54479022",
"ID1000111602",
"SG2D00968206",
"SG1U89935555",
"PHY6957L1062",
"JP3436100006",
"HK1828040670",
"SG1AA5000001",
"KYG2112N1117",
"BMG7403L1046",
"SG1J26887955",
"TH9460010001",
"SG2C57965205",
"ID1000106701",
"HK0002007356",
"ID1000113202",
"SG1V52937132",
"TW0002887007",
"ID1000125800",
"SG1DE2000000",
"ID1000129208",
"ID1000121502",
"ID1000139207",
"SG1T06929205",
"KYG2118N1079",
"INE075A01022",
"BMG684371393",
"FR0010245803",
"HK0016000132",
"SG1S11926551",
"NZNZXE0001S7",
"CNE100003688",
"JP3491910000",
"SG1S18926810",
"SG1I52882764",
"ID1000153406",
"TH6068010Y02",
"ID1000095003",
"ID1000096605",
"AU0000008IH1",
"TH0688A10Z02",
"SGXE61141383",
"SG2C45963924",
"KYG3307Z1090",
"BMG3036C2239",
"JP3947010009",
"SG1AF5000000",
"US36257Y1091",
"VGG270541169",
"ID1000132707",
"ID1000129000",
"SG1Z70955880",
"ID1000108905",
"KYG6382M1096",
"TH0450010R15",
"SGXE41674636",
"SGXC61949712",
"KYG4783B1032",
"KYG319891092",
"SG1Q52922370",
"ID1000094204",
"SG1CF1000000",
"SG1EE1000009",
"SGXC37098255",
"KYG040111059",
"TH5048010000",
"TH0016010017",
"TH3545010003",
"CA92241Y1016",
"SG2D51973063",
"ID1000139801",
"TH0140010Z04",
"BMG4491W1001",
"TH0776010009",
"KYG596691041",
"TH0899010001",
"FR0013326246",
"INE619B01017",
"ID1000130305",
"KYG7783W1006",
"SG2G60000004",
"SG1R95002270",
"SG1T74931364",
"INE528G01035",
"SG2D72974892",
"TH8891010002",
"INE794B01026",
"BMG9232V2045",
"INE759A01021",
"KR7139480008",
"KYG911501057",
"CA83571A1021",
"SG2D18969584",
"SGXE14132901",
"ID1000095409",
"CNE1000003X6",
"DE000A2E4K43",
"SG1AB9000005",
"BMG4145B1063",
"US58733R1023",
"SG1L01001701",
"SG1T66931158",
"HK0669013440",
"ID1000106800",
"HK0823032773",
"SG0531000230",
"ID1000136500",
"SG2E64980112",
"MYL6012OO008",
"ID1000129703",
"SG1P32918333",
"TH0016010009",
"ID1000102502",
"TH5882010009",
"TH6820010002",
"MYL6399OO009",
"SG2G07995670",
"SG1ED7000005",
"BMG202981087",
"SG1DG2000005"
]


isins.forEach((isin, i) => {
  setTimeout(() => {
    fetch('https://datacloud1.smartkarma.com/v3/target-investors/entities/'+isin+'?sort=asc&page=1', {
      headers: headers,
      method: 'GET',
   }).then(res =>  {
    console.log("response ok?="+res.ok+"  response.status="+res.status+"  for isin="+isin+' asc+page#1 ')
    //console.log(res.status)
     //console.log(res)
     //console.log('--------------------------------------------------------')
     
  })
  }, i * 2500);
  setTimeout(() => {
    fetch('https://datacloud1.smartkarma.com/v3/target-investors/entities/'+isin+'?sort=asc&page=2', {
      headers: headers,
      method: 'GET',
   }).then(res =>  {
    console.log("response ok?="+res.ok+"  response.status="+res.status+"  for isin="+isin+' asc+page#2 ')
     //console.log(res.status)
     //console.log(res)
     //console.log('--------------------------------------------------------')  
  })
  }, i * 3500);
  setTimeout(() => {
    fetch('https://datacloud1.smartkarma.com/v3/target-investors/entities/'+isin+'?sort=desc&page=1', {
      headers: headers,
      method: 'GET',
   }).then(res =>  {
    console.log("response ok?="+res.ok+"  response.status="+res.status+"  for isin="+isin+' desc+page#1 ')
    //console.log(res.status)
     //console.log(res)
     //console.log('--------------------------------------------------------')
     
  })
  }, i * 4500);
  setTimeout(() => {
    fetch('https://datacloud1.smartkarma.com/v3/target-investors/entities/'+isin+'?sort=desc&page=2', {
      headers: headers,
      method: 'GET',
   }).then(res =>  {
    console.log("response ok?="+res.ok+"  response.status="+res.status+"  for isin="+isin+' desc+page#2 ')
     //console.log(res.status)
     //console.log(res)
     //console.log('--------------------------------------------------------')  
  })
  }, i * 5500);
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

