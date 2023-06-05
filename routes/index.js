const express = require('express');

const {
  OPENAI_CONTENT,
} = require('../configs');

const chatAI = require('../services/openai');

const router = express.Router();

router
  .get('/', async (req, res) => {
    res.render('index', {
      description: req.flash('answer'),
    });
  })
  .post('/', async (req, res) => {
    const { description } = req.body;

    const answer = await chatAI({
      content: OPENAI_CONTENT,
      description,
    });

    req.flash('answer', answer);

    res.redirect('/');
  });

module.exports = router;
