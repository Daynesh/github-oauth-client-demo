var angular = require('angular');

module.exports = angular.module('GithubApiDemoApp.controllers', [])
    .controller('ApiResponsesController', function($scope) {
        $scope.listOfApiResponses = [
            {
                request: {
                    description: 'List Daynesh\'s organizations'
                },
                response: {
                    unauthenticated: 'asdf',
                    authenticated: 'asdf'
                }
            },
            {
                request: {
                    description: 'List Daynesh\'s repos'
                },
                response: {
                    unauthenticated: 'asdf',
                    authenticated: 'asdf'
                }
            },
            {
                request: {
                    description: 'List discovery-digital\'s repos'
                },
                response: {
                    unauthenticated: 'asdf',
                    authenticated: 'asdf'
                }
            }
        ];
    });