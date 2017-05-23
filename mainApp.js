/**
 * Created by arif on 10/4/16.
 */
var mainApp = angular.module("mainApp", ['ngRoute']);
mainApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.

        when('/addStudent', {
            templateUrl: 'addStudent.html',
            controller: 'AddStudentController'
        }).

        when('/viewStudents', {
            templateUrl: 'viewStudents.html',
            controller: 'ViewStudentsController'
        }).

        otherwise({
            redirectTo: '/viewStudents'
        });
}]);

mainApp.controller('AddStudentController', function($scope) {
    $scope.message = "This page will be used to display add student form";
});

mainApp.controller('ViewStudentsController', function($scope) {
    $scope.message = "This page will be used to display all the students";
});