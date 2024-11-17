import { Handler } from 'aws-lambda';
import { getArticles } from '../../service/article-service.js';
import { errorHandler } from '../../utils/error-handler.js';
import * as response from '../../utils/http-response.js';
import { getLoggerInstance } from '../../utils/logger.js';

/**
 * Handles GET /v1/articles http request
 */
const controller: Handler = async () => {
  const logger = getLoggerInstance();

  logger.info({ message: 'Article list requested...' });

  const articles = await getArticles();

  logger.info({
    message: 'Articles found in total',
    details: {
      total: articles.length,
    },
  });

  return response.success({
    articles,
  });
};

export const handler = errorHandler(controller);
