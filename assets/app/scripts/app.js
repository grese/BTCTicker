YUI.add('BTCApp',function(Y){
    Y.BTCApp = Y.Base.create('BTCApp', Y.App, [], {
        views: {
            homeView : {type: 'HomeView'}
        }
    });
}, '0.0.1', { requires: ['homeView']});