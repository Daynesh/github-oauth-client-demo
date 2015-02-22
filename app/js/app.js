var angular = require('angular');

module.exports = angular.module('GithubApiDemoApp', [
    'GithubApiDemoApp.controllers'
]);

// List all controllers, services, etc. here
// TODO: Need to investigate a cleaner way of doing this
require('./controllers/ApiResponsesController');