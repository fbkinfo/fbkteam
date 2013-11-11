/*global define*/
define(['jquery', 'module', 'json!../data/directions.json'], function($, module, data) {
    'use strict';
    
    return {
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
