import { NextFunction, Request, Response, Router, Express } from "express";
export const Picture: Router = Router();

Picture.get("/", async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: "linkTillBild" });
});
