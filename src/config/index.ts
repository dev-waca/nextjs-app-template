export const IS_SSR = typeof window === 'undefined';
export const IS_CLIENT = !IS_SSR;

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? '';
export const IS_DEV = process.env.NODE_ENV === 'development';
