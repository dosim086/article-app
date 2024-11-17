import { ScanCommand } from '@aws-sdk/client-dynamodb';
import { unmarshall } from '@aws-sdk/util-dynamodb';
import { ARTICLE_TABLE_NAME } from '../foundation/runtime.js';
import { Article } from '../foundation/types.js';
import { createDynamoDBClient } from '../utils/dynamodb-util.js';

/**
 *  Retrieves list of articles from dynamodb articles table
 */
export const getArticles = async (): Promise<Article[]> => {
  const { Items } = await createDynamoDBClient().send(
    new ScanCommand({
      TableName: ARTICLE_TABLE_NAME,
    })
  );

  return Items?.length
    ? (Items.map((item) => unmarshall(item)) as Article[])
    : [];
};
