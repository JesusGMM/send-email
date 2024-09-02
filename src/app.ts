import 'dotenv/config';
import { App } from './config';

// PUNTO DE ENTRADA LA APLICACIÓN
function main() {
  const app = new App();
  app.listen();
}

// INICIANDO LA APLICACIÓN
main();
