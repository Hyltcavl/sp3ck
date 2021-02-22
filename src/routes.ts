import { Application, Router } from "express";
import { Ping } from "./controllers/Ping";
import { Index } from "./controllers/Index";
import { Picture } from "./controllers/Picture";

const _routes: [string, Router][] = [
  ["/", Index],
  ["/ping", Ping],
  ["/picture", Picture],
];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, controller] = route;
    app.use(url, controller);
  });
};
