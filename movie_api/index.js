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

  app.use(express.static('public'));

  app.use((err, req, res, next) =>{
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});