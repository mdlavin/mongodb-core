module.exports = {
    MongoError: require('./lib/error')
  , Server: require('./lib/topologies/server')
  , ReplSet: require('./lib/topologies/replset')
  , Mongos: require('./lib/topologies/mongos')
  , MongoCR: require('./lib/auth/mongocr')
  , Logger: require('./lib/connection/logger')
  , Cursor: require('./lib/cursor')
  , ReadPreference: require('./lib/topologies/read_preference')
  , BSON: require('bson')
  // Tools exported for testing
  , ServerManager: require('./test/tools/server_manager')
  , ReplSetManager: require('./test/tools/replset_manager')
  , MongosManager: require('./test/tools/mongos_manager')
  , ShardingManager: require('./test/tools/sharding_manager')
}