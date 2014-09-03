'use strict';

var mod = angular.module('rebootRoberto.services.blog', []);

mod.service('blogSrvc', ['$http', '$log', function(http, log){
    var self = this;
    
    this.entries;
    
    this.getEntries = function(){
        log.debug('Making request for entries')
        var request = http({method: 'GET', url: '/entries'});
        request.then(function(data){
            if(typeof(data.data) === 'object'){
                self.entries = data.data;
            } else {
                log.error('Wrong type')
            }
        });
    }
    
}]);
