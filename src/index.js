const express = require('express');
const http = require('http');

const app = express();
const server = http.Server(app);

app.use(express.Router());
app.use(express.json());

let products = [
  {
    id: 1,
    name: "Tênis Nike",
    brand: "Nike",
    color: "White",
    price: "99,90",
    description: "Este tênis é ótimo para caminhada !",
    position: [
      "X0", "Y0", "Z0"
    ],
    path_gtlf: "",
  },
  {
    id: 2,
    name: "Tênis Adidas",
    brand: "Adidas",
    color: "Blue",
    price: "199,90",
    description: "Este tênis é ótimo para corrida !",
    position: [
      "X0", "Y0", "Z0"
    ],
    path_gtlf: "",
  },
  {
    id: 3,
    name: "Tênis Penalty",
    brand: "Penalty",
    color: "Vermelho",
    price: "69,90",
    description: "Este tênis é ótimo para futsal !",
    position: [
      "X0", "Y0", "Z0"
    ],
    path_gtlf: "",
  }
];

app.get('/products', (req, res) => res.json(products));

app.get('/products/:id', (req, res) => {
  const { id } = req.params;

  if(!id)
    return res.status(400).json({ error: "Param id is required !" });

  const product = products.filter(item => item.id == id);

  if(!(product.length))
    return res.status(400).json({ error: "Product not found !" });

  return res.json(product); 
})

app.post('/products', (req, res) => {
  const { id, name, brand, color, price, description, position, path_gtlf } = req.body;

  products.push({
    id,
    name,
    brand,
    color,
    price,
    description,
    position,
    path_gtlf
  });

  return res.json(products);
});

server.listen(process.env.PORT || 3000);

//