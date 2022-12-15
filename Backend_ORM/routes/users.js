var express = require('express');
var router = express.Router();
var models = require('../models/index.js')
var { Response } = require('../helpers/util.js');


router.get('/', async function (req, res, next) {
  try {
    const getUser = await models.User.findAll()
    res.json(new Response(getUser))
  } catch (error) {
    res.status(500).json(new Response(error, false))
  }
});

router.post('/', async function (req, res, next) {
  try {
    const addUser = await models.User.create(req.body)
    res.json(new Response(addUser))
  } catch (error) {
    res.status(500).json(new Response(error, false))
  }
});

router.put('/:id', async function (req, res, next) {
  try {
    const updateUser = await models.User.update(req.body,
      {
        where: {
          id: req.params.id
        },
        returning: true,
        plain: true
      })
    res.json(new Response(updateUser[1]))
  } catch (error) {
    res.status(500).json(new Response(error, false))
  }
});

router.delete('/:id', async function (req, res, next) {
  try {
    const deleteUser = await models.User.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(new Response(deleteUser))
  } catch (error) {
    res.status(500).json(new Response(error, false))
  }
});

module.exports = router;
