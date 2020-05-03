const Product = require('../models/Product');

module.exports = {
  async index(req, res) {
    const products = await Product.find();
    let array = [];

    products.forEach(item => {
      let id = item._id;

      array = {...array, ['prod'+id]: {
        id: 'prod'+item._id,
        name: item.name,
        brand: item.brand,
        color: item.color,
        price: item.price,
        description: item.description,
        position: item.position,
        scale: item.scale,
        gltf_model: item.gltf_model
      }};
      // console.log(item);
    })

    

    return res.json(array);
  },

  async find(req, res) {
    const { id } = req.params;

    const product = await Product.findById(id);

    return res.json(product);
  },

  async store(req, res) {
    const {
      name, 
      brand,
      color,
      price,
      description,
      position,
      scale,
      gltf_model
    } = req.body;

    try {
      const product = await Product.create({
        name, 
        brand,
        color,
        price,
        description,
        position,
        scale,
        gltf_model
      });

      return res.json(product);
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const {
      name, 
      brand,
      color,
      price,
      description,
      position,
      scale,
      gltf_model
    } = req.body;

    try {
      const product = await Product.findByIdAndUpdate(
        id,  
        {
          name, 
          brand,
          color,
          price,
          description,
          position,
          scale,
          gltf_model
        }
      );

      return res.json(product);
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
  
  async destroy(req, res) {
    const { id } = req.params;

    try {
      const product = await Product.findByIdAndDelete(id);

      return res.json(product);
    } catch (error) {
      return res.status(400).json({ error });
    }
  },



};