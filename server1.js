/*const express = require('express');
const app = express();
const port = 5000;
 
// Middleware to parse JSON bodies
app.use(express.json());
 
// Define the products array
let verifyTable = [
  { id: 1, NamVak: "Sriya", prod: "Tesla Ev Car", cost: 5000000 },
  { id: 2, NamVak: "Navya", prod: "Tesla Ev Car", cost: 10000000 },
  { id: 3, NamVak: "serena", prod: "iphone 20", cost: 400000 },
  { id: 4, NamVak: "jayanth", prod: "HP Envy 390", cost: 40000 }
];
 
// Define a route to get the products
app.get('/products', (req, res) => {
  res.json(verifyTable);
});
 
// Define a route to add a new product
app.post('/products', (req, res) => {
  const { NamVak, prod, cost } = req.body;
  if (!NamVak || !prod || !cost) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
 
  // Generate a new ID
  const newId = verifyTable.length ? verifyTable[verifyTable.length - 1].id + 1 : 1;
 
  // Create new product
  const newProduct = { id: newId, NamVak, prod, cost };
 
  // Add to the array
  verifyTable.push(newProduct);
 
  // Respond with the new product
  res.status(201).json(newProduct);
});
 
// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});  */


const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define the products array
let verifyTable = [
  { id: 1, NamVak: "Sriya", prod: "Tesla Ev Car", cost: 5000000 },
  { id: 2, NamVak: "Navya", prod: "Tesla Ev Car", cost: 10000000 },
  { id: 3, NamVak: "serena", prod: "iphone 20", cost: 400000 },
  { id: 4, NamVak: "jayanth", prod: "HP Envy 390", cost: 40000 }
];

// Define a route to get the products
app.get('/products', (req, res) => {
  res.json(verifyTable);
});

// Define a route to add a new product
app.post('/products', (req, res) => {
  const { NamVak, prod, cost } = req.body;
  if (!NamVak || !prod || !cost) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Generate a new ID
  const newId = verifyTable.length ? verifyTable[verifyTable.length - 1].id + 1 : 1;

  // Create new product
  const newProduct = { id: newId, NamVak, prod, cost };

  // Add to the array
  verifyTable.push(newProduct);

  // Respond with the new product
  res.status(201).json(newProduct);
});

// Define a route to update an existing product by ID (PUT)
app.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const { NamVak, prod, cost } = req.body;

  const product = verifyTable.find(p => p.id === parseInt(id));
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  // Update product details
  if (NamVak) product.NamVak = NamVak;
  if (prod) product.prod = prod;
  if (cost) product.cost = cost;

  res.json(product);
});

// Define a route to delete a product by ID
app.delete('/products/:id', (req, res) => {
  const { id } = req.params;

  const index = verifyTable.findIndex(p => p.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }

  // Remove the product
  const deletedProduct = verifyTable.splice(index, 1);

  res.json(deletedProduct[0]);
});

// Define a route to partially update a product by ID (PATCH)
app.patch('/products/:id', (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const product = verifyTable.find(p => p.id === parseInt(id));
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  // Update only the provided fields
  Object.keys(updates).forEach(key => {
    if (product.hasOwnProperty(key)) {
      product[key] = updates[key];
    }
  });

  res.json(product);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
