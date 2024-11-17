import { HttpResponse } from '../foundation/types.js';

/**
 * List of standard headers to be included in each response
 */
const standardHeaders = (extraHeaders: HttpResponse['headers'] = {}) => ({
  ...extraHeaders,
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
});

/**
 * Response for created resource
 */
export const created = (): HttpResponse => {
  return {
    statusCode: 201,
    headers: standardHeaders(),
  };
};

/**
 * Response for any successful action
 */
export const success = (
  data: Record<string, unknown> | undefined = undefined
): HttpResponse => {
  const response: HttpResponse = {
    statusCode: 200,
    headers: standardHeaders(),
  };

  if (data) {
    response.body = JSON.stringify(data, null, 2);
    response.headers['Content-Type'] = 'application/json';
  }

  return response;
};

/**
 * Response if resource not found
 */
export const notFound = (): HttpResponse => {
  return {
    statusCode: 404,
    headers: standardHeaders(),
  };
};

/**
 * Response if request or params incorrect
 */
export const badRequest = (): HttpResponse => {
  return {
    statusCode: 400,
    headers: standardHeaders(),
  };
};

/**
 * Response for any unexpected system errors
 */
export const systemError = (): HttpResponse => {
  return {
    statusCode: 500,
    headers: standardHeaders(),
    body: JSON.stringify({
      message: 'Internal Server Error',
    }),
  };
};
