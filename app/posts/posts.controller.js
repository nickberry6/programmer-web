(function() {
    'use strict';

    angular
        .module('app.posts')
        .controller('PostsController', PostsController);

    // Controller.$inject = ['dependencies'];

    /* @ngInject */
    function PostsController() {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
