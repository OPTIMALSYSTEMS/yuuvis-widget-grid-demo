const PROXY_CONFIG = [{
        context: ['/idp-token-service/**', '/api/**', '/api-web/**', '/dashlet365/**', '/office365/**','/signature-service-api/**', '/comments/**', '/tenant/**', '/login**', '/oauth/**', '/auth/**', '/logout**'],
        target: 'http://127.0.0.1:4300/',
        changeOrigin: true,
        secure: false,
        logLevel: 'debug'
    }
];

module.exports = PROXY_CONFIG;