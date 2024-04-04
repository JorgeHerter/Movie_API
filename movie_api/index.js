const express = require('express');
app.use(express.json()); 
app.use(express.urlencoded({ extended: true}));
const mongoose = require('mongoose');
const { Movie, User } = require('./models');
const morgan = require('morgan');
const app = express();


mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
  app.use(morgan('dev'));

  // Endpoint to list all movies
  app.get('/movies', async (req, res) => {
    try {
      const movies = await Movie.find();
      res.json(movies);
    } catch (err) {
      console.error('Error fetching movies:', err);
      res.status(500).send('Something went wrong');
    }
  });
  
  // Endpoint to add a new movie
  app.post('/movies', async (req, res) => {
    try {
      const newMovie = new Movie(req.body);
      const savedMovie = await newMovie.save();
      res.json(savedMovie);
    } catch (err) {
      console.error('Error adding movie:', err);
      res.status(500).send('Failed to add movie');
    }
  });
  
  // Define other routes for updating, deleting movies, and handling user-related operations
  
  // Define error handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  
  const PORT = 8080;
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  