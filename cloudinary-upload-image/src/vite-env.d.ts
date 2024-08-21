/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_CLOUD_NAME: string;
  readonly VITE_CLOUD_PRESET: string;
  readonly VITE_CLOUD_API: string;
  // añade más variables de entorno según sea necesario
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
