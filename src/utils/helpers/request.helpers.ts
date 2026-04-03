import { AsyncLocalStorage } from "node:async_hooks";

type AsyncLocalStorageType = {
  correlationId: string;
};

// Create instance (use different variable name)
export const asyncLocalStorage = new AsyncLocalStorage<AsyncLocalStorageType>();

export const getCorrelationId = () => {
  const store = asyncLocalStorage.getStore();

  return (
    store?.correlationId ||
    "unknown-error-while-creating-correlation-id"
  );
};