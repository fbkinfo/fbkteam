/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'module'
], function ($, _, Backbone, module) {
    'use strict';
    
    var MainView = Backbone.View.extend({
        
        formsContainer: null,
        activeElement: null,
        
        
        events: {
        },
        
        initialize: function() {
            this.formsContainer = $(module.config()['forms-container']);
        },

        getFormElement: function(item) {
            return this.formsContainer.find('.j-form-' + item.formId);
        },

        showForm: function(item) {
            if (!_.isNull(this.activeElement)) {
                this.formsContainer.append(this.activeElement);
            }
            
            var formElement = this.getFormElement(item);
            this.activeElement = formElement;
            this.$el.append(formElement);
        },

        render: function() {
            if (!_.isObject(this.options.item)) {
                throw new Error('Dirction item is missing');
            }

            this.showForm(this.options.item);

            return this;
        }
    });

    return MainView;
});