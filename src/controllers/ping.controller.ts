import type { NextFunction, Request, Response } from "express";
import { success } from "zod";
import fs from "fs/promises";
import { InternalServerError, NotFoundError} from "../utils/errors/app.error.ts";
import logger from "../config/logger.config.ts";

export const pingHandler = async (req: Request,res: Response,next: NextFunction) : Promise<void> => {
    

    try {
        // await fs.readFile("sample");
        logger.info("Ping request recieved");
        res.status(200).json({message: "ping pong"});

    } catch (error) {
        throw new NotFoundError("File not Found");
    }
    
}

