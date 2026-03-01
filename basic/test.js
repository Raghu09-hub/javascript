console.log("raghu kumar");
const accountId = 231151
let accountPassword = "raghu"
var accountEmail="rag@gamil.com"
accountType=3;
let accn
// here accn will be undefined

// accountId=333 cannot do because const not allow change
// for printing in tabular form 
/*
dont use  var  beacuse of issue scope 
*/
console.table([accountId,accountPassword,accountEmail,accountType,accn])

console.log(accountId)