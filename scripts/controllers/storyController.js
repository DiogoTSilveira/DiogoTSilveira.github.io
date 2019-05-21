var app = angular.module('myApp');

app.controller('storyController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

  $scope.logout = function () {

    $location.path("/");

}

  $http.get("http://localhost:3000/story/list")

    .then(function (response) {

      $scope.stories = [];

      $scope.stories = response.data;

      console.log($scope.stories[0]);

    }, function (error) {

      console.log(error);

    });



}])