const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = 'mongodb+srv://wooseok:2619@cluster0.equfazo.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
