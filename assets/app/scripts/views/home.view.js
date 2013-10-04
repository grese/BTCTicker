YUI.add('homeView',function(Y){
    Y.HomeView = Y.Base.create('homeView', Y.View, [], {
        initializer:function(){
            this.pending = new Y.Parallel();
            Y.io('templates/home.tpl',{
                on:{
                    complete:this.pending.add(function(id,response){
                        template = Y.Handlebars.compile(response.responseText);
                    })
                }
            },this);
        },
        render:function(){
            //Y.one("#container");
            this.pending.done(Y.bind(function(){
                this.get('container').setHTML(template());
            },this));

            return this;
        }
    });
}, '0.0.1', { requires: ['view','io-base','handlebars','parallel']});