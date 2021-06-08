import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/Atendentes.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/people", usersRoutes);
app.get("/", (req, res) => res.send("Bem Vindo a API!"));
app.all("*", (req, res) =>res.send("Você tentou ir em uma rota que nao existe, tente denovo."));

app.listen(PORT, () =>console.log(`Servidor esta rodando no : http://localhost:${PORT}`));
