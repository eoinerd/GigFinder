var fs = require('fs');

module.exports.get = function(req, res) {
    var gig = fs.readFileSync('app/data/gig/' + req.params.id + '.json', 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.send(gig);
};

module.exports.save = function(req, res) {
    var gig = req.body;
    fs.writeFileSync('app/data/gig/' + req.params.id + '.json', JSON.stringify(gig));
    res.send(gig);
}

module.exports.getAll = function(req, res) {
    var path = 'app/data/gig/';

    var files = [];
    try {
        files = fs.readdirSync(path);
    }
    catch (e) {
        console.log(e)
        res.send('[]');
        res.end();
    }
    var results = "[";
    for (var idx = 0; idx < files.length; idx++) {
        if (files[idx].indexOf(".json") == files[idx].length - 5) {
            results += fs.readFileSync(path + "/" + files[idx]) + ",";
        }
    }
    results = results.substr(0, results.length - 1);
    results += "]";

    res.setHeader('Content-Type', 'application/json');
    res.send(results);
    res.end();
};
