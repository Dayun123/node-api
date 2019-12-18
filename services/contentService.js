let request = require('request'),
  config = require('../config');


function getOptions(req) {
  let token = config.getToken();
  let options = {
    method: 'POST',
    url: 'http://travellogix.api.test.conceptsol.com/api/Ticket/Search',
    body: JSON.stringify(req.body),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  };
  return options;
}

exports.getContent = function (req, res) {
  let token = config.getToken();
  let options = getOptions(req);
  console.log('getContentOptions', options);
  request(options, function (error, response, body) {
    console.log('status', response.statusCode);
    console.log('response', response);
    if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
      console.log(body);
      let content = JSON.parse(body);
      res.send(content);
    } else {
      return res.status(502).send({ 
        error: error, 
        message: 'There was an error during Service API request.',
        response
      });
    }
  });
}

