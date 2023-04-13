import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import config from "./config/config.js";

const {
  app_config: { port, client_url },
} = config;

const app = express();
// Middlewares
app.use(express.json()); // sending json data
app.use(express.urlencoded({ extended: true })); // sending form-data
app.use(cookieParser()); // saving data in cookies
app.use(
  cors({
    origin: client_url,
    credentials: true,
  })
);

// Checking any errors before listen.
app.use((err, req, res) => {
  res.status(500).send("Something broke!");
});

// App configuration

(async () => {
  try {
  } catch (err) {
    throw new Error(err.message);
  }
})();

app.listen(port, () => console.log(`Running on ${port}`));
