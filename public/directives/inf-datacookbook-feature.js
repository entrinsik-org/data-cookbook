(function () {
    'use strict';

    function infDatacookbookFeature () {
        return {
            restrict: 'E',
            controller: _.noop,
            controllerAs: 'ctrl',
            bindToController: true,
            scope: {
                feature: '=ngModel'
            },
            templateUrl: '/assets/cookbook/directives/inf-datacookbook-feature-tpl.html'
        };
    }

    angular.module('informer')
        .directive('infDatacookbookFeature', infDatacookbookFeature);
})();

