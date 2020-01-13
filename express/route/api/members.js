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
    emial: req.body.email,
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

// update a member
router.put('/:id', (req, res) => {
  let found = members.some(member => member.id === req.params.id);
  if(found) {
    const updateMember = {
      name: req.body.name,
      email: req.body.email
    };
    members.forEach(member => {
      if(member.id === req.params.id) {
        member.name = updateMember.name ? updateMember.name : member.name;
        member.email = updateMember.email ? updateMember.email : member.email;
        return res.json({
          msg: 'member updated',
          member
        });
      }
    });
  } else {
    res.status(400).json({
      msg: `member with id ${req.params.id} not found.`
    });
  }
});

// delete a member
router.delete('/:id', (req, res) => {
  let found = members.some(member => member.id === req.params.id);
  if(found) {
    let index = members.findIndex(member => member.id === req.params.id);
    members.splice(index, 1);
    
    res.json({
      msg: 'member deleted.',
      members
    });
  } else {
    res.status(400).json({
      msg: `member with id ${req.params.id} not found.`
    });
  }
});




module.exports = router;
