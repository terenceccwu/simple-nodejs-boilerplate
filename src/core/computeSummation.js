const { sum } = require("../lib/sum");

module.exports.computeSummation = function(req) {
    return sum(req.a, req.b);
}
