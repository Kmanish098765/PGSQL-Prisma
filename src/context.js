// context.js
import { AsyncLocalStorage } from 'node:async_hooks';

export const asyncContext = new AsyncLocalStorage();
