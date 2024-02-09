import express from "express";
import { createUser, getUsers, getUser } from "./database/user.js";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Home endpoint hit");
  res.send("Welcome home");
});

app.post("/create-user", async (req, res) => {
  const { username, password, email, firstName, lastName } = req.body;

  const result = await createUser(
    username,
    password,
    email,
    firstName,
    lastName
  );
  console.log(result);
  res.status(201).send("User created succesfully");
});

app.get("/get-users", async (req, res) => {
  const users = await getUsers();
  res.status(200).send(users);
});

app.get("/get-user/:id", async (req, res) => {
  const user = await getUser(req.params.id);
  res.status(200).send(user);
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
