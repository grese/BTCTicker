YUI.add('parentView',function(Y){
    Y.ParentView = Y.Base.create('parentView', Y.View, [], {
        initializer:function(){
            this.home = new Y.HomeView();
        },
        render:function(){
            var content = Y.one(Y.config.doc.createDocumentFragment());
            //content.append(this.menu.render().get('container'));

            var newDiv = Y.Node.create("<div style='width:100%'/>");
            //newDiv.append(this.map.render().get('container'));
            newDiv.append(this.home.render().get('container'));

            content.append(newDiv);
            this.get('container').setHTML(content);
            return this;
        }
    });
}, '0.0.1', { requires: ['view','io-base','homeView','handlebars']});