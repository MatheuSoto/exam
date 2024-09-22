import Joi from "joi";

export const articleSchema = Joi.object({
  id: Joi.string().alphanum().length(10).required(),
  name: Joi.string().alphanum().max(20).required(),
  description: Joi.string().max(200).optional(),
  price: Joi.number().precision(2).required(),
  model: Joi.string().alphanum().length(10).optional(),
});

export interface IGetArticles {
  id: string;
  name: string;
  description?: string;
  price: string;
  model?: string;
}

export interface ICreateArticleForm {
  id: string;
  name: string;
  description?: string;
  price: number;
  model?: string;
}
