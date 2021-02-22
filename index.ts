import express, { Application } from "express";
import path from "path";
import { routes } from "./src/routes";

// Boot express
export const app: Application = express();

// for serving static media
app.use("/images", express.static(path.join(__dirname, "images")));

// Application routing
routes(app);

const port = 5000;

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
