'use strict';

var mod = angular.module('rebootRoberto.controllers.index', ['rebootRoberto.services.blog']);

mod.controller('indexCtrl', ['$scope', 'blogSrvc', function(scope, blog){
    scope.blog = blog;
    
    scope.init = function(){
        // Noop
    };
    
    // Init
    scope.init();
}]);
