![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png) 

sails-tumblr
============

A Tumblr adapter for sailsJS.

# TumblrAdapter

This adapter provides access to the Tumblr API via the Sails.js ORM.

To use, include in your `node_modules` directory.

*PLEASE NOTE: Currently, the adapter is very limited and only retrieve information of blogs and posts.
Later will be possible to create, edit and delete posts.*

## Installation

```bash
$ npm install sails-tumblr
```

## Configuration

Add the tumblr config to the `config/adapters.js` file.

```javascript
tumblr: {
    module: 'sails-tumblr',
    consumerKey: '',
    consumerSecret: '',
    accessToken: '',
    accessTokenSecret: '',
    blogUrl: ''
}
```

Create new model in `api/models/` and include:

```javascript
    adapter: 'tumblr'
```

*Note: Collections (models) can be `TumblrPost or TumblrBlog.*

## Example

Here's some example usage:

```javascript
// api/models/TumblrPost.js
module.exports = {
  adapter: 'tumblr',
};

// config/adapters.js
tumblr: {
    module: 'sails-tumblr',
    consumerKey: 'MnvVojRYU1Jdirt4CVcLfbCl0hXuWusLxUvZmiNXPiyU1BJNUz',
    consumerSecret: 'EbVUBJDje9nLJqxEeckEfwHG41kujoHlPaVv2uNTNOg1bltrWt',
    accessToken: '5pKWzQsNhIkH0gHHgiTpQ33jqC1W1R39ZEf7B86LoZpGkFug7V',
    accessTokenSecret: '0u0b41oawagnk4kgPIO0QhwGwd20nA6pIdDr9SeZkfGwjm46k8',
    blogUrl: 'myblogname.tumblr.com'
}
```


## About Sails.js and Waterline
http://SailsJs.com

Waterline is a new kind of storage and retrieval engine for Sails.js.  It provides a uniform API for accessing stuff from different kinds of databases, protocols, and 3rd party APIs.  That means you write the same code to get users, whether they live in mySQL, LDAP, MongoDB, or Facebook.
