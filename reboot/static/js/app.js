'use strict';

var app = angular.module('rebootRoberto', ['ngRoute', 'rebootRoberto.controllers.index']);

app.config(['$routeProvider', '$locationProvider', function(routeProvider, locationProvider){
    routeProvider.
        when('/', {templateUrl: 'partials/index.html', controller: 'indexCtrl'}).
        otherwise({redirectTo: '/'});
    locationProvider.html5Mode(true);
}]);
