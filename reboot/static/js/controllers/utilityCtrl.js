'use strict';

var mod = angular.module('rebootRoberto.controllers.utility', []);

mod.controller('utilityCtrl', ['$scope', '$sce', '$filter', '$window', '$location', function(scope, sce, filter, $window, location){
    
    // Trust any HTML passed thru
    this.trustAsHtml = function(html){
        return sce.trustAsHtml(html);
    }
    
    this.limitTo = function(input, limit){
        return filter('limitTo')(input, limit);
    };
    
    scope.$on('$viewContentLoaded', function(event){
        $window.ga('send', 'pageview', {page : location.path() });
    });
    
}]);
