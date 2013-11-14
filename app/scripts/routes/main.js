/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'module',
    'directions-repository',
    'views/index',
    'views/form'
    
], function ($, _, Backbone, module, repo, IndexView, FormView) {
    'use strict';
    
    var container = $(module.config().container);
    
    var MainRouter = Backbone.Router.extend({
        routes: {
            'form/:code': 'formAction',
            '*path' : 'indexAction'
        },
        
        indexAction: function() {
            this.render(new IndexView());
        },
    
        formAction: function(code) {
            var item = repo.getByCode(code);
            if (!_.isObject(item)) {
                this.indexAction();
            } else {
                this.render(new FormView({
                    item : item
                }));
            }
        },
    
        render: function(view) {
            container
                .empty()
                .append(view.render().$el)
            ;
        }
    });

    return MainRouter;
});