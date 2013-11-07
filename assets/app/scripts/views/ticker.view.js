YUI.add('tickerView', function(Y){
    'use strict';

    var template;
    var TickerView = Y.Base.create('tickerView', Y.View, [], {
        template: '',
        initializer: function(){
            this.pending = new Y.Parallel();
            Y.io('/templates/ticker.tpl',{
                on:{
                    complete:this.pending.add(function(id,response){
                        template = Y.Handlebars.compile(response.responseText)();
                    })
                }
            },this);
        },
        render: function( containerID ){
            this.pending.done(Y.bind(function(){
                Y.one('#'+containerID).setHTML(template);
            },this));
            return this;
        }
    });

    Y.namespace('BTCApp').TickerView = TickerView;

}, '0.0.1');