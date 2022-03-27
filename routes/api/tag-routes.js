const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
// be sure to include its associated Product data
router.get('/', async (req, res) => {
  try {
    const categoryData = await Tag.findAll({
      include: {model: Product }
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err)
  }
});

// find a single tag by its `id`
// be sure to include its associated Product data
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    })

    if (!tagData) {
      res.status(404).json({message: "No Tag Found"});
      return
    }
    res.status(200).json(tagData);
  } catch(err) {
    res.status(500).json(err)
  }
});

// create a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  const tagData = await Tag.update(
    {
      tag_id: req.body.id,
      tag_name: req.body.category_name,
    },
    {
      where: {
        tag_id: req.body.id,
      },
    
});
return res.json(tagData);
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Tag.destroy({
      where: {
        tag_id: req.params.id
      }
    });

    if (!tagData) {
      res.status(404).json({ message: 'No Tag Found'});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
