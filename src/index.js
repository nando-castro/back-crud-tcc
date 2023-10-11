const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  if (users.length > 0) return res.status(200).send(users);
  return res.send("No users found");
});

app.post("/user", async (req, res) => {
  const data = req.body;
  console.log(data);
  await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
    },
  });
  return res.sendStatus(201);
});

app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });
  return res.sendStatus(200);
});

app.put("/user/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  await prisma.user.update({
    where: {
      id: Number(id),
    },
    data: {
      name: data.name,
      email: data.email,
    },
  });
  return res.sendStatus(200);
});

app.get("/users/:name", async (req, res) => {
  const name = req.params.name;
  const user = await prisma.user.findMany({
    where: {
      name: name,
    },
  });
  if (user.length > 0) return res.status(200).send(user);
  return res.send("No users found");
});

app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findMany({
    where: {
      id: Number(id),
    },
  });
  if (user.length > 0) return res.status(200).send(user);
  return res.send("No user found");
});

// Inicie o servidor na porta especificada
const server = app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

module.exports = { app, server };
