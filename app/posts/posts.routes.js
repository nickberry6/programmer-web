(function() {
    'use strict';

    angular
        .module('app.posts')
        .config(function($stateProvider){
          $stateProvider.state('list', {
            url: '/posts',
            templateUrl: 'posts/templates/posts.html',
            controller: 'PostListController as vm'
          })
          .state('detail', {
            url: '/posts/:id',
            templateUrl: 'posts/templates/post-detail.html',
            controller: 'PostDetailController as vm'
          })
        });

    // /* @ngInject */
    //   function postRoutes(){
    //     // $stateProvider.state('posts', {
    //     //   template: 'posts.html',
    //     //   controller: 'PostsController as vm'
    //     // })
    //   };
})();
