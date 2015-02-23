var angular = require('angular');

module.exports = angular.module('GithubApiDemoApp.services', [])
    .factory('GithubApiService', function($http) {
        var githubAPI = {};

        githubAPI.getApiResponse = function(requestObject) {
            return $http.get(requestObject.url);
        };

        githubAPI.getAuthenticatedApiResponse = function(requestObject) {
            return $http.get(requestObject.url);
        };

        return githubAPI;
    });