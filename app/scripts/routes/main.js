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
            'show/:code': 'showAction',
            'form/:code': 'formAction',
            '*path' : 'indexAction'
        },
        
        indexAction: function(item) {
            this.render(new IndexView({
                item: item
            }));
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
        
        showAction: function(code) {
            this.indexAction(repo.getByCode(code));
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