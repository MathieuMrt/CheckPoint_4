const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  getUserByLogin(email, password) {
    return this.database.query(
      `select * from ${this.table} WHERE email = ? AND password = ?`,
      [email, password]
    );
  }
}

module.exports = UserManager;
