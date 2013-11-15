/*global define*/
define([], function() {
    'use strict';
    
    var data = [];
    
    return {
        
        setData: function(directionsData) {
            data = directionsData;
        },

        getAll: function() {
            return data;
        },
        
        getByCode: function(code) {
            for (var i = 0; i < data.length; i++) {
                if (code === data[i].code) {
                    return data[i];
                }
            }
        }
    };
});
