const path = require('path');
const express = require('express');


const app = express();
const port = 3001;

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get("/api", (req, res) => {
  res.json({ message: "Hello from Las Vegas!" });
});

app.get("/api/net", (req, res) => {
  res.json({ message: "Hello from server NEW!" });
});
// console.log(port)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})