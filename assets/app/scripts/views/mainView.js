YUI.add('mainView',function(Y){
    Y.EditorView = Y.Base.create('mainView', Y.View, [], {
        initializer:function(){
            this.home = new Y.HomeView();
            this.menu = new Y.MenuView();
        },
        render:function(){
            var menuContent = Y.one(Y.config.doc.createDocumentFragment());
            var content = Y.one(Y.config.doc.createDocumentFragment());
            menuContent.append(this.menu.render());
            content.append(this.home.render());

            this.get('nav').setHTML(menuContent);
            this.get('container').setHTML(content);
            return this;
        }
    });
}, '0.0.1', { requires: ['view','io-base','menuView','homeView','handlebars']});