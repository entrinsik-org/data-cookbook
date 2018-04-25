(function () {
    'use strict';

    function config(actionsProvider) {
        actionsProvider.action({
            id: 'dataset-cookbook',
            name: 'Data Cookbook',
            materialIcon: 'local_dining',
            context: ['dataset.view'],
            isEligible: function () {
                return true;
            },
            invoke: ['dataset', '$window', function (dataset, $window) {
                $window.open('https://examples.datacookbook.com/dcb_spec_summary.php?lookup='+dataset.name+'&matchType=exact_text','datacookbook','scrollbars=yes,center,height=600,width=450');
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
            invoke: ['datasource', '$window', function (datasource, $window) {
                $window.open('https://examples.datacookbook.com/dcb_spec_summary.php?lookup='+datasource.name+'&matchType=exact_text','datacookbook','scrollbars=yes,center,height=600,width=450');
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
            invoke: ['report', '$window', function (report, $window) {
                $window.open('https://examples.datacookbook.com/dcb_spec_summary.php?lookup='+report.name+'&matchType=exact_text','datacookbook','scrollbars=yes,center,height=600,width=450');
            }]
        });

        
    }

    angular.module('informer').config(config);
})();
