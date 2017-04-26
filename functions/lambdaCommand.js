const AWS = require('aws-sdk');

function lambdaCommand(ins, outs, config, cb) {

  AWS.config.region = 'eu-central-1';
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'eu-central-1:3028a40a-8f16-4a16-a879-fbeab02d492c',
  });

  const body = {
    "name": config.executor.args[0],
    "experiment": config.executor.args[1]
  };

  const lambda = new AWS.Lambda({region: "eu-central-1", apiVersion: '2015-03-31'});

  const pullParams = {
    FunctionName : config.executor.executable,
    InvocationType : 'RequestResponse',
    LogType : 'None',
    Payload: JSON.stringify(body)
  };

  if(config.name != "fork" && config.name != "join") {
    lambda.invoke(pullParams, function(error, data) {
      if (error) {
        console.log(error);
        cb(err, outs)
      } else {
        console.log(JSON.parse(data.Payload))
        cb(null, outs)
      }
    });
  } else if(config.name == "join") {
    process.exit(0);
  } else {
    cb(null, outs);
  }
};

exports.lambdaCommand = lambdaCommand;
