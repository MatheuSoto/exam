import boom from "@hapi/boom";
import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi"; // Asegúrate de tener Joi instalado y su tipo correspondiente

const validate = (data: any, schema: ObjectSchema) => {
  const { error } = schema.validate(data, { abortEarly: false });
  return error;
};

const validationHandlers = (
  schema: ObjectSchema,
  check: "body" | "query" | "params" = "body"
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const error = validate(req[check], schema);
    error ? next(boom.badRequest(error)) : next();
  };
};

export default validationHandlers;
