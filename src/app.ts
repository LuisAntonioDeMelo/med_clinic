import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { StatusCodes } from 'http-status-codes';
import { errors } from 'celebrate';
import AppError from './errors/AppError';
import mongoose from 'mongoose';
import routes from './routes';
import 'dotenv/config'

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.init();
    this.middlewares();
    this.database();
    this.routes();
    this.errors();
  }

  private init(): void {
    this.express.use((err: Error, request: Request, response: Response, _: NextFunction) => {
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({
          status: 'error',
          message: err.message,
        });
      }

      return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        status: 'error',
        message: 'Internal server error.',
      });
    });
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private errors(): void {
    this.express.use(errors());
  }

  private database(): void {
    mongoose.connect(`mongodb+srv://${process.env.loginDb}:${process.env.senhaDb}@cluster0-b0hh1.mongodb.net/test?retryWrites=true&w=majority`, {
        useNewUrlParser:true
    })
  }

  private routes(): void {
     this.express.use(routes)
  }
}

const app = express();

export default new App().express;
