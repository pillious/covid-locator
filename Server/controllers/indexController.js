const axios = require('axios');
const {
    ExampleClass
} = require('../modules/indexModule');

const exampleClass = new ExampleClass();

exports.test = function (req, resp) {
    resp.send("Successfully reached test route.");
}

exports.risk = async function (req, resp) {
    const {state, county} = req.params;
    var url = `http://virus.thehumboo.com/api/usa/state/county/${state}/${county}`;
    var response = await axios.get(url);
    resp.send(response.data);
}