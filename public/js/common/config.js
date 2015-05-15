'use strict';

var AppConstants = angular.module('manageThatBetter');

AppConstants.constant('LOL_REST_BASE_PATH', 'http://localhost:8080');
AppConstants.constant('TEMPLATE_ROOT_PATH', 'public/html/');

// full date and time format for angular date filter
AppConstants.constant('DATETIMEFORMAT', 'dd.MM.yy HH:mm');

// format for angular date filter : (MM is month in year, padded), see
// http://docs.angularjs.org/api/ng.filter:date
AppConstants.constant('DATEFORMAT', 'dd.MM.yy');

