export type Article = {
  id: string;
  title: string;
  content: string;
};

export type ArticleInput = Omit<Article, 'id'>;

export type ArticleUpdate = Partial<ArticleInput>;

export type Log = {
  message: string;
  details?: unknown;
};

export type LoggerInstance = {
  error: (log: Log) => void;
  info: (log: Log) => void;
};

export type HttpResponse = {
  statusCode: number;
  headers: Record<string, string | boolean>;
  body?: string;
};
