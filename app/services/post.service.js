(function() {
    'use strict';

    angular
        .module('app.posts')
        .factory('postService', postService);

    /* @ngInject */
    function postService($resource) {
        var service = {
          Posts: Posts,
          updatePost: updatePost
        };

        return service;

        function Posts() {
          return $resource('http://localhost:3000/posts/:id');
        }

        function updatePost() {
          $resource('http://localhost:3000/posts/:id', null,
          {
            'update': { method:'PUT' }
          });
        }
    }
})();
