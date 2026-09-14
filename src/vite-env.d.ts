/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEB3FORM: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
