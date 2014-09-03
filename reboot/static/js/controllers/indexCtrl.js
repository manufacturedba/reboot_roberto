'use strict';

var mod = angular.module('rebootRoberto.controllers.index', ['rebootRoberto.services.blog']);

mod.controller('indexCtrl', ['$scope', '$sce', 'blogSrvc', function(scope, sce, blog){
    scope.blog = blog;
    
    // Trust any HTML passed thru
    scope.trustAsHtml = function(html){
        return sce.trustAsHtml(html);
    }
    
    
    scope.init = function(){
        scope.blog.getEntries();
    }
    
    // Init
    scope.init();
}]);
