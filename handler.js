'use strict';

module.exports.hello = (event, context, callback) => {

  console.log('testtttt')

  console.log('context: ' + JSON.stringify(context))

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'hello world!'
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};