var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http',
function($scope, $http) {
    console.log("Hello from controller");

    $http({
        method: 'GET',
        url: '/contactlist'
       }).then(function successCallback(response){
        console.log("I got the data I requested");
        $scope.contactlist = response.data;
       }, function errorCallback(response){
          //content error
       });
}]);