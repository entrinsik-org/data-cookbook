(function () {
    'use strict';

    function config(actionsProvider, componentProvider) {

        //adding to the features page
        componentProvider.component('datacookbookFeature', '<inf-datacookbook-feature ng-model="$component.ngModel"></inf-datacookbook-feature>');

        actionsProvider.action({
            id: 'dataset-cookbook',
            name: 'Data Cookbook',
            materialIcon: 'local_dining',
            context: ['dataset.view'],
            isEligible: function () {
                return true;
            },
            invoke: ['dataset', '$window', 'api', function (dataset, $window, api) {
                api.link('dcb:document')
                    .getHref({ type: 'dataset', id: dataset.name })
                    .then(function (url) {
                        $window.open(url,'datacookbook','scrollbars=yes,center,height=600,width=450');
//                        $window.open('{{host}}/dcb_spec_summary.php?lookup='+dataset.name+'&matchType=exact_text','datacookbook','scrollbars=yes,center,height=600,width=450');
                    });
            }]
        });
        actionsProvider.action({
            id: 'datasource-cookbook',
            name: 'Data Cookbook',
            materialIcon: 'local_dining',
            context: ['datasource.view'],
            isEligible: function () {
                return true;
            },
            invoke: ['datasource', '$window', 'api', function (datasource, $window, api) {
                api.link('dcb:document')
                    .getHref({ type: 'datasource', id: datasource.name })
                    .then(function (url) {
                        $window.open(url, 'datacookbook', 'scrollbars=yes,center,height=600,width=450');
                    });
                // $window.open('https://examples.datacookbook.com/dcb_spec_summary.php?lookup='+datasource.name+'&matchType=exact_text','datacookbook','scrollbars=yes,center,height=600,width=450');
            }]
        });
        actionsProvider.action({
            id: 'report-cookbook',
            name: 'Data Cookbook',
            materialIcon: 'local_dining',
            context: ['report.view'],
            isEligible: function () {
                return true;
            },
            invoke: ['report', '$window', 'api', function (report, $window, api) {
                api.link('dcb:document')
                    .getHref({ type: 'report', id: report.name })
                    .then(function (url) {
                        $window.open(url,'datacookbook','scrollbars=yes,center,height=600,width=450');
                });
                // $window.open('https://examples.datacookbook.com/dcb_spec_summary.php?lookup='+report.name+'&matchType=exact_text','datacookbook','scrollbars=yes,center,height=600,width=450');
            }]
        });

        
    }

    angular.module('informer').config(config);
})();
