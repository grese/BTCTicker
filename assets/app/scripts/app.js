YUI.add('btc-app', function(Y){
    'use strict';

    var HomeView =  new Y.BTCApp.HomeView(),
        TickerView = new Y.BTCApp.TickerView(),
        Layout = Y.BTCApp.Layout;

    var BTCApp = Y.Base.create('btcApp', Y.App, [], {
        homeView: HomeView,
        tickerView: TickerView,
        initializer: function(){
            Layout.init(); // Initialize layout & helpers.
            this.dispatch();
        },
        render: function(){

        },
        views: {
            homeView: {type: 'HomeView'},
            tickerView: {type: 'TickerView'}
        }
    }, {
        ATTRS: {
            routes: {
                value: [
                    {
                        path: '/',
                        callback: function(){
                            Layout.renderView(this.homeView);

                        }
                    },
                    {
                        path: '/home',
                        callback: function(){ Layout.renderView(this.homeView); }
                    },
                    {
                        path: '/ticker',
                        callback: function(){ Layout.renderView(this.tickerView); }
                    }
                ]
            },
            serverRouting:{
                value: false
            }
        }
    });

    Y.namespace('BTCApp').App = BTCApp;

}, '0.0.1', {requires:['app', 'base', 'homeView', 'tickerView', 'layout']});