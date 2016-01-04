var express = require('express');
var router = express.Router();

var stocks = require('./data/nyse.json').map(function (stock) {
    return {
        company_name: stock['Company Name'],
        symbol: stock['ACT Symbol']
    }
});

var searchStocks = function (query) {
    query.symbol = query.symbol ? query.symbol.toLowerCase() : false;
    query.company_name = query.company_name ? query.company_name.toLowerCase() : false;

    return function (stock) {
        //prefer symbol
        if (query.symbol) {
            var s = stock.symbol.toLowerCase();
            if (s.length < query.symbol.length)
                return false;

            return s.substr(0, query.symbol.length) == query.symbol;
        }
        return stock.company_name.toLowerCase().startsWith(query.company_name);
    };
}

/* GET users listing. */
router.get('/', function (req, res, next) {
    var name = req.query.name;
    res.json(
        {
            name: name,
            msg: Math.random() * 10000
        }
        )
});

router.get("/stocks", function (req, res, next) {
    if (!req.query.company_name && !req.query.symbol) {
        return res.json([]);
    }
    res.json(stocks.filter(searchStocks(req.query)));
});

module.exports = router;
