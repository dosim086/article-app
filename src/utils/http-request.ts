import { APIGatewayProxyEvent } from 'aws-lambda';

export const getBody = <T>(event: APIGatewayProxyEvent): T => {
  return JSON.parse(event.body || '{}') as T;
};

export const getParam = <T extends string | number>(
  event: APIGatewayProxyEvent,
  param: string
): T | null => (event.pathParameters?.[param] as T) || null;
