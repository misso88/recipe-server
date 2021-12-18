const express = require('express');
const app = express();


const userRouter = require('./routes/user.js');

app.get('/', (req, res) => res.send('API Running'));
app.use(express.json());


app.use('/user', userRouter); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
 
});