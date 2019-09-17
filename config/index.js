const isDevelopment = process.env.NODE_ENV !== 'production';

// TODO: update it when moving to PROD
export const baseUrl = isDevelopment ? 'http://localhost:3000' : 'https://firstrussian.miki725.com';
