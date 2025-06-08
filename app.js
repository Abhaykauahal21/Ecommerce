const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

const db = require('./config/mongoose-connection');
const ownerRouter = require('./routes/ownerRouter');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.set('view engine', 'ejs');

app.use("/owners", ownerRouter);
app.use("/users", userRouter);  
app.use("/products", productRouter);




app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});