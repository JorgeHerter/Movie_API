const express = require('express');
const morgan = require('morgan');
const app = express();

const topMovies = [
    
    {Title:'Saving Private Ryan', Director:'Steven Spielberg', Year: 1998},
    {Title:'Full Metal Jacket', Director:'Stanley Kubrick', Year: 1987},
    {Title:'Dunkirk', Director:'Christopher Nolan', Year: 2017},
    {Title:'The Deer Hunter', Director:'Micheal Cimino', Year: 1978},
    {Title:'The Great Escape', Director:'John Sterges', Year: 1963},
    {Title:'Apocalypse Now', Director:'Francis Ford Coppola', Year: 1979},
    {Title:'Inglourious Basterds', Director:'Quentin Tarantino', Year: 2009},
    {Title:'1917', Director:'San Mendes', Year: 2019},
    {Title:'The Hurt Locker', Director:'Kathryn Bigelow', Year: 2009},
    {Title:'Fury', Director:'David Ayer', Year: 2014},

];

app.use(morgan('dev'));

app.get ('/movies', (req, res) => {
    res.json(topMovies);
});

app.get('/', (req, res) => {
    res.send('Welcome to my movie API!');
  });

  //Endpoint to list all movies

  app.get('/movies', (req, res) =>{
    res.send('Successful GET Request returning data on ALL the movies.');
  });
 
  //Endpoint to add a new movie

 app.post('/movies', (req, res) =>{
  res.send('Successful POST Request adding new movies to the list');
});
 
//Endpoint to update details of movies by ID

 app.put('/movies/:id', (req, res) =>{
  res.send('Successfull PUT Request updating movies with ID: ${req.params.id}');
});

//End point to delete movies with specific ID
app.delete('/movies/:id', (req, res) =>{
  res.send('Successfull DELETE Request updating movies with ID: ${req.params.id}');
});
  
// Endpoint to list all users
app.get('/users', (req, res) => {
  res.send('Successful GET request returning data on all the users');
});

// Endpoint to add a new user
app.post('/users', (req, res) => {
  res.send('Successful POST request adding a new user');
});

// Endpoint to get details of a specific user by ID
app.get('/users/:id', (req, res) => {
  res.send(`Successful GET request returning data on user with ID: ${req.params.id}`);
});

// Endpoint to update details of a specific user by ID
app.put('/users/:id', (req, res) => {
  res.send(`Successful PUT request updating user with ID: ${req.params.id}`);
});

// Endpoint to delete a specific user by ID
app.delete('/users/:id', (req, res) => {
  res.send(`Successful DELETE request deleting user with ID: ${req.params.id}`);
});

app.use(express.static('public'));

  app.use((err, req, res, next) =>{
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});