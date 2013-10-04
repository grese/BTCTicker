YUI.add('ticker',function(Y){
    Y.Ticker = Y.Base.create('ticker', Y.Model, [], {
        title : 'BTC Ticker'
    });
}, '0.0.1', { requires: ['model']});