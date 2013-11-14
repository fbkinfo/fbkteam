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
        },
        'jquery.writeCapture': {
            deps: ['writeCapture']
        }
    },
    paths: {
        jquery: '../vendors/jquery/jquery',
        backbone: '../vendors/backbone/backbone',
        underscore: '../vendors/underscore/underscore',
        text: '../vendors/requirejs-text/text',
        tpl: '../vendors/requirejs-tpl/tpl',
        json: '../vendors/requirejs-plugins/src/json',
        'element.write': '../vendors/element.write/element.write',
        writeCapture: '../vendors/writeCapture/writeCapture',
        'jquery.writeCapture': '../vendors/writeCapture/plugin/jquery.writeCapture'
    }
});

require([
    'backbone', 'routes/main'
], function (Backbone, Router) {
    new Router();
    Backbone.history.start();
});
