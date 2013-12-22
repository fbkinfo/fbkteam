/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'tpl!templates/form.tpl',
    'jquery.writeCapture'
], function ($, _, Backbone, template) {
    'use strict';
    
    var MainView = Backbone.View.extend({
  
        className: 'b-form-container',
        
        form: null,
    
        initialize: function(options) {
            this.form = options.item;
        },
        
        showForm: function() {
            //this.$el.empty();
            var formContainer = this.$el.find('.j-form-container');
            var loader = this.$el.find('.j-preloader');
            var _this = this;

            /*jshint multistr: true */
            formContainer.writeCapture().html('\
                <script src="'+_this.form.formUrl+'"></script>\n\
                <script type="text/javascript">\n\
                    _podioWebForm.render("'+_this.form.formId+'")\n\
                </script>',
                function() {
                    formContainer.find('iframe.podio-webform-frame').load(function() {
                        loader.hide();
                        formContainer.show();
                    });
                }
            );
        },
        
        render: function() {
            this.$el.html(template());

            return this;
        }
      
    });
    
    return MainView;
});
