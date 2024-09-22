const listRoutes: string[] = ["article"];

import { Express } from "express";

const handlers = (app: Express) => {
  for (let i = 0; i < listRoutes.length; i++) {
    const route = require(`./${listRoutes[i]}`).default; // Asegúrate de que los módulos exporten por defecto si es necesario
    route(app);
  }
};

export default handlers;
