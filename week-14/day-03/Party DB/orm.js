const connection = require("./config/connection.js");

module.exports = {
  logTable: function (tableName) {
    connection.query("SELECT * FROM ??", [tableName], function (err, data) {
      if (err) throw err;
      console.log(data);
    });
  },
  logTableWhere: function (tableName, columnName, columnValue) {
    connection.query("SELECT * FROM ?? WHERE ?? = ?", [tableName, columnName, columnValue], function (err, data) {
      if(err) throw err;
      console.log(data);
    });
  },
  logClientsAndParties: function (tableName, otherTableName, firstValue, secondValue) {
    connection.query("SELECT parties.party_name, parties.party_cost, clients.client_name FROM ?? INNER JOIN ?? ON ?? = ??;", [tableName, otherTableName, firstValue, secondValue], function (err, data) {
      console.log(data);
    });
  }
};