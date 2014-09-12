/**
 * Created by Roberto on 07-07-2014.
 */
/*var async = require('async')
    , _       = require('underscore')
    , _str    = require('underscore.string')*/
var tumb   = require('tumblr');

module.exports = (function(){

    var adapter = {

        identity: 'sails-tumblr',
        syncable: false,
        connections: {},

        registerCollection: function (collection, cb) {

            var oauth = {
                consumer_key: collection.config.consumerKey,
                consumer_secret: collection.config.consumerSecret,
                token: collection.config.accessToken,
                token_secret: collection.config.accessTokenSecret
            }

            this.connections[collection.identity] = {
                apiBlog: new tumb.Blog(collection.config.blogUrl, oauth),
                apiUser: new tumb.User(oauth)
            };
            cb();

        },

        posts: function (collectionName, criteria, cb) {

            this.connections[collectionName].apiBlog.posts(criteria,function(err, result){
                if (err) return cb(err);

                if (!(result && result.posts) ) return cb(result.posts);
                cb(err, result.posts);
            });

        },
        blog: function (collectionName, cb) {
            this.connections[collectionName].apiBlog.info(function(err, result){

                if (err) return cb(err);

                if (!(result && result.blog) ) return cb(result.blog);
                cb(err, [result.blog]);
            });
        },

     /*   limit: function(collectionName, val, cb){
            console.log(this);
            return cb(null,'');
        },*/

        find: function(collectionName, options, cb) {

            var criteria = options.where || {};

            if(options.limit) criteria.limit = options.limit;

            switch (collectionName) {
                case 'tumblrpost': return this.posts(collectionName, criteria, afterwards); // "afterwards" em vez de "cb"
                case 'tumblrblog': return this.blog(collectionName, afterwards);

                default: return afterwards('Unknown usage of find() with model ('+collectionName+') ');
            }

            function afterwards (err, results){
                if (err) return cb(err);
                /* Useful to work on results if needed */
                return cb(err,results);
            }

            /*this.connections[collectionName].apiUser.info(function(error,response){
                if(error) {console.log(error);return;}
                response.user
            });*/
        },



        describe: function(collectionName, cb) {},

        define: function(collectionName, definition, cb) {},

        drop: function(collectionName, cb) {},

        create: function(collectionName, data, cb) {},
        /*  todo:
            text([options, ]callback)
            quote([options, ]callback)
            link([options, ]callback)
            answer([options, ]callback)
            video([options, ]callback)
            audio([options, ]callback)
            photo([options, ]callback)*/

        stream: function(collectionName, options, stream) {},

        update: function(collectionName, options, values, cb) {
            //todo: client.edit()
        },

        destroy: function(collectionName, options, cb) {
            //todo: client.deletePost()
        }

    };

    return adapter;

})();