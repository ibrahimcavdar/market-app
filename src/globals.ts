export const isDev = process.env.NODE_ENV !== 'production';

export const BASE_API_URL = isDev ? 'http://localhost:8080' : '';

export const PAGE_LIMIT = 16;