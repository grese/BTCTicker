YUI.add('otherView',function(Y){
    Y.OtherView = Y.Base.create('otherView', Y.View, [], {
        initializer:function(){
            var that=this,
                request = Y.io('/scripts/views/templates/other.tpl',{
                    on:{
                        complete:function(id,response){
                            console.log(response.responseText);
                            var template = Y.Handlebars.compile(response.responseText);
                            that.get('container').setHTML(template());
                        }
                    }
                });
        },
        render:function(){
            return this;
        }
    });
}, '0.0.1', { requires: ['view','io-base','handlebars']});