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
