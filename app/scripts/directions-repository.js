define(['jquery', 'module'], function($, module) {
    var ready = new $.Deferred();

    var data = [];
    $.getJSON(module.config().dataUrl, null, function(jsonData) {
        data = jsonData;
        ready.resolve();
    });
    
    return {
        getAll: function() {
            return data;
        },
        
        getByCode: function(code) {
            for (var i = 0; i < data.length; i++) {
                if (code === data[i].code) {
                    return data[i];
                };
            }
        }
   };
});
