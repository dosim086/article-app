import { pino } from 'pino';
import { Log, LoggerInstance } from '../foundation/types.js';

export const getLoggerInstance = (): LoggerInstance => {
  const logger = pino({
    base: null,
    timestamp: pino.stdTimeFunctions.isoTime,
    formatters: {
      level: (label) => {
        return { level: label.toUpperCase() };
      },
    },
  });

  return {
    error(log: Log) {
      logger.error(log);
    },
    info(log: Log) {
      logger.info(log);
    },
  };
};
