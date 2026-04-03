import type { NextFunction,Request,Response } from "express";
import { success } from "zod";
import type { AppError } from "../utils/errors/app.error.ts";

export const genericErrorHandler = (err: AppError,req:Request,res:Response,next:NextFunction) =>{

    console.log(err);

    if(err instanceof AppError){
        res.status(err.statusCode).json({
            success:false,
            message: err.message
        });
    }
    else{
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
}