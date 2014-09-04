'use strict';

var app = angular.module('rebootRoberto', ['ngRoute', 'rebootRoberto.controllers.index', 'rebootRoberto.controllers.entry', 'rebootRoberto.controllers.utility']);

app.config(['$routeProvider', '$locationProvider', function(routeProvider, locationProvider){
    routeProvider.
        when('/', {templateUrl: 'partials/index.html', controller: 'indexCtrl'}).
        when('/entry/:slug', {templateUrl: 'partials/entry.html', controller: 'entryCtrl'}).
        otherwise({redirectTo: '/'});
    locationProvider.html5Mode(true);
}]);

app.run(['blogSrvc', function(blog){
    blog.getEntries();
}]);
