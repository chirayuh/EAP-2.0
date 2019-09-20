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
