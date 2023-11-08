const express = require("express");
const router = express.Router();

const users = [{ name: "Kyle" }, { name: "Sally" }];

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/new", (req, res) => {
  res.send("User New Form");
});

router.post("/", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json(newUser);
});

router.get("/:userId", (req, res) => {
  const userId = req.params.userId;
  const user = users[userId];
  res.json(user);
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const updatedUser = req.body;
  users[id] = updatedUser;
  res.json(updatedUser);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const deletedUser = users[id];
  users.splice(id, 1);
  res.json(deletedUser);
});

module.exports = router;