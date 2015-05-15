'use strict';

angular.module('manageThatBetter')

/**
 * This service wraps the angular $resource service.
 * it appends a base url to each request.
 */
    .factory('smartResource', function (LOL_REST_BASE_PATH, $resource) {
        return function (url, params, actions) {
            return $resource(LOL_REST_BASE_PATH + url, params, actions);
        };

    });