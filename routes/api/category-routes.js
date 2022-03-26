const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  res.json({message:"this is the get all"})
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  res.json({message:req.params.id})
});

router.post('/', (req, res) => {
  // create a new category
 res.json(req.body)
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  res.json({message:"put"})
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  res.json({message:"delete"})
});

module.exports = router;
