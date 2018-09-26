const orm = require("./orm.js");

// orm.logTable("parties");

// orm.logTable("clients");

// orm.logTableWhere("parties", "party_type", "grown-up");

orm.logClientsAndParties("parties", "clients", "parties.client_id", "clients.id");