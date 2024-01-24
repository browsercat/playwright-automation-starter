# Playwright Automation Starter Repo

Most Playwright starters focus on testing, but testing is just a fraction of Playwright's full power. For example, with Playwright, you can:

- Crawl and scrape dynamic websites.
- Generate images and PDFs from and HTML/CSS.
- Automate repetitive tasks that don't have APIs.
- Trigger realtime notifications from website changes.
- Record videos that are always up-to-date with your app.
- Give your AI agents access to the web.
- And much, much more.

This starter focuses on the true power of Playwright: automation. It even addresses the most challenging part of using Playwright for automation--hosting headless browsers in the cloud.

The repo is ready for anything. Just clone and go.

Features:

- [x] [Playwright](https://playwright.dev/) for top-shelf browser automation.
- [x] [Typescript](https://www.typescriptlang.org/) for type safety.
- [x] [dotenv](https://www.npmjs.com/package/dotenv) and [dotenv-cli](https://www.npmjs.com/package/dotenv-cli) for environment config.
- [x] [BrowserCat](https://www.browsercat.com) for easy, fast, and affordable headless browser hosting (with a _purr-fect_ free plan).

## Getting Started

### 1. Create Your Automation Project

First, clone the starter repo:

```bash
git clone https://github.com/browsercat/browser-automation-starter.git
git remote rm origin
cd automation-starter
```

Next, install your dependencies:

```bash
npm install
npm playwright install
```

### 2. Run Your Script Locally

Run the sample automation with the following:

```bash
npm run dev
```

Whoa, you scraped BrowserCat! And you generate images and PDFs in `.output/`. Nice.

To tweak the behavior, edit `src/automate.ts`. And watch for changes with:

```bash
npm run dev:watch
```

### 3. Run Your Script in the Cloud

The starter is pre-configured to run your code on BrowserCat's infrastructure, then send the response back to your computer.

To enable this behavior, sign up for a [forever-free plan](https://app.browsercat.com/sign-up), then [create an API key](https://app.browsercat.com/keys).

Store the key in your `.env` file...

```bash
mv .env.default .env
```

```bash
BROWSERCAT_API_KEY={YOUR_API_KEY}
```

With your API key in place, you can run your commands in the cloud:

```bash
npm run dev:bcat
npm run dev:bcat:watch
```

> #### 💡 When to use BrowserCat vs. local browsers
>
> In local development and at small scale, running a local browser will be faster. But BrowserCat really shines when:
>
> - You need to deploy your code.
> - Or you need to run lots of simultaneous requests.
> - Or you need to target a specific geographic region.
> - Or you need to test in a production setting.
>
> Save your BrowserCat credits for when you need them. They're cheap, but it's better to be frugal.

### 4. Test Your Scripts

E2E testing is ready to go! Run the suite once or in watch mode:

```bash
npm run test
npm run test:watch
```

Or run the tests in the cloud:

```bash
npm run test:bcat
npm run test:bcat:watch
```

Remember to configure tests in your CI/CD pipeline. Never merge or deploy bad code.

### 5. Speed Up Your CI/CD Tests

BrowserCat can make your CI/CD tests faster and more reliable. How?

CI/CD containers are often tiny, low-memory, and low-CPU. This is great for keeping costs down, but it's not great for downloading and running headless browsers.

We've seen users cut their CI/CD from over an hour to under 10 minutes just by adding BrowserCat to the mix.

A github workflow is included in your starter. To use it:

1. Create a [Github repo](https://github.com/new)
2. Store your BrowserCat API key in

  ```text
  > {YOUR_REPO} 
    > Settings (tab) 
      > Secrets and variables (sidebar)
        > Actions 
          > New repository secret (button)
              Name: BROWSERCAT_API_KEY
              Secret: {YOUR_API_KEY}
  ```

3. Link your repo, and push your code:

  ```bash
  git remote add origin {YOUR_REPO_URL}
  git push --set-upstream origin main # or master
  ```

4. View the results at

  ```text
  > {YOUR_REPO} 
    > Actions (tab)
      > Run tests (sidebar)
  ```

> #### 💡 BrowserCat and CI/CD
>
> The value of using BrowserCat for CI/CD scales with your usage. We can parallelize your tests far better than any deployment platform.

### 6. Automate Everything!

Keep growing your powers with Playwright and BrowserCat. Browser automation is a rare and powerful skill, and increasingly moreso as the web grows increasingly complex and siloed.

Here are some resources to help you along the way:

- [Playwright docs](https://playwright.dev/docs/intro)
- [BrowserCat docs](https://www.browsercat.com/docs)
- [BrowserCat blog](https://www.browsercat.com/blog)
