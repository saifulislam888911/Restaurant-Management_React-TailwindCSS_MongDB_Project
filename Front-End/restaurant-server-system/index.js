const express = require("express");
const app = express();

const cors = require("cors");

require("dotenv").config();
// console.log(process.env);
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.liwxj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Creating a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connecting the client to the server
    await client.connect();

    const menuCollection = client.db("bistroDb").collection("menu");
    const reviewsCollection = client.db("bistroDb").collection("reviews");

    app.get("/menu", async (req, res) => {
      const result = await menuCollection.find().toArray();

      res.send(result);
    });

    app.get("/reviews", async (req, res) => {
      const result = await reviewsCollection.find().toArray();

      res.send(result);
    });

    // Sending a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensuring that the client will close when finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Restaurant is running.");
});

app.listen(port, () => {
  console.log(`Restaurant is running on port : ${port}`);
});
