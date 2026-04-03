import type { NextFunction ,Request,Response} from "express";
import { success } from "zod";
import { Schema, type AnyZodObject } from "zod/v3";
import logger from "../config/logger.config.ts";

/**
 * 
 * @param schema - -Zod Schema to validate the request Body
 * @returns  - Middlleware function to validate the request body
 */
// @param Schema 
// @returns -

export const validateRequestBody = (schema:AnyZodObject) => {
    return async (req: Request , res: Response,next: NextFunction) =>{
        try {

            logger.info("Validating request body");
            await schema.parseAsync(req.body);
            logger.info("Request body is valid");
            next();

        } catch (error) {
            // if validation fails
            logger.error("Request body is invalid");
            res.status(400).json({
                message: "Invalid request body",
                success: false,
                error: error
            }); // res =function(res) =>{ res.setStatus(400); return res;} 
            
        }
    }
}

export const validateQueryParams  = (schema:AnyZodObject) => {
    return async (req: Request , res: Response,next: NextFunction) =>{
        try {
            await schema.parseAsync(req.query);
            console.log("Quesry param is valid");
            next();

        } catch (error) {
            // if validation fails

            res.status(400).json({
                message: "Invalid Query Params",
                success: false,
                error: error
            }); // res =function(res) =>{ res.setStatus(400); return res;} 
            
        }
    }
}