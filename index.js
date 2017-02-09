'use strict';

var path = require('path');

module.exports = function (emailConfig, templateConfig) {
  // initialize mailer
  require('./lib/mailer').init(emailConfig);

  // initialize templates
  templateConfig = templateConfig || {};
  templateConfig.dir = templateConfig.dir || path.join(process.cwd(), 'resources/templates');
  templateConfig.delimiter = templateConfig.delimiter || '\n\n';
  require('./lib/templates').init(templateConfig);

  return {
    email: require('./lib/email'),
    sms: require('./lib/sms')
  };
};

//-- Test Code ----------------------------------------------------------
if (require.main === module) {
  (function () {
var path = require('path');
var util = require('util');

  var emailConfig={
    email:{
            subjectPrefix :"XX",
            sender:"XX",
            host:'smtp.gmail.com',
            port:465,
            auth:{
                user:'XXX',
                pass:'XXX'
            }
    }
    }

var templateConfig = {
    dir: path.join(__dirname, 'template')
};

var nm = require('./')(emailConfig, templateConfig);

var recipients = ['thechoosenman113@gmail.com'];

var options = {
    template: 'mail',
    subject :"support",
    from : "sagar"
};

nm.email.send(recipients, options, console.log);
  })();
}
