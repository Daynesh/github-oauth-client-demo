var angular = require('angular');
var angularRoute = require('angularRoute');

module.exports = angular.module('GithubApiDemoApp', [
    'GithubApiDemoApp.controllers',
    'GithubApiDemoApp.services',
    'ngRoute'
])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', { 
                    templateUrl: './apiResponsesTable.html', 
                    controller: 'ApiResponsesController'
                })
            .when('/login', {
                    templateUrl: './login.html',
                    controller: 'LoginController'
                })
            .otherwise({
                redirectTo: '/'
                });
    }]);

// List all controllers, services, etc. here
// TODO: Need to investigate a cleaner way of doing this
require('./controllers/ApiResponsesController');
require('./controllers/LoginController');
require('./services/githubApiService');