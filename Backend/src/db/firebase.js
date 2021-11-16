const admin = require('firebase-admin');

const serviceAccount = require('./easy-store-972f2-8bb48f6d88f6.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports=db;