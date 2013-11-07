YUI_config = {
    groups: {
        classes: {},
        models: {},
        views: {
            base: '/scripts/views/',
            modules: {
                homeView: {
                    path: 'home.view.js',
                    requires: ['view','io-base','event-custom','handlebars','parallel','node','layout']
                },
                tickerView: {
                    path: 'ticker.view.js',
                    requires: ['view','io-base','event-custom','handlebars','parallel','node','layout']
                }
            }
        }
    }
}