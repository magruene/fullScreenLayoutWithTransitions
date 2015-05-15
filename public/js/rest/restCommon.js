'use strict';

angular.module('rest', [])

    .factory('Summoner', function (smartResource) {
        return smartResource('/summoner/:names', {
        }, {
            getByName: {
                isArray: false,
                method: 'GET'
            }
        });
    });