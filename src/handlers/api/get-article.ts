import { APIGatewayProxyEvent } from 'aws-lambda';
import { getArticle } from '../../service/article-service.js';
import { errorHandler } from '../../utils/error-handler.js';
import * as request from '../../utils/http-request.js';
import * as response from '../../utils/http-response.js';
import { getLoggerInstance } from '../../utils/logger.js';

/**
 * Handles GET /v1/articles/{articleId} http request
 */
const controller = async (event: APIGatewayProxyEvent) => {
  const logger = getLoggerInstance();

  logger.info({ message: 'Reading request param...' });

  const articleId = request.getParam<string>(event, 'articleId');

  if (!articleId) {
    logger.error({
      message: 'No articleId parameter',
    });

    return response.badRequest();
  }

  logger.info({
    message: 'Reading article...',
    details: {
      articleId,
    },
  });

  const article = await getArticle(articleId);

  if (!article) {
    logger.error({
      message: 'Article not found',
    });

    return response.notFound();
  }

  logger.info({
    message: 'Article found',
    details: {
      articleId,
    },
  });

  return response.success({
    article,
  });
};

export const handler = errorHandler(controller);
