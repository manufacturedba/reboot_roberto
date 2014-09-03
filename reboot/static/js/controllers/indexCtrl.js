'use strict';

var mod = angular.module('rebootRoberto.controllers.index', ['rebootRoberto.services.blog']);

mod.controller('indexCtrl', ['$scope', '$sce', 'blogSrvc', function(scope, sce, blog){
    scope.entries = [];
    
    scope.init = function(){
        scope.getEntries();
    }
    
    scope.getEntries = function(){
        blog.getEntries().then(function(data){
            if(typeof(data.data) === 'object'){
                scope.entries = data.data;
            }
        });
    }
    
    // Trust any HTML passed thru
    scope.trustAsHtml = function(html){
        return sce.trustAsHtml(html);
    }
    
    
    // Init
    scope.init();
}]);
