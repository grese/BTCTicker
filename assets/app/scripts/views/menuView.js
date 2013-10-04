YUI.add('menuView',function(Y){
    Y.MenuView = Y.Base.create('menuView', Y.View, [], {
        initializer:function(){
            this.pending = new Y.Parallel();
            Y.io('/templates/menu.tpl',{
                on:{
                    complete:this.pending.add(function(id,response){
                        template = Y.Handlebars.compile(response.responseText);
                    })
                }
            },this);
        },
        render:function(){
            this.pending.done(Y.bind(function(){
                Y.one("#nav").setHTML(template());
            },this));

            return this;
        }
    });
}, '0.0.1', { requires: ['view','io-base','handlebars','parallel']});