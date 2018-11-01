const burger = require('burgerjs');

burger.module([
    [{name: 'input'},{type: 'component'},{selector: 'p-input'}],
    [{name: 'footer'},{type: 'component'},{selector: 'p-footer'}],
    [{name: 'header'},{type: 'component'},{selector: 'p-header'}],
    [{name: 'spinner'},{type: 'component'},{selector: 'p-spinner'}],
    [{name: 'contact-form'},{type: 'component'},{selector: 'p-contact-form'}],
    [{name: 'accordion'},{type: 'component'},{selector: 'p-accordion'}],
    [{name: 'tabs'},{type: 'component'},{selector: 'p-tabs'}],
    [{name: 'home'},{type: 'page'},{order: '0'},{route: '/'}],
    [{name: 'contact'},{type: 'page'},{order: '2'},{route: '/contact'}],
    [{name: 'about'},{type: 'page'},{order: '1'},{route: '/about'}],
    [{name: 'suggestions'},{type: 'page'},{order: '3'},{route: '/suggestions'}],
]);