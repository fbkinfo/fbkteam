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
        writeCapture: '../vendors/writeCapture/writeCapture',
        'jquery.writeCapture': '../vendors/writeCapture/plugin/jquery.writeCapture',
        'directions': '/scripts/config/directions.json?noext'
    }
});

require([
    'jquery', 'backbone', 'routes/main', 'directions-repository',
], function ($, Backbone, Router, repository) {
    $.getJSON('config/directions.json', null, function(data) {
        repository.setData(data);
        new Router();
        Backbone.history.start();
    });
});
