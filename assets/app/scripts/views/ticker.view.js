YUI.add('tickerView',function(Y){
    Y.TickerView = Y.Base.create('tickerView', Y.View, [], {
        initializer:function(){
            this.pending = new Y.Parallel();
            Y.io('templates/ticker.tpl',{
                on:{
                    complete:this.pending.add(function(id,response){
                        template = Y.Handlebars.compile(response.responseText);
                    })
                }
            },this);
        },
        render:function(){
            this.pending.done(Y.bind(function(){
                this.get('container').setHTML(template());
            },this));

            return this;
        }
    });
}, '0.0.1', { requires: ['view','io-base','handlebars','parallel']});