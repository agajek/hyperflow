var request = require('requestretry');

function lambdaCommand(ins, outs, config, cb) {

  var url = "https://m4gmbmr320.execute-api.us-west-2.amazonaws.com/Prod"

  var body = {
    "cmd": "ls -li"
  };

  var req = request.post(
    {
      timeout: 60000,
      url: url, json: body,
      headers: {'Content-Type': 'application/json',
      'Accept': '*/*'}
    }
  );

  req.on('error', function (err) {
    console.log("Function: " + "e" + " error: " + err);
    cb(err, outs);
  });

  req.on('response', function (response) {
    console.log("Function: " + "e" + " response status code: " + response.statusCode)
    console.log('The number of request attempts: ' + response.attempts);
  });

  req.on('data', function (body) {
    console.log("Function: " + "e" + " data: " + body.toString())
  });

  req.on('end', function (body) {
    console.log("Function: " + "e" + " end.");
    cb(null, outs);
  })

};

exports.lambdaCommand = lambdaCommand;
