const PORT = 3004;


app.get('/', (req, res) => {
  res.sendFile('${import.meta.dirname}/views/home.html');
}