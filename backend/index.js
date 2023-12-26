const express = require('express');
const dbConnect = require('./config/dbconnect');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoute");
const productRouter = require('./routes/productRoute');
const blogRouter = require("./routes/blogRoute");

const categoryRouter = require("./routes/categoryRoute");
const uploadRouter = require("./routes/uploadRoute");

const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middlwares/errorHandler');
const cookieParser = require('cookie-parser');
const morgan = require("morgan");
const cors = require ("cors");
dbConnect();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.use("/api/user", authRouter);
app.use("/api/Product", productRouter);
app.use("/api/blog", blogRouter);

app.use("/api/category", categoryRouter);

app.use("/api/upload", uploadRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running  at PORT ${PORT}`);
  });

