const burger = require('burgerjs');

burger.module([
    [{name: 'input'},{type: 'component'},{selector: 'p-input'}],
    [{name: 'footer'},{type: 'component'},{selector: 'p-footer'}],
    [{name: 'header'},{type: 'component'},{selector: 'p-header'}],
    [{name: 'spinner'},{type: 'component'},{selector: 'p-spinner'}],
    [{name: 'home'},{type: 'page'},{selector: 'p-home'}]
]);