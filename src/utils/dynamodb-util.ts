import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

export const createDynamoDBClient = (): DynamoDBClient =>
  new DynamoDBClient({});
