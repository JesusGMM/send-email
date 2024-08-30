import express, { Application } from 'express';
import cors from 'cors';

import routes from './routes';
import { envs } from './config/envs';

// INICIANDO LA APLICACIÓN
export class App {

  private readonly app: Application;
  private readonly port: number;

  constructor() {
    this.app = express();
    this.port = envs.PORT;
    this.middlewares();
    this.routes();
  }

  // CARGANDO LOS MIDDLEWARES Y LA PAGINA POR DEFECTO
  private middlewares() {
    this.app.use(express.json({ limit: '10mb' }));
    this.app.use(express.urlencoded({ extended: true, limit: '10mb' }));
    this.app.use(cors({
      origin: 'http://localhost',
      methods: 'POST',
      credentials: true,
      optionsSuccessStatus: 204
    }));
  }

  // CARGANDO LAS RUTAS
  private routes() {
    this.app.use(express.static('public'));
    this.app.use(routes);
  }

  // INICIANDO EL SERVIDOR
  public listen() {
    this.app.listen(this.port);
    console.info(`Server running on port ${this.port}`);
  }

}
