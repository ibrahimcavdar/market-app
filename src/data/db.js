var companies = require("./companies.json");
var items = require("./items.json");

module.exports = function () {
//   console.log({ companies, items });
  return {
    companies:companies,
    items:items,
  };
};
