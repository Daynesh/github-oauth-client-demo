var ApiRequests = [
    {
        request: {
            description: 'List Daynesh\'s organizations',
            url: 'https://api.github.com/users/Daynesh/orgs'
        },
        response: {
            unauthenticated: 'Waiting for response...',
            authenticated: 'Waiting for response...'
        }
    },
    {
        request: {
            description: 'List Daynesh\'s repos',
            url: 'https://api.github.com/user/repos'
        },
        response: {
            unauthenticated: 'Waiting for response...',
            authenticated: 'Waiting for response...'
        }
    },
    {
        request: {
            description: 'List discovery-digital\'s repos',
            url: 'https://api.github.com/orgs/discovery-digital/repos'
        },
        response: {
            unauthenticated: 'Waiting for response...',
            authenticated: 'Waiting for response...'
        }
    }
];

module.exports = ApiRequests;