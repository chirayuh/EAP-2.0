 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyA69YqN5YjYQTSsMmJBUdKu6aAK6GXlLEM",
  authDomain: "eap-2019.firebaseapp.com",
  databaseURL: "https://eap-2019.firebaseio.com",
  projectId: "eap-2019",
  storageBucket: "",
  messagingSenderId: "801881703655",
  appId: "1:801881703655:web:70043001e57e0c6a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//defining table name
var entryRef = firebase.database().ref('Entries');

// This is the place where we give event action to submit button.
document.getElementById('Eapform').addEventListener('submit', submitform);
function submitform(e) {

e.preventDefault();
var total_amt = getValueById("Total-amt");
var avail_bal = getValueById("avail-bal");
var empName = getValueById("empName");
var empid = getValueById("empid");
var empEmail = getValueById("empEmail");
var team = getValueById("team");
var designation = getValueById("designation");
var approverName = getValueById("approverName");
var approverEmail = getValueById("approverEmail");
var program = getValueById("program");
var method_dropdown = getValueById("method_dropdown");
var category_dropdown = getValueById("category_dropdown");
var area_dropdown = getValueById("area_dropdown");
var university = getValueById("university");
var address = getValueById("address");
var ESD = getValueById("ESD");
var EED = getValueById("EED");
var comment1 = getValueById("comment1");
var comment2 = getValueById("comment2");
var comment3 = getValueById("comment3");
var aproover_dropdown = getValueById("aproover_dropdown");
var aproover_comment = getValueById("aproover_comment");
var hr_dropdown = getValueById("hr_dropdown");
var hr_comment = getValueById("hr_comment");
var expense_head_1 = getValueById("expense_head_1");
var amount1 = getValueById("amount1");
var expense_head_2 = getValueById("expense_head_2");
var amount2 = getValueById("amount2");
var expense_head_3 = getValueById("expense_head_3");
var amount3 = getValueById("amount3");
var expense_head_4 = getValueById("expense_head_4");
var amount4 = getValueById("amount4");
var amount5 = getValueById("amount5");

var body= "sample body";

//   saveEntries(name,empid,email,team,designation,manager,manager_email,program,agency,comment1,comment2,comment3,aproover_dropdown,aproover_comment,hr_dropdown,hr_comment);
saveEntries(total_amt,avail_bal,empName,empid,empEmail,team,designation,approverName,approverEmail,program,method_dropdown,category_dropdown,area_dropdown,university,address,ESD,EED,comment1,comment2,comment3,aproover_dropdown,aproover_comment,hr_dropdown,hr_comment,expense_head_1,amount1,expense_head_2,amount2,expense_head_3,amount3,expense_head_4,amount4,amount5);
window.open(`mailto:${approverEmail}?subject=${empName} EAP Approval&body=${body}`);
}


//This function will return the values entered in the textfields
function getValueById(id) {
return document.getElementById(id).value;
}

// save the Entry
function saveEntries(total_amt,avail_bal,empName,empid,empEmail,team,designation,approverName,approverEmail,program,method_dropdown,category_dropdown,area_dropdown,university,address,ESD,EED,comment1,comment2,comment3,aproover_dropdown,aproover_comment,hr_dropdown,hr_comment,expense_head_1,amount1,expense_head_2,amount2,expense_head_3,amount3,expense_head_4,amount4,amount5) {
var newEntryRef = entryRef.push();
console.log(newEntryRef.key);
newEntryRef.update({
  total_amt:total_amt,
  avail_bal:avail_bal,
  empName:empName,
  empid:empid,
  empEmail:empEmail,
  team:team,
  designation:designation,
  approverName:approverName,
  approverEmail:approverEmail,
  program:program,
  method_dropdown:method_dropdown,
  category_dropdown:category_dropdown,
  area_dropdown:area_dropdown,
  university:university,
  address:address,
  ESD:ESD,
  EED:EED,
  comment1:comment1,
  comment2:comment2,
  comment3:comment3,
  aproover_dropdown:aproover_dropdown,
  aproover_comment:aproover_comment,
  hr_dropdown:hr_dropdown,
  hr_comment:hr_comment,
  expense_head_1:expense_head_1,
  amount1:amount1,
  expense_head_2:expense_head_2,
  amount2:amount2,
  expense_head_3:expense_head_3,
  amount3:amount3,
  expense_head_4:expense_head_4,
  amount4:amount4,
  amount5:amount5
})
  
}