const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");

const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(
  ""
);

app.use(cors());
app.use(bodyparser.json());

app.post("/api/google-login", async (req, res) => {
  console.log(req);
  const ticket = await client.verifyIdToken({
    idToken: req.body.token
  })

  res.status(200).json(ticket.getPayload())
});

app.listen(4001, () => {
  console.log("Server is ready at http://localhost:4001");
});
