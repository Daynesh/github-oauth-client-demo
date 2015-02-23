var angular     = require('angular');
var apiRequests = require('../config/apiRequests');

// TODO: Re-write this so that it doesn't repeat the same lines so many times!
module.exports = angular.module('GithubApiDemoApp.controllers', [])
    .controller('ApiResponsesController', function($scope, GithubApiService) {
        // Default state
        $scope.listOfApiResponses = apiRequests;

        // Get current remaining Unauthenticated requests left
        GithubApiService.getApiResponse({url: 'https://api.github.com/rate_limit'})
            .success(function(response) {
                console.log('Received remaining requests: ', response.resources.core.remaining);
                $scope.requestsRemaining = response.resources.core.remaining;
            })
            .error(function(data, status, headers, config) {
                console.error('Error sending request to ' + config.url + ': ',  data.message);
            });

        // Request info on specific user's (e.g., Daynesh) organizations
        GithubApiService.getApiResponse(apiRequests[0].request)
            .success(function(response) {
                console.log('Received info on daynesh\'s orgs: ', response);
                $scope.listOfApiResponses[0].response.unauthenticated = response;
            })
            .error(function(data, status, headers, config) {
                console.error('Error sending request to ' + config.url + ': ',  data.message);
                $scope.listOfApiResponses[1].response.unauthenticated = 'ERROR: ' + data.response;
            });

        // Request info on specific user's repos
        GithubApiService.getApiResponse(apiRequests[1].request)
            .success(function(response) {
                console.log('Received info on daynesh\'s repos: ', response);
                $scope.listOfApiResponses[1].response.unauthenticated = response;
            })
            .error(function(data, status, headers, config) {
                console.error('Error sending request to ' + config.url + ': ',  data.message);
                $scope.listOfApiResponses[1].response.unauthenticated = 'ERROR: ' + data.message;
            });
        
        // Request a specific organizations repos
        GithubApiService.getApiResponse(apiRequests[2].request)
            .success(function(response) {
                console.log('Received info on discovery-digital\'s repos: ', response);

                var output = [];
                response.forEach(function(repo) {
                    output.push(repo.full_name);
                });

                $scope.listOfApiResponses[2].response.unauthenticated = JSON.stringify(output, null, ' ');
            })
            .error(function(data, status, headers, config) {
                console.error('Error sending request to ' + config.url + ': ',  data.message);
                $scope.listOfApiResponses[1].response.unauthenticated = 'ERROR: ' + data.response;
            });
    });