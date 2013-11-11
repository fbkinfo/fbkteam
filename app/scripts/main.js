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
        tpl: '../vendors/requirejs-tpl/tpl'
    }
});

require([
    'backbone', 'routes/main'
], function (Backbone, Router) {
    var router = new Router();

    Backbone.history.start();
});
