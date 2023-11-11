const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors'); 

app.use(cors());

app.use(bodyParser.json());
  //--------------------------------------------

//1
let storedData = {};

//req.body =  firstName: '',  sessionTime: '', selectedDate: '',

//2
app.post('/booking', (req, res) => {
    console.log("heloo")
  const formData = req.body;
  storedData = formData;
  
  res.status(200).json({ message: 'Data received and stored successfully' });
});

//3
app.get('/booking', (req, res) => {
    res.status(200).json(storedData);
  });

  //--------------------------------------------

  //1

  //2





const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
