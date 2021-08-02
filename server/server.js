const express = require("express");
const models = require("./models");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const schema = require("./schema/schema");
const MONGO_URI_STRING = require("./mongoConnection");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",  //we can also put * to all any origin to access data
  })
);

// Replace with your mongoDB
const MONGO_URI = MONGO_URI_STRING;

if (!MONGO_URI) {
  throw new Error("You must provide a mongo atlas URI");
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, { useNewUrlParser: true});
mongoose.connection
  .once("open", () => console.log("Connected to mongodb instance."))
  .on("error", (error) => console.log("Error connecting to MongoDB:", error));

app.use(bodyParser.json());
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log(`the server is up at http://localhost:4000`);
});
