/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },
    paths: {
        jquery: '../vendors/jquery/jquery',
        backbone: '../vendors/backbone/backbone',
        underscore: '../vendors/underscore/underscore',
        text: '../vendors/requirejs-text/text',
        tpl: '../vendors/requirejs-tpl/tpl',
        json: '../vendors/requirejs-plugins/src/json'
    }
});

require([
    'backbone', 'routes/main'
], function (Backbone, Router) {
    new Router();
    Backbone.history.start();
});
