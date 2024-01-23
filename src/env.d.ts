// define process.env variables in typescript

declare namespace NodeJS {
  interface ProcessEnv {
    CI?: '1';
    BCAT?: '1';
    BROWSERCAT_API_KEY?: string;
    NODE_ENV?: 'development' | 'production' | (string & {});
  }
}