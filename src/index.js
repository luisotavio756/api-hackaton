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

app.get('/', (req, res) => res.json(products));

server.listen(8000);

//