YUI_config = {
    bootstrap: false,
    groups: {
        classes: {
            base: 'scripts/classes',
            modules:{
                Ticker: {
                    path:'/ticker.class.js',
                    requires: []
                }
            }
        },
        models: {
            base: 'scripts/models',
            modules: {}
        },
        views: {
            base: 'scripts/views',
            modules: {
                homeView: {
                    path: '/home.view.js',
                    requires: ['view','io-base','event-custom','handlebars']
                },
                tickerView: {
                    path: '/ticker.view.js',
                    requires: ['view','io-base','event','handlebars']
                }
            }
        }
    }
}