import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { errors } from "celebrate";
import notFoundHandlers from "./middlewares/notFoundHandlers";
import {
  logErrors,
  wrapErrors,
  errorHandler,
} from "./middlewares/errorHandlers";
import handlers from "./handlers";
import { setupSwagger } from "./config/swagger";

const app = express();
app.use(cors());
app.use(bodyParser.json());

setupSwagger(app);

handlers(app);

app.use(errors());
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);
app.use(notFoundHandlers);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
