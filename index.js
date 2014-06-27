var jira = require('jira');

function Migrate (config) {
  if (config) this.config(config);
  else this._config = {
       origin: { api_version: 2 },
       destination: { api_version: 2 }
     };
}

// I need to refactor this...
Migrate.prototype.config = function (obj) {
  if (obj) {
    if (obj.origin) { merge(obj.origin,this._config.origin); }
    if (obj.destination) { merge(obj.destination,this._config.destination); }
     }
  return this._config;
};

function merge (obj1,obj2)  {
  for (var key in obj1) { obj2[key] = obj1[key]; }
}

module.exports = new Migrate();