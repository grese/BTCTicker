YUI.add('homeView', function(Y){
    'use strict';

    var template;
    var HomeView = Y.Base.create('homeView', Y.View, [], {
        template: '',
        initializer: function(){
            this.pending = new Y.Parallel();
            Y.io('/templates/home.tpl',{
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

    Y.namespace('BTCApp').HomeView = HomeView;

}, '0.0.1');