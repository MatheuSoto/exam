import express, { Request, Response, NextFunction } from "express";
import ArticlesService from "../services/article";
import validationHandlers from "../middlewares/validationHandlers";
import { articleSchema } from "../schemas/article";

function articleAPI(app: express.Application) {
  const router = express.Router();
  app.use("/api/articles", router);

  const articleService = new ArticlesService();

  router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const articles = await articleService.getArticles();
      res.status(200).json({
        data: articles,
        message: "success",
      });
    } catch (err) {
      next(err);
    }
  });

  router.get(
    "/:id",
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params;
      try {
        const article = await articleService.getArticle(id);
        if (!article) {
          return res.status(404).json({ message: "Article not found" });
        }
        res.status(200).json({
          data: article,
          message: "success",
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.post(
    "/",
    validationHandlers(articleSchema),
    async (req: Request, res: Response, next: NextFunction) => {
      const { body } = req;
      try {
        const newArticle = await articleService.createArticle(body);
        res.status(201).json({
          data: newArticle,
          message: "Article created successfully",
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.put(
    "/:id",
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params;
      const { description, model } = req.body;

      try {
        const updatedArticle = await articleService.editArticle(id, {
          description,
          model,
        });
        res.status(200).json({
          data: updatedArticle,
          message: "Article updated successfully",
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    "/:id",
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params;
      try {
        await articleService.deleteArticle(id);
        res.status(204).send();
      } catch (err) {
        next(err);
      }
    }
  );
}

export default articleAPI;
