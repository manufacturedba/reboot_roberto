'use strict';

var mod = angular.module('rebootRoberto.controllers.index', ['rebootRoberto.services.blog']);

mod.controller('indexCtrl', ['$scope', '$window', 'blogSrvc', function(scope, $window, blog){
    scope.blog = blog;
    scope.page = 0;
    scope.entriesToShow = 5;
    
    scope.numberOfPages = function(){
        if(scope.blog.entries){
            return Math.ceil(scope.blog.entries.length/scope.entriesToShow);
        } else {
            return 0;
        }
    }
    
    scope.init = function(){
        // Noop
    };
    
    scope.next = function(){
        scope.page += 1;
        $window.scrollTo(0,0);
    }
    
    scope.prev = function(){
        scope.page -= 1;
        $window.scrollTo(0,0);
    }
    
    // Init
    scope.init();
}]);

mod.filter('startAt', [function(){

    return function(input, start){
        if(input){
            console.log(start)
            return input.slice(start);
        }
    }
}])
