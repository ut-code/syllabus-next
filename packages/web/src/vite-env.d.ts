/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SERVER_URL: string;
  readonly PUBLIC_MOCK_DATA: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
