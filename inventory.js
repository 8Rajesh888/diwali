/* computes the final stock quantities.

• initialStock is an object: {laptop: 10, phone: 25, tablet:

5}

⚫ transactions is an array of objects:javascript

{ item: "laptop", type: "sale", quantity: 2 }, { item: "phone", type: "restock", quantity: 10 }, { item: "tablet", type: "sale", quantity: 6 } // Note: more

than available */
function inventoryLogProcessor(initStock, transactions) {
  const stock = { ...initStock };

  for (const transaction of transactions) {
    const { type, quantity, item } = transaction;

    if (stock[item] === undefined) {
      stock[item] = 0;
    }

    switch (type) {
      case "sale":
        stock[item] = Math.max(0, stock[item] - quantity);
        break;

      case "restock":
        stock[item] += quantity;
        break;

      default:
        console.log(`Unknown transaction type: "${type}"`);
    }
  }

  return stock;
}
