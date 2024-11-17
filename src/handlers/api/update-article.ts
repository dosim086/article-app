import { APIGatewayProxyEvent } from 'aws-lambda';
import { ArticleInput } from '../../foundation/types.js';
import { updateArticle } from '../../service/article-service.js';
import { errorHandler } from '../../utils/error-handler.js';
import * as request from '../../utils/http-request.js';
import * as response from '../../utils/http-response.js';
import { getLoggerInstance } from '../../utils/logger.js';

/**
 * Handles PATCH /v1/articles/{articleId} http request
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

  logger.info({ message: 'Reading request body...' });

  const article = request.getBody<ArticleInput>(event);

  logger.info({ message: 'Updating article...', details: { articleId } });

  await updateArticle(articleId, article);

  logger.info({ message: 'Article updated' });

  return response.success();
};

export const handler = errorHandler(controller);
