export type Log = {
  message: string;
  details?: unknown;
};

export type LoggerInstance = {
  error: (log: Log) => void;
  info: (log: Log) => void;
};
