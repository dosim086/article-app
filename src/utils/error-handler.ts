import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import * as response from './http-response.js';
import { getLoggerInstance } from './logger.js';

export const errorHandler =
  (controller: Function) =>
  async (event: APIGatewayProxyEvent, context: Context) => {
    try {
      return await controller(event, context);
    } catch (error: unknown) {
      const logger = getLoggerInstance();

      const errorDetails =
        error instanceof Error
          ? {
              errorMessage: error.message,
              errorStack: error.stack,
            }
          : {};

      logger.error({
        message: 'Unknown error',
        details: errorDetails,
      });

      return response.systemError();
    }
  };
