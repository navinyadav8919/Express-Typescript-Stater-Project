import express from 'express';
import {  ServerConfig } from './config/index.ts';
import { pingHandler } from './controllers/ping.controller.ts';
import pingRouter from './routers/ping.router.ts';
import type { NextFunction } from 'express-serve-static-core';
import v1Router from './routers/v1/index.router.ts';
import v2Router from './routers/v2/index.router.ts';
import { genericErrorHandler } from './middlewares/error.middleware.ts';

import logger from './config/logger.config.ts';
import { uuid } from 'zod';
import { attachCorrelationIdMiddleware } from './middlewares/correlation.middleware.ts';
// import { z } from 'zod';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Registering all the routers and their corresponding routes with out app server object.
 */
app.use(attachCorrelationIdMiddleware);


app.use('/api/v1', v1Router);
app.use('/api/v1', v2Router);

/**
 * Add the error handler middleware
 */

app.use(genericErrorHandler);


app.listen(ServerConfig.PORT, () => {
    logger.info(`server is running on http://localhost:${ServerConfig.PORT}`);
    logger.info(`Press ctrl+c to stop the server`,{"name": "dev server"});

   
});