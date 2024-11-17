import {
  DeleteItemCommand,
  GetItemCommand,
  PutItemCommand,
  ScanCommand,
} from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import { randomUUID } from 'node:crypto';
import { ARTICLE_TABLE_NAME } from '../foundation/runtime.js';
import { Article, ArticleInput } from '../foundation/types.js';
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

/**
 *  Creates an article in dynamodb articles table by ArticleInput params
 */
export const createArticle = async ({
  title,
  content,
}: ArticleInput): Promise<string> => {
  const articleId = randomUUID();

  await createDynamoDBClient().send(
    new PutItemCommand({
      TableName: ARTICLE_TABLE_NAME,
      Item: marshall({
        id: articleId,
        title,
        content,
      }),
    })
  );

  return articleId;
};

/**
 *  Returns an article from dynamodb articles table by given articleId
 */
export const getArticle = async (
  articleId: string | null
): Promise<Article | null> => {
  if (!articleId) {
    return null;
  }

  const { Item } = await createDynamoDBClient().send(
    new GetItemCommand({
      TableName: ARTICLE_TABLE_NAME,
      Key: marshall({ id: articleId }),
    })
  );

  return Item ? (unmarshall(Item) as Article) : null;
};

/**
 *  Deletes an article in dynamodb articles table by given articleId
 */
export const deleteArticle = async (articleId: string): Promise<void> => {
  await createDynamoDBClient().send(
    new DeleteItemCommand({
      TableName: ARTICLE_TABLE_NAME,
      Key: marshall({ id: articleId }),
    })
  );
};
