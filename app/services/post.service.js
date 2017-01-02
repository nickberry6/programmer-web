(function() {
    'use strict';

    angular
        .module('app.posts')
        .factory('postService', postService);

    /* @ngInject */
    function postService($resource) {
        var service = {
          Posts: Posts
        };

        return service;

        function Posts() {
          return $resource('http://localhost:3000/posts/:id');
        }
    }
})();
