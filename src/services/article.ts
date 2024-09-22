import { count, eq } from "drizzle-orm";

import { articles } from "../drizzle/schemas/article.schema";
import { IGetArticles, ICreateArticleForm } from "../schemas/article";
import { db } from "../database";

class ArticlesService {
  async getArticles(page = 1, perPage = 10) {
    const total = await db.select({ count: count() }).from(articles);
    const data = (await db.query.articles.findMany({
      offset: (page - 1) * perPage,
      limit: perPage,
    })) as IGetArticles[];

    return {
      total: total[0]?.count || 0,
      data,
    };
  }

  async getArticle(id: string) {
    const data = (await db.query.articles.findFirst({
      where: eq(articles.id, id),
    })) as IGetArticles;
    return data;
  }

  async createArticle(article: ICreateArticleForm) {
    const insertedArticle = await db
      .insert(articles)
      .values({
        id: article.id,
        name: article.name,
        description: article.description,
        price: article.price.toString(),
        model: article.model,
      })
      .returning({ id: articles.id });

    return insertedArticle;
  }

  async editArticle(id: string, article: Partial<ICreateArticleForm>) {
    const editedArticle = await db
      .update(articles)
      .set({
        description: article.description,
        model: article.model,
      })
      .where(eq(articles.id, id));

    return editedArticle;
  }

  async deleteArticle(id: string) {
    return await db
      .delete(articles)
      .where(eq(articles.id, id))
      .returning({ id: articles.id });
  }
}

export default ArticlesService;
