const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      // Send error response
      res.status(500).json({ error: 'Failed to fetch user' });
    } else if (!user) {
      // Send 404 response
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  });
});
