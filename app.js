// import the express module
import express from 'express';

//create an instance of an express application
const app = express();

//define a port number for our server to listen on
const PORT = 3004;

//create an array to store our appointments
const appointments = [];

//enable static file serving
app.use(express.static('public'));

//allow the app to read form data through req.body
app.use(express.urlencoded({ extended: true }));

//defining a default route ("/")
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

//add a route to handle the appointment form
app.post('/contact', (req, res) => {
    const appointment = req.body;
    appointment['timestamp'] = new Date();

    appointments.push(appointment);
    console.log(appointment);

    res.redirect('/confirm');
});

app.get('/confirm', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

//add an admin route to see all the appointments
app.get('/admin', (req, res) => {
    res.send(appointments);
});

//start the server on the designated port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});