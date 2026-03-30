import express from 'express';
import { pingHandler } from '../controllers/ping.controller.ts';

const pingRouter =express.Router();

pingRouter.get('/ping',middleware1,middleware2,pingHandler);

export default pingRouter;