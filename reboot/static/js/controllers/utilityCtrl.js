'use strict';

var mod = angular.module('rebootRoberto.controllers.utility', []);

mod.controller('utilityCtrl', ['$sce', '$filter', function(sce, filter){
    
    // Trust any HTML passed thru
    this.trustAsHtml = function(html){
        return sce.trustAsHtml(html);
    }
    
    this.limitTo = function(input, limit){
        return filter('limitTo')(input, limit);
    };
    
}]);
