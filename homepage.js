const form = document.querySelector('#Eapform');

var app = angular.module("homepage", []);
app.controller("myCtrl", function($scope) {
  $scope.firstName = "John";
  $scope.lastName = "Doe";
});
document.addEventListener('DOMContentLoaded', function() {
  var select = document.querySelectorAll('select');
  M.FormSelect.init(select, {});
  var datepicker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datepicker, {});
});
function change() {
    form.Total.value = +form.Amount_1.value + +form.Amount_2.value + +form.Amount_3.value + +form.Amount_4.value;
    document.getElementById('progress').style.width = form.Total.value+"%";
    console.log(document.getElementById('progress').style.width);
};
function validatesubmit(){
        if(form.name.value!='' && form.email.value!='' && form.empid.value!='' && form.Title.value!='' && form.Approver_Name.value!='' &&  form.Approver_Email_ID.value!=''
      && form.Program.value!='' && form.Method.value!='' && form.Category.value!='' && form.Area.value !='' && form.Name_Agency.value!='' && form.Address_Agency.value!=''
      && form.Estimated_Start_Date.value!='' && form.Estimated_Completion_Date.value!='' && form.Benefit_to_yourself.value!='' && form.Benefit_to_the_Organization.value !=''
      &&  form.Benefit_to_the_Team.value!='' && form.Expense_Head_1.value!='' && form.Amount_1.value!='') {
        console.log("Submit validation");
        document.getElementById('Submit').disabled =false;
      }
};

form.addEventListener('submit',(e) => {
  e.preventDefault();
  db.collection('eapdetails').add({
    name: form.name.value,
    email: form.email.value,
    empid: form.empid.value,
    team: form.team.value,
    Title: form.Title.value,
    Approver_Name: form.Approver_Name.value,
    Approver_Email_ID: form.Approver_Email_ID.value,
    Program: form.Program.value,
    Method: form.Method.value,
    Category: form.Category.value,
    Area: form.Area.value,
    Name_Agency: form.Name_Agency.value,
    Address_Agency: form.Address_Agency.value,
    Estimated_Start_Date: form.Estimated_Start_Date.value,
    Estimated_Completion_Date: form.Estimated_Completion_Date.value,
    Benefit_to_yourself: form.Benefit_to_yourself.value,
    Benefit_to_the_Organization: form.Benefit_to_the_Organization.value,
    Benefit_to_the_Team: form.Benefit_to_the_Team.value,
    Approver_Remarks: form.Approver_Remarks.value,
    Approver_Remarks_Details: form.Approver_Remarks_Details.value,
    HR_Remarks: form.HR_Remarks.value,
    HR_Remarks_Details: form.HR_Remarks_Details.value,
    Expense_Head_1: form.Expense_Head_1.value,
    Amount_1: form.Amount_1.value,
    Expense_Head_2: form.Expense_Head_2.value,
    Amount_2: form.Amount_2.value,
    Expense_Head_3: form.Expense_Head_3.value,
    Amount_3: form.Amount_3.value,
    Expense_Head_4: form.Expense_Head_4.value,
    Amount_4: form.Amount_4.value,
  });
  form.reset();
  document.getElementById('Submit').disabled =true;
  console.log("EAP form is submitted !!!");
});