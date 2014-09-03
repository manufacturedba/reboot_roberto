'use strict';

var mod = angular.module('rebootRoberto.services.blog', []);

mod.service('blogSrvc', ['$http', '$log', function(http, log){
    
    this.getEntries = function(){
        log.debug('Making request for entries')
        var request = http({method: 'GET', url: '/entries'});
        return request;
    }
    
}]);
