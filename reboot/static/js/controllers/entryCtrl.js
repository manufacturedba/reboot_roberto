'use strict';

var mod = angular.module('rebootRoberto.controllers.entry', ['rebootRoberto.services.blog']);

mod.controller('entryCtrl', ['$scope', '$routeParams', 'blogSrvc', function(scope, routeParams, blog){
    scope.blog = blog;
    scope.entry;
    
    if(routeParams.slug && scope.blog.entries){
        scope.entry = _.find(scope.blog.entries, function(entry){
            return entry.slug == routeParams.slug;
        });
    }
    
}]);
