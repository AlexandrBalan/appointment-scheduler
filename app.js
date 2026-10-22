// import the express module
import express from 'express';

const PORT = 3004;



//defining a default route ("/")
app.get('/', (req, res) => {
    // res.send('Welcome to Poppa\'s Pizza');
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});
