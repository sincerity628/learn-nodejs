const express = require('express');
const router = express.Router();
const members = require('../../data/members');

// get all members
router.get('/', (req, res) => res.json(members));
// get a single member
router.get('/:id', (req, res) => {
  let found = members.some(member => member.id === parseInt(req.params.id));
  if(found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({
      msg: `member with id ${req.params.id} not found!`
    });
  }
});

module.exports = router;
