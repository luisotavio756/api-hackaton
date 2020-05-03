const { Router } = require('express');

// Controllers
const ProductController = require('./controllers/ProductController');


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

const routes = Router();

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.find);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

// routes.put('/products/:id', (req, res) => {
//   const { id } = req.params;

//   if(!id)
//     return res.status(400).json({ error: "Param id is required !" });

//   const product = products.filter(item => item.id == id);

//   if(!(product.length))
//     return res.status(400).json({ error: "Product not found !" });

//   return res.json(product); 
// })

// routes.post('/products', (req, res) => {
//   const { id, name, brand, color, price, description, position, path_gtlf } = req.body;

//   products.push({
//     id,
//     name,
//     brand,
//     color,
//     price,
//     description,
//     position,
//     path_gtlf
//   });

//   return res.json(products);
// });

module.exports = routes;