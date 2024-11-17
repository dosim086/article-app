import { HttpResponse } from '../foundation/types.js';

const standardHeaders = (extraHeaders: HttpResponse['headers'] = {}) => ({
  ...extraHeaders,
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
});

export const created = (): HttpResponse => {
  return {
    statusCode: 201,
    headers: standardHeaders(),
  };
};

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

export const notFound = (): HttpResponse => {
  return {
    statusCode: 404,
    headers: standardHeaders(),
  };
};

export const badRequest = (): HttpResponse => {
  return {
    statusCode: 400,
    headers: standardHeaders(),
  };
};

export const systemError = (): HttpResponse => {
  return {
    statusCode: 500,
    headers: standardHeaders(),
    body: JSON.stringify({
      message: 'Internal Server Error',
    }),
  };
};
