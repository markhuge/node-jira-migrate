var expect  = require('chai').expect,
    migrate = require('../'),
    config  = require('./fixtures/config') 

describe("Jira Migrate", function(){

  it("config()", function(){
    var conf = migrate.config({
      origin: config.origin,
    destination: config.dest
    });

    expect(conf).to.be.ok;
    expect(conf.origin).to.have.deep.property('url','https://old.jira:8080');
    expect(conf.origin).to.have.deep.property('user','user');
    expect(conf.origin).to.have.deep.property('password','pass');
    expect(conf.origin).to.have.deep.property('api_version',3);
    
    expect(conf.destination).to.have.deep.property('url','https://new.jira:8000');
    expect(conf.destination).to.have.deep.property('user','user');
    expect(conf.destination).to.have.deep.property('password','pass');
    expect(conf.destination).to.have.deep.property('api_version',2);

  });
	

});

    
