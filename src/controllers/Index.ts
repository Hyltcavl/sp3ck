import { NextFunction, Request, Response, Router } from "express";
import path from "path";

export const Index: Router = Router();

Index.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send({ data: "hejhej" });
  } catch (e) {
    next(e);
  }
});
