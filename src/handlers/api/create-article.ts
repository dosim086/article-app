import { APIGatewayProxyEvent } from 'aws-lambda';
import { ArticleInput } from '../../foundation/types.js';
import { createArticle } from '../../service/article-service.js';
import { errorHandler } from '../../utils/error-handler.js';
import * as request from '../../utils/http-request.js';
import * as response from '../../utils/http-response.js';
import { getLoggerInstance } from '../../utils/logger.js';

/**
 * Handles POST /v1/articles http request
 */
const controller = async (event: APIGatewayProxyEvent) => {
  const logger = getLoggerInstance();

  logger.info({ message: 'Reading request body...' });

  const newArticle = request.getBody<ArticleInput>(event);

  logger.info({
    message: 'Creating new article...',
    details: {
      newArticle,
    },
  });

  const articleId = await createArticle(newArticle);

  logger.info({
    message: 'Article created',
    details: {
      articleId,
    },
  });

  return response.success({
    articleId,
  });
};

export const handler = errorHandler(controller);
