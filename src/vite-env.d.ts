/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NEWS_API_KEY: string;
  readonly VITE_NEWS_BASE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
