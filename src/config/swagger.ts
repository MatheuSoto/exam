import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import express from "express";

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Articles API",
    version: "1.0.0",
    description: "API documentation for managing articles",
  },
  paths: {
    "/api/articles": {
      get: {
        summary: "Get all articles",
        responses: {
          200: {
            description: "A list of articles",
          },
        },
      },
      post: {
        summary: "Create a new article",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id: { type: "string", example: "1234567890" },
                  name: { type: "string", example: "Article Name" },
                  description: {
                    type: "string",
                    example: "Article Description",
                  },
                  price: { type: "number", format: "float", example: 29.99 },
                  model: { type: "string", example: "Model X" },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "Article created",
          },
          400: {
            description: "Invalid input",
          },
        },
      },
    },
    "/api/articles/{id}": {
      get: {
        summary: "Get an article by ID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "The article ID",
            schema: { type: "string" },
          },
        ],
        responses: {
          200: {
            description: "The requested article",
          },
          404: {
            description: "Article not found",
          },
        },
      },
      put: {
        summary: "Update an article",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "The article ID",
            schema: { type: "string" },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  description: {
                    type: "string",
                    example: "Updated Description",
                  },
                  model: { type: "string", example: "Updated Model" },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Article updated",
          },
          404: {
            description: "Article not found",
          },
        },
      },
      delete: {
        summary: "Delete an article",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "The article ID",
            schema: { type: "string" },
          },
        ],
        responses: {
          204: {
            description: "Article deleted",
          },
          404: {
            description: "Article not found",
          },
        },
      },
    },
  },
};

const swaggerOptions = {
  swaggerDefinition: swaggerDocument,
  apis: [],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export const setupSwagger = (app: express.Application) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
