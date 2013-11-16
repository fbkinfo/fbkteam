/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'jquery.writeCapture'
], function ($, _, Backbone) {
    'use strict';
    
    var MainView = Backbone.View.extend({
        
        preloader: $('<div/>').css('display', 'none').appendTo('body'),

        className: 'b-form-container',
        
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