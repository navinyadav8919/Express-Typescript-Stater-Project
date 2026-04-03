import type { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { asyncLocalStorage } from '../utils/helpers/request.helpers.ts';

export const attachCorrelationIdMiddleware = (req:Request,res:Response,next:NextFunction) => {
    //generate a unique correlation id
    const correlationId = uuidv4();

    // //attach the coorelation Id to the request object
    req.headers["x-correlation-id"]=correlationId;

    //optionally you can also attach it to the response headers
    // req.headers

  


    // call the next middleware or route handler

    asyncLocalStorage.run({correlationId: correlationId }, ()=>{
        next();
    })
    
}