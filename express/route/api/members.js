const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../data/members');

// get all members
router.get('/', (req, res) => res.json(members));
// get a single member
router.get('/:id', (req, res) => {
  let found = members.some(member => member.id === req.params.id);
  if(found) {
    res.json(members.filter(member => member.id === req.params.id));
  } else {
    res.status(400).json({
      msg: `member with id ${req.params.id} not found!`
    });
  }
});
// create a member
router.post('/', (req, res) => {
  const newMember = {
    id: uuid.v1(),
    name: req.body.name,
    status: 'active'
  };

  if(!req.body.name) {
    return res.status(400).json({
      msg: 'please include name.'
    });
  }

  members.push(newMember);
  res.json(members);
});


module.exports = router;
