import { APIGatewayProxyEvent } from 'aws-lambda';

/**
 * Parser of APIGateway event's body to transform json format to object
 */
export const getBody = <T>(event: APIGatewayProxyEvent): T => {
  return JSON.parse(event.body || '{}') as T;
};

/**
 * Allows to retrieve param by given name from APIGateway event
 */
export const getParam = <T extends string | number>(
  event: APIGatewayProxyEvent,
  param: string
): T | null => (event.pathParameters?.[param] as T) || null;
