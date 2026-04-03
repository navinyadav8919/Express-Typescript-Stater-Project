import type { NextFunction, Request, Response } from "express";
import { success } from "zod";
import fs from "fs/promises";
import { InternalServerError, NotFoundError} from "../utils/errors/app.error.ts";

export const pingHandler = async (req: Request,res: Response,next: NextFunction) : Promise<void> => {
    

    try {
        await fs.readFile("sample");
        res.status(200).json({message: "ping pong"});

    } catch (error) {
        throw new NotFoundError("File not Found");
    }
    
}

export const pingHandlerV2 = async (req: Request,res: Response,next: NextFunction) : Promise<void> => {
    

    try {
        await fs.readFile("sample");
        res.status(200).json({message: "ping pong"});

    } catch (error) {
    //   next(error);
      
    }
    
}