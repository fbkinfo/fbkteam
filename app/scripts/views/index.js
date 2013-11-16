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
            //'click .j-direction-link' : 'showDirectionInfo',
            'mouseover .j-direction-link' : 'onOverDirectionLink',
            'mouseleave .j-direction-link' : 'onLeaveDirectionLink',
            'click .j-ready-button' : 'onClickReadyButton'
        },
        
        coloredBlockClass : 'j-colored-block',
        
        selectedClass: null,
        
        activeClassName: 'b-links__item-link-active',

        getItemBlock: function(item) {
            return this.$el.find('.' + item.class);
        },

        showDirectionInfo: function(item) {
            this.hideAllDescriptions();
            this.getItemBlock(item)
                .addClass(this.activeClassName)
                .closest('.j-direction-block')
                .find('.j-direction-description')
                .show()
            ;
            
            this.selectedClass = item.blocksClass;
            
            $('.' + this.coloredBlockClass)
                .removeClass(this.getAllColorClasses())
                .addClass(this.coloredBlockClass + ' ' +item.blocksClass)
            ;
                
            return false;
        },

        hideAllDescriptions: function() {
            $('.j-direction-description').hide();
            $('.j-direction-link').removeClass(this.activeClassName);
        },

        getAllColorClasses: function() {
            var memo = '';
            return _.reduce(repo.getAll(), function(memo, item) {
                return memo + ' ' + item.blocksClass;
            }, memo);
        },

        onOverDirectionLink: function(event) {
            var currentElement = $(event.currentTarget);
            if (currentElement.hasClass(this.activeClassName)) {
                return;
            }

            var item = repo.getByCode(currentElement.data('direction'));
            
            $('.' + this.coloredBlockClass)
                .removeClass(this.getAllColorClasses())
                .addClass(this.coloredBlockClass + ' ' +item.blocksClass)
            ;
        },

        onLeaveDirectionLink: function() {
            var currentElement = $(event.currentTarget);
            if (currentElement.hasClass(this.activeClassName)) {
                return;
            }
            
            var colorsBlocks = $('.' + this.coloredBlockClass)
                .removeClass(this.getAllColorClasses())
            ;
            
            if (!_.isNull(this.selectedClass)) {
                colorsBlocks.addClass(this.selectedClass);
            }

            return false;
        },

        render: function() {
            this.$el.html(template({directions: repo.getAll()}));

            if (_.isObject(this.options.item)) {
                this.showDirectionInfo(this.options.item);
            }

            return this;
        }
    });

    return MainView;
});