const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "task" });
  }

  insert(task) {
    return this.database.query(`insert into ${this.table} (text) values (?)`, [
      task.text,
    ]);
  }

  update(task) {
    return this.database.query(
      `update ${this.table} set text = ? where id = ?`,
      [task.text, task.id]
    );
  }
}

module.exports = ItemManager;
