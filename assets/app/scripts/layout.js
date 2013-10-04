YUI().use('node', 'event', function(Y){

    

    Y.one('#menuLink').on('click', function(){
        Y.one('#layout').toggleClass('active');
    });
});