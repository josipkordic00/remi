const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongodb = require('mongodb');

router.get('/user', async (req, res) => {
    try {
      const users = await loadUsersCollection();
      const arr = await users.find({}).toArray();
      res.send({arr});
    } catch (error) {
      console.error(error);
      res.status(500).send({error: 'An error occurred while retrieving users'});
    }
  });


 router.post('/winner', async (req, res) => {
  const users = await loadUsersCollection();
  await users.updateOne(
    { name: req.body.name },
    { $set: { bodovi: req.body.bodovi } }
  );
  res.send();
});


async function loadUsersCollection(){
    const client = await mongodb.MongoClient.connect("mongodb://Nare:1234@ac-qrmazbh-shard-00-00.oehqthd.mongodb.net:27017,ac-qrmazbh-shard-00-01.oehqthd.mongodb.net:27017,ac-qrmazbh-shard-00-02.oehqthd.mongodb.net:27017/?ssl=true&replicaSet=atlas-pziuua-shard-0&authSource=admin&retryWrites=true&w=majority", {
       
    })
    return client.db('sample_airbnb').collection('users')
}





module.exports = router;