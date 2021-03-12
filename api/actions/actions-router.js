const express = require('express');

const router = express.Router();

const Action = require('./actions-model');

// ADOPTERS ENDPOINTS
// ADOPTERS ENDPOINTS
// ADOPTERS ENDPOINTS
router.get('/', (req, res) => {
    Action.get(req.query)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the adopters',
        realError: error.message,
      });
    });
});

router.get('/:id', (req, res) => {
    Action.get(req.params.id)
    .then(action => {
      if (action) {
        res.status(200).json(action);
      } else {
        res.status(404).json({ message: 'Action not found' });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the Action',
      });
    });
});



router.post('/', (req, res) => {
    Action.insert(req.body)
    .then(action => {
      res.status(201).json(action);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error adding the Action',
      });
    });
});


router.put('/:id', (req, res) => {
    const changes = req.body;
    Action.update(req.params.id, changes)
      .then(action => {
        if (action) {
          res.status(200).json(action);
        } else {
          res.status(404).json({ message: 'The Action could not be found' });
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          message: 'Error updating the Action',
        });
      });
  });
  

router.delete('/:id', (req, res) => {
    Action.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: 'The Action has been nuked' });
      } else {
        res.status(404).json({ message: 'The Action could not be found' });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error removing the Action',
      });
    });
});

router.get('/:id/actions', (req, res) => {
    Action.getProjectActions(req.params.id)
    .then(action => {
      if (action) {
        res.status(200).json(action);
      } else {
        res.status(404).json({ message: 'Action not found' });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the Action',
      });
    });
});





module.exports = router
