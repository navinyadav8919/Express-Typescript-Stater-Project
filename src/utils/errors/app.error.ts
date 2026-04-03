export class AppError extends Error {
    statusCode: number;
    message: string;
    name: string;
    constructor(statusCode: number,message:string){
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.name = "AppError";
    }
}

export class InternalServerError implements AppError {
    statusCode: number;
    message: string;
    name: string;

    constructor(message:string){
        this.statusCode = 500;
        this.message = message;
        this.name = "InternalServerError";
    }
}

export class BadRequestError implements AppError {
    statusCode: number;
    message: string;
    name: string;

    constructor(message:string){
        this.statusCode = 400;
        this.message = message;
        this.name = "BadRequestError";
    }
}

export class NotFoundError implements AppError {
    statusCode: number;
    message: string;
    name: string;

    constructor(message:string){
        this.statusCode = 404;
        this.message = message;
        this.name = "NotFoundError";
    }
}

export class UnauthorizedError implements AppError {
    statusCode: number;
    message: string;
    name: string;

    constructor(message:string){
        this.statusCode = 401; 
        this.message = message;
        this.name = "UnauthorizedError";
    }
}

export class ForbiddenError implements AppError {
    statusCode: number;
    message: string;
    name: string;

    constructor(message:string){
        this.statusCode = 403; 
        this.message = message;
        this.name = "ForbiddenError";
    }
}

export class ConflictError implements AppError {
    statusCode: number;
    message: string;
    name: string;

    constructor(message:string){
        this.statusCode = 409; 
        this.message = message;
        this.name = "ConflictError";
    }
}

export class NotImplementedError implements AppError {
    statusCode: number;
    message: string;
    name: string;

    constructor(message:string){
        this.statusCode = 501; 
        this.message = message;
        this.name = "NotImplementedError";
    }
}