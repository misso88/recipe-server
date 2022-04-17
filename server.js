const express = require('express');
const app = express();

const bannerRouter = require('./routes/banner.js');
const imageRouter = require('./routes/image.js');
const userRouter = require('./routes/user.js');

app.get('/', (req, res) => res.send('API Running'));
app.use(express.json());

app.use('/banner', bannerRouter);
app.use('/image', imageRouter);
app.use('/user', userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);

});