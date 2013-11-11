/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'directions-repository',
    'tpl!templates/index.tpl'
], function ($, _, Backbone, repo, template) {
    'use strict';
    
    var MainView = Backbone.View.extend({
        template: template,
        className: 'row',
        events: {
            'click .j-direction-link' : 'showDirectionInfo',
            'mouseover .j-direction-link' : 'onOverDirectionLink',
            'mouseleave .j-direction-link' : 'onLeaveDirectionLink',
            'click .j-ready-button' : 'onClickReadyButton'
        },
        
        coloredBlockClass : 'j-colored-block',

        showDirectionInfo: function(event) {
            this.hideAllDescriptions();

            $(event.currentTarget)
                .hide()
                .closest('.j-direction-block')
                .find('.j-direction-description')
                .show()
            ;
                
            return false;
        },

        hideAllDescriptions: function() {
            $('.j-direction-description').hide();
            $('.j-direction-link').show();
        },

        getAllColorClasses: function() {
            var memo = '';
            return _.reduce(repo.getAll(), function(memo, item) {
                return memo + ' ' + item.blocksClass;
            }, memo);
        },

        onOverDirectionLink: function(event) {
            var item = repo.getByCode($(event.currentTarget).data('direction'));

            this.onLeaveDirectionLink()
                .addClass(this.coloredBlockClass + ' ' +item.blocksClass)
            ;
        },

        onLeaveDirectionLink: function() {
            return $('.' + this.coloredBlockClass)
                .removeClass(this.getAllColorClasses())
            ;
        },

        render: function() {
            this.$el.html(template({directions: repo.getAll()}));

            return this;
        }
    });

    return MainView;
});