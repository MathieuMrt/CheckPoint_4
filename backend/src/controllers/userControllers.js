const models = require("../models");

const browse = (req, res) => {
  models.user
    .findAll()
    .then(([rows]) => {
      console.log("La réponse", rows);
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getUserByEmailWithPassword = (req, res) => {
  const { email, password } = req.body;
  models.user
    .getUserByLogin(email, password)
    .then(([user]) => {
      if (user[0] != null) {
        res.status(200).send("Connexion réussie");
      } else {
        res.status(401).send("Adresse mail ou mot de passe incorrect");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  getUserByEmailWithPassword,
  browse,
};
