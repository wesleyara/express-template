import { Request, Response } from "express";

import { AppService } from "./app.service";

export class AppController {
  constructor(private readonly appService = new AppService()) {}

  getHealthcheck(req: Request, res: Response) {
    try {
      const healthcheck = this.appService.getHealthcheck();

      return res.status(healthcheck.status).json(healthcheck);
    } catch (error) {
      const errorWrapper = error as Error;

      return res.status(500).json({
        status: 500,
        date: new Date(),
        message: errorWrapper.message || "Internal Server Error",
      });
    }
  }
}
