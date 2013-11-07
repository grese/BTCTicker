YUI.add('layout', function(Y){
    'use strict';

    var Layout = {
        ACTIVE_CLASS: 'active',
        DOMIDs: {
            LAYOUT: 'layout',
            CONTAINER: 'container',
            MENU: 'menu',
            MENU_BTN: 'menuLink'
        },
        activeView: null,
        init: function(){
            this.prepareLinks();
            this.attachMenuToggleEvent();
        },
        attachMenuToggleEvent: function(){
            Y.one('#'+Layout.DOMIDs.MENU_BTN).on('click', function(){
                Y.one('#'+Layout.DOMIDs.LAYOUT).toggleClass('active');
            });
        },
        prepareLinks: function(){
            Y.all('#'+this.DOMIDs.MENU+' a').on('click', function(e){
                e.preventDefault();
            });
        },
        renderView: function( view ) {
            if( view != null && view !== this.activeView ){
                this.activeView = view;
                this.activeView.render(this.DOMIDs.CONTAINER);
            }
        }
    };

    Y.namespace('BTCApp').Layout = Layout;

}, '0.0.1', {requires: ['node', 'event']});