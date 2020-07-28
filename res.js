'use strict';

exports.ok = function(status, values, res){
    var data = {
        'status': status,
        'values': values
    };

     res.json(data);
     res.end();
}