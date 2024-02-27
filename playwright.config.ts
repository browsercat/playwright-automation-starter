// import

import {defineConfig, devices} from '@playwright/test';

// vars

const isCI = !!process.env.CI;
const useBC = !!process.env.BCAT;

const getConnectOpts = () => {
  const key = process.env.BROWSERCAT_API_KEY;

  if (!key) {
    throw new Error('Missing BROWSERCAT_API_KEY');
  }
  
  return {
    wsEndpoint: 'wss://api.browsercat.com/connect',
    headers: {'Api-Key': key},
  };
};  

const connectOptions = useBC ? getConnectOpts() : undefined;

// export

export default defineConfig({
  timeout: 1000 * 60,
  workers: useBC ? 10 : isCI ? 1 : '50%',
  retries: useBC || isCI ? 2 : 0,
  maxFailures: useBC && !isCI ? 0 : 3,
  forbidOnly: isCI,

  outputDir: '.test/spec/output',
  snapshotPathTemplate: '.test/spec/snaps/{projectName}/{testFilePath}/{arg}{ext}',
  testMatch: '*.spec.{ts,tsx}',

  reporter: [
    ['json', {outputFile: '.test/spec/results.json'}],
    ['html', {outputFolder: '.test/spec/results', open: 'never'}],
    isCI ? ['github'] : ['line'],
  ],

  reportSlowTests: {
    max: 5,
    threshold: 1000 * 15,
  },

  expect: {
    toMatchSnapshot: {
      maxDiffPixelRatio: 0.05,
    },
  },

  use: {
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        connectOptions,
      },
    },
    /**
     * It's better to target a single browser for automations. We prefer 
     * Chromium-based browsers because they support PDF-generation and 
     * video-recording.
     * 
     * However, your use-case may vary, and you are free to target any or all 
     * browsers. If so, uncomment these lines and add new config as needed.
     */
    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //     connectOptions,
    //   },
    // },
    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //     connectOptions,
    //   },
    // },
  ],
});
