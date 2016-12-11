'use strict';

/**
 * @ngdoc service
 * @name gitWebServiceApp.git
 * @description
 * # git
 * Factory in the gitWebServiceApp.
 */

var gitFactory = function($resource){
  return $resource('https://api.github.com/users/:slug/repos', { slug : '@slug' }, 
    {
      'get': {method: 'GET', isArray: false,
              interceptor: {
            response: function(response) {      
                var result = response.resource;        
                result.$status = response.status;
                return result;
            }
        }
         }
    });
};


 
angular.module('gitWebServiceApp')
  .factory('Git', [ '$resource', gitFactory ]);
