var app = angular.module('hotels', []);

app.controller('hotelsController', ['$scope', '$http', function($scope, $http){
  $http.get('../js/hotels.json').then(function(data) {
    // console.log(data.data);
    $scope.hotels = data.data;
  })
}]);
