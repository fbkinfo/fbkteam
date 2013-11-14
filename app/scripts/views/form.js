/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'module',
    'jquery.writeCapture'
], function ($, _, Backbone, module) {
    'use strict';
    
    var MainView = Backbone.View.extend({
        
        preloader: $('<div/>').css('display', 'none').appendTo('body'),

        events: {
        },
        
        initialize: function() {
            this.formsContainer = $(module.config()['forms-container']);
        },

        showForm: function(item) {
            var _this = this;
            /*jshint multistr: true */
            $.writeCapture.autoAsync();
            this.preloader.writeCapture().html('\
                <script src="'+item.formUrl+'"></script>\n\
                <script type="text/javascript">\n\
                    _podioWebForm.render("'+item.formId+'")\n\
                </script>',
                function() {
                    //_this.$el.find('.prealoader').fadeOut();
                    _this.$el.html(_this.preloader.children());
                }
            );
        },

        render: function() {
            if (!_.isObject(this.options.item)) {
                throw new Error('Dirеction item is missing');
            }

            this.showForm(this.options.item);

            return this;
        }
    });

    return MainView;
});