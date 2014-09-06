'use strict';

var mod = angular.module('rebootRoberto.controllers.entry', ['rebootRoberto.services.blog']);

mod.controller('entryCtrl', ['$rootScope', '$scope', '$routeParams', '$log', 'blogSrvc', function(rootScope, scope, routeParams, log, blog){
    scope.blog = blog;
    scope.entry;
    
    var findEntry = function(){
        log.debug('Finding matching entry');
        scope.entry = _.find(scope.blog.entries, function(entry){
            return entry.slug == routeParams.slug;
        });
    }
    if(routeParams.slug && scope.blog.entries){
        findEntry();
    } else if(!scope.blog.entries){
        var deregister = scope.$watch(function(){
            return scope.blog.entries;
        }, function(){
            if(scope.blog.entries){
                log.debug('Entries loaded');
                findEntry();
                rootScope.meta = scope.entry;
                deregister();
            }
        });
    }
    
}]);
