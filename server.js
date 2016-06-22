import express from 'express';
import path from 'path';

let app = express();

app.get('/', (req,res) => {
  res.sendFile(path(__dirname,'index.html'));
})

app.listen(3000, () => {
  console.log(listening on port 3000);
})