var fs = require('fs');
//var mongojs = require('mongojs');

module.exports.get = function(req, res){
    var event = fs.readFileSync('/app/data/gig/' + req.params.id + '.json', 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.send(event);
}

module.exports.save = function(req, res) {
    var event = req.body;
    fs.writeFileSync('/app/data/gig/' + req.params.id + '.json', JSON.stringify(event));
    res.send(event);
}