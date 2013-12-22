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
        tpl: '../vendors/requirejs-tpl/tpl',
        writeCapture: '../vendors/writeCapture/writeCapture',
        'jquery.writeCapture': '../vendors/writeCapture/plugin/jquery.writeCapture',
        'social-likes': '../vendors/social-likes/social-likes.min'
    },
    packages: [
        'social-likes'
    ]
});

require([
    'jquery', 'backbone', 'routes/main', 'directions-repository', 'social-likes'
], function ($, Backbone, Router, repository) {
    $.getJSON('config/directions.json', null, function(data) {
        repository.setData(data);
        new Router();
        Backbone.history.start();
    });
});
