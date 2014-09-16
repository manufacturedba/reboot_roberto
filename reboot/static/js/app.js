'use strict';

var app = angular.module('rebootRoberto', ['ngRoute', 'ngDisqus', 'rebootRoberto.controllers.index', 'rebootRoberto.controllers.entry', 'rebootRoberto.controllers.utility']);

app.config(['$routeProvider', '$locationProvider', '$disqusProvider', function(routeProvider, locationProvider, disqusProvider){
    routeProvider.
        when('/', {templateUrl: 'partials/index.html', controller: 'indexCtrl'}).
        when('/entry/:slug', {templateUrl: 'partials/entry.html', controller: 'entryCtrl'}).
        otherwise({redirectTo: '/'});
    locationProvider.html5Mode(true);
    disqusProvider.setShortname('rebootroberto');
}]);

app.run(['blogSrvc', function(blog){
    blog.getEntries();
}]);
