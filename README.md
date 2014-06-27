node-jira-migrate [![Build Status](https://travis-ci.org/hightail/node-jira-migrate.svg)](https://travis-ci.org/hightail/node-jira-migrate)
===

> A Node.js library to facilitate migration of JIRA content between JIRA instances

## Install

`npm install jira-migrate`

## Usage

```javascript
var migrate = require('jira-migrate'),
    config  = require('./config');

migrate.config({
	origin: config.origin,
	destination: config.dest
});

migrate.issue(<issue number>,<callback>);

migrate.search(<JQL statement>, <callback>);

```

### `migrate.config(<config object>)`

Configures the server options and credentials for the migration. 

**Values**

*origin* - Origin JIRA instance
- url - ex: https://your.jira.instance:8080
- user - JIRA user name
- password - JIRA user password
- api_version - optional API version (defaults to 2)

*destination* - Destination JIRA instance
- url - ex: https://your.new.jira.instance:8080
- user - JIRA user name
- password - JIRA user password
- api_version - optional API version (defaults to 2)



#### Example:

> It's not a great idea to store your credentials in your code base, so consider using env variables instead.


config.js
```javascript
var origin = {
	url      : "https://old.jira:8080",
	user     : process.env.ORIGIN_USER,
	password : process.env.ORIGIN_PASS
}


var dest   = {
	url      : "https://new.jira:8000",
	user     : process.env.DEST_USER,
	password : process.env.DEST_PASS
}

```

app.js
```javascript
var migrate = require('jira-migrate'),
    config  = require('./config');

migrate.config({
	origin: config.origin,
	destination: config.dest
});
```
